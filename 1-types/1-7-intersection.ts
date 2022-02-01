{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };
  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: 'Sean',
    score: 99,
    employeeId: 1,
    work: () => {},
  });
}
