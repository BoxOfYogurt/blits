import React from 'react';
import styled from '@emotion/styled';
import { TimeLineTask } from '../TimeLineTask/TimeLineTask';
// fix imports
import { TimeLineCell } from '../TimeLineCell/TimeLineCell';
import { useTaskStore } from '../../AppStore';

type TimelineColumnProps = {
  dayString: string;
  date: Date;
  isToday: boolean;
};

const TimeLineColumnComponent = ({
  date,
  dayString,
  isToday,
}: TimelineColumnProps) => {
  const { taskStore } = useTaskStore();

  const hours = new Array(24)
    .fill(null)
    .map((_, index) => new Date(date.setHours(index, 0, 0, 0)).getTime());

  const memoizedTasks = React.useMemo(() => {
    return taskStore.workTasks.filter((task) => task.date.includes(dayString));
  }, [taskStore, dayString]);

  return (
    <Column today={isToday}>
      {hours.map((hour) => (
        <TimeLineCell key={hour} time={hour} date={dayString} />
      ))}
      {memoizedTasks.map((task) => (
        <TimeLineTask key={task.id} task={task} />
      ))}
    </Column>
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

type ColumnProps = {
  today?: boolean;
};

const Column = styled('div')<ColumnProps>((props) => ({
  position: 'relative',
  boxSizing: 'border-box',
  display: 'grid',
  gridTemplateRows: 'repeat(24, 1fr)',
  height: '100%',
  width: '100%',
  backgroundColor: props.today
    ? props.theme.palette.blue.light
    : props.theme.palette.blue.main,
}));
