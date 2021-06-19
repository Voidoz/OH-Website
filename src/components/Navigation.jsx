import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

import Logo from "../assets/images/logo.svg"

export default function Navigation() {
  return (
    <nav style={{borderBottomColor: "white", borderBottom: "solid 2px", marginBottom: "50px"}}>
      <Navbar bg="black" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer style={{textDecoration: 'none'}} to="/about-me">
              <Nav.Link>[1] About Me</Nav.Link>
            </LinkContainer>
            <LinkContainer style={{textDecoration: 'none'}} to="/education">
              <Nav.Link>[2] Education</Nav.Link>
            </LinkContainer>
            <LinkContainer style={{textDecoration: 'none'}} to="/work">
              <Nav.Link>[3] Work</Nav.Link>
            </LinkContainer>
            <LinkContainer style={{textDecoration: 'none'}} to="/skills">
              <Nav.Link>[4] Skills</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}