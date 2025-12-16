import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
                <Link to="/" className='nav-link active'>Home</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link to="/about" className='nav-link'>About</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link to="/contact" className='nav-link'>Contact</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link to="/examples" className='nav-link'>Examples</Link>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink href='/'>Home</MDBNavbarLink>
              <Link to="home" className='nav-link'>Home</Link>
            </MDBNavbarItem> */}

            {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Account
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Login</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}

          
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}