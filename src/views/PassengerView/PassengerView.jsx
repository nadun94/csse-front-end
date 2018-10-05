import React from "react";
import axios from "axios";
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
import moment from "moment";
import { PanelHeader, FormInputs } from "components";

class PassengerView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pid: null,
            name: null,
            email: null,
            sex: null,
            phoneNo: null,
            status: null,
            address: null,
            type: null,
            country: null,
           
        };
        this.searchpassenger = this.searchpassenger.bind(this);
        this.onKeydrop = this.onKeydrop.bind(this);
        this.onClickTest = this.onClickTest.bind(this);
        this.clearFields = this.clearFields.bind(this);

    }

    componentDidMount() {
        
    }
   searchpassenger() {
       axios.get('/accountview/getdata?pid='+this.state.pid).then(response=>this.setState({name:response.data.name,email:response.data.email,
       sex:response.data.sex,phoneNo:response.data.phoneNo,address:response.data.address,status:response.data.status,type:response.data.type,country:response.data.country}));
       
    }


    clearFields() {
        this.setState({
            pid: '',
            name: '',
            email: '',
            sex: '',
            phoneNo: '',
            status: '',
            address: '',
            type: '',
            country: '',
            
        });
    }


    onKeydrop(e) {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: [e.target.value]
        });
    }

    onClickTest() {
        console.log(this.state.pid);
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.sex);
        console.log(this.state.phoneNo);
        console.log(this.state.address);
        console.log(this.state.type);
        console.log(this.state.country);
       
    }

    //render start******************************************************
    render() {
        return (
            <div>
                {/* <PanelHeader size="sm" /> */}
                <div className="container-fluid">
                    <Row>
                        <Col md={12} xs={12}>
                            <CardGroup>
                                <Card body className="text-center" inverse
                                    style={{ backgroundColor: '#efefef', borderColor: '#333' }}>
                                    <div className="card-content">
                                        <CardHeader>
                                            <h5 className="title" >
                                                <h5 style={{color:'black'}}>
                                           View Passenger Details
                                               </h5>
                                            </h5>
                                        </CardHeader>
                                        <CardBody>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                                NIC or Passport Number:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="pid"
                                                                id="npno"
                                                                value={this.state.pid}
                                                                onChange={this.onKeydrop}
                                                            >
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                                Name:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="name"
                                                                id="pname"
                                                                value={this.state.name}
                                                                onChange={this.onKeydrop}
                                                            >
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                                E-Mail:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="email"
                                                                id="pemail"
                                                                value={this.state.email}
                                                                onChange={this.onKeydrop}
                                                            >
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                                Sex:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="sex"
                                                                id="psex"
                                                                value={this.state.sex}
                                                                onChange={this.onKeydrop}
                                                            >
                                                               
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                                Phone Number:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="phoneNo"
                                                                id="pphone"
                                                                value={this.state.phoneNo}
                                                                onChange={this.onKeydrop}
                                                            // placeholder="klsd"
                                                            >
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                                Address:
                                                            </Label>
                                                            <Input
                                                                type="textarea"
                                                                name="address"
                                                                id="padrs"
                                                                value={this.state.address}
                                                                onChange={this.onKeydrop}
                                                            >
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                                Type:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="type"
                                                                id="ptype"
                                                                value={this.state.type}
                                                                onChange={this.onKeydrop}
                                                            >
                                                                
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                                Country:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="country"
                                                                id="pcntry"
                                                                value={this.state.country}
                                                                onChange={this.onKeydrop}
                                                            >
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                           
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <ButtonGroup className="pull-right">
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        size="lg"
                                                        onClick={this.searchpassenger}
                                                    >
                                                       Search
                                                    </Button>
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        size="lg"
                                                        onClick={this.clearFields}
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
                                
                            </CardGroup>
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }
}

export default PassengerView;
