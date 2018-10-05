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

class RouteHistoryView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routeID: null,
            Origin: null,
            Destination: null,
            OriginLatitude: null,
            OriginLongitude: null,
            DesLatitude: null,
            DesLongitude: null


        };
        this.searchroute = this.searchroute.bind(this);
        this.onKeydrop = this.onKeydrop.bind(this);
        this.clearFields = this.clearFields.bind(this);
        this.testState = this.testState.bind(this);

    }

    componentDidMount() {

    }

    searchroute() {
        console.log('hhh')
        console.log(this.state.routeID)
        axios.get('/routing/getroutedata?routeid=' + this.state.routeID).then((response) => {
            console.log(response.data)
            this.setState({
                Origin: response.data.origin,
                Destination: response.data.destination,
                OriginLatitude: response.data.originLatitude,
                OriginLongitude: response.data.originLongitude,
                DesLatitude: response.data.desLatitude,
                DesLongitude: response.data.desLongitude
            })
        }).catch((err) => {
            console.log(err);
        });

    }


    clearFields() {
        this.setState({
            routeID: '',
            Origin: '',
            Destination: '',
            OriginLatitude: '',
            OriginLongitude: '',
            DesLatitude: '',
            DesLongitude: ''
        });
    }


    onKeydrop(e) {
        console.log(e.target.value);
        console.log(e.target.name);
        this.setState({
            [e.target.name]: [e.target.value]
        });
    }

    testState() {
        console.log(this.state.routeID)
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
                                                <h5 style={{ color: 'black' }}>
                                                    View Routing Details
                                               </h5>
                                            </h5>
                                        </CardHeader>
                                        <CardBody>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                                RoutingId
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="routeID"
                                                                id="routeID"
                                                                value={this.state.routeID}
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
                                                                Origin
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="Origin"
                                                                id=" Origin"
                                                                value={this.state.Origin}
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
                                                                Destination
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="Destination"
                                                                id="Destination"
                                                                value={this.state.Destination}
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
                                                                OriginLatitude
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="OriginLatitude"
                                                                id=" OriginLatitude"
                                                                value={this.state.OriginLatitude}
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
                                                                OriginLongitude
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="OriginLongitude"
                                                                id="OriginLongitude"
                                                                value={this.state.OriginLongitude}
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
                                                            <Label for="exampleSelect">
                                                                DesLatitude
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="DesLatitude"
                                                                id="DesLatitude"
                                                                value={this.state.DesLatitude}
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
                                                                DesLongitude
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="DesLongitude"
                                                                id="DesLongitude"
                                                                value={this.state.DesLongitude}
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
                                                        onClick={this.searchroute}
                                                    >
                                                        Search
                                                    </Button>
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        size="lg"
                                                        onClick={this.testState}
                                                    >
                                                        test
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

export default RouteHistoryView;
