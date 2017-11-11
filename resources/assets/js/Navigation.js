import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends Component {
    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/home'}>
                            My Awesome Apps
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/goalcoach'}>
                            <NavItem eventKey={1}>Goal Coach</NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/reminderpro'}>
                            <NavItem eventKey={2}>Reminder Pro</NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Countdown Clock</MenuItem>
                            <MenuItem eventKey={3.2}>Goal Coach</MenuItem>
                            <MenuItem eventKey={3.3}>Reminder Pro</MenuItem>
                            <MenuItem eventKey={3.4}>Stop Watch</MenuItem>
                            <MenuItem eventKey={3.5}>Separated link</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.5}>Music Master</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
