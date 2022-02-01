{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length); // 정말 100% 장담할 때만 사용해야 한다.
  console.log((<string>result).length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 😱

  const button = document.querySelector('class')!;
  button.nodeValue;
}
