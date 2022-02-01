{
  // number
  const num: number = -1;

  // string
  const str: string = 'hello';

  // boolean
  const bool: boolean = false;

  // undefined
  let age: number | undefined;
  age = 30;
  age = undefined;

  // null

  // unknown 💩
  // any 💩

  // void
  function print(): void {
    console.log('hello');
    return;
  }

  // never
  function throwError(message: string): never {
    throw new Error(message);
  }

  // object 💩
  let obj: object;
  obj = { name: 'Sean' };
}
