export const TimeLineUtils = {
  getPercentages: (from: Date, to: Date) => {
    const start = new Date(from);
    const end = new Date(to);

    let height_in_percentage: string = '';
    let start_in_percentage: string = '';
    const milliseconds_in_day = 86400000;

    const taskStartTimeMS = start.getTime();
    const taskEndTimeMs = end.getTime();

    const taskStartDayTimeMS = new Date(start.setHours(0, 0, 0, 0)).getTime();
    const taskEndDayTimeMS = new Date(end.setHours(23, 59, 59, 999)).getTime();

    // some tasks may span over a day
    if (taskEndDayTimeMS - taskStartDayTimeMS > milliseconds_in_day) {
      throw 'Not implemented';
    } else {
      height_in_percentage = `${
        ((taskEndTimeMs - taskStartTimeMS) / milliseconds_in_day) * 100
      }%`;
      start_in_percentage = `${
        ((taskStartTimeMS - taskStartDayTimeMS) / milliseconds_in_day) * 100
      }%`;
    }
    return { start_in_percentage, height_in_percentage };
  },
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
