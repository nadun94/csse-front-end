import React from "react";
import axios from "axios";
import classnames from "classnames";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
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
import {Tasks} from "components";
import moment from "moment";
import {PanelHeader, FormInputs} from "components";

class Passenger extends React.Component {
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
            password: null,
            cpassword: null
        };
        this.onKeydrop = this.onKeydrop.bind(this);
        this.onClickTest = this.onClickTest.bind(this);
        this.passwordConfirmation = this.passwordConfirmation.bind(this);
        this.clearFields = this.clearFields.bind(this);
        this.registerPassenger = this.registerPassenger.bind(this);
    }

    componentDidMount() {
    }

    registerPassenger(){
        if(this.state.password[0] !== this.state.cpassword[0]){
            alert('Password Do Not Match!!!');

        }else{
            axios.post('/passenger/add', {
                    pid: this.state.pid[0],
                    name: this.state.name[0],
                    email: this.state.email[0],
                    sex: this.state.sex[0],
                    phoneNo: this.state.phoneNo[0],
                    address: this.state.address[0],
                    type: this.state.type[0],
                    country: this.state.country[0],
                    password: this.state.password[0]
//                 }
                })
                .then(function (response) {
                    console.log(response);
                    alert(response.data);
                }).then(() => {
                    this.clearFields();
            })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    clearFields(){
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
            password: '',
            cpassword: ''
        });
    }

    passwordConfirmation(){
        console.log('conCalled');
        console.log(this.state.password);
        if(this.state.password[0] !== this.state.cpassword[0]){
            alert('Password Do Not Match!!!');

        }
    }

    onKeydrop(e){
        console.log(e.target.value)
        this.setState({
        [e.target.name]: [e.target.value]
        });
    }

    onClickTest(){
        console.log(this.state.pid);
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.sex);
        console.log(this.state.phoneNo);
        console.log(this.state.address);
        console.log(this.state.type);
        console.log(this.state.country);
        console.log(this.state.password);
        console.log(this.state.cpassword);
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
                                      style={{backgroundColor: '#efefef', borderColor: '#333'}}>
                                    <div className="card-content">
                                        <CardHeader>
                                            <h5 className="title">
                                                Passenger Details
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
                                                                type="select"
                                                                name="sex"
                                                                id="psex"
                                                                value={this.state.sex}
                                                                onChange={this.onKeydrop}
                                                            >
                                                                <option>Select Sex...</option>
                                                                <option value='male'>Male</option>
                                                                <option value='female'>Female</option>
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
                                                                type="select"
                                                                name="type"
                                                                id="ptype"
                                                                value={this.state.type}
                                                                onChange={this.onKeydrop}
                                                            >
                                                                <option>Select Type...</option>
                                                                <option value='foreign'>Foreign</option>
                                                                <option value='local'>Local</option>
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
                                                            <Label for="exampleSelect">
                                                                Password:
                                                            </Label>
                                                            <Input
                                                                type="password"
                                                                name="password"
                                                                id="ppswrd"
                                                                value={this.state.password}
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
                                                                Confirm Password:
                                                            </Label>
                                                            <Input
                                                                type="password"
                                                                name="cpassword"
                                                                id="cppswrd"
                                                                value={this.state.cpassword}
                                                                onChange={this.onKeydrop}
                                                                onBlur={this.passwordConfirmation}
                                                            >
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <ButtonGroup className="pull-right">
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        size="lg"
                                                        onClick={this.registerPassenger}
                                                    >
                                                        Register
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
                                <Card inverse style={{backgroundColor: '#efefef', borderColor: '#333'}}>
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

                                                </div>
                                            </FormGroup>
                                            <Button
                                                color="primary"
                                                size="lg"
                                                onClick={this.onClickTest}
                                            >
                                                Compare Selected
                                            </Button>
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

export default Passenger;
