{
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  function fetchNum(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('Sean'); // ? 대신 string | undefined로 설정 시에는 undefined를 명시해야 한다.

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));
}
