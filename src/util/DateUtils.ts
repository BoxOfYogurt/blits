export const DateUtils = {
  formatDate: (arg: Date | number) =>
    new Intl.DateTimeFormat('no-NO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(arg),
  timeDiff: (start: Date, end: Date) => end.getTime() - start.getTime(),
  formatToMinutes: (milliseconds: number) => Math.floor(milliseconds / 60000),
  getMillisecondsInDay: 86400000,
  getPercentages: (start: Date, end: Date) => {
    const startdate_in_milliseconds = start.getTime();
    const enddate_in_milliseconds = end.getTime();
    const milliseconds_in_day = 86400000;
    // some tasks may span over a day
    if (
      enddate_in_milliseconds - startdate_in_milliseconds >
      milliseconds_in_day
    ) {
    }
  },
};
