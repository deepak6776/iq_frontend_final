import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Scheduler extends Component {
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
          <Form.Group controlId="formScheduleName">
            <Form.Label>Schedule Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Schedule Name" />
          </Form.Group>
        </Form.Row>

        <Form.Row className="justify-content-center">
          <Form.Group as={Col} xs="3" controlId="formStartTimeHour">
            <Form.Label>Start Time Hour</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
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
            <Form.Control as="select" defaultValue="Choose...">
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
            <Form.Control as="select" defaultValue="Choose...">
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
            <Form.Control as="select" defaultValue="Choose...">
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
          <Form.Group controlId="formGridLeverage">
            <Form.Label>Days</Form.Label>
            {/* <Form.Control type="text" placeholder="Enter Leverage" /> */}
            <Form.Control as="select" multiple="true">
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
              <Link to="/bet" >Bet</Link>{'     '}

              <Link to="/panel" >Panel</Link>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
}