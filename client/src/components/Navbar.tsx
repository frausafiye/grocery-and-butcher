import { ReactElement } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header(): ReactElement {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{
        maxWidth: "100%",
        marginRight: "0",
      }}
    >
      <Container style={{ maxWidth: "100%" }}>
        <NavLink
          className="nav-link"
          to="home"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/000000/external-shopping-bag-supermarket-photo3ideastudio-flat-photo3ideastudio.png"
            alt="logo"
          />
          <h5 style={{ margin: "0", color: "white" }}>
            Murathan Grocery & Butcher
          </h5>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ maxWidth: "40vw" }}
        >
          <Nav className="me-auto">
            <NavLink className="nav-link" to="about">
              About
            </NavLink>
            <NavLink className="nav-link" to="gallery">
              Gallery
            </NavLink>
            <NavLink className="nav-link" to="contact">
              Contact
            </NavLink>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavLink to="grocery" className="dropdown-item">
                Grocery
              </NavLink>
              <NavLink to="butcher" className="dropdown-item">
                Butcher
              </NavLink>
              <NavLink to="finecosts" className="dropdown-item">
                Finecosts
              </NavLink>
              <NavDropdown.Divider />
              <NavLink to="products" className="dropdown-item">
                All Products
              </NavLink>
            </NavDropdown>
          </Nav>
          <Nav
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "baseline",
            }}
          >
            <NavLink className="nav-link" to="favorites">
              <img
                src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/ffffff/external-favorites-social-media-prettycons-lineal-prettycons.png"
                alt="favorites link"
              />
            </NavLink>
            <NavLink className="nav-link" to="cart">
              <img
                src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/ffffff/external-grocery-food-delivery-wanicon-lineal-wanicon.png"
                alt="cart link"
              />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
