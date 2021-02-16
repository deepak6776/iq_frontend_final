import React, { Component } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";

export default class Navigation extends Component {
  // constructor(props) {
  //   super(props);
    state = {
      name: ""
    };

  // }

  // var user= localStorage.getItem("user");
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() { this.setState({ name: localStorage.getItem('name') }); }

  handleLogout(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    // this.props.history.push('/login');
    // this.props.history.push('/');
  }


  render() {
    const isLoggedIn = this.state.name;
    return (
      <>
        <Navbar bg="light" expand="lg" variant="light">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink
                className="p-2"
                to="/">
                Home
              </NavLink>
              <NavLink
                className="p-2"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className="p-2"
                to="/bet">
                Bet
              </NavLink>
              <NavLink
                className="p-2"
                to="/scheduler"
              >
                Scheduler
              </NavLink>
              <NavLink
                className="p-2"
                to="/panel">
                Panel
              </NavLink>
            </Nav>
          </Navbar.Collapse>


          <Nav className="mr-auto">
            <Navbar.Collapse className="p-2 " id="basic-navbar-nav">
              <Navbar.Text >
                Signed in as: <span style={{ fontWeight: "bold" }}>{this.state.name ? this.state.name : "None"}</span>
              </Navbar.Text>
            </Navbar.Collapse>

            <Navbar.Collapse>

              {isLoggedIn
                ? <Button variant="outline-dark" onClick={() => this.handleLogout()}>Logout</Button>
                : <NavLink
                  className="p-2 justify-content-end"
                  to="/login"
                >
                  <Navbar.Text>
                    <span style={{ color: "blue" }}>Login</span>
                  </Navbar.Text>

                </NavLink>

              }



              {/* <NavLink
                className="bg-dark p-2 text-white justify-content-end"
                to="/signup"
              >
                Sign Up
              </NavLink> */}
              {/* <NavLink
                className="p-2 justify-content-end"
                to="/test"
              >
                Test
              </NavLink> */}
            </Navbar.Collapse>

          </Nav>

        </Navbar>
      </>
    );
  }
}