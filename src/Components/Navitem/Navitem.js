import React from "react";
import { Container, Navbar, Nav, InputGroup, Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import Typewriter from "typewriter-effect";
import { navItem1, navItem2 } from "./Text";
import "./Navitem.css";

const Navitem = () => (
  <nav className="Navbar">
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-white fw-bolder fs-3">
          تور مسافرتی
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {navItem1.map((item, index) => (
              <Nav.Link key={index} href={item.href} className="text-white">
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            {navItem2.map((item, index) => (
              <Nav.Link key={index} href="#deets" className="text-white">
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className="Navbar-search">
      <div className="fs-1 text-center text-white">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("از تعطیلات رویایی خود لذت ببرید")
              .start()
              .pauseFor(2000)
              .deleteAll()
              .typeString("بهترین تور ها فقط با ما")
              .start()
              .pauseFor(2000);
          }}
          options={{
            loop: true,
          }}
        />
        <h3 className="fs-4 my-3">سفر به هر گوشه از جهان </h3>
      </div>
      <div className="Container-div">
        <InputGroup size="sm" className="mb-3">
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
          <InputGroup.Text id="inputGroup-sizing-sm">
            <SearchIcon />
          </InputGroup.Text>
        </InputGroup>
      </div>
    </Container>
  </nav>
);
export default Navitem;
