import React, { Component, useRef, useState } from "react";
import { Form, Row, Col, Button, Card, CardGroup, Alert, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default class Login extends Component {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const[error, setError] = useState("")
  // const[loading, setLoading] = useState(false)

  state = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if(!this.state.name){
      nameError = 'need a name';
    }

    if(!this.state.email.includes('@')){
      emailError = 'invalid email!';
    } 

    if(this.state.password<5){
      console.log("password condition triggered!");
      passwordError = 'password should be longer than 5 characters!';
    }

    if(emailError || nameError || passwordError){
      this.setState({ nameError: nameError, emailError: emailError, passwordError: passwordError});
      return false;
    }

    return true;

  }

  handleSumbit = e => {
    console.log('In handle submit of login form!');
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      localStorage.setItem('name', this.state.name);
      localStorage.setItem('email', this.state.email);
      localStorage.setItem('password', this.state.password);
      let tmp_name = localStorage.getItem('name');
      let tmp_email = localStorage.getItem('email');
      let tmp_pass = localStorage.getItem("password");
      console.log(tmp_name)
      console.log(tmp_email)
      console.log(tmp_pass)
      
      // setTimeout(10000, () => console.log('Timeout cleared!'));
      this.setState({
        name: "",
        email: "",
        password: "",
        nameError: "",
        emailError: "",
        passwordError: ""
      });
      this.props.history.push('/');
    }

  }



  render() {
    return (
      <>
        <Container >
          <Row className="justify-content-center">
            <Col xs="6">
              <CardGroup>
                <Card border="primary" style={{ width: '18rem' }}>
                  <Card.Header>Log In!</Card.Header>
                  <Card.Body>
                    <Form >
                      <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" required
                          value={this.state.name}
                          onChange={e => this.setState({ name: e.target.value })} />
                        {this.state.nameError ? <div style={{ color: 'red' }}>{this.state.nameError}</div> : null}
                      </Form.Group>
                      <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required
                          value={this.state.email}
                          onChange={e => this.setState({ email: e.target.value })} />
                        {this.state.emailError ? <div style={{ color: 'red' }}>{this.state.emailError}</div> : null}
                      </Form.Group>
                      <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required
                          value={this.state.password}
                          onChange={e => this.setState({ password: e.target.value })} />
                        {this.state.passwordError ? <div style={{ color: 'red' }}>{this.state.passwordError}</div> : null}
                      </Form.Group>
                      <Button onClick={(e) => this.handleSumbit(e)} type="submit">
                        Log In
                    </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </CardGroup>
              {/* <Card className="w-50">
                
                <Card.Body>
                  <h2 className="text-center mb-4">Log In</h2>
                  {/* {error && <Alert variant="danger">{error}</Alert>} */}
              {/* <Form >
                    <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" required
                        value={this.state.email}
                        onChange={e => this.change(e)} />
                    </Form.Group>
                    <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" required
                        value={this.state.password}
                        onChange={e => this.change(e)} />
                    </Form.Group>
                    <Button onClick={(e) => this.handleSumbit()} className="w-50" type="submit">
                      Log In
                    </Button>
                  </Form> */}
              {/* </Card.Body> */}
              {/* </Card> */}
            </Col>
          </Row>
        </Container>
      </>
    );


  }

}