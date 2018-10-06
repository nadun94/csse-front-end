import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../assets/css/Login.css";
import CogIcon from "react-icons/lib/fa/cogs";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
import "../../assets/css/tasks.css";
import { Router, Route, Switch, Redirect,Link} from "react-router-dom";
import Passenger from "views/Passenger/Passenger.jsx";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pid: null,
      password: null,
      loging_status: null,
      name: null,
      show_error_login: false,
      loading: false,
      message: ""
    };
    this.processLog = this.processLog.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputTest = this.inputTest.bind(this);
  }

  processLog() {
    this.setState({ loading: true });
    var self = this;

    axios
      .post("/login/log", {
        pid: this.state.pid,
        password: this.state.password
      })
      .then(function(res) {
        console.log(res.data.accLevel)
          console.log(res.data.auth)
        if (res.data.auth === true) {
          self.setState({ loading: false });
          self.setState({ message: res.data.message });
          sessionStorage.setItem("loging_status", res.data.auth);
          sessionStorage.setItem("user", res.data.name);
          sessionStorage.setItem("pid", res.data.pid);
          sessionStorage.setItem("accLevel", res.data.accLevel)
          self.setState({ show_error_login: false });
          window.location.reload();
        } else {
          self.setState({ loading: false });
          self.setState({ show_error_login: true });
          self.setState({message: res.data.message})
            alert(res.data.message);
        }
      }).then(() => {
        console.log(sessionStorage.getItem("login_status"))
        console.log(sessionStorage.getItem("user"))
    })
      .catch(function(error) {
        console.log(error);
      });
  }
  // validateForm() {
  //   return this.state.username.length > 0 && this.state.password.length > 0;
  // }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  inputTest(){
    console.log(this.state.pid);
    console.log(this.state.password);
  }

  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div id="fullscreen_bg" className="fullscreen_bg">
        {/* <div className="big-wrapper"> */}
        <div className="rowlg">
          <h1 className="topic">
            Transport Service <CogIcon />
          </h1>
          <div className="spinner">
            {this.state.loading && (
              <PropagateLoader
                margin="10px"
                size={14}
                color={"#4A90E2"}
                loading={this.state.loading}
              />
            )}
          </div>
          <div className="form-signin">
            <h1 className="form-signin-heading">Sign In</h1>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Username</Label>
                <Input
                  type="text"
                  name="pid"
                  placeholder="Enter your username"
                  onChange={this.handleChange}
                  value={this.state.pid}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Enter your password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </FormGroup>
              <div id="logingButton">
                <FormGroup>
                  <Button
                    bsStyle="warning"
                    bsSize="large"
                    block
                    onClick={this.processLog}
                  >
                    Login
                  </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/passenger">Register</Link>
                  {this.state.show_error_login && (
                    <h3 className="login-error">{this.state.message}</h3>
                  )}

                </FormGroup>
              </div>
            </Form>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
