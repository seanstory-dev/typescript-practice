{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'Sean';
  const address: Text = 'Seoul';

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'Sean',
    age: 30,
  };

  /**
   * String Literal Types
   */
  type JSON = 'json';
  const json: JSON = 'json';
}
