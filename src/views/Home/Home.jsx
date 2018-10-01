import React from "react";
import classnames from "classnames";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
import { Tasks } from "components";
import DatePicker from "react-datepicker";
import moment from "moment";
import img_autorent from "../../assets/logos/autorentals.png";
import img_trip from "../../assets/logos/trip.png";
import img_kaya from "../../assets/logos/kaya.png";
import img_hot from "../../assets/logos/hot.png";
import "react-datepicker/dist/react-datepicker.css";
import car1 from "../../assets/img/car1.png";
import car2 from "../../assets/img/car2.png";
import n1 from "../../assets/img/n1.jpg";
import n2 from "../../assets/img/n2.jpg";
import n3 from "../../assets/img/n3.jpg";
import { PanelHeader, FormInputs } from "components";

const slideImages = [n1, n2, n3];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  strech: true
};
class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Colombo",
      activeTab: "1",
      startDate: moment(),
      show_tab: false
    };
    //this.handleDate = this.handleDate.bind(this);
    this.handleattributes = this.handleattributes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectRates = this.selectRates.bind(this);
    // this.clear=this.clear.bind(this);
    // this.check=this.check.bind(this);
    // checkerror=this.checkerror.bind(this);
  }

  // clear() {

  //     this.setState({

  //     })

  // }

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
    console.log(target.value);
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
      <div>
        {/* <PanelHeader size="sm" /> */}
        <div className="container-fluid">
          <Row>
            <Col md={12} xs={12}>
              <Card body outline color="danger">
                <div id="slide1">
                <Carousel>
                <div>
                    <img src={n1} />
                    <p className="legend">To comfort you</p>
                </div>
                <div>
                    <img src={n2}  />
                    <p className="legend">Take you to your dream places</p>
                </div>
                <div>
                    <img src={n3}  />
                    <p className="legend">Make your home</p>
                </div>
            </Carousel>
                </div>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12} xs={12}>
              <CardGroup>
                <Card body className="text-center"  inverse style={{ backgroundColor: '#efefef', borderColor: '#333' }}>
                  <div className="card-content">
                    <CardHeader>
                      <h5 className="title">
                        {" "}
                        Find the best rental car rates in {this.state.city}{" "}
                      </h5>
                    </CardHeader>
                    <CardBody>
                      <form>
                        <div className="row">
                          <div className="col-md-5">
                            <FormGroup>
                              <Label for="exampleSelect">
                                Pick-Up Location
                              </Label>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Colombo, Sri Lanka (CMB)</option>
                                <option>San Francisco, CA (SFO)</option>
                                <option>New York City Airports (NYC)</option>
                                <option>Sydney, Australia (SYD)</option>
                                <option>Denver, CO (DEN)</option>
                                <option>Tokyo Airports (TYO)</option>
                                <option>Berlin Airports (BER)</option>
                                <option>Beijing, China (PEK)</option>
                                <option>London, United Kingdom (LHR)</option>
                                <option>Amsterdam, Netherlands (AMS)</option>
                              </Input>
                            </FormGroup>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5">
                            <FormGroup>
                              <Label for="exampleSelect">
                                Drop-Off Location
                              </Label>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Enter or Select Place</option>
                                <option>Colombo, Sri Lanka (CMB)</option>
                                <option>San Francisco, CA (SFO)</option>
                                <option>New York City Airports (NYC)</option>
                                <option>Sydney, Australia (SYD)</option>
                                <option>Denver, CO (DEN)</option>
                                <option>Tokyo Airports (TYO)</option>
                                <option>Berlin Airports (BER)</option>
                                <option>Beijing, China (PEK)</option>
                                <option>London, United Kingdom (LHR)</option>
                                <option>Amsterdam, Netherlands (AMS)</option>
                              </Input>
                            </FormGroup>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-5">
                            <FormGroup>
                              <Label for="exampleSelect">Pick-Up</Label>
                              <DatePicker
                                selected={this.state.date}
                                onChange={this.handleChange}
                                showTimeSelect
                                dateFormat="LLL"
                              />
                            </FormGroup>
                          </div>

                          <div className="col-md-5">
                            <FormGroup>
                              <Label for="exampleSelect">Pick-Up</Label>
                              <DatePicker
                                selected={this.state.date}
                                onChange={this.handleChange}
                                showTimeSelect
                                dateFormat="LLL"
                              />
                            </FormGroup>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5">
                            <FormGroup>
                              <Label for="exampleSelect">
                                Drop-Off Location
                              </Label>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option
                                  value="Economy"
                                  data-car-type-id="Economy"
                                >
                                  Economy
                                </option>
                                <option
                                  value="Compact"
                                  data-car-type-id="Compact"
                                >
                                  Compact
                                </option>
                                <option
                                  value="Midsize"
                                  data-car-type-id="Midsize"
                                >
                                  Midsize
                                </option>
                                <option
                                  value="Standard"
                                  data-car-type-id="Standard"
                                >
                                  Standard
                                </option>
                                <option
                                  value="Full-size"
                                  data-car-type-id="Full-size"
                                >
                                  Full-size
                                </option>
                                <option
                                  value="Premium"
                                  data-car-type-id="Premium"
                                >
                                  Premium
                                </option>
                                <option
                                  value="Luxury"
                                  data-car-type-id="Luxury"
                                >
                                  Luxury
                                </option>
                                <option
                                  value="Convertible"
                                  data-car-type-id="Convertible"
                                >
                                  Convertible
                                </option>
                                <option
                                  value="Minivan"
                                  data-car-type-id="Minivan"
                                >
                                  Minivan
                                </option>
                                <option value="SUV" data-car-type-id="SUV">
                                  SUV
                                </option>
                                <option
                                  value="Sports car"
                                  data-car-type-id="Sports car"
                                >
                                  Sportscar
                                </option>
                              </Input>
                            </FormGroup>
                          </div>
                        </div>

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

                        <h3>
                          {" "}
                          <Badge color="info">{this.state.message}</Badge>
                        </h3>
                      </form>
                    </CardBody>
                  </div>
                </Card>
                <Card  inverse style={{ backgroundColor:  '#efefef', borderColor: '#333' }}> 
                  <div className="card-content">
                    <CardHeader>
                      <h5 className="title">
                        Click on multiple sites to get the lowest prices
                      </h5>
                    </CardHeader>
                    <CardBody>
                      {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                      {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.</CardText> */}

                      <FormGroup>
                        <div>
                          <span className="carlogo">
                            {" "}
                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              size="lg"
                            />
                            <img
                              className="carlogo-size"
                              src={img_autorent}
                              alt="fireSpot"
                            />
                          </span>
                          <span className="carlogo">
                            {" "}
                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              size="lg"
                            />
                            <img
                              className="carlogo-size"
                              src={img_trip}
                              alt="fireSpot"
                            />
                          </span>
                          <span className="carlogo">
                            {" "}
                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              size="lg"
                            />
                            <img
                              className="carlogo-size"
                              src={img_kaya}
                              alt="fireSpot"
                            />
                          </span>
                          <span className="carlogo">
                            {" "}
                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              size="lg"
                            />
                            <img
                              className="carlogo-size"
                              src={img_hot}
                              alt="fireSpot"
                            />
                          </span>
                        </div>
                      </FormGroup>
                      <Button
                        color="primary"
                        size="lg"
                        onClick={this.selectRates}
                      >
                        Compare Selected
                      </Button>
                    </CardBody>
                  </div>
                </Card>
              </CardGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              {this.state.show_tab && (
                <Card body className="text-center">
                  <div className="card-content">
                    <CardHeader>
                      <h5 className="title">Cars</h5>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <Nav tabs>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTab === "1"
                              })}
                              onClick={() => {
                                this.toggle("1");
                              }}
                            >
                              AutoRentals
                            </NavLink>
                          </NavItem>
                          {/* <NavItem>
                       <NavLink
                         className={classnames({ active: this.state.activeTab === '2' })}
                         onClick={() => { this.toggle('2'); }}
                       >
                         Moar Tabs
         </NavLink>
                     </NavItem> */}
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                          <TabPane tabId="1">
                            <Row>
                              <Col sm="4">
                                {/* <Card > */}
                                  <CardTitle>Honda Civic</CardTitle>
                                  <CardText>40$ per hour</CardText>
                                  <CardImg top width="100%"  src={car1} alt="Card image cap" />

                                {/* </Card> */}
                              </Col>
                              <Col sm="4">
                               
                                  <CardTitle>Mazda G8</CardTitle>
                                  <CardText>60$ per hour</CardText>
                                  <CardImg top width="100%"  src={car2} alt="Card image cap" />
                               
                           
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId="2">
                            <Row>
                              <Col sm="4">
                                <Card body>
                                  <CardTitle>Special Title Treatment</CardTitle>
                                  <CardText>
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </CardText>
                                  <Button>Go somewhere</Button>
                                </Card>
                              </Col>
                              <Col sm="4">
                                <Card body>
                                  <CardTitle>Special Title Treatment</CardTitle>
                                  <CardText>
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </CardText>
                                  <Button>Go somewhere</Button>
                                </Card>
                              </Col>
                            </Row>
                          </TabPane>
                        </TabContent>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              )}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Cars;
