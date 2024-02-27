import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';
import logoImage from '../../image/logo.png';

const Navbar = () => {
  return (
    <>
      {/* Navigation bar */}
      <Nav style={{ paddingLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo */}
          <img
            src={logoImage}
            alt="Logo"
            style={{
              height: '80px', // Adjust the height as needed
              width: 'auto', // Maintain aspect ratio
              marginRight: '10px', // Optional: Add some right margin for spacing
            }}
          />
          {/* Logo text */}
          <span style={{ color: 'white', fontSize: '2em' }}>CityNavigator</span>
        </div>
        <Bars />

        {/* Navigation links */}
        <NavMenu>
          <NavLink to="/maps">Maps</NavLink>
          <NavLink to="/blockers">Blockers</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
