import React from 'react'
import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
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
                        <th><Button>Modify</Button></th>
                        <th><Button>Delete</Button></th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>Bet 124</th>
                        <th>EURUSD</th>
                        <th>Forex</th>
                        <th>Sell</th>
                        <th>123.23</th>
                        <th><Button>Modify</Button></th>
                        <th><Button>Delete</Button></th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th>Bet 126</th>
                        <th>USDJPY</th>
                        <th>Instrument Type</th>
                        <th>Buy</th>
                        <th>234.55</th>
                        <th><Button>Modify</Button></th>
                        <th><Button>Delete</Button></th>
                    </tr>
                </tbody>
            </Table>
            <Container >
                <Row>
                    <Col >
                        <Link to="/" >Home</Link>{'     '}

                        <Link to="/bet" >Bet</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}