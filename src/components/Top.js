import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import icon from "./images/shopping-cart-10982.png";
import { Link } from "react-router-dom";

const Top = () => {
  const { cart } = useSelector((state) => state.cart);
  //console.log(cart);
  return (
    <Navbar bg="light" expand="lg">
      <Container>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">Home</Nav.Link>


            <Nav.Link>Link</Nav.Link>
            <NavDropdown title="Shopping-Cart" id="basic-nav-dropdown">
              <NavDropdown.Item >
                <Link to="/cart">
                  <div className="cart-icon">
                    <img src={icon} alt="cart" />
                    <p>{cart.length}</p>
                  </div>
                </Link>
              </NavDropdown.Item>
              {cart.map((x) => {
                return (
                  <NavDropdown.Item key={x.id}>
                    {x.productName} {x.amount}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Top;

