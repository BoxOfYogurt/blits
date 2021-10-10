export const TimeLineUtils = {
  getPercentages: (start: Date, end: Date) => {
    let height_in_percentage: string = '';
    let start_in_percentage: string = '';

    const start_of_day_in_milliseconds = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate()
    ).getTime();
    const end_of_day_in_milliseconds = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate(),
      23,
      59,
      59,
      999
    ).getTime();

    const task_startdate_in_milliseconds = start.getTime();
    const task_enddate_in_milliseconds = end.getTime();

    const milliseconds_in_day = 86400000;

    // some tasks may span over a day
    if (
      task_enddate_in_milliseconds - task_startdate_in_milliseconds >
      milliseconds_in_day
    ) {
      console.log('hello');
    } else {
      height_in_percentage = `${
        ((task_enddate_in_milliseconds - task_startdate_in_milliseconds) /
          milliseconds_in_day) *
        100
      }%`;
      start_in_percentage = `${
        ((task_startdate_in_milliseconds - start_of_day_in_milliseconds) /
          milliseconds_in_day) *
        100
      }%`;
      console.log(height_in_percentage, start_in_percentage);
    }
    return { start_in_percentage, height_in_percentage };
  },
  getWeek: () => {
    let todays_date = new Date();
    let week: Array<Date> = [];
    let tempDate: Date = todays_date;
    while (week.length !== 7) {
      if (tempDate.getDay() === 6) {
        tempDate = new Date(
          tempDate.getFullYear(),
          tempDate.getMonth(),
          tempDate.getDate() - 5,
          0,
          0,
          0,
          0
        );
        week.push(tempDate);
      } else if (tempDate.getDay() === 0) {
        tempDate = new Date(
          tempDate.getFullYear(),
          tempDate.getMonth(),
          tempDate.getDate(),
          0,
          0,
          0,
          0
        );
        week.push(tempDate);
        tempDate = new Date(
          tempDate.getFullYear(),
          tempDate.getMonth(),
          tempDate.getDate() - 1,
          0,
          0,
          0,
          0
        );
      } else {
        tempDate = new Date(
          tempDate.getFullYear(),
          tempDate.getMonth(),
          tempDate.getDate() + 1,
          0,
          0,
          0,
          0
        );
        week.push(tempDate);
      }
    }
    return week.sort((curr, prev) => +curr - +prev);
  },
};
