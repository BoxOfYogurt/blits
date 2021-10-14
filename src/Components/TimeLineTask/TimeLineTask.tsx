import React from 'react';
import styled from '@emotion/styled';
import { TimeLineUtils } from '../../util/TimeLineUtils';
// fix import
import { WorkTask } from '../../AppStore/TaskStore/TaskStore.types';

export type TimeLineTaskProps = {
  task: WorkTask;
};

export const TimeLineTaskComponent = ({ task }: TimeLineTaskProps) => {
  const { start_in_percentage, height_in_percentage } =
    TimeLineUtils.getPercentages(task.period.from, task.period.to);

  return (
    <TimeLineTask
      position={start_in_percentage}
      height={height_in_percentage}></TimeLineTask>
  );
};

type TimeLineTaskSpanProps = {
  labelColor?: string;
  height: string;
  position: string;
};

export const TimeLineTask = styled('span')<TimeLineTaskSpanProps>((props) => ({
  position: 'absolute',
  width: '100%',
  height: props.height,
  top: props.position,
  backgroundColor: props.labelColor
    ? props.labelColor
    : props.theme.palette.green.light,
  borderRadius: props.theme.spacing('xsmall'),
  boxShadow: `inset 0 0 2px ${props.theme.palette.black.light}`,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: props.theme.popper.punch[200],
  },
}));
