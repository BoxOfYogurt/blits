import styled from '@emotion/styled';
import React from 'react';
import { useTimeLineMarkerPosition } from '../../Hooks';
import { DateUtils } from '../../util/DateUtils';
import { TimeLineUtils } from '../../util/TimeLineUtils';
import { TimeLineColumn } from '../TimeLineColumn/TimeLineColumn';
import { TimeLineMarker } from '../TimeLineMarker/TimeLineMarker';
import { TimeLineTimeColumn } from '../TimeLineTimeColumn/TimeLineTimeColumn';

type TimelineProps = {
  className?: string;
};

const TimelineComponent = ({ className }: TimelineProps) => {
  const week = TimeLineUtils.getWeek();
  const markerPosition = useTimeLineMarkerPosition();

  return (
    <div className={className}>
      <TimeLineMarker position={markerPosition} />
      <TimeLineTable week={week} />
    </div>
  );
};

type TimeLineTableProps = {
  week: Date[];
};

const TimeLineTable = React.memo(
  ({ week }: TimeLineTableProps) => {
    return (
      <>
        {/* insert a new column with time */}
        <TimeLineTimeColumn />
        {week.map((day) => {
          return (
            <TimeLineColumn
              key={day.getDate().toString()}
              date={day}
              dayString={DateUtils.formatDate(day)}
              isToday={day.getDate() === new Date().getDate()}
            />
          );
        })}
      </>
    );
  },
  (prevProps, nextProps) => prevProps !== nextProps
);

export const Timeline = styled(TimelineComponent)((props) => ({
  position: 'relative',
  height: '200vh',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: `${props.theme.spacing('regular')} repeat(7, 1fr)`,
  gridTemplateRows: '1fr',
  backgroundColor: props.theme.palette.blue.light,
  borderRadius: props.theme.spacing('xsmall'),
}));
