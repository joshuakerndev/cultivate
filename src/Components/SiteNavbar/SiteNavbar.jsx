import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './SiteNavbar.scss';
import { Link } from 'react-router-dom';

const SiteNavbar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
    <Navbar className="SiteNavbar fixed-top" color="light" light>
      <NavbarBrand className="NavbarBrand" href="/">Cultivate</NavbarBrand>
      <NavbarToggler className="NavbarToggler" onClick={toggleNavbar}  />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem className="NavbarItem">
            <Link className="CustomLink" to="/our-mission">
              <NavLink>Our Mission</NavLink>
            </Link>
          </NavItem>
          <NavItem className="NavbarItem">
            <Link className="CustomLink" to="/shop">
              <NavLink>Shop</NavLink>
            </Link>
          </NavItem>
          <NavItem className="NavbarItem">
            <Link className="CustomLink" to="/contact">
              <NavLink>Contact</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  );
}

export default SiteNavbar;