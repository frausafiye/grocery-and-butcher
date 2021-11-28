import React, { ReactElement } from "react";
import Logo from "./logo/Logo";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

interface Props {}

export default function Header({}: Props): ReactElement {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          href="home"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/000000/external-shopping-bag-supermarket-photo3ideastudio-flat-photo3ideastudio.png"
            alt="logo"
          />
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="gallery">Gallery</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="grocery">Grocery</NavDropdown.Item>
              <NavDropdown.Item href="butcher">Butcher</NavDropdown.Item>
              <NavDropdown.Item href="finecosts">Finecosts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="products">All Products</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="favorites">
              <img
                src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/ffffff/external-favorites-social-media-prettycons-lineal-prettycons.png"
                style={{ transform: "translateY(10px)" }}
                alt="favorites link"
              />
            </Nav.Link>
            <Nav.Link eventKey={2} href="cart">
              <img
                src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/ffffff/external-grocery-food-delivery-wanicon-lineal-wanicon.png"
                alt="cart link"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
