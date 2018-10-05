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

class BusStopDistance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route_array: [],
      combination: [],
      options: null,
      selected_route: "",
      distance: [],
      bus_stop_list: [],
      bus_stop_row:[],


    };
    //this.handleDate = this.handleDate.bind(this);
    this.handleattributes = this.handleattributes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectRates = this.selectRates.bind(this);
    this.searchBustopDistance = this.searchBustopDistance.bind(this);
    this.addBusStopDistance = this.addBusStopDistance.bind(this);

    // this.clear=this.clear.bind(this);
    this.generateCombinationList = this.generateCombinationList.bind(this);
    // checkerror=this.checkerror.bind(this);
  }

  // clear() {

  //     this.setState({

  //     })

  // }


  searchBustopDistance() {
    var self = this;

    try {
      let url = "bus-fare/all-bus-halt-combinations?routeID=" + this.state.selected_route;
      console.log(url)
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          self.setState({ combination: data })

        });
    } catch (error) {
      console.log(error)
    }
    this.generateCombinationList

  }
  handleClick(index, event) {
    var distance = this.state.distance.slice();
    distance[index] = event.target.value;
    this.setState({ distance: distance });
  }
  generateCombinationList() {

    return (
      <div>
        {
          this.state.combination.map((item, key) =>

            <FormInputs

              ncols={["col-md-4  px-4 py-3", "col-md-4 px-5 py-3", "col-md-4  px-5 py-3"]}

              proprieties={[
                {
                  label: "Bus stop one",
                  inputProps: {
                    type: "text",
                    placeholder: "Enter bus stop one",
                    // name: "classFactor1",
                    value: item.key,
                    onChange: this.handleattributes
                  }
                },
                {
                  label: "Bus stop two",
                  inputProps: {
                    type: "text",
                    placeholder: "Enter bus stop two",
                    defaultValue: "",
                    // name: "busClass1",
                    value: item.value,
                    onChange: this.handleattributes
                  }
                },
                {
                  label: "Distance(km)",
                  inputProps: {
                    type: "text",
                    placeholder: "Enter distance",
                    defaultValue: "",
                    name: "distance",
                    id: key + 1,
                    // value: this.state.distance,
                    onChange: this.handleClick.bind(this, (key))
                  }
                }

              ]} />



          )
        }
      </div>
    )
  }


  // update BusStopDistance algo
  async addBusStopDistance() {
    await this.setState({bus_stop_row:[]})
      await this.state.combination.map((item,key) => {
        // this.setState({bus_stop_row:{busHalt1:item.key,busHalt2:item.value,distance:this.state.distance[key]}})
        this.state.bus_stop_row.push({"busHalt1":item.key,"busHalt2":item.value,"distance":this.state.distance[key]})
         this.state.bus_stop_list.push(this.state.bus_stop_row)
      })
      // console.log(this.state.bus_stop_list)
      console.log("fuck",this.state.bus_stop_row)
    var self = this;
    axios.post('/bus-fare/add-bus-stop-distance', {
      bs:this.state.bus_stop_row
      
      
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
    var self = this;

    try {
      fetch("/bus-route/all-routes-only")
        .then(res => res.json())
        .then(data => {
          console.log('fuck: ', data);
          self.setState({ route_array: data })
          let temp = self.state.route_array.map((item, key) => [
            <option value={item} >{item}</option>
          ])
          self.setState({ options: temp })
          console.log(self.state.options)

        })
    } catch (error) {
      console.log(error)

    }
  }
  onSelectChange(event) {

    this.setState({ selected_route: event.target.value })
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
          <Col md={6} xs={12}>

            <Card>
              <CardHeader>
                <h5 className="title">
                  {" "}
                  Generate all distinct bus-stop distance combinations{" "}
                </h5>

              </CardHeader>
              <CardBody>
                <div className="row">
                  <div className="col-md-5">
                    <FormGroup>
                      <Label for="exampleSelect">
                        Bus Route
                              </Label>
                      <Input
                        type="select"
                        name="select"
                        id="exampleSelect"
                        onChange={this.onSelectChange.bind(this)} value={this.state.selected_route}
                      >
                        <option value="">Select a bus route</option>
                        {this.state.options}

                      </Input>
                    </FormGroup>
                  </div>
                </div>

                <ButtonGroup className="pull-right">
                  <Button
                    outline
                    color="primary"
                    size="lg"
                    onClick={this.searchBustopDistance}
                  >
                    Search
                      </Button>
                </ButtonGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md={12} xs={12}>

            <Card>
              <CardHeader>
                <h5 className="title">
                  {" "}
                  Generate all distinct bus-stop distance combinations{" "}
                </h5>

              </CardHeader>
              <CardBody>
                <div className="row">
                  <div className="col-md-10">
                    {this.generateCombinationList()}
                  </div>
                </div>

                <ButtonGroup className="pull-right">
                  <Button
                    outline
                    color="primary"
                    size="lg"
                    onClick={this.addBusStopDistance}
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

export default BusStopDistance;
