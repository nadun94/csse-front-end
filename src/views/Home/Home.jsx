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
import n4 from "../../assets/img/n4.jpg";
import n5 from "../../assets/img/n5.jpg";
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
                    <p className="legend">Take you home safely</p>
                </div>
                <div>
                    <img src={n2}  />
                    <p className="legend">Take you to your dream places</p>
                </div>
                <div>
                    <img src={n3}  />
                    <p className="legend">More convinetn ever</p>
                </div>
                <div>
                    <img src={n4}  />
                    <p className="legend">New experience</p>
                </div>
                <div>
                    <img src={n5}  />
                    <p className="legend">Our service</p>
                </div>
            </Carousel>
                </div>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12} xs={12}>
              <CardGroup>
                <Card body className="text-center"   style={{ backgroundColor: '#efefef', borderColor: '#333' }}>
                  <div className="card-content">
                    <CardHeader>
                      <h5 className="title">
                        {" "}
                        Welcome to Sri Lanka transport service {this.state.city}{" "}
                      </h5>
                    </CardHeader>
                    <CardBody>
 
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
