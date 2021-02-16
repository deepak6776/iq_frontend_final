import React, { Component } from "react";
import { Container, Form, Row, Col, Button, Card, CardGroup } from 'react-bootstrap';
import axios from 'axios';

export default class Panel extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    formGridScheduler: "",
    formGridBet: "",
    formGridAmount: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  panelSubmit = e => {
    e.preventDefault();
    // e.preventDefault();
    console.log(e)
    // console.log(e.target.betName)
    console.log(this.state.formGridScheduler)
    console.log(this.state.formGridBet)
    console.log(this.state.formGridAmount)

    console.log("In Panel submit")
    // const url = 'http://34.93.12.130/placepanel';
    const url = 'http://127.0.0.1:5000/placepanel';
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      scheduleName: this.state.formGridScheduler,
      betName: this.state.formGridBet,
      amount: this.state.formGridAmount
    }
    console.log(data);
    axios.post(url, data,)
      .then(response => console.log(response.data))
    this.setState({
      formGridScheduler: "",
      formGridBet: "",
      formGridAmount: ""
    });
  };


  dashboardClick() {
    // let history = useHistory();
    console.log("Moving to dashboard");
    // history.push('/dashboard')
    this.props.history.push('/dashboard');

  }

  componentDidMount() {
    console.log("Component mounted");
    const tmp_name = localStorage.getItem('name'); 
    const tmp_email = localStorage.getItem('email');
    const tmp_password = localStorage.getItem('password');
    console.log(tmp_name);
    console.log(tmp_email);
    console.log(tmp_password);
    this.setState({ name: tmp_name, email: tmp_email, password: tmp_password });
    console.log(this.state.email);
    console.log(this.state.password);
  }

  render() {
    const isLoggedIn = this.state.name;
    return (

      <>
        {isLoggedIn
          ? <form>
            <input
              name="formGridScheduler"
              type="text"
              placeholder="Enter Scheduler Name"
              value={this.state.formGridScheduler}
              onChange={e => this.change(e)} />
            <br />
            <br />
            <input
              name="formGridBet"
              type="text"
              placeholder="Enter Bet Name"
              value={this.state.formGridBet}
              onChange={e => this.change(e)} />
            <br />
            <br />
            <input
              name="formGridAmount"
              type="text"
              placeholder="Enter Amount"
              value={this.state.formGridAmount}
              onChange={e => this.change(e)} />
            <br />
            <br />
            <Container >
              <Row>
                <Col >
                  {/* <Link to="/dashboard" >Dashboard</Link>{'     '} */}
                  {/* </Col> */}
                  {/* <Col > */}
                  <Button variant="outline-info" onClick={e => this.panelSubmit(e)} >Submit</Button>{' '}
                  <Button variant="outline-success" onClick={() => this.dashboardClick()} >Dashboard</Button>
                  {/* <Link to="/scheduler" >Scheduler</Link> */}
                  {/* onClick={e => this.betSubmit(e)}  */}
                </Col>
              </Row>
            </Container>
          </form>
          : <Container>
            <Row className="justify-content-center">
              <Col xs="6">
                <CardGroup>
                  <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header>{localStorage.getItem('name') ? "User: {localStorage.getItem('name')}" : "User: None"}</Card.Header>
                    <Card.Body>
                      <Card.Text>Please Login!</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        }

      </>
      // <Form>
      //   <Form.Row className="justify-content-center">
      //     <Form.Group as={Col} xs="3" controlId="formGridScheduler">
      //       <Form.Label>PanelSchedule</Form.Label>
      //       <Form.Control as="select" defaultValue="Choose..."
      //         value={this.state.formGridScheduler}
      //         onChange={e => this.setState({ formGridScheduler: e.target.value })}
      //       >

      //         <option>Choose...</option>
      //         <option>...</option>
      //         <option>Schedule 123</option>
      //         <option>Schedule 324</option>
      //       </Form.Control>
      //     </Form.Group>

      //     <Form.Group as={Col} xs="3" controlId="formGridBet">
      //       <Form.Label>PanelBet</Form.Label>
      //       <Form.Control as="select" defaultValue="Choose..."
      //         value={this.state.formGridBet}
      //         onChange={e => this.setState({ formGridBet: e.target.value })}
      //       >
      //         <option>Choose...</option>
      //         <option>...</option>
      //         <option>Bet 123</option>
      //         <option>Bet 322</option>
      //       </Form.Control>
      //     </Form.Group>
      //   </Form.Row>

      //   <Form.Row className="justify-content-center">
      //     <Form.Group as={Col} xs="3" controlId="formGridAmount"          >
      //       <Form.Label>Amount</Form.Label>
      //       <Form.Control placeholder="Enter Amount"
      //         value={this.state.formGridAmount}
      //         onChange={e => this.setState({ formGridAmount: e.target.value })} />
      //     </Form.Group>
      //   </Form.Row>
      //   <Button variant="outline-info" onClick={e => this.panelSubmit(e)} >Submit</Button>{' '}
      //   <Button variant="outline-success" onClick={() => this.dashboardClick()}>
      //     Dashboard
      //   </Button>
      // </Form>
    );
  }
}