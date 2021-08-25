import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function NavBar(props) {
    return (
        <Navbar bg="light"  expand="lg">
            <Link href="/" passHref><Navbar.Brand>The Shopper</Navbar.Brand></Link>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Link href="/cart" passHref><Nav.Link>
                        <FontAwesomeIcon icon='shopping-cart' /> Cart
                    </Nav.Link></Link>
                    <Link href="/signin" passHref><Nav.Link>
                        <FontAwesomeIcon icon='user' /> Sign In
                    </Nav.Link></Link>
                    {/*<NavDropdown title="User Name">*/}
                    {/*    <Link href="/profile" passHref><NavDropdown.Item>Profile</NavDropdown.Item></Link>*/}
                    {/*    <NavDropdown.Divider />*/}
                    {/*    <Link href="/" passHref><NavDropdown.Item>Log Out</NavDropdown.Item></Link>*/}
                    {/*</NavDropdown>*/}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;