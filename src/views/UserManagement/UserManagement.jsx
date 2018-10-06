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
import {PanelHeader, FormInputs} from "components";

class UserManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pid: null,
            name: null,
            password: null,
            cpassword: null,
            user: [],
            accLevel: null,
            option: null,
            suser: null

        };
        this.onKeydrop = this.onKeydrop.bind(this);
        this.passwordConfirmation = this.passwordConfirmation.bind(this);
        this.getNameNPid = this.getNameNPid.bind(this);
        this.testInputs = this.testInputs.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.getAllPassenger = this.getAllPassenger.bind(this);
    }


    componentDidMount() {
        this.getNameNPid();
        // this.getAllPassenger();
    }

    getAllPassenger(){
        var self =this;
        try {
            fetch("/passenger/all-pas")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    self.setState({ user: data })
                    let temp = self.state.user.map((item, key) => [
                        <option value={item} >{item}</option>
                    ])
                    self.setState({ options: temp })
                    console.log(self.state.options)

                })
        } catch (error) {
            console.log(error)

        }
    }

    getNameNPid() {
        this.setState({
            name: sessionStorage.getItem("user",),
            pid: sessionStorage.getItem("pid")
        });
    }

    passwordConfirmation() {
        console.log('conCalled');
        console.log(this.state.password);
        if (this.state.password[0] !== this.state.cpassword[0]) {
            alert('Password Do Not Match!!!');

        }
    }

    onKeydrop(e) {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: [e.target.value]
        });

    }

    testInputs() {
        console.log(this.state.password)
    }

    changePassword() {
        axios.put('/user/change_password', {
            pid: this.state.pid[0],
            // pid:'okok',
            password: this.state.password[0]
        }).then((res) => {
            console.log(res.data);
            alert(res.data)
        }).catch(err => {
            console.log(err);
        });
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
                                    Change Your Password{" "}
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
                                                        label: "Name",
                                                        inputProps: {
                                                            type: "text",
                                                            readOnly: true,
                                                            placeholder: "",
                                                            name: "name",
                                                            value: this.state.name,
                                                            // onChange: this.handleattributes
                                                        }
                                                    },
                                                    {
                                                        label: "Nic or Passport Number",
                                                        inputProps: {
                                                            type: "text",
                                                            readOnly: true,
                                                            placeholder: "",
                                                            name: "pid",
                                                            value: this.state.pid,
                                                            // onChange: this.handleattributes
                                                        }
                                                    }

                                                ]}/>

                                            <FormInputs

                                                ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3"]}

                                                proprieties={[
                                                    {
                                                        label: "New Password",
                                                        inputProps: {
                                                            type: "password",
                                                            placeholder: "Enter New Password",
                                                            name: "password",
                                                            value: this.state.password,
                                                            onChange: this.onKeydrop
                                                        }
                                                    },
                                                    {
                                                        label: "Confirm Password",
                                                        inputProps: {
                                                            type: "password",
                                                            placeholder: "Re-enter Password",
                                                            defaultValue: "",
                                                            name: "cpassword",
                                                            value: this.state.cpassword,
                                                            onChange: this.onKeydrop,
                                                            onBlur: this.passwordConfirmation
                                                        }
                                                    }

                                                ]}/>
                                            <ButtonGroup className="pull-right">

                                                <Button
                                                    outline
                                                    color="primary"
                                                    size="lg"
                                                    // onClick={this.clear1}
                                                >
                                                    Clear
                                                </Button>
                                                <Button
                                                    outline
                                                    color="primary"
                                                    size="lg"
                                                    onClick={this.changePassword}
                                                >
                                                    Change
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </div>
                                    <h3>
                                        {" "}
                                        {/*<Badge color="info">{this.state.message}</Badge>*/}
                                    </h3>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} xs={12}>

                        { sessionStorage.getItem("accLevel") == 1 && <Card>
                            <CardHeader>
                                <h5 className="title">
                                    {" "}
                                    Change Access Levels{" "}
                                </h5>

                            </CardHeader>
                            <CardBody>
                                <div className="text-center">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <FormGroup>
                                                <Label for="exampleSelect">
                                                    User name
                                                </Label>
                                                <Input
                                                    type="select"
                                                    name="user"
                                                    id="route"
                                                    onChange={this.onKeydrop} value={this.state.user}
                                                >
                                                    <option value="">Select User</option>
                                                    {this.state.options}

                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleSelect">
                                                    Access Level
                                                </Label>
                                                <Input
                                                    type="select"
                                                    name="user"
                                                    id="route"
                                                    onChange={this.onKeydrop} value={this.state.user}
                                                >
                                                    <option value="">Select User</option>
                                                    <option value="1">Admin</option>
                                                    <option value="2">Manager</option>
                                                    <option value="3">Normal Passenger</option>

                                                </Input>
                                            </FormGroup>
                                        </div>
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
                        </Card>}
                    </Col>

                </Row>
            </div>

        )
    }
}

export default UserManagement;
