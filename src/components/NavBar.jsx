import { Button, Form, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

function NavBar(props) {
  return (
    <Navbar expand="lg" variant="dark" className="bg-dark py-0 px-5">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={props.logo} width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav d">
          <Nav className=" mb-2 mb-lg-0  justify-content-between w-100">
            <div className="d-flex">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Tv Shows</Nav.Link>
              <Nav.Link href="#link">Movies</Nav.Link>
              <Nav.Link href="#link">Recently added</Nav.Link>
              <Nav.Link href="#link">My List</Nav.Link>
            </div>

            <div className="d-flex align-items-center gap-3">
              <Form.Control type="search" placeholder="Search" aria-label="Search" className="d-none" />
              <Button type="submit" className="border-0 bg-transparent text-white">
                <i className="bi bi-search"></i>
              </Button>
              <p className="text-white mb-0">KIDS</p>
              <i className="bi bi-bell-fill text-white"></i>
              <div className="d-flex align-items-center">
                <Navbar.Brand href="#home">
                  <Image src={props.logo} width={20} />
                </Navbar.Brand>
                <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic"></Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
