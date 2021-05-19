import React, { useState } from 'react'
import classes from './NavbarComponent.module.scss'
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
  Collapse,
} from 'reactstrap'

export const NavbarComponent = () => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)
  return (
    <div>
      <Nav
        className={`${classes.ml100} ${classes.mr100} d-flex justify-content-between d-none d-lg-flex`}
      >
        <NavItem style={{ marginTop: '16px', marginBottom: '18px' }}>
          <NavLink className={`text-dark p-0`} href=''>
            Home
          </NavLink>
        </NavItem>

        <NavItem style={{ marginTop: '16px', marginBottom: '18px' }}>
          <NavLink className={`text-dark p-0`} href=''>
            About game
          </NavLink>
        </NavItem>

        <NavItem style={{ marginTop: '16px', marginBottom: '18px' }}>
          <NavLink className={`text-dark p-0`} href=''>
            Register
          </NavLink>
        </NavItem>

        <NavItem style={{ marginTop: '16px', marginBottom: '18px' }}>
          <NavLink className={`text-dark p-0`} href=''>
            Sponsors
          </NavLink>
        </NavItem>

        <NavItem style={{ marginTop: '16px', marginBottom: '18px' }}>
          <NavLink className={`text-dark p-0`} href=''>
            Contact us
          </NavLink>
        </NavItem>

        <NavItem style={{ marginTop: '16px', marginBottom: '18px' }}>
          <NavLink className={`text-dark p-0`} href=''>
            Donate
          </NavLink>
        </NavItem>
      </Nav>

      <Navbar
        color='faded'
        light
        className={`d-flex d-lg-none ${classes.margin}`}
      >
        <NavbarToggler onClick={toggleNavbar} className='mr-1' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='#'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                About game
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Sponsors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Contact us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Donate</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
