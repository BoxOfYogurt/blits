import React from 'react';
import styled from '@emotion/styled';
import { TimeLineUtils } from '../../util/TimeLineUtils';
// fix import
import { ExtendedWorkTask } from '../../AppStore/TaskStore/TaskStore.types';
import { AppIcon } from '../../AppDesignComponents/AppIcon/AppIcon';

export type TimeLineTaskProps = {
  task: ExtendedWorkTask;
};

export const TimeLineTask = ({ task }: TimeLineTaskProps) => {
  const { start_in_percentage, height_in_percentage } =
    TimeLineUtils.getPercentages(task.period.from, task.period.to);
  console.log('taskrender');

  const heightConstraint = task.periodTotalTime > 900000;

  return (
    <TaskBox position={start_in_percentage} height={height_in_percentage}>
      {heightConstraint && (
        <TaskHeader>
          <p>{task.title}</p>
          <AppIcon name='plus-small' size='regular' />
        </TaskHeader>
      )}
    </TaskBox>
  );
};

type TimeLineTaskSpanProps = {
  labelColor?: string;
  height: string;
  position: string;
};

const TaskBox = styled('div')<TimeLineTaskSpanProps>((props) => ({
  overflow: 'hidden',
  position: 'absolute',
  boxSizing: 'border-box',
  padding: props.theme.spacing('xsmall'),
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

const TaskHeader = styled('span')((props) => ({
  display: 'grid',
  gridTemplateColumns: '1fr min-content',
  '& p': {
    textOverflow: 'ellipsis',
  },
}));
