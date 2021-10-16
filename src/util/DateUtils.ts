type FormatMonthFunctionType = (
  arg: Date | number,
  opt?: '2-digit' | 'numeric' | 'long' | 'short' | 'narrow'
) => string;

const FormatMonthFunction: FormatMonthFunctionType = (arg, opt = 'long') =>
  new Intl.DateTimeFormat('no-NO', { month: opt }).format(arg);

type FormatHourFunctionType = (
  arg: Date | number,
  opt?: {
    hour?: '2-digit' | 'numeric';
    minute?: '2-digit' | 'numeric';
    second?: '2-digit' | 'numeric';
  }
) => string;

const FormatHourFunction: FormatHourFunctionType = (
  arg,
  opt = { hour: '2-digit' }
) =>
  new Intl.DateTimeFormat('no-NO', {
    ...opt,
  }).format(arg);

export const DateUtils = {
  formatDate: (arg: Date | number) =>
    new Intl.DateTimeFormat('no-NO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(arg),
  formatHour: FormatHourFunction,
  formatMonth: FormatMonthFunction,
  timeDiff: (start: Date, end: Date) => end.getTime() - start.getTime(),
  formatToMinutes: (milliseconds: number) => Math.floor(milliseconds / 60000),
  getMillisecondsInDay: 86400000,
};
