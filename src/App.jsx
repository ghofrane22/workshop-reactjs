import "./App.css";
import React from "react";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import Profile from "./Components/Profile";
import { Cards } from "./Components/cards";
import { Card } from "react-bootstrap";
function App() {
  return (
    <React.Fragment>
      <div className="App"></div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="container">
          <h1 className="mt-5">This is a Heading</h1>
        </div>
      </div>

      <Profile />
      <Cards />
    </React.Fragment>
  );
}

export default App;
