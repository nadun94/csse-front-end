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

class Route extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RouteID: null,
            rorigin: null,
            rdestination: null,
            olatitude:null,
            olongitude: null,
            deslatitude: null,
            deslongitude: null

        };
        this.onKeydrop = this.onKeydrop.bind(this);
        this.onClickTest = this.onClickTest.bind(this);

        this.clearFields = this.clearFields.bind(this);
        this.addRoutes = this.addRoutes.bind(this);
        this.updateRoutes = this.updateRoutes.bind(this);
        this.deleteRoutes = this.deleteRoutes.bind(this);

    }

    componentDidMount() {
    }

    addRoutes(){

            axios.post('/route/add', {
                RouteID: this.state.RouteID[0],
                rorigin: this.state.rorigin[0],
                rdestination:this.state.rdestination[0],
                olatitude: this.state.olatitude[0],
                olongitude: this.state.olongitude[0],
                deslatitude: this.state.deslatitude[0],
                deslongitude: this.state.deslongitude[0]

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
       // }

    }
    updateRoutes(){

        axios.put('/route/update', {
            RouteID: this.state.RouteID[0],
            rorigin: this.state.rorigin[0],
            rdestination:this.state.rdestination[0],
            olatitude: this.state.olatitude[0],
            olongitude: this.state.olongitude[0],
            deslatitude: this.state.deslatitude[0],
            deslongitude: this.state.deslongitude[0]

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
        // }

    }
    deleteRoutes(){

        axios.delete('/route/delete', {
            RouteID: this.state.RouteID[0],


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
        // }

    }

    clearFields(){
        this.setState({
            RouteID: '',
            rorigin: '',
            olatitude: '',
            olongitude: '',
            deslatitude: '',
            deslongitude: ''

        });
    }



    onKeydrop(e){
        console.log(e.target.value)
        this.setState({
            [e.target.rorigin]: [e.target.value]
        });
    }

    onClickTest(){
        console.log(this.state.RouteID);
        console.log(this.state.rorigin);
        console.log(this.state.rdestination);
        console.log(this.state.olatitude);
        console.log(this.state.olongitude);
        console.log(this.state.deslatitude);
        console.log(this.state.deslongitude);

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
                                <div>
                                    <Card body className="text-center" style={{ borderColor: '#333' }}>
                                        <div className="card-content">
                                        <CardHeader>
                                            <h5 className="title">
                                                Add Route Details
                                            </h5>
                                        </CardHeader>
                                        <CardBody>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                                RouteID
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="RouteID"
                                                                id="rno"
                                                                value={this.state.RouteID}
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
                                                                Route Origin:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="rorigin"
                                                                id="rorigin"
                                                                value={this.state.rorigin}
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
                                                                    Route Destination:
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    name="rdestination"
                                                                    id="rdestination"
                                                                    value={this.state.rdestination}
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
                                                                    origin Latitude:
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    name="olatitude"
                                                                    id="olatitude"
                                                                    value={this.state.olatitude}
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
                                                                    origin Longitude:
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    name="olongitude"
                                                                    id="olongitude"
                                                                    value={this.state.olongitude}
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
                                                                    Destination Latitude:
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    name="deslatitude"
                                                                    id="deslatitude"
                                                                    value={this.state.deslatitude}
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
                                                                    Destination Longitude:
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    name="deslongitude"
                                                                    id="deslongitude"
                                                                    value={this.state.deslongitude}
                                                                    onChange={this.onKeydrop}
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
                                                        onClick={this.addRoutes}
                                                    >
                                                        Add Route
                                                    </Button>
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        size="lg"
                                                        onClick={this.clearFields}
                                                    >
                                                        Reset
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
                                </div>
                                <br />
                                {/* second card */}
                                <div>
                                <Card body className="text-center" style={{ borderColor: '#333' }}>
                                    <div className="card-content">
                                        <CardHeader>
                                            <h5 className="title">
                                                Update Route Details
                                            </h5>
                                        </CardHeader>
                                        <CardBody>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                                RouteID
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="RouteID"
                                                                id="rno"
                                                                value={this.state.RouteID}
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
                                                                Route Origin:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="rorigin"
                                                                id="rorigin"
                                                                value={this.state.rorigin}
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
                                                                Route Destination:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="rdestination"
                                                                id="rdestination"
                                                                value={this.state.rdestination}
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
                                                                origin Latitude:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="olatitude"
                                                                id="olatitude"
                                                                value={this.state.olatitude}
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
                                                                origin Longitude:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="olongitude"
                                                                id="olongitude"
                                                                value={this.state.olongitude}
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
                                                                Destination Latitude:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="deslatitude"
                                                                id="deslatitude"
                                                                value={this.state.deslatitude}
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
                                                                Destination Longitude:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="deslongitude"
                                                                id="deslongitude"
                                                                value={this.state.deslongitude}
                                                                onChange={this.onKeydrop}
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
                                                        onClick={this.updateRoutes}
                                                    >
                                                        Add Route
                                                    </Button>
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        size="lg"
                                                        onClick={this.clearFields}
                                                    >
                                                        Reset
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
                                </div>

                                <br />
                                {/* 3rd Card*/}
                                <div>
                                    <Card body className="text-center" style={{ borderColor: '#333' }}>
                                        <div className="card-content">
                                            <CardHeader>
                                                <h5 className="title">
                                                    Delete Route
                                                </h5>
                                            </CardHeader>
                                            <CardBody>
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-5">
                                                            <FormGroup>
                                                                <Label for="exampleSelect">
                                                                    RouteID
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    name="RouteID"
                                                                    id="rno"
                                                                    value={this.state.RouteID}
                                                                    onChange={this.onKeydrop}
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
                                                            onClick={this.deleteRoutes}
                                                        >
                                                            Add Route
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
                                </div>
                            </CardGroup>
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }
}

export default Route;
