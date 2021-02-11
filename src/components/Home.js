import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class Home extends React.Component {

    state = {
        email: "",
        password: "",
        account: "PRACTICE",
        balance: ""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    getBalance = e => {
        e.preventDefault();
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

        this.setState({
            email: "",
            password: "",
            account: "PRACTICE",
            balance: ""
        });
    };

    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        // const response = await fetch('http://127.0.0.1:5000/checkbalance', requestOptions)
        // const data = await 

        fetch('http://192.168.0.104:5000/checkbalance', requestOptions)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                console.log(data)
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });

    }



    render() {
        return (
            <>
                <div>
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

                        <Container >
                            <Row>
                                <Col >
                                    <Button variant="outline-success" onClick={e => this.getBalance(e)}>Get Balance</Button>{'     '}

                                    <Link to="/dashboard" >Next</Link>
                                </Col>
                            </Row>
                        </Container>
                        {/* <Button variant="primary">Primary</Button>{' '}
                        <Button variant="secondary">Secondary</Button> */}

                    </form>

                </div>

            </>
        );
    }
}