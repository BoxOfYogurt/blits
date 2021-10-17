import { Switch, Route } from 'react-router';
import { Dashboard } from '../ContentPages/Dashboard/Dashboard';
import { Labels } from '../ContentPages/Labels/Labels';

export const AppContentRouter = () => (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/labels' component={Labels} />
    {/* <Route exact path='/telemetry'>
        <Telemetry active={activeRoute === 'telemetry'} />
      </Route>
      <Route exact path='/settings'>
        <Settings active={activeRoute === 'settings'} />
      </Route> */}
  </Switch>
);
