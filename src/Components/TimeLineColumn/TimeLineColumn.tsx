import React from 'react';
import styled from '@emotion/styled';
import {
  TimeLineTaskComponent,
  TimeLineTaskProps,
} from '../TimeLineTask/TimeLineTask';

type TimelineColumnProps = {
  tasks: TimeLineTaskProps[];
  dayString: string;
  className?: string;
};

const TimeLineColumnComponent = ({
  tasks,
  className,
  dayString,
}: TimelineColumnProps) => {
  console.log(tasks);
  return (
    <div className={className}>
      {/* <p>{dayString}</p> */}
      {tasks.map((task, index) => (
        <TimeLineTaskComponent key={index} {...task} />
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
