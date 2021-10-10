import React from 'react';
import styled from '@emotion/styled';
import { TimeLineUtils } from '../../util/TimeLineUtils';
export type TimeLineTaskProps = {
  interval: {
    startTime: Date;
    endTime: Date;
  };
  date: Date;
  labelColor?: string;
  className?: string;
};

export const TimeLineTaskComponent = ({ interval }: TimeLineTaskProps) => {
  const { start_in_percentage, height_in_percentage } = React.useMemo(
    () => TimeLineUtils.getPercentages(interval.startTime, interval.endTime),
    [interval]
  );

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
    : props.theme.palette.blue.light,
  borderRadius: props.theme.spacing('xsmall'),
  boxShadow: `inset 0 0 2px ${props.theme.palette.black.light}`,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: props.theme.popper.punch[200],
  },
}));
