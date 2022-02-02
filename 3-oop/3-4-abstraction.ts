{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 인터페이스를 통한 추상화
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // public, private, protected
  class CoffeeMakerImpl implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 8; // class level
    private coffeeBeans: number = 0; // instance(object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMakerImpl {
      return new CoffeeMakerImpl(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('Value for beans must be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('Cleaning the machine...🧼');
    }

    // 정보 은닉을 통한 추상화
    private grindBeans(shots: number) {
      console.log(`Grinding beans for ${shots}...`);

      if (this.coffeeBeans < shots * CoffeeMakerImpl.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMakerImpl.BEANS_GRAM_PER_SHOT;
    }

    // 정보 은닉을 통한 추상화
    private preheat(): void {
      console.log('Heating up... 🔥');
    }

    // 정보 은닉을 통한 추상화
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMakerImpl = CoffeeMakerImpl.makeMachine(20);
  maker.fillCoffeeBeans(10);
  maker.makeCoffee(2);
  console.log('----------------------------------');

  const maker2: CoffeeMaker = CoffeeMakerImpl.makeMachine(20);
  // maker2.fillCoffeeBeans(10); // invalid
  maker2.makeCoffee(2);
  console.log('----------------------------------');

  const maker3: CommercialCoffeeMaker = CoffeeMakerImpl.makeMachine(20);
  maker3.fillCoffeeBeans(10);
  maker3.makeCoffee(2);
  maker3.clean();
  console.log('----------------------------------');

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(20);
      this.machine.clean();
    }
  }

  const maker4: CoffeeMakerImpl = CoffeeMakerImpl.makeMachine(20);
  const pro = new ProBarista(maker4);
  const amateur = new AmateurUser(maker4);
  pro.makeCoffee();
  console.log('----------------------------------');
  amateur.makeCoffee();
}
