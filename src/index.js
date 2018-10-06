import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.css";
import "assets/css/demo.css";
import "assets/css/tasks.css";
import Login from "./views/Login/Login";
import Passenger from "./views/Passenger/Passenger";
import Home from "./views/Home/Home";
import Dashbord from "./layouts/Dashboard/Dashboard";
import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();

function checkLogin() {
  if (!sessionStorage.getItem("loging_status")) {
      return (

          <switch>
              {indexRoutes.map((prop, key) => {
                  return (
                      <div>
                          {/* <Redirect to="/home" /> */}
                          <Route path={prop.path} key={key} component={prop.component}/>
                      </div>
                  );
              })}
          </switch>
      )
  }
  else {
      return (
         <switch>
             <Route to="/passenger" component={Passenger} />
             <Redirect to="/login"/>                                                                                                                                                                                                             <Redirect to='/login' />
              <Route
                 exact path='/login'
                  component={Login}
              />
              </switch>
      )
  }
}

ReactDOM.render(
  <Router history={hist}>
    <Switch>{checkLogin()}</Switch>
  </Router>,
  document.getElementById("root")
);
