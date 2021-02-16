import React, { Component } from "react";
import { Form, Card, CardGroup, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Bet extends Component {

  state = {
    name: "",
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
    // console.log(e.target.betName)
    console.log(this.state.name)
    console.log(this.state.betName)
    console.log(this.state.instrumentId)
    console.log(this.state.instrumentType)
    console.log(this.state.side)
    console.log(this.state.leverage)
    console.log("In bet submit")
    const url = 'http://34.93.12.130/placebet';
    // const url = 'http://127.0.0.1:5000/placebet';
    const data = {
      name: this.state.name,
      betName: this.state.betName,
      instrumentId: this.state.instrumentId,
      instrumentType: this.state.instrumentType,
      side: this.state.side,
      leverage: this.state.leverage
    }
    const headers = {
      'Access-Control-Allow-Origin': '*'
    };
    axios.post(url, data, { headers })
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

  componentDidMount() {
    console.log("Component mounted");
    const tmp = localStorage.getItem('name');
    this.setState({ name: tmp })
  }

  render() {
    const isLoggedIn = this.state.name;
    return (
      <>{isLoggedIn
        ? <Form>
          <Form.Row className="justify-content-center">
            <Form.Group controlId="betName">
              <Form.Label>Bet Name</Form.Label>
              <Form.Control placeholder="Enter Bet Name"
                value={this.state.betName}
                onChange={e => this.setState({ betName: e.target.value })}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-center">
            <Form.Group as={Col} xs="3" controlId="instrumentType">
              <Form.Label>Instrument Type</Form.Label>
              <Form.Control as="select" defaultValue="Choose..."
                value={this.state.instrumentType}
                onChange={e => this.setState({ instrumentType: e.target.value })}
              >
                <option>Choose...</option>
                <option>...</option>
                <option>BINARY</option>
                <option>DIGITAL</option>
                <option>FOREX</option>
                <option>CRYPTO</option>
                <option>STOCKS</option>
                <option>COMMODITIES</option>
                <option>ETFs</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} xs="3" controlId="instrumentId">
              <Form.Label>Instrument Id</Form.Label>
              <Form.Control placeholder="Enter Instrument Id"
                value={this.state.instrumentId}
                onChange={e => this.setState({ instrumentId: e.target.value })}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-center">
            <Form.Group as={Col} xs="3" controlId="side">
              <Form.Label>Choose Side</Form.Label>
              <Form.Control as="select" defaultValue="Choose..."
                value={this.state.side}
                onChange={e => this.setState({ side: e.target.value })}
              >
                <option>Choose...</option>
                <option>...</option>
                <option>BUY</option>
                <option>SELL</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} xs="3" controlId="leverage">
              <Form.Label>Choose Leverage</Form.Label>
              <Form.Control placeholder="Enter Leverage"
                value={this.state.leverage}
                onChange={e => this.setState({ leverage: e.target.value })}
              />
            </Form.Group>
          </Form.Row>
          <Container >
            <Row>
              <Col >
                <Button variant="outline-warning" onClick={() => this.dashboardClick()} >Dashboard</Button>{' '}
                <Button variant="outline-info" onClick={e => this.betSubmit(e)} >Submit</Button>{' '}
                <Button variant="outline-success" onClick={() => this.schedulerClick()} >Scheduler</Button>
              </Col>
            </Row>
          </Container>
        </Form>
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
    );
  }
}

{/* <div>
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
    <Container >
      <Row>
        <Col >
          <Button variant="outline-warning" onClick={() => this.dashboardClick()} >Dashboard</Button>{' '}
          <Button variant="outline-info" onClick={e => this.betSubmit(e)} >Submit</Button>{' '}
          <Button variant="outline-success" onClick={() => this.schedulerClick()} >Scheduler</Button>
        </Col>
      </Row>
    </Container>
  </form>
</div> */}