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

class Recharge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pid:"",
            amountAvailable:"",
            name:"",
            paytype:"",
            payamount:""


        };

        this.handleattributes = this.handleattributes.bind(this);
        this.handleChange = this.handleChange.bind(this);


        this.AddRecharge = this.AddRecharge.bind(this);
        this.clear = this.clear.bind(this);
        this.accountbalancepid=this.accountbalancepid.bind(this);
        this.AddRecharge=this.AddRecharge.bind(this)


    }



    clear() {
        this.setState({
           paytype:"",
           payamount:"",


        })
        console.log("clear")

    }


    // add bus
    AddRecharge() {
        var self = this;
       console.log(this.state.pid)


    
            axios.post('/Recharge/addrecharge', {
                


                pid: this.state.pid,
                amountAvailable:this.state.amountAvailable,
                name:this.state.name,
                payamount:this.state.payamount,
                paytype:this.state.paytype
              


            })
                .then(function (response) {
                    console.log(response);
                    alert(response.data);
                  
                }).then(()=>{
                    this.accountbalancepid()
                    this.clear()
                })
                .catch(function (error) {
                    console.log(error);
                });
        }




  async  componentDidMount() {
    

   await     this.setState({
           // pid:sessionStorage.getItem("pid")
           pid:'961623200V'  })
    
     await this.accountbalancepid()
       
console.log(this.state.pid)
    }
    accountbalancepid() {
        var self = this;
        console.log(this.state.pid)
      
           // console.log(self.state.pid)
          let url = "passenger/getSpecPassenger?pid=" + this.state.pid;
          console.log(url)
          fetch(url)
            .then(res => res.json())
            .then(data => {
              console.log(data)
            console.log(data.amountAvailable)
              self.setState({ amountAvailable: data.amountAvailable })
              self.setState({ name: data.name })
              
              console.log(this.state.amountAvailable);
              console.log(this.state.name);
              console.log(this.state.pid);

    
            }).catch((err)=>{
                console.log(err)
            })
        
       
    
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
                                    Account Deials and Recharge {" "}
                                </h5>

                            </CardHeader>
                            <CardBody>
                                <CardGroup>
                                    <Card body className="text-center" style={{ borderColor: '#333' }}>
                                        <div className="card-content">
                                            <CardHeader>
                                                <h5 className="title">
                                                    {" "}
                                                    Recharge Details{" "}
                                                </h5>
                                            </CardHeader>
                                            <CardBody>
                                                <form>
                                                    <div>
                                                        <div className="col-md-5,col-md-5">

                                                            <FormInputs

                                                                ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3","col-md-5 px-5 py-3","col-md-5 px-5 py-3"]}

                                                                proprieties={[
                                                                    {
                                                                        label: "account id number",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "",
                                                                            name: "pid",
                                                                            value: this.state.pid,
                                                                            onChange: this.handleattributes,
                                                                            disabled:true
                                                                        }
                                                                    },   {
                                                                        label: "account name",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "",
                                                                            name: "name",
                                                                            value: this.state.name,
                                                                            onChange: this.handleattributes,
                                                                            disabled:true
                                                                        }
                                                                    },

                                                                    {
                                                                        label: "account balance is",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "",
                                                                            name: "amountAvailable",
                                                                            value: this.state.amountAvailable,
                                                                            onChange: this.handleattributes,
                                                                            disabled:true
                                                                        }
                                                                    },
                                                                 
                                                                    {
                                                                        label: "pay amount",
                                                                        inputProps: {
                                                                            type: "number",
                                                                            placeholder: "enter paymount amount",
                                                                            name: "payamount",
                                                                            value: this.state.payamount,
                                                                            onChange: this.handleattributes,
                                                                           
                                                                        }
                                                                    },

                                                                ]} />
                                                                 <FormGroup>
                        <Label for="exampleSelect">Select payment type</Label>
                        <Input
                          type="select"
                          name="paytype"
                          id="paytype"
                        //   onChange={this.onSelectChange.bind(this)}
                        onChange={this.handleattributes}
                          value={this.state.paytype}
                        >
                          <option value="">Select paytype</option>
                          <option value="Cash">Cash</option>
                          <option value="Credit_card">Credit card</option>
                        </Input>
                        <br />
                        
                      </FormGroup>

                                                        
                                                            
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
                                        onClick={this.AddRecharge}
                                    >
                                        Recharge Your Account
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

export default Recharge;