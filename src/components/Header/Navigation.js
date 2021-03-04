import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Bar Charts</NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/barChart" className="links">Bar Chart</Link>
            </NavItem>
            <NavItem>
              <Link to="/stackedBarChart" className="links">Stacked Bar Chart</Link>
            </NavItem>  

            <NavItem>
              <Link to="/groupedBarChart" className="links">Grouped Bar Chart</Link>
            </NavItem>

            <NavItem>
              <Link to="/pieChart" className="links">Pie Chart</Link>
            </NavItem>


           
          </Nav>
          <NavbarText> Bar charts  </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;