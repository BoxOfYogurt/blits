import React from 'react';
import styled from '@emotion/styled';
import { TimeLineGrid } from '../TimeLineGrid/TimeLineGrid';
import { TimeLineTimeColumn } from '../TimeLineTimeColumn/TimeLineTimeColumn';

type TimelineProps = {
  selectedDate: Date;
};

export const Timeline = ({ selectedDate }: TimelineProps) => {
  return (
    <TimeLineContainer>
      <TimeLineTimeColumn />
      <TimeLineGrid selectedDate={selectedDate} />
    </TimeLineContainer>
  );
};

const TimeLineContainer = styled('div')((props) => ({
  width: '100%',
  height: 'min-content',
  display: 'grid',
  gridTemplateColumns: '5rem 1fr',
}));
