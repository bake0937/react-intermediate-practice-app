import { Route, Switch } from 'react-router-dom';
import { Login } from '../components/pages/Login';
import { Page404 } from '../components/pages/Page404';
import { homeRoutes } from './HomeRoutes';

export const Router = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route
        path='/home'
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path='*'>
        <Page404 />
      </Route>
    </Switch>
  );
};
