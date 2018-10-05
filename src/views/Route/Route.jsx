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
            RouteID: "",
            rorigin: "",
            rdestination: "",
            olatitude:"",
            olongitude: "",
            deslatitude: "",
            deslongitude: "",
            destnation:"",
            bus_stop_row:[],
            bus_stop_row:[],
            busHaltID:"",
            busHaltName:"",
            town:"",
            busHaltLatitude:"",
            busHaltLongitude:""


        };
        this.handleattributes = this.handleattributes.bind(this);
        this.onClickTest = this.onClickTest.bind(this);

        this.clearFields = this.clearFields.bind(this);
        this.addRoutes = this.addRoutes.bind(this);
        this.updateRoutes = this.updateRoutes.bind(this);
        this.deleteRoutes = this.deleteRoutes.bind(this);

    }

    componentDidMount() {
    }
    async addBusStop(){
let self = this;
  await  this.state.bus_stop_row.push({"busHaltID":self.state.busHaltID,"town":self.state.town,"busHaltName":self.state.busHaltName,"busHaltLatitude":self.state.busHaltLatitude,"busHaltLongitude":self.state.busHaltLongitude})
//    await this.state.bus_stop_list.push(this.state.bus_stop_row)
}
    addRoutes(){
       
console.log(this.state.bus_stop_row)
            axios.post('/bus-route/add-route', {
                RouteID: this.state.RouteID,
                rorigin: this.state.rorigin,
                rdestination:this.state.rdestination,
                olatitude: this.state.olatitude,
                olongitude: this.state.olongitude,
                deslatitude: this.state.deslatitude,
                deslongitude: this.state.deslongitude

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
            RouteID: this.state.RouteID,
            rorigin: this.state.rorigin,
            rdestination:this.state.rdestination,
            olatitude: this.state.olatitude,
            olongitude: this.state.olongitude,
            deslatitude: this.state.deslatitude,
            deslongitude: this.state.deslongitude

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
            RouteID: this.state.RouteID,


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

    handleattributes({ target }) {
        this.setState({
          [target.name]: target.value
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
                            <Card>
                                <CardHeader>
                                    Mange Bus Routes
                                </CardHeader>
                                <CardBody>
                                <CardGroup>
                               
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
                                                                onChange={this.handleattributes}
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
                                                                name="rorigin"
                                                                id="rorigin"
                                                                value={this.state.rorigin}
                                                                onChange={this.handleattributes}
                                                            >
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                    <div className="row">
                                                        <div className="col-md-5">
                                                            <FormGroup>
                                                                <Label for="exampleSelect">
                                                                    Destination:
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    name="rdestination"
                                                                    id="rdestination"
                                                                    value={this.state.rdestination}
                                                                    onChange={this.handleattributes}
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
                                                                    onChange={this.handleattributes}
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
                                                                    onChange={this.handleattributes}
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
                                                                    onChange={this.handleattributes}
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
                                                                    onChange={this.handleattributes}
                                                                >
                                                                </Input>
                                                            </FormGroup>
                                                        </div>
                                                    </div>
                                                <ButtonGroup className="pull-right">
                                                    {/* <Button
                                                        outline
                                                        color="primary"
                                                        size="lg"
                                                        onClick={this.addRoutes}
                                                    >
                                                        Add Route
                                                    </Button> */}
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
                             
                                <br />
                                {/* second card */}
                              
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
                                                                onChange={this.handleattributes}
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
                                                                onChange={this.handleattributes}
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
                                                                onChange={this.handleattributes}
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
                                                                onChange={this.handleattributes}
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
                                                                onChange={this.handleattributes}
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
                                                                onChange={this.handleattributes}
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
                                                                onChange={this.handleattributes}
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
                                                        Add Bus Stop
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
                            

                        
                                
                            </CardGroup>
                            <ButtonGroup className="pull-right">
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        size="lg"
                                                        onClick={this.updateRoutes}
                                                    >
                                                        Add Route
                                                    </Button>
                                                
                                                </ButtonGroup>
                                </CardBody>
                            </Card>
                        </Col>
                        
                  
                    </Row>
                    <Row>
                        <Col md={12} xs={12}>
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
                                                        <div className="col-md-9">
                                                            <FormGroup>
                                                                <Label for="exampleSelect">
                                                                    RouteID
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    name="RouteID"
                                                                    id="rno"
                                                                    value={this.state.RouteID}
                                                                    onChange={this.handleattributes}
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
                        </Col>
                        </Row>

                </div>
            </div>
        );
    }
}

export default Route;
