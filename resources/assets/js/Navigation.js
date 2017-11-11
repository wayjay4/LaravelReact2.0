import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends Component {
    render(){
        return(
            <div className={"app-navigation"}>
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

                            <NavDropdown eventKey={3} title="My ReactJS Projects" id="basic-nav-dropdown">
                                <LinkContainer to={'/home'}>
                                    <MenuItem eventKey={3.1}>Home Page</MenuItem>
                                </LinkContainer>

                                <MenuItem divider />

                                <LinkContainer to={'/cdclock'}>
                                    <MenuItem eventKey={3.2}>Countdown Clock</MenuItem>
                                </LinkContainer>

                                <LinkContainer to={'/goalcoach'}>
                                    <MenuItem eventKey={3.3}>Goal Coach</MenuItem>
                                </LinkContainer>

                                <LinkContainer to={'/musicmaster'}>
                                    <MenuItem eventKey={3.4}>Music Master</MenuItem>
                                </LinkContainer>

                                <LinkContainer to={'/reminderpro'}>
                                    <MenuItem eventKey={3.5}>Reminder Pro</MenuItem>
                                </LinkContainer>

                                <LinkContainer to={'/stopwatch'}>
                                    <MenuItem eventKey={3.6}>Stop Watch</MenuItem>
                                </LinkContainer>
                            </NavDropdown>
                        </Nav>

                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
