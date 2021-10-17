import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { AppRoutes } from './util';
import { StyledNavigationItem } from './AppNavigationItem';
import { StyledButton } from './AppNavigationButton';
import { AppIcon } from '../../AppDesignComponents/AppIcon/AppIcon';

type AppNavigationProps = {
  className?: string;
  extended: boolean;
  activeRoute: AppRoutes;
  onRouteChange: (routeName: AppRoutes) => void;
  onNavExtend: (isExtended: boolean) => void;
};

export const NavComponent = ({
  className,
  extended,
  activeRoute,
  onRouteChange,
  onNavExtend,
}: AppNavigationProps) => {
  const theme = useTheme();
  return (
    <nav className={className}>
      <StyledList>
        <StyledNavigationItem
          active={activeRoute === '/'}
          routeName='/'
          iconName='home'
          onClick={onRouteChange}
        />
        <StyledNavigationItem
          active={activeRoute === '/desktop'}
          routeName='/desktop'
          iconName='home'
          onClick={onRouteChange}
        />
        <StyledNavigationItem
          active={activeRoute === '/labels'}
          routeName='/labels'
          iconName='label'
          onClick={onRouteChange}
        />
        <StyledNavigationItem
          active={activeRoute === '/calendar'}
          routeName='/calendar'
          iconName='book-alt'
          onClick={onRouteChange}
        />
        <StyledNavigationItem
          active={activeRoute === '/telemetry'}
          routeName='/telemetry'
          iconName='chart-histogram'
          onClick={onRouteChange}
        />
        <StyledNavigationItem
          active={activeRoute === '/settings'}
          routeName='/settings'
          iconName='menu-dots'
          onClick={onRouteChange}
        />
        <StyledButton extended={extended} onClick={onNavExtend}>
          <AppIcon
            size='regular'
            name={extended ? 'angle-double-right' : 'angle-double-left'}
            iconColor={
              extended ? theme.popper.punch[200] : theme.popper.light[200]
            }
          />
        </StyledButton>
      </StyledList>
    </nav>
  );
};

export const AppNavigation = styled(NavComponent)((props) => ({
  width: props.extended ? '10rem' : '3rem',
  background: props.theme.palette.blue.dark,
  height: '100%',
  transition: 'width 200ms ease',
  gridRow: '2/3',
}));

const StyledList = styled('ul')({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});
