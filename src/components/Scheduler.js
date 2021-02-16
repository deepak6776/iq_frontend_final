import React, { Component } from "react";
import { Form, Container, Row, Col, Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Scheduler extends Component {
  state = {
    name : "",
    formScheduleName: "",
    formStartTimeHour: "",
    formStartTimeHourMin: "",
    formStopTimeHour: "",
    formStopTimeHourMin: "",
    formDays: ['']
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // handleChange(e) {
  //   //this.setState({value: event.option});
  //   this.setState({formDays: Array.from(e.target.selectedOptions, (item) => item.value)});
  // }

  handleSelect(e) {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({ formDays: value });
  }



  schedulerSubmit = e => {
    e.preventDefault();
    // e.preventDefault();
    console.log(e)
    // console.log(e.target.betName)
    console.log(this.state.formScheduleName)
    console.log(this.state.formStartTimeHour)
    console.log(this.state.formStartTimeHourMin)
    console.log(this.state.formStopTimeHour)
    console.log(this.state.formStopTimeHourMin)
    console.log(this.state.formDays)
    console.log("In scheduler submit")
    const url = 'http://34.93.12.130/placeschedule';
    // const url = 'http://127.0.0.1:5000/placeschedule';
    const data = {
      name: this.state.name,
      scheduleName: this.state.formScheduleName,
      startTimeHour: this.state.formStartTimeHour,
      startTimeMinute: this.state.formStartTimeHourMin,
      stopTimeHour: this.state.formStopTimeHour,
      stopTimeMinute: this.state.formStopTimeHourMin,
      formDays: this.state.formDays
    }
    const headers = {
      'Access-Control-Allow-Origin': '*'
    };
    axios.post(url, data, { headers })
      .then(response => console.log(response.data))
    this.setState({
      formScheduleName: "",
      formStartTimeHour: "",
      formStartTimeHourMin: "",
      formStopTimeHour: "",
      formStopTimeHourMin: "",
      formDays: ['']
    });
  };

  betClick() {
    // let history = useHistory();
    console.log("Moving to bet");
    // history.push('/dashboard')
    this.props.history.push('/bet');

  }

  panelClick() {
    // let history = useHistory();
    console.log("Moving to panel");
    // history.push('/dashboard')
    this.props.history.push('/panel');

  }

  componentDidMount() {
    console.log("Component mounted");
    const tmp = localStorage.getItem('name');
    this.setState({ name: tmp })
  }

  render() {
    const isLoggedIn = this.state.name;
    return (
      <>
        {isLoggedIn
          ? <Form>
            <Form.Row className="justify-content-center">
              <Form.Group controlId="formScheduleName">
                <Form.Label>Schedule Name</Form.Label>
                <Form.Control placeholder="Enter Schedule Name"
                  value={this.state.formScheduleName}
                  onChange={e => this.setState({ formScheduleName: e.target.value })}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row className="justify-content-center">
              <Form.Group as={Col} xs="3" controlId="formStartTimeHour">
                <Form.Label>Start Time Hour</Form.Label>
                <Form.Control as="select" defaultValue="Choose..."
                  value={this.state.formStartTimeHour}
                  onChange={e => this.setState({ formStartTimeHour: e.target.value })}
                >
                  <option>Choose...</option>
                  <option>...</option>
                  <option>00</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                </Form.Control>
              </Form.Group>
              {/* </Form.Row> */}

              {/* <Form.Row className="justify-content-center"> */}
              <Form.Group as={Col} xs="3" controlId="formStartTimeHourMin">
                <Form.Label>Start Time Min</Form.Label>
                {/* <Form.Label>Side</Form.Label> */}
                <Form.Control as="select" defaultValue="Choose..."
                  value={this.state.formStartTimeHourMin}
                  onChange={e => this.setState({ formStartTimeHourMin: e.target.value })}
                >
                  <option>Choose...</option>
                  <option>...</option>
                  <option>00</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                  <option>32</option>
                  <option>33</option>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                  <option>40</option>
                  <option>41</option>
                  <option>42</option>
                  <option>43</option>
                  <option>44</option>
                  <option>45</option>
                  <option>46</option>
                  <option>47</option>
                  <option>48</option>
                  <option>49</option>
                  <option>50</option>
                  <option>51</option>
                  <option>52</option>
                  <option>53</option>
                  <option>54</option>
                  <option>55</option>
                  <option>56</option>
                  <option>57</option>
                  <option>58</option>
                  <option>59</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row className="justify-content-center">
              <Form.Group as={Col} xs="3" controlId="formStopTimeHour">
                <Form.Label>Stop Time Hour</Form.Label>
                {/* <Form.Label>Side</Form.Label> */}
                <Form.Control as="select" defaultValue="Choose..."
                  value={this.state.formStopTimeHour}
                  onChange={e => this.setState({ formStopTimeHour: e.target.value })}
                >
                  <option>Choose...</option>
                  <option>...</option>
                  <option>00</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                </Form.Control>
              </Form.Group>
              {/* </Form.Row> */}

              {/* <Form.Row className="justify-content-center"> */}
              <Form.Group as={Col} xs="3" controlId="formStopTimeHourMin">
                <Form.Label>Stop Time Min</Form.Label>
                {/* <Form.Label>Side</Form.Label> */}
                <Form.Control as="select" defaultValue="Choose..."
                  value={this.state.formStopTimeHourMin}
                  onChange={e => this.setState({ formStopTimeHourMin: e.target.value })}
                >
                  <option>Choose...</option>
                  <option>...</option>
                  <option>00</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                  <option>32</option>
                  <option>33</option>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                  <option>40</option>
                  <option>41</option>
                  <option>42</option>
                  <option>43</option>
                  <option>44</option>
                  <option>45</option>
                  <option>46</option>
                  <option>47</option>
                  <option>48</option>
                  <option>49</option>
                  <option>50</option>
                  <option>51</option>
                  <option>52</option>
                  <option>53</option>
                  <option>54</option>
                  <option>55</option>
                  <option>56</option>
                  <option>57</option>
                  <option>58</option>
                  <option>59</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row className="justify-content-center">
              <Form.Group controlId="formDays">
                <Form.Label>Days</Form.Label>
                {/* <Form.Control type="text" placeholder="Enter Leverage" /> */}
                <Form.Control as="select" multiple
                  value={this.state.formDays}
                  // onChange={e => this.setState({formDays: e.target.value})}
                  // onChange ={(e)=> {handleSelect(e.target.selectedOptions)}}
                  onChange={(e) => this.handleSelect(e)}
                >
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
            <Container >
              <Row>
                <Col >
                  <Button variant="outline-warning" onClick={() => this.betClick()} >Bet</Button>{' '}
                  {/* <Link to="/dashboard" >Dashboard</Link>{'     '} */}
                  {/* </Col> */}
                  {/* <Col > */}
                  <Button variant="outline-info" onClick={e => this.schedulerSubmit(e)} >Submit</Button>{' '}
                  <Button variant="outline-success" onClick={() => this.panelClick()} >Panel</Button>
                  {/* <Link to="/scheduler" >Scheduler</Link> */}
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