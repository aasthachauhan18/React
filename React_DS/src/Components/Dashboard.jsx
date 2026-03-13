import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Card,
  Table,
  Button
} from "react-bootstrap";

export default function Dashboard() {

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
   <>
    <Container fluid>

      {/* Navbar */}
      <Navbar bg="dark" variant="dark" className="px-3 d-flex justify-content-between">
        <Navbar.Brand>Simple Dashboard</Navbar.Brand>
        <Button variant="primary" onClick={handleLogOut}>
          Logout
        </Button>
      </Navbar>

      <Row>

        {/* Sidebar */}
        <Col md={2} className="bg-light min-vh-100 p-3">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="#">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="#">Users</Nav.Link>
            <Nav.Link><Link to={"Product"}>Product</Link></Nav.Link>
            <Nav.Link><Link to={"Settings"}>Setting</Link></Nav.Link>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <h3 className="mb-4">Dashboard Overview</h3>

          {/* Cards */}
          <Row className="mb-4">
            <Col md={4}>
              <Card bg="primary" text="white">
                <Card.Body>
                  <Card.Title>Users</Card.Title>
                  <Card.Text className="fs-4">1200</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card bg="success" text="white">
                <Card.Body>
                  <Card.Title>Revenue</Card.Title>
                  <Card.Text className="fs-4">₹45,000</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card bg="warning" text="white">
                <Card.Body>
                  <Card.Title>Orders</Card.Title>
                  <Card.Text className="fs-4">320</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Table */}
          <Card>
            <Card.Header>Recent Users</Card.Header>
            <Card.Body className="p-0">
              <Table striped hover className="mb-0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Aastha</td>
                    <td>aastha@gmail.com</td>
                    <td>Active</td>
                  </tr>
                  <tr>
                    <td>Rahul</td>
                    <td>rahul@gmail.com</td>
                    <td>Inactive</td>
                  </tr>
                  <tr>
                    <td>Pooja</td>
                    <td>pooja@gmail.com</td>
                    <td>Active</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>

        </Col>
      </Row>

    </Container>
    <Outlet/>
   </>

  );
}