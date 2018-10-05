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
            pid:"",
            amount_available:null


        };

        this.handleattributes = this.handleattributes.bind(this);
        this.handleChange = this.handleChange.bind(this);


        this.addbussave = this.GetLoan.bind(this);
        this.clear = this.clear.bind(this);
        this.accountbalancepid=this.accountbalancepid.bind(this);
        this.GetLoan=this.GetLoan.bind(this)


    }



    clear() {
        this.setState({
           pid:"",

        })
        console.log("clear")

    }


    // add bus
    GetLoan() {
        var self = this;
       


    
            axios.post('/Busloan/applyloan', {


                pid: this.state.pid,
                amount_available:this.state.amount_available
              


            })
                .then(function (response) {
                    console.log(response);
                    alert(response.data);
                  
                }).then(()=>{
                    this.accountbalancepid()
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
              self.setState({ amount_available: data.amountAvailable })
              console.log(this.state.amount_available);
    
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
                                    Account Deials and getLoan {" "}
                                </h5>

                            </CardHeader>
                            <CardBody>
                                <CardGroup>
                                    <Card body className="text-center" style={{ borderColor: '#333' }}>
                                        <div className="card-content">
                                            <CardHeader>
                                                <h5 className="title">
                                                    {" "}
                                                    Account Details{" "}
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
                                                                        label: "account id number",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "",
                                                                            name: "pid",
                                                                            value: this.state.pid,
                                                                            onChange: this.handleattributes,
                                                                            disabled:true
                                                                        }
                                                                    },
                                                                    {
                                                                        label: "account balance is",
                                                                        inputProps: {
                                                                            type: "text",
                                                                            placeholder: "",
                                                                            name: "amount_available",
                                                                            value: this.state.amount_available,
                                                                            onChange: this.handleattributes,
                                                                            disabled:true
                                                                        }
                                                                    }

                                                                ]} />

                                                        
                                                            
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
                                        onClick={this.GetLoan}
                                    >
                                        Get a Loan
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