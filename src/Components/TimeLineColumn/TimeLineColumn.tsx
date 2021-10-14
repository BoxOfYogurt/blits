import React from 'react';
import styled from '@emotion/styled';
import {
  TimeLineTaskComponent,
  TimeLineTaskProps,
} from '../TimeLineTask/TimeLineTask';
// fix imports
import { WorkTask } from '../../AppStore/TaskStore/TaskStore.types';

type TimelineColumnProps = {
  tasks: WorkTask[];
  dayString: string;
  className?: string;
};

const TimeLineColumnComponent = ({ tasks, className }: TimelineColumnProps) => {
  return (
    <div className={className}>
      {tasks.map((task, index) => (
        <TimeLineTaskComponent key={task.id} task={task} />
      ))}
    </div>
  );
};

export const TimeLineColumn = styled(TimeLineColumnComponent)((props) => ({
  boxSizing: 'border-box',
  position: 'relative',
  height: '100%',
  width: '100%',
  '&:not(:first-of-type)': {
    borderLeft: `1px solid ${props.theme.palette.blue.main}`,
  },
}));
