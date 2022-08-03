import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Auth signin={false} signup={true} />
          </Route>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
