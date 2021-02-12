import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

export default class Panel extends Component {
  state = {
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

    console.log("In scheduler submit")
    const url = 'http://13.232.113.198/placepanel';
    const data = {
      schedulename: this.state.formGridScheduler,
      betname: this.state.formGridBet,
      amount: this.state.formGridAmount
    }
    axios.post(url, data)
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

  render() {
    return (
      <>
        <form>
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
            placeholder="Enter Bed Name"
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