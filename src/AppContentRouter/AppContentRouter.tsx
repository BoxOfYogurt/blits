import { Switch, Route } from 'react-router';
import { Dashboard } from '../ContentPages/Dashboard/Dashboard';

export const AppContentRouter = () => (
  <Switch>
    <Route exact path='/home' component={Dashboard}></Route>
    {/* <Route exact path='/telemetry'>
        <Telemetry active={activeRoute === 'telemetry'} />
      </Route>
      <Route exact path='/settings'>
        <Settings active={activeRoute === 'settings'} />
      </Route> */}
  </Switch>
);
