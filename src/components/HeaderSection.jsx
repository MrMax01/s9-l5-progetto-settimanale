import { Dropdown } from "react-bootstrap";

function HeaderSection() {
  return (
    <>
      <div className="container bg-dark d-flex align-items-center">
        <h1 className="text-white me-3 my-4">Tv Shows</h1>
        <Dropdown className="me-auto">
          <Dropdown.Toggle
            variant="dark"
            id="dropdown-basic"
            className="btn-secondary dropdown-toggle bg-black text-white border border-white"
          >
            Geners
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu-dark dropdown-menu-end">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <i className="bi bi-text-left text-white border border-white px-2 py-0"></i>
        <i className="bi bi-grid-fill text-white border border-white px-2 py-0"></i>
      </div>
    </>
  );
}
// class="btn-secondary dropdown-toggle bg-black text-white border border-white"
export default HeaderSection;
