import React, { Component } from 'react'
import { Container, Row, Col, Button, Table, Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    state = {
        name: ""
    }

    homeClick() {
        // let history = useHistory();
        console.log("Moving to home");
        // history.push('/dashboard')
        this.props.history.push('/');

    }

    betClick() {
        // let history = useHistory();
        console.log("Moving to bet");
        // history.push('/dashboard')
        this.props.history.push('/bet');

    }

    componentDidMount() {
        console.log("Component mounted");
        const tmp = localStorage.getItem('name');
        this.setState({ name: tmp })
    }

    render() {
        const isLoggedIn = this.state.name;
        return (
            <>{isLoggedIn
                ? <div>
                    {/* <h1>Dashboard</h1> */}
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Bet Name</th>
                                <th>Instrument Id</th>
                                <th>Instrument Type</th>
                                <th>Side</th>
                                <th>Leverage</th>
                                <th>Modify</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th>Bet 123</th>
                                <th>USDJPY</th>
                                <th>Forex</th>
                                <th>Buy</th>
                                <th>111.21</th>
                                <th><Button variant="outline-success">Modify</Button></th>
                                <th><Button variant="outline-danger">Delete</Button></th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th>Bet 124</th>
                                <th>EURUSD</th>
                                <th>Forex</th>
                                <th>Sell</th>
                                <th>123.23</th>
                                <th><Button variant="outline-success">Modify</Button></th>
                                <th><Button variant="outline-danger">Delete</Button></th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th>Bet 126</th>
                                <th>USDJPY</th>
                                <th>Instrument Type</th>
                                <th>Buy</th>
                                <th>234.55</th>
                                <th><Button variant="outline-success">Modify</Button></th>
                                <th><Button variant="outline-danger">Delete</Button></th>
                            </tr>
                        </tbody>
                    </Table>
                    <Container >
                        <Row>
                            <Col >
                                <Button variant="outline-warning" onClick={() => this.homeClick()} >Home</Button>{' '}
                                {/* <Link to="/dashboard" >Dashboard</Link>{'     '} */}
                                {/* </Col> */}
                                {/* <Col > */}
                                <Button variant="outline-success" onClick={() => this.betClick()}>Bet</Button>
                                {/* <Link to="/scheduler" >Scheduler</Link> */}
                            </Col>
                        </Row>
                    </Container>
                </div>
                : <Container>
                <Row className="justify-content-center">
                  <Col xs="6">
                    <CardGroup>
                      <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Header>{localStorage.getItem('name') ? localStorage.getItem('name') : "User: None"}</Card.Header>
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

        )

    }


}