import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {appRoutes, adminRoutes} from "./routes";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isAdmin } from './helpers';

function PrivateRoute({ comp: Component, isAdmin, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/'
            }}
          />
        )
      }
    />
  );
}
class App extends React.Component {
  render() {
    const {
      currentUser
    } = this.props;

    const currentUserIsAdmin = isAdmin(currentUser)

    return (
      <Router>
        <Switch>
          {appRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={(props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                })}
              />
            );
          })}
          {adminRoutes.map((route, index) => {
            return (
              <PrivateRoute
                isAdmin={currentUserIsAdmin}
                key={index}
                path={route.path}
                exact={route.exact}
                comp={(props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                })}
              />
            );
          })}
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  const { currentUser } = state.session;
  return {
    currentUser: currentUser
  }
}

export default connect(mapStateToProps)(App);