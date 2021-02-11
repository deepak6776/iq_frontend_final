import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Bet extends Component {
  state = {
    email: "",
    password: "",
    account: "",
    balance: "",
  };

  render() {
    return (
      <>
        <div>
          <Form>
            <Form.Row className ="justify-content-center">
              <Form.Group controlId="formGridBet">
                <Form.Label>BetName</Form.Label>
                <Form.Control type="text" placeholder="Enter Bet Name" />
              </Form.Group>
            </Form.Row>

            <Form.Row className ="justify-content-center">
              <Form.Group controlId="formGridInstrumentId">
                <Form.Label>InstrumentId</Form.Label>
                <Form.Control type="text" placeholder="Enter Instrument Id" />
              </Form.Group>
            </Form.Row>

            <Form.Row className ="justify-content-center">
              <Form.Group controlId="formGridInstrumentType">
                <Form.Label>InstrumentType</Form.Label>
                <Form.Control type="text" placeholder="Enter Instrument Type" />
              </Form.Group>
            </Form.Row>

            <Form.Row className ="justify-content-center">
              <Form.Group controlId="formGridSide">
                {/* <Form.Label>Side</Form.Label> */}
                <Form.Label>Buy or Sell</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                  <option>BUY</option>
                  <option>SELL</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row className ="justify-content-center">
              <Form.Group controlId="formGridLeverage">
                <Form.Label>Leverage</Form.Label>
                <Form.Control type="text" placeholder="Enter Leverage" />
              </Form.Group>
            </Form.Row>

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
            <Container >
              <Row>
                <Col >
                  <Link to="/dashboard" >Dashboard</Link>{'     '}

                  <Link to="/scheduler" >Scheduler</Link>
                </Col>
              </Row>
            </Container>
          </Form>

        </div>

      </>
    );
  }
}

