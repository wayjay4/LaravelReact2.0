import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default class AppNavigation extends Component {
    render(){
        return(
            <div className={"appnavigation-container"}>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to={'/projects/home'}>
                                Laravel/ReactJS Projects
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown eventKey={1} title="Project Listings" id="basic-nav-dropdown">
                                <LinkContainer to={'/projects/home'}>
                                    <MenuItem eventKey={1.1}>Home Page</MenuItem>
                                </LinkContainer>

                                <MenuItem divider />

                                <LinkContainer to={'/projects/cdclock'}>
                                    <MenuItem eventKey={1.2}>Countdown Clock</MenuItem>
                                </LinkContainer>

                                <LinkContainer to={'/projects/goalcoach'}>
                                    <MenuItem eventKey={1.3}>Goal Coach</MenuItem>
                                </LinkContainer>

                                <LinkContainer to={'/projects/musicmaster'}>
                                    <MenuItem eventKey={1.4}>Music Master</MenuItem>
                                </LinkContainer>

                                <LinkContainer to={'/projects/reminderpro'}>
                                    <MenuItem eventKey={1.5}>Reminder Pro</MenuItem>
                                </LinkContainer>

                                <LinkContainer to={'/projects/stopwatch'}>
                                    <MenuItem eventKey={1.6}>Stop Watch</MenuItem>
                                </LinkContainer>
                            </NavDropdown>

                            <LinkContainer to={'/projects/home'}>
                                <NavItem eventKey={2}>Home</NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/projects/cdclock'}>
                                <NavItem eventKey={3}>Countdown Clock</NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/projects/goalcoach'}>
                                <NavItem eventKey={4}>Goal Coach</NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/projects/musicmaster'}>
                                <NavItem eventKey={5}>Music Master</NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/projects/reminderpro'}>
                                <NavItem eventKey={6}>Reminder Pro</NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/projects/stopwatch'}>
                                <NavItem eventKey={7}>Stop Watch</NavItem>
                            </LinkContainer>
                        </Nav>

                        <div style={{display: 'none'}}>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">Link Right</NavItem>
                                <NavItem eventKey={2} href="#">Link Right</NavItem>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
