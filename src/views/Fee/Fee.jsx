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

class Fee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id1: "",
      id2: "",
      id3: "",
      initialValue1: "",
      priceFactor1: "",
      classFactor1: "",
      busClass1: "",
      initialValue2: "",
      priceFactor2: "",
      classFactor2: "",
      busClass2: "",
      initialValue3: "",
      priceFactor3: "",
      classFactor3: "",
      busClass3: "",

    };
    //this.handleDate = this.handleDate.bind(this);
    this.handleattributes = this.handleattributes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectRates = this.selectRates.bind(this);
    this.searchFeeAlgo = this.searchFeeAlgo.bind(this);
    this.UpdateFeeAlgo = this.UpdateFeeAlgo.bind(this);

    // this.clear=this.clear.bind(this);
    // this.check=this.check.bind(this);
    // checkerror=this.checkerror.bind(this);
  }

  // clear() {

  //     this.setState({

  //     })

  // }


  searchFeeAlgo() {
    var self = this;

    try {
      fetch("/fee-algo/get-all-fee-algo")
        .then(res => res.json())
        .then(data => {

          self.setState({ initialValue1: data[0].initialprice })
          self.setState({ priceFactor1: data[0].priceFactor })
          self.setState({ classFactor1: data[0].classFactor })
          self.setState({ busClass1: data[0].busClass })
          self.setState({ id1: data[0].id })

          self.setState({ initialValue2: data[1].initialprice })
          self.setState({ priceFactor2: data[1].priceFactor })
          self.setState({ classFactor2: data[1].classFactor })
          self.setState({ busClass2: data[1].busClass })
          self.setState({ id2: data[1].id })

          self.setState({ initialValue3: data[2].initialprice })
          self.setState({ priceFactor3: data[2].priceFactor })
          self.setState({ classFactor3: data[2].classFactor })
          self.setState({ busClass3: data[2].busClass })
          self.setState({ id2: data[2].id })

        });
    } catch (error) {
      console.log(error)
    }

  }

  // update fee algo
  UpdateFeeAlgo() {
    alert(
      'dfds'
    )
    console.log(this.state.priceFactor1)
    console.log(this.state.priceFactor1[0])
    var self = this;
    axios.post('/fee-algo/update-fee-algo', {
      initialprice1: self.state.initialValue1,
      priceFactor1: self.state.priceFactor1,
      classFactor1: self.state.classFactor1,
      busClass1: self.state.busClass1,
      id1: self.state.id1,

      initialprice2: self.state.initialValue2,
      priceFactor2: self.state.priceFactor2,
      classFactor2: self.state.classFactor2,
      busClass2: self.state.busClass2,
      id2: self.state.id2,

      initialprice3: self.state.initialValue3,
      priceFactor3: self.state.priceFactor3,
      classFactor3: self.state.classFactor3,
      busClass3: self.state.busClass3,
      id3: self.state.id3,
    })
      .then(function (res) {
        // if (res.data.postcheck_pass == "true") {
        //   self.setState({ postcheck_pass: res.data.postcheck_pass }
        // else {

        console.log(res.data)
      }).catch((error)=>{
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
                  Find bus fare calculation factors{" "}
                </h5>

              </CardHeader>
              <CardBody>
                <CardGroup>
                  <Card body className="text-center" style={{ borderColor: '#333' }}>
                    <div className="card-content">
                      <CardHeader>
                        <h5 className="title">
                          {" "}
                          Normal Bus Class{" "}
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
                                  Clear
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
                          Semi Luxury Bus Class{" "}
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
                                  Clear
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
                          Luxury Bus Class{" "}
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
                                  Clear
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
                  <Button
                    outline
                    color="primary"
                    size="lg"
                    onClick={this.searchFeeAlgo}
                  >
                    Search
                      </Button>
                  <Button
                    outline
                    color="warning"
                    size="lg"
                    onClick={this.UpdateFeeAlgo}
                  >
                    Update
                      </Button>
                </ButtonGroup>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>

    )
  }
}

export default Fee;
