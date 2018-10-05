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

class Addbus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            busID: null,
            make: null,
            type: null,
            route: null,
            OwnerName: null,
            message: "",
            options: null


        };

        this.handleattributes = this.handleattributes.bind(this);
        this.handleChange = this.handleChange.bind(this);

      
        this.addbussave = this.addbussave.bind(this);
        this.clear = this.clear.bind(this);


    }



    clear() {
        this.setState({
            busID: "",
            make: "",
            type: "",
            route: "",
            OwnerName: "",
            message: ""

        })
        console.log("clear")

    }
    

    // add bus
    addbussave() {
        var self = this;
        console.log(this.state.busID);
        console.log(this.state.route);
        if(this.state.busID==null||this.state.make==null||this.state.type==null||this.state.OwnerName==null||this.state.route==null){
            alert("please fill all text boxes")
        }
       
       
        else{
        axios.post('/Bus_details/add', {
            
            
            busID: this.state.busID,
            make: this.state.make,
            type: this.state.type,
            route: this.state.route,
            OwnerName: this.state.OwnerName,

           
        })
        .then(function (response) {
            console.log(response);
            alert(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }



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
                                    Add Bus To System{" "}
                                </h5>

                            </CardHeader>
                            <CardBody>
                                <CardGroup>
                                    <Card body className="text-center" style={{ borderColor: '#333' }}>
                                        <div className="card-content">
                                            <CardHeader>
                                                <h5 className="title">
                                                    {" "}
                                                    Bus Details{" "}
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
                                                                        label: "Bus Number",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "Enter Bus Number",
                                                                            name: "busID",
                                                                            value: this.state.busID,
                                                                            onChange: this.handleattributes
                                                                        }
                                                                    },
                                                                    {
                                                                        label: "Bus Brand Name",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "Enter Bus Brand Name",
                                                                            name: "make",
                                                                            value: this.state.make,
                                                                            onChange: this.handleattributes
                                                                        }
                                                                    }

                                                                ]} />

                                                            <FormInputs

                                                                ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3"]}

                                                                proprieties={[
                                                                    {
                                                                        label: "Bus Type",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "Enter Bus Type",
                                                                            name: "type",
                                                                            value: this.state.type,
                                                                            onChange: this.handleattributes
                                                                        }
                                                                    },
                                                                    {
                                                                        label: "Bus Owner Name",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "Enter bus Owner Name",
                                                                            defaultValue: "",
                                                                            name: "OwnerName",
                                                                            value: this.state.OwnerName,
                                                                            onChange: this.handleattributes
                                                                        }
                                                                    }

                                                                ]} />
                                                            <div className="text-center">
                                                                <div className="row">
                                                                    <div className="col-md-5">
                                                                        <FormGroup>
                                                                            <Label for="exampleSelect">
                                                                                Bus Route
                                                                            </Label>
                                                                            <Input
                                                                                type="select"
                                                                                name="route"
                                                                                id="route"
                                                                                onChange={this.handleattributes} value={this.state.route}
                                                                            >
                                                                                <option value="">Select a bus route</option>
                                                                                {this.state.options}

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

                                </CardGroup>

                                <ButtonGroup className="pull-right">
                                    <Button
                                        outline
                                        color="primary"
                                        size="lg"
                                        onClick={this.addbussave}
                                    >
                                        save
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

export default Addbus;