import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {logOutAction} from "../store/reducers/authReducer";

function NavBar(props) {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logOutAction());
    }
    return (
        <Navbar bg="white"  expand="lg">
            <Link href="/" passHref><Navbar.Brand>The Shopper</Navbar.Brand></Link>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Link href="/cart" passHref><Nav.Link>
                        <FontAwesomeIcon icon='shopping-cart' /> Cart
                    </Nav.Link></Link>
                    {
                        !user &&
                        <Link href="/signin" passHref><Nav.Link>
                            <FontAwesomeIcon icon='user' /> Sign In
                        </Nav.Link></Link>
                    }
                    {
                        user &&
                        <>
                            <Nav.Item>
                                <img
                                    src={user.avatar}
                                    alt="user-logo"
                                    width="35"
                                    height="35"
                                />
                            </Nav.Item>
                            <NavDropdown title={user.name}>
                                <Link href="/profile" passHref><NavDropdown.Item>Profile</NavDropdown.Item></Link>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;