import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from './routes/ClientRoutes';

type RoutesObject = {
  path: string;
  name: string;
  icon: string;
  exact: boolean;
  component: () => JSX.Element;
  layout: string;
}

function App() {

  const getRoutes = (routes: RoutesObject[]) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/site") {
        return (
          <Route
            path={prop.path}
            exact={prop.exact}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (

    <BrowserRouter>
      <Switch>
        {getRoutes(routes)}
        {/* <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout {...props} />} /> */}
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
