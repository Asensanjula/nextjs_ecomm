import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {logOutAction} from "../store/reducers/authReducer";

function NavBar(props) {
    const user = useSelector(state => state.auth.user);
    const cartList = useSelector(state => state.cart.itemList);
    const dispatch = useDispatch();
    console.log("Cart Update >>> ", cartList);
    console.log("user Update >>> ", user);
    const handleLogout = () => {
        dispatch(logOutAction());
    }
    return (
        <Navbar collapseOnSelect bg="white"  expand="lg">
            <Link href="/" passHref><Navbar.Brand>The Shopper</Navbar.Brand></Link>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Link href="/cart" passHref>
                        <Nav.Link className="cart">
                            <div className="cart-Icon">
                                <FontAwesomeIcon icon='shopping-cart'/>
                                <span className="cart-notification">{cartList?.length}</span>
                            </div>
                            <span>Cart</span>
                        </Nav.Link>
                    </Link>
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