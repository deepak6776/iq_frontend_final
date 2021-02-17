import React, { Component } from 'react'
import { Container, Row, Col, Button, Table, Card, CardGroup } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password'),
            account: "PRACTICE",
            balance: ""
        }
    }




    // change = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // };

    // getBalance = e => {
    // e.preventDefault();
    // this.props.onSubmit(this.state);
    // console.log('getBalance function triggered!');
    // console.log(this.state)
    // const requestOptions ={
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(this.state)
    // };
    // const response = await fetch('http://127.0.0.1:5000/checkbalance', requestOptions)
    // const data = await 

    // fetch('http://127.0.0.1:5000/checkbalance', requestOptions)
    // .then(async response => {
    //     const data = await response.json();

    //     // check for error response
    //     if (!response.ok) {
    //         // get error message from body or default to response status
    //         const error = (data && data.message) || response.status;
    //         return Promise.reject(error);
    //     }

    //     console.log(data)
    // })
    // .catch(error => {
    //     this.setState({ errorMessage: error.toString() });
    //     console.error('There was an error!', error);
    // });

    //     this.setState({
    //         email: "",
    //         password: "",
    //         account: "PRACTICE",
    //         balance: ""
    //     });
    // };

    async componentDidMount() {
        // 34.93.12.130 gcp
        // 34.232.113.198 aws
        // const url = 'http://34.93.12.130/checkbalance';
        if (localStorage.getItem('name')) {
            console.log("Component mount home page");
            const url = 'http://34.93.12.130/checkbalance';
            // const url = 'http://127.0.0.1:5000/checkbalance';
            // let tmp_name = localStorage.getItem('name');
            // let tmp_email = localStorage.getItem('email');
            // let tmp_password = localStorage.getItem('password');
            // console.log(tmp_name);
            // console.log(tmp_email);
            // console.log(tmp_password);
            // console.log(this.state.name);
            // this.setState({
            //     name: tmp_name,
            //     email: tmp_email,
            //     password :tmp_password
            // });
            console.log(this.state.name);
            console.log(this.state.email);
            console.log(this.state.password);
            const data = {
                email: this.state.email,
                password: this.state.password,
                balance: this.state.balance
            }
            let response = await axios.post(url, data)
            console.log(response.data)
            const tmp = response.data
            console.log(tmp)
            this.setState({ balance: tmp })

        }


    }


    dashboardClick() {
        // let history = useHistory();
        console.log("Moving to Dashboard");
        // history.push('/dashboard')
        this.props.history.push('/dashboard');

    }



    render() {
        return (
            <>
                {/* <div>
                    <form className="form">
                        <input
                            name="email"
                            placeholder="demo@abc.com"
                            value={this.state.email}
                            onChange={e => this.change(e)}
                        />
                        <br />
                        <input
                            name="password"
                            placeholder="demotrader@123"
                            value={this.state.password}
                            onChange={e => this.change(e)}
                        />
                        <br />
                        <input
                            name="account"
                            placeholder="Practice"
                            value={this.state.account}
                            onChange={e => this.change(e)}
                        />
                        <br />
                        <input
                            name="balance"
                            placeholder="$ -----"
                            value={this.state.balance}
                            onChange={e => this.change(e)}
                        />
                        <br />
                        <br />
                        {/* <Button variant="primary">Primary</Button>{' '}
                        <Button variant="secondary">Secondary</Button> */}
                {/* </form> */}
                {/* </div> } */}
                {/* <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Account</th>
                            <th>Balance</th>
                            <th>Side</th>
                            <th>Leverage</th>
                            <th>Modify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                </Table> */}
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="6">
                            <CardGroup>
                                <Card border="primary" style={{ width: '18rem' }}>
                                    <Card.Header>{localStorage.getItem('name') ? localStorage.getItem('name') : "None"}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Account: Practice</Card.Title>
                                        <Card.Title>Balance: $ {this.state.balance ? this.state.balance : "0"} </Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
                <Container >
                    <Row>
                        <Col >
                            {/* <Button variant="outline-success" onClick={e => this.getBalance(e)}>Get Balance</Button>{'     '} */}
                            <Button variant="outline-success" onClick={() => this.dashboardClick()}>Dashboard</Button>
                            {/* <Link to="/dashboard" >Dashboard</Link> */}
                        </Col>
                    </Row>
                </Container>
                {/* <Card style={{ width: '18rem' }} className="text-center">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card> */}
            </>
        );
    }
}
