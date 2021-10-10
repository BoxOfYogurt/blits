import { TimeLineTaskProps } from '../TimeLineTask/TimeLineTask';

export const tasks: TimeLineTaskProps[] = [
  {
    interval: {
      startTime: new Date(2021, 9, 9, 8, 0, 0, 0),
      endTime: new Date(2021, 9, 9, 9, 30, 0, 0),
    },
    date: new Date(2021, 9, 9, 0, 0, 0, 0),
  },
  {
    interval: {
      startTime: new Date(2021, 9, 9, 10, 30, 0, 0),
      endTime: new Date(2021, 9, 9, 12, 0, 0, 0),
    },
    date: new Date(2021, 9, 9, 0, 0, 0, 0),
  },
  {
    interval: {
      startTime: new Date(2021, 9, 10, 5, 0, 0, 0),
      endTime: new Date(2021, 9, 10, 9, 30, 0, 0),
    },
    date: new Date(2021, 9, 8, 0, 0, 0, 0),
  },
  {
    interval: {
      startTime: new Date(2021, 9, 10, 8, 0, 0, 0),
      endTime: new Date(2021, 9, 10, 16, 0, 0, 0),
    },
    date: new Date(2021, 9, 10, 0, 0, 0, 0),
  },
];
