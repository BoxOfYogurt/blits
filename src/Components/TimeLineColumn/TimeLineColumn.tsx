import React from 'react';
import styled from '@emotion/styled';
import {
  TimeLineTaskComponent,
  TimeLineTaskProps,
} from '../TimeLineTask/TimeLineTask';
// fix imports
import { TimeLineCell } from '../TimeLineCell/TimeLineCell';
import { useTaskStore } from '../../AppStore';

type TimelineColumnProps = {
  dayString: string;
  date: Date;
  className?: string;
  isToday: boolean;
};

const TimeLineColumnComponent = ({
  date,
  className,
  dayString,
}: TimelineColumnProps) => {
  const { taskStore } = useTaskStore();
  const hours = new Array(24)
    .fill(null)
    .map((_, index) => new Date(date.setHours(index, 0, 0, 0)).getTime());

  const memoizedTasks = React.useMemo(() => {
    return taskStore.workTasks.filter((task) => task.date.includes(dayString));
  }, [taskStore, date]);

  return (
    <div className={className}>
      {hours.map((hour) => (
        <TimeLineCell key={hour} time={hour} date={dayString} />
      ))}
      {memoizedTasks.map((task) => (
        <TimeLineTaskComponent key={task.id} task={task} />
      ))}
    </div>
  );
};

export const TimeLineColumn = styled(TimeLineColumnComponent)((props) => ({
  position: 'relative',
  boxSizing: 'border-box',
  display: 'grid',
  gridTemplateRows: 'repeat(24, 1fr)',
  height: '100%',
  width: '100%',
  backgroundColor: props.isToday
    ? props.theme.palette.blue.light
    : props.theme.palette.blue.main,
}));
