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
    const week_array: Array<Date> = [];
    let tempDate = new Date(new Date().setHours(0, 0, 0, 0));

    while (week_array.length < 7) {
      if (tempDate.getDay() === 0) {
        week_array.push(tempDate);
        tempDate = new Date(tempDate.setDate(tempDate.getDate() - 6));
      } else {
        week_array.push(tempDate);
        tempDate = new Date(tempDate.setDate(tempDate.getDate() + 1));
      }
    }
    return week_array.sort((curr, prev) => +curr - +prev);
  },
};
