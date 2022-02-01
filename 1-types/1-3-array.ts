{
  // Array
  const fruits: string[] = ['🍏', '🍎'];
  const scores: Array<number> = [70, 90];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['Sean', 30];
  student[0]; // name
  student[1]; // age
  const [name, age] = student;
}
