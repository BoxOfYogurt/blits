export const DateUtils = {
  formatDate: (arg: Date | number) =>
    new Intl.DateTimeFormat('no-NO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(arg),
  formatHour: (arg: Date | number) =>
    new Intl.DateTimeFormat('no-NO', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(arg),
  timeDiff: (start: Date, end: Date) => end.getTime() - start.getTime(),
  formatToMinutes: (milliseconds: number) => Math.floor(milliseconds / 60000),
  getMillisecondsInDay: 86400000,
};
