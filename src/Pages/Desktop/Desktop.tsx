import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { AppNavigation } from '../../Components';
import { AppHeader } from '../../Components/AppHeader/AppHeader';
import { AppRoutes } from '../../Components/AppNavigation/util';
import { AppContentRouter } from '../../AppContentRouter/AppContentRouter';

const ApplicationLayout = styled.div(
  {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gridTemplateRows: '3rem 1fr',
  },
  (props) => ({
    backgroundColor: props.theme.palette.blue.dark,
  })
);

const applicationRoutes: AppRoutes[] = [
  '/',
  '/desktop',
  '/calendar',
  '/settings',
  '/telemetry',
];

export const Desktop = () => {
  const [activeRoute, setActiveRoute] = React.useState<AppRoutes>('/');
  const [navExtended, setNavExtended] = React.useState<boolean>(false);

  let history = useHistory();
  let location = useLocation();

  const handleRouteChange = (routeName: AppRoutes) => {
    history.push(routeName);
  };

  const handleNavExtended = (isExtended: boolean) => setNavExtended(isExtended);

  React.useEffect(() => {
    console.log(location.pathname);
    const currentMainRoute = location.pathname.split('/')[1];
    if (applicationRoutes.includes(`/${currentMainRoute}` as AppRoutes))
      setActiveRoute(`/${currentMainRoute}` as AppRoutes);
    else {
      console.log('INVALIDROUTE');
    }
  }, [location.pathname]);
  return (
    <ApplicationLayout>
      <AppNavigation
        activeRoute={activeRoute}
        extended={navExtended}
        onRouteChange={handleRouteChange}
        onNavExtend={handleNavExtended}
      />
      <AppHeader />
      <AppContentRouter />
    </ApplicationLayout>
  );
};
