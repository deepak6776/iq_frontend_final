import React, { Component } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';

export default class Panel extends Component {
  state = {
    email: "",
    password: "",
    account: "",
    balance: "",
  };

  render() {
    return (
      <Form>
        <Form.Row className="justify-content-center">
          <Form.Group as={Col} xs="3" controlId="formGridScheduler">
            <Form.Label>PabelSchedule</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                  <option>Schedule 123</option>
                  <option>Schedule 324</option>
                </Form.Control>
          </Form.Group>

          <Form.Group as={Col} xs="3" controlId="formGridBet">
            <Form.Label>PanelBet</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                  <option>Bet 123</option>
                  <option>Bet 322</option>
                </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row className="justify-content-center">
          <Form.Group as={Col} xs="3" controlId="formGridAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control placeholder="Enter Amount" />
          </Form.Group>
        </Form.Row>

        <Button variant="outline-warning" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}