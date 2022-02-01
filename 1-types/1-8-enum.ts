{
  /**
   * Enum
   */
  // JavaScript
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.TUESDAY;

  // TypeScript
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);
  let day: Days = Days.Friday;
  day = 100; // 타입이 정확히 보장되지 않기 때문에 사용하지 말 것 -> Union으로 대체 가능
  console.log(day);

  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfWeek: DaysOfWeek = 'Tuesday';
}
