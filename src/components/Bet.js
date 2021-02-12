import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Bet extends Component {

  state = {
    betName: "",
    instrumentId: "",
    instrumentType: "",
    side: "",
    leverage: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  betSubmit = e => {
    e.preventDefault();
    // e.preventDefault();
    // console.log(e)
    console.log(e.target.betName)
    console.log(this.state.betName)
    console.log("In bet submit")
    const url = 'http://13.232.113.198/placebet';
    const data = { 
      betName: this.state.betName,
      instrumentId: this.state.instrumentId,
      instrumentType: this.state.instrumentType,
      side:this.state.side,
      leverage: this.state.leverage
    }
    axios.post(url, data)
    .then(response => console.log(response.data))
    
    this.setState({
      betName: "",
      instrumentId: "",
      instrumentType: "",
      side: "",
      leverage: ""
    });
  };

  dashboardClick() {
    // let history = useHistory();
    console.log("Moving to dashboard");
    // history.push('/dashboard')
    this.props.history.push('/dashboard');

  };

  schedulerClick() {
    // let history = useHistory();
    console.log("Moving to scheduler");
    // history.push('/dashboard')
    this.props.history.push('/scheduler');

  };

  render() {
    return (
      <>
        <div>
          <form>
            <input
              name="betName"
              type="text"
              placeholder="Bet name"
              value={this.state.betName}
              onChange={e => this.change(e)} />
            <br />
            <br />
            <input
              name="instrumentId"
              type="text"
              placeholder="Instrument Id"
              value={this.state.instrumentId}
              onChange={e => this.change(e)} />
            <br />
            <br />
            <input
              name="instrumentType"
              type="text"
              placeholder="Instrument Type"
              value={this.state.instrumentType}
              onChange={e => this.change(e)} />
            <br />
            <br />
            <input
              name="side"
              type="text"
              placeholder="Side"
              value={this.state.side}
              onChange={e => this.change(e)} />
            <br />
            <br />
            <input
              name="leverage"
              type="text"
              placeholder="Leverage"
              value={this.state.leverage}
              onChange={e => this.change(e)} />
            <br />
            <br />


            {/* <Container> */}
            {/* <Form>
            <Form.Row className="justify-content-center">
              <Form.Group controlId="formGridBet">
                <Form.Label>BetName</Form.Label>
                <Form.Control type="text" placeholder="Enter Bet Name" />
              </Form.Group>
            </Form.Row>

            <Form.Row className="justify-content-center">
              <Form.Group controlId="formGridInstrumentId">
                <Form.Label>InstrumentId</Form.Label>
                <Form.Control type="text" placeholder="Enter Instrument Id" />
              </Form.Group>
            </Form.Row>

            <Form.Row className="justify-content-center">
              <Form.Group controlId="formGridInstrumentType">
                <Form.Label>InstrumentType</Form.Label>
                <Form.Control type="text" placeholder="Enter Instrument Type" />
              </Form.Group>
            </Form.Row>

            <Form.Row className="justify-content-center">
              <Form.Group controlId="formGridSide">
                {/* <Form.Label>Side</Form.Label> */}
            {/* <Form.Label>Buy or Sell</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                  <option>BUY</option>
                  <option>SELL</option>
                </Form.Control>
              </Form.Group>
            </Form.Row> */}

            {/* <Form.Row className="justify-content-center">
              <Form.Group controlId="formGridLeverage">
                <Form.Label>Leverage</Form.Label>
                <Form.Control type="text" placeholder="Enter Leverage" />
              </Form.Group>
            </Form.Row> */}
            {/* </Form> */}
            {/* </Container> */}

            {/* <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group> */}

            {/* <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group> */}

            {/* <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row> */}

            {/* <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

            {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
            <br />
            <Container >
              <Row>
                <Col >
                  <Button variant="outline-warning" onClick={() => this.dashboardClick()} >Dashboard</Button>{' '}
                  {/* <Link to="/dashboard" >Dashboard</Link>{'     '} */}
                  {/* </Col> */}
                  {/* <Col > */}
                  <Button variant="outline-info" onClick={e => this.betSubmit(e)} >Submit</Button>{' '}
                  <Button variant="outline-success" onClick={() => this.schedulerClick()} >Scheduler</Button>
                  {/* <Link to="/scheduler" >Scheduler</Link> */}
                  {/* onClick={e => this.betSubmit(e)}  */}
                </Col>
              </Row>
            </Container>
          </form>

        </div>

      </>
    );
  }
}

