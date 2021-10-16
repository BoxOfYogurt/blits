import styled from '@emotion/styled';
import { DateUtils } from '../../util/DateUtils';
import { TimeLineUtils } from '../../util/TimeLineUtils';
import { TimeLineColumn } from '../TimeLineColumn/TimeLineColumn';
import { TimeLineMarker } from '../TimeLineMarker/TimeLineMarker';

/** TimeLineGrid */

type TimeLineGridProps = {
  selectedDate: Date;
};

export const TimeLineGrid = ({ selectedDate }: TimeLineGridProps) => {
  /** Return week days of the selected date */
  const selectedWeek = TimeLineUtils.getWeek(selectedDate);

  return (
    <Grid>
      <TimeLineMarker />
      {selectedWeek.map((weekDay) => (
        <TimeLineColumn
          key={weekDay.getDate().toString()}
          date={weekDay}
          dayString={DateUtils.formatDate(weekDay)}
          isToday={weekDay.getDate() === new Date().getDate()}
        />
      ))}
    </Grid>
  );
};

const Grid = styled('div')((props) => ({
  position: 'relative',
  height: '200vh',
  minHeight: '150rem',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: '1fr',
  backgroundColor: props.theme.palette.blue.light,
  borderRadius: props.theme.spacing('xsmall'),
}));
