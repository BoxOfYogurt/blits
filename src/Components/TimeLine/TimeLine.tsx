import styled from '@emotion/styled';
import React from 'react';
import { DateUtils } from '../../util/DateUtils';
import { TimeLineUtils } from '../../util/TimeLineUtils';
import { TimeLineColumn } from '../TimeLineColumn/TimeLineColumn';
import { TimeLineTaskProps } from '../TimeLineTask/TimeLineTask';
import { tasks } from './mockData';

type TimelineProps = {
  className?: string;
};
const TimelineComponent = ({ className }: TimelineProps) => {
  const week = TimeLineUtils.getWeek();
  console.log(week);
  return (
    <div className={className}>
      {week.map((day, index) => (
        <TimeLineColumn
          key={index}
          dayString={DateUtils.formatDate(day)}
          tasks={tasks.filter((task) => task.date.getTime() === day.getTime())}
        />
      ))}
    </div>
  );
};

export const Timeline = styled(TimelineComponent)((props) => ({
  height: '100vh',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: '1fr',
  marginTop: props.theme.spacing('large'),
}));

// TimelineTask
