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
          
            busID:null,
             make:null,
            type:null,
            route:null,
            OwnerName:null,
            message:""

        };

        this.handleattributes = this.handleattributes.bind(this);
        this.handleChange = this.handleChange.bind(this);
     
        this.searchFeeAlgo = this.searchFeeAlgo.bind(this);
        this.UpdateFeeAlgo = this.UpdateFeeAlgo.bind(this);
        this.clear=this.clear.bind(this);


    }



clear(){
    this.setState({
        busID:"",
        make:"",
       type:"",
       route:"",
       OwnerName:"",
       message:""

    })
    console.log("clear")
    
}
    searchFeeAlgo() {
        var self = this;

        try {
            fetch("/fee-algo/get-all-fee-algo")
                .then(res => res.json())
                .then(data => {

                    self.setState({ initialValue1: data[0].initialprice })
                    self.setState({ priceFactor1: data[0].priceFactor })
                    self.setState({ classFactor1: data[0].classFactor })
                    self.setState({ busClass1: data[0].busClass })
                    self.setState({ id1: data[0].id })

                    self.setState({ initialValue2: data[1].initialprice })
                    self.setState({ priceFactor2: data[1].priceFactor })
                    self.setState({ classFactor2: data[1].classFactor })
                    self.setState({ busClass2: data[1].busClass })
                    self.setState({ id2: data[1].id })

                    self.setState({ initialValue3: data[2].initialprice })
                    self.setState({ priceFactor3: data[2].priceFactor })
                    self.setState({ classFactor3: data[2].classFactor })
                    self.setState({ busClass3: data[2].busClass })
                    self.setState({ id2: data[2].id })

                });
        } catch (error) {
            console.log(error)
        }

    }

    // update fee algo
    UpdateFeeAlgo() {
        var self = this;
        axios.post('/fee-algo/update-fee-algo', {
            initialprice1: self.state.initialValue1,
            priceFactor1: self.state.priceFactor1,
            classFactor1: self.state.classFactor1,
            busClass1: self.state.busClass1,
            id1: self.state.id1,

            initialprice2: self.state.initialValue2,
            priceFactor2: self.state.priceFactor2,
            classFactor2: self.state.classFactor2,
            busClass2: self.state.busClass2,
            id2: self.state.id2,

            initialprice3: self.state.initialValue3,
            priceFactor3: self.state.priceFactor3,
            classFactor3: self.state.classFactor3,
            busClass3: self.state.busClass3,
            id3: self.state.id3,
        })
            .then(function (res) {
                // if (res.data.postcheck_pass == "true") {
                //   self.setState({ postcheck_pass: res.data.postcheck_pass }
                // else {

                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            })




    }

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
   
    handleattributes({target}){
        console.log(target.value);
        this.setState({
            [target.name]:target.value
            
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
                                                    <div className="col-md-5"  align="center">
                                                        <FormGroup align="center">
                                                            <Label for="exampleSelect">
                                                                Route Number:
                                                            </Label>
                                                            <Input
                                                            align="center"
                                                                type="select"
                                                                name="route"
                                                                id="route"
                                                                value={this.state.route}
                                                                onChange={this.handleattributes}
                                                            >
                                                                <option>Select Type...</option>
                                                                <option value='foreign'>Foreign</option>
                                                                <option value='local'>Local</option>
                                                            </Input>
                                                        </FormGroup>
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
                                        onClick={this.searchFeeAlgo}
                                    >
                                        save
                      </Button>
                                    <Button
                                        outline
                                        color="warning"
                                        size="lg"
                                        onClick={this.UpdateFeeAlgo}
                                    >
                                        Delete
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
