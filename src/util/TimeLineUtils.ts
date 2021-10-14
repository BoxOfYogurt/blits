export const TimeLineUtils = {
  getPercentages: (tstart: Date, tend: Date) => {
    const start = new Date(tstart);
    const end = new Date(tend);
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
      throw 'Not implemented';
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
    }
    return { start_in_percentage, height_in_percentage };
  },
  //BROKEN
  getWeek: () => {
    let todays_date = new Date();
    let week: Array<Date> = [];
    let tempDate: Date = new Date(
      todays_date.getFullYear(),
      todays_date.getMonth(),
      todays_date.getDate()
    );
    while (week.length < 7) {
      if (tempDate.getDay() === 6) {
        week.push(tempDate);
        tempDate.setDate(tempDate.getDate() - 5);
      } else if (tempDate.getDay() === 0) {
        week.push(tempDate);
        tempDate.setDate(tempDate.getDate() - 1);
      } else {
        week.push(tempDate);
        tempDate.setDate(tempDate.getDate() + 1);
      }
    }
    console.log(week);
    return week.sort((curr, prev) => +curr - +prev);
  },
};
