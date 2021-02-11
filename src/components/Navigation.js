import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
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
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Signed in as: <a href="#login">trader@trader.com</a>
                </Navbar.Text>
              </Navbar.Collapse>

            
            {/* <Nav>
              <NavLink
                className="bg-dark p-2 text-white justify-content-end"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="bg-dark p-2 text-white justify-content-end"
                to="/signup"
              >
                Sign Up
              </NavLink>
            </Nav> */}
          
        </Navbar>
      </>
    );
  }
}