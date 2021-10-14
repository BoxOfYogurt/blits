import styled from '@emotion/styled';
import { render } from '@testing-library/react';
import React, { useMemo, useRef, useState } from 'react';
import { useTaskStore } from '../../AppStore';
import { DateUtils } from '../../util/DateUtils';
import { TimeLineUtils } from '../../util/TimeLineUtils';
import { TimeLineColumn } from '../TimeLineColumn/TimeLineColumn';
import { TimeLineMarker } from '../TimeLineMarker/TimeLineMarker';

const useTimeLineMarkerPosition = () => {
  const [markerPosition, setMarkerPosition] = useState<string>('');

  React.useEffect(() => {
    const today = new Date();
    const value = TimeLineUtils.getPercentages(
      today,
      today
    ).start_in_percentage;

    if (markerPosition === '') {
      setMarkerPosition(value);
    } else {
      const timer = setTimeout(() => setMarkerPosition(value), 5000);
      return () => clearTimeout(timer);
    }
  }, [markerPosition]);

  return markerPosition;
};

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
    const { taskStore } = useTaskStore();
    return (
      <>
        {week.map((day, index) => {
          console.log(day);
          return (
            <TimeLineColumn
              key={index}
              dayString={DateUtils.formatDate(day)}
              tasks={taskStore.workTasks.filter((task) =>
                task.date.includes(day.getTime().toString())
              )}
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
  height: '100vh',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: '1fr',
  backgroundColor: props.theme.palette.blue.light,
  borderRadius: props.theme.spacing('xsmall'),
}));

// TimelineTask
