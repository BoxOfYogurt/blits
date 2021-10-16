import styled from '@emotion/styled';
import { DateUtils } from '../../util/DateUtils';

export const TimeLineTimeColumn = () => {
  const today = new Date();

  const hours = new Array(24)
    .fill(null)
    .map((_, index) => new Date(today.setHours(index, 0, 0, 0)).getTime());

  return (
    <StyledColumnGrid>
      {hours.map((h) => (
        <p key={h}>{DateUtils.formatHour(h)}</p>
      ))}
    </StyledColumnGrid>
  );
};

const StyledColumnGrid = styled('div')({
  display: 'grid',
  gridTemplateRows: 'repeat(24, 1fr)',
  gridTemplateColumns: '1fr',
  alignItems: 'flex-start',
  justifyItems: 'center',
  height: '100%',
});
