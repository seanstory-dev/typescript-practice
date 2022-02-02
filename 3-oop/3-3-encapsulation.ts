{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public, private, protected
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 8; // class level
    private coffeeBeans: number = 0; // instance(object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('Value for beans must be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // const maker = new CoffeeMaker(20); // 생성자 대신 makeMachine
  // maker.coffeeBeans = -100; // invalid

  const maker2 = CoffeeMaker.makeMachine(20);
  maker2.fillCoffeeBeans(10);
  console.log(maker2);
  console.log(maker2.makeCoffee(2));

  class User {
    // fullName: string;
    private internalAge = 0;

    // getter와 setter는 멤버 변수처럼 사용 가능
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`; // 호출 시점에 firstName과 lastName을 결합할 수 있다.
    }

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error('Internal age must be greater than 0');
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      // this.fullName = `${firstName} ${lastName}`;
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);
  user.age = 30;
  console.log(user.age);
}
