{
  /**
   * Type Inference - 왠만하면 정확하게 타입을 명시하는 것이 좋다.
   */
  let text = 'hello'; // 알아서 타입을 유추
  function print(message = 'hello') {
    console.log(message);
  }

  function addNum(x: number, y: number) {
    return x + y;
  }
  const result = addNum(1, 2);
}
