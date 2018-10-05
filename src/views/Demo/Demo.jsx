import React from "react";
import classnames from "classnames";
import axios from 'axios';
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  Row,
  Col,
  ButtonGroup,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Badge,
  CardTitle,
  CardText,
  CardGroup,
  FormGroup,
  Input,
  Label,
  CardImg,
  Form,
  CustomInput
} from "reactstrap";

import moment from "moment";
import { PanelHeader, FormInputs } from "components";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pid1: "940700140v",
      pid2: "956585428v",
      pid3: "968569874v",


    };
    this.handleattributes = this.handleattributes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectRates = this.selectRates.bind(this);
    this.searchDemoAlgo = this.searchDemoAlgo.bind(this);
    this.UpdateDemoAlgo = this.UpdateDemoAlgo.bind(this);

  }




  searchDemoAlgo() {
    var self = this;

    try {
      fetch("/Demo-algo/get-all-Demo-algo")
        .then(res => res.json())
        .then(data => {

          // self.setState({ initialValue1: data[0].initialprice })


        });
    } catch (error) {
      console.log(error)
    }

  }

  // update Demo algo
  UpdateDemoAlgo() {
    var self = this;
    axios.post('/Demo-algo/update-Demo-algo', {
      // initialprice1: self.state.initialValue1,

    })
      .then(function (res) {
        // if (res.data.postcheck_pass == "true") {
        //   self.setState({ postcheck_pass: res.data.postcheck_pass }
        // else {

        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })




  }

  componentDidMount() {
    // var self = this;

    // try {
    //   fetch("/sl-trans/all-users")
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //   });
    // } catch (error) {
    //   console.log(error)
    // }
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleattributes({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  selectRates() {
    this.setState({ show_tab: true });
  }
  //render start******************************************************
  render() {
    return (

      <div classNames="container-fluid">


        <Row>
          <Col md={12} xs={12}>

            <Card>
              <CardHeader>
                <h5 className="title">
                  {" "}
                  Journey Demonstration{" "}
                </h5>

              </CardHeader>
              <CardBody>
                <CardGroup>
                  <Card body className="text-center" style={{ borderColor: '#333' }}>
                    <div className="card-content">
                      <CardHeader>
                        <h5 className="title">
                          {" "}
                          Passenger ID: {this.state.pid1}
                        </h5>
                      </CardHeader>
                      <CardBody>
                        <form>
                          <div>
                            <div className="col-md-5,col-md-5">

                              <FormInputs

                                ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3"]}

                                proprieties={[
                                  {
                                    label: "Initial Value",
                                    inputProps: {
                                      type: "text",
                                      placeholder: "Enter inital value",
                                      name: "initialValue1",
                                      value: this.state.initialValue1,
                                      onChange: this.handleattributes
                                    }
                                  },
                                  {
                                    label: "Price Factor",
                                    inputProps: {
                                      type: "text",
                                      placeholder: "Enter price factor",
                                      name: "priceFactor1",
                                      value: this.state.priceFactor1,
                                      onChange: this.handleattributes
                                    }
                                  }

                                ]} />

                              <FormInputs

                                ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3"]}

                                proprieties={[
                                  {
                                    label: "Class Factor",
                                    inputProps: {
                                      type: "text",
                                      placeholder: "Enter class factor",
                                      name: "classFactor1",
                                      value: this.state.classFactor1,
                                      onChange: this.handleattributes
                                    }
                                  },
                                  {
                                    label: "Bus Class",
                                    inputProps: {
                                      type: "text",
                                      placeholder: "Enter bus class factor",
                                      defaultValue: "",
                                      name: "busClass1",
                                      value: this.state.busClass1,
                                      onChange: this.handleattributes
                                    }
                                  }

                                ]} />
                              <ButtonGroup className="pull-right">

                                <Button
                                  outline
                                  color="primary"
                                  size="lg"
                                  onClick={this.clear1}
                                >
                                  Slide the card
                                  </Button>
                              </ButtonGroup>
                            </div>
                          </div>
                          <h3>
                            {" "}
                            <Badge color="info">{this.state.message}</Badge>
                          </h3>
                        </form>
                      </CardBody>
                    </div>
                  </Card>
                  {/* ****************************************** */}
                  <Card body className="text-center" style={{ borderColor: '#333' }}>
                    <div className="card-content">
                      <CardHeader>
                        <h5 className="title">
                          {" "}
                          Passenger ID: {this.state.pid2}
                        </h5>
                      </CardHeader>
                      <CardBody>
                        <form>
                          <div>
                            <div className="col-md-5,col-md-5">

                              <FormInputs

                                ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3"]}

                                proprieties={[
                                  {
                                    label: "Initial Value",
                                    inputProps: {
                                      type: "text",
                                      placeholder: "Enter inital value",
                                      name: "initialValue2",
                                      value: this.state.initialValue2,
                                      onChange: this.handleattributes
                                    }
                                  },
                                  {
                                    label: "Price Factor",
                                    inputProps: {
                                      type: "text",
                                      placeholder: "Enter price factor",
                                      defaultValue: "",
                                      name: "priceFactor2",
                                      value: this.state.priceFactor2,
                                      onChange: this.handleattributes
                                    }
                                  }

                                ]} />

                              <FormInputs

                                ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3"]}

                                proprieties={[
                                  {
                                    label: "Class Factor",
                                    inputProps: {
                                      type: "text",
                                      placeholder: "Enter class factor",
                                      name: "classFactor2",
                                      value: this.state.classFactor2,
                                      onChange: this.handleattributes
                                    }
                                  },
                                  {
                                    label: "Bus Class",
                                    inputProps: {
                                      type: "text",
                                      placeholder: "Enter bus class factor",
                                      defaultValue: "",
                                      name: "busClass2",
                                      value: this.state.busClass2,
                                      onChange: this.handleattributes
                                    }
                                  }

                                ]} />
                              <ButtonGroup className="pull-right">
                                <Button
                                  outline
                                  color="primary"
                                  size="lg"
                                  onClick={this.clear}
                                >
                                  Slide the card
                      </Button>

                              </ButtonGroup>
                            </div>
                          </div>
                          <h3>
                            {" "}
                            <Badge color="info">{this.state.message}</Badge>
                          </h3>
                        </form>
                      </CardBody>
                    </div>
                  </Card>
                  <br />
                  <Card body className="text-center" style={{ borderColor: '#333' }}>
                    <div className="card-content">
                      <CardHeader>
                        <h5 className="title">
                          {" "}
                          Passenger ID: {this.state.pid3}
                        </h5>
                      </CardHeader>
                      <CardBody>
                        <form>
                          <div>
                            <div className="col-md-5,col-md-5">

                              <FormInputs

                                ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3"]}

                                proprieties={[
                                  {
                                    label: "Initial Value",
                                    inputProps: {
                                      type: "text",
                                      placeholder: "Enter inital value",
                                      name: "initialValue3",
                                      value: this.state.initialValue3,
                                      onChange: this.handleattributes
                                    }
                                  },
                                  {
                                    label: "Price Factor",
                                    inputProps: {
                                      type: "text",
                                      placeholder: "Enter price factor",
                                      defaultValue: "",
                                      name: "priceFactor3",
                                      value: this.state.priceFactor3,
                                      onChange: this.handleattributes
                                    }
                                  }

                                ]} />

                              <FormInputs

                                ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3"]}

                                proprieties={[
                                  {
                                    label: "Class Factor",
                                    inputProps: {
                                      type: "text",
                                      placeholder: "Enter class factor",
                                      name: "classFactor3",
                                      value: this.state.classFactor3,
                                      onChange: this.handleattributes
                                    }
                                  },
                                  {
                                    label: "Bus Class",
                                    inputProps: {
                                      type: "text",
                                      placeholder: "Enter bus class factor",
                                      defaultValue: "",
                                      name: "busClass3",
                                      value: this.state.busClass3,
                                      onChange: this.handleattributes
                                    }
                                  }

                                ]} />
                              <ButtonGroup className="pull-right">
                                <Button
                                  outline
                                  color="primary"
                                  size="lg"
                                  onClick={this.clear3}
                                >
                                  Slide the card
                      </Button>
                              </ButtonGroup>
                            </div>
                          </div>
                          <h3>
                            {" "}
                            <Badge color="info">{this.state.message}</Badge>
                          </h3>
                        </form>
                      </CardBody>
                    </div>
                  </Card>
                </CardGroup>

                <ButtonGroup className="pull-right">

                  {/* <Button
                    outline
                    color="warning"
                    size="lg"
                    onClick={this.UpdateDemoAlgo}
                  >
                    Update
                      </Button> */}
                </ButtonGroup>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>

    )
  }
}

export default Demo;
