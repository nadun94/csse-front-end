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
            password: '',
            cpassword: ''
        };
        this.onKeydrop = this.onKeydrop.bind(this);
        this.onClickTest = this.onClickTest.bind(this);
        this.passwordConfirmation = this.passwordConfirmation.bind(this);
        this.clearFields = this.clearFields.bind(this);
        this.registerPassenger = this.registerPassenger.bind(this);
        this.setLocaleCountry = this.setLocaleCountry.bind(this);
    }

    componentDidMount() {
    }
    setLocaleCountry(){
        if(this.state.type === 'local'){
            this.setState({
                country: 'Sri Lanka'
            })
        }
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
            cpassword: null
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
        console.log(e.target.value);
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
            <div classNames="container-fluid">


                <Row>
                    <Col md={12} xs={12}>

                        <Card>
                            <CardHeader>
                                <h5 className="title">
                                    {" "}
                                     Passenger Details{" "}
                                </h5>

                            </CardHeader>
                            <CardBody>
                                <CardGroup>
                                    <Card body className="text-center" style={{ borderColor: '#333' }}>
                                        <div className="card-content">
                                            <CardHeader>
                                                <h5 className="title">
                                                    {" "}
                                                    Enter Your Details Here{" "}
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
                                                                        label: "NIC or Passport Number",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "Enter NIC or Passport",
                                                                            name: "pid",
                                                                            id: "npno",
                                                                            value: this.state.pid,
                                                                            onChange: this.onKeydrop
                                                                        }
                                                                    },
                                                                    {
                                                                        label: "Name",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "Enter Name",
                                                                            name: "name",
                                                                            id:"pname",
                                                                            value: this.state.name,
                                                                            onChange: this.onKeydrop
                                                                        }
                                                                    }

                                                                ]} />

                                                            <FormInputs

                                                                ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3"]}

                                                                proprieties={[
                                                                    {
                                                                        label: "E-Mail",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "Enter E-mail",
                                                                            name: "email",
                                                                            id:"pemail",
                                                                            value: this.state.email,
                                                                            onChange: this.onKeydrop
                                                                        }
                                                                    },
                                                                    {
                                                                        label: "Phone Number",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "Enter Phone Number",
                                                                            // defaultValue: "",
                                                                            name: "phoneNo",
                                                                            value: this.state.phoneNo,
                                                                            onChange: this.onKeydrop
                                                                        }

                                                                    }

                                                                ]} />
                                                            <div className="text-center">
                                                                <div className="row">
                                                                    <div className="col-md-10">

                                                            <FormGroup className="col-md-5  px-5 py-3" >
                                                                <Label for="exampleSelect" >
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
                                                                    </div></div></div>
                                                            <FormInputs

                                                                ncols={["col-md-9  px-5 py-3"]}

                                                                proprieties={[
                                                                    {
                                                                        label: "Address",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "Enter Address",
                                                                            name: "address",
                                                                            id:"address",
                                                                            value: this.state.address,
                                                                            onChange: this.onKeydrop
                                                                        }
                                                                    }

                                                                ]} />

                                                            {/*<Row>*/}
                                                            <div className="text-center">
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
                                                                </div></div></div>
                                                            {/*</Row>*/}
                                                            <FormInputs

                                                                ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3","col-md-5 px-5 py-3"]}

                                                                proprieties={[
                                                                    {
                                                                        label: "Country",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "Enter country",
                                                                            name: "country",
                                                                            id:"pcntry",
                                                                            value: this.state.country,
                                                                            onChange: this.onKeydrop
                                                                        }
                                                                    },
                                                                    {
                                                                        label: "Password",
                                                                        inputProps: {
                                                                            type: "password",
                                                                            placeholder: "Enter Password",
                                                                            // defaultValue: "",
                                                                            name: "password",
                                                                            id:"pcntry",
                                                                            value: this.state.password,
                                                                            onChange: this.onKeydrop
                                                                        }

                                                                    },
                                                                    {
                                                                        label: "Confirm Password",
                                                                        inputProps: {
                                                                            type: "password",
                                                                            placeholder: "Renter Password",
                                                                            // defaultValue: "",
                                                                            name: "cpassword",
                                                                            id:"pcntry",
                                                                            value: this.state.cpassword,
                                                                            onChange: this.onKeydrop,
                                                                            onBlur: this.passwordConfirmation
                                                                        }

                                                                    }

                                                                ]} />
                                                            <ButtonGroup className="pull-right">

                                                                <Button
                                                                    outline
                                                                    color="primary"
                                                                    size="lg"
                                                                    onClick={this.clearFields}
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
                                        onClick={this.registerPassenger}
                                    >
                                        Register
                                    </Button>
                                    <Button
                                        outline
                                        color="warning"
                                        size="lg"
                                        // onClick={this.UpdateFeeAlgo}
                                    >
                                        Update
                                    </Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Passenger;
