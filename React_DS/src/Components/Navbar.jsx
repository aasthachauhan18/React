import Container from "react-bootstrap/Container";
import logo from "../assets/react.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Image } from "react-bootstrap";

function Navbar_start() {

  const navigate = useNavigate()
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/home"} className="text-decoration-none">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/about"} className="text-decoration-none">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/contact"} className="text-decoration-none">Contact</Link>
            </Nav.Link>
          </Nav>

           <Col xs="auto">
            <Button type="submit" onClick={()=>navigate("/login")}>Login</Button>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar_start;
