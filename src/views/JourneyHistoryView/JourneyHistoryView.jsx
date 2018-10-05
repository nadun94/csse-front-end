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

class JourneyHistoryView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            journeyId: '',
            busid: null,
            datejourney: null,
            routid: null,
           
           
        };
        this.searchjourney = this.searchjourney.bind(this);
        this.onKeydrop = this.onKeydrop.bind(this);
        this.clearFields = this.clearFields.bind(this);

    }

    componentDidMount() {
        
    }
   
  searchjourney() {
      console.log(this.state.journeyId)
       axios.get('/journeyview/getjourney?journeyId='+this.state.journeyId).then(response=>this.setState({busid:response.data.busID,datejourney:response.data.date_journey,
       routid:response.data.routeID}));
       
    }


    clearFields() {
        this.setState({
            journeyId: '',
            busid: '',
            datejourney: '',
            routid: '',
           
            
        });
    }


    onKeydrop(e) {
        console.log(e.target.value)
        console.log(e.target.name)
        this.setState({
            [e.target.name]: [e.target.value]
        });
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
                                           View Journey History
                                               </h5>
                                            </h5>
                                        </CardHeader>
                                        <CardBody>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                               journeyId
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="journeyId"
                                                                id="journeyId"
                                                                value={this.state.journeyId}
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
                                                                busid
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="busid"
                                                                id="busid"
                                                                value={this.state.busid}
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
                                                                date_journey
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="datejourney"
                                                                id="date_journey"
                                                                value={this.state.datejourney}
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
                                                                routeID
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="routeID"
                                                                id="routeID"
                                                                value={this.state.routid}
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
                                                        onClick={this.searchjourney}
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

export default JourneyHistoryView;
