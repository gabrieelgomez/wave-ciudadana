import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {appRoutes, adminRoutes} from "./routes";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }

    const currentUser = this.props.currentUser;
    var isAdmin;

    if (currentUser == null || isEmpty(currentUser) ) {
      isAdmin = false
    } else {
      isAdmin = (this.props.currentUser.roles[0].name === 'superadmin');
    }

    return (
      <Router>
        <div>
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
                isAdmin={isAdmin}
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
        </div>
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