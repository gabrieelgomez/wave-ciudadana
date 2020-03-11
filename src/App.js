import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes";

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          {routes.map((route, index) => {
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
        </div>
      </Router>
    )
  }
}