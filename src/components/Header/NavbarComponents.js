import React, { useState } from 'react';
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

const NavbarComponent = () => {

  return (
    <div>
      <Navbar dark color="dark">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
          
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;