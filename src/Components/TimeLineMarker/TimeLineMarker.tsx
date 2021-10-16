import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { AppIcon } from '../../AppDesignComponents/AppIcon/AppIcon';
import { useTimeLineMarkerPosition } from '../../Hooks';

export const TimeLineMarker = () => {
  const theme = useTheme();
  const markerPosition = useTimeLineMarkerPosition();

  return (
    <Marker position={markerPosition}>
      <AppIcon
        size='large'
        name='caret-right'
        iconColor={theme.popper.punch[200]}
      />
    </Marker>
  );
};

type MarkerProps = {
  position: string;
};

const Marker = styled('span')<MarkerProps>((props) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  top: props.position,
  // suggestion: change line to only reach to the end of current day
  width: '100%',
  height: '3px',
  backgroundColor: props.theme.popper.punch[200],
  zIndex: 2,
  opacity: '70%',
}));
