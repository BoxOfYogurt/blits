import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { AppIcon } from '../../AppDesignComponents/AppIcon/AppIcon';

type TimeLineMarkerProps = {
  className?: string;
  position: string;
};

const TimeLineMarkerComponent = ({ className }: TimeLineMarkerProps) => {
  const theme = useTheme();
  return (
    <span className={className}>
      <AppIcon
        size='large'
        name='caret-right'
        iconColor={theme.popper.punch[200]}
      />
    </span>
  );
};

export const TimeLineMarker = styled(TimeLineMarkerComponent)((props) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  top: props.position,
  width: '100%',
  height: '3px',
  backgroundColor: props.theme.popper.punch[200],
  zIndex: 2,
  opacity: '70%',
}));
