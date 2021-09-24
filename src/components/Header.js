import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import './css/Header.css';
import Cart from './svg/shopping-cart-solid.svg';

import { DataContext } from "./Context";

export class Header extends Component {

    static contextType = DataContext;

    state = {
        isOpen: false
    }

    menuToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        const { cart } = this.context;

        return(
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/" className="logo">Tasty Food</NavbarBrand>
                    <NavbarToggler onClick={this.menuToggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="li">
                                    <Link to="/">Home</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="li">
                                    <Link to="/product">Products</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="li">
                                    <div className="nav-cart">
                                        <span>{cart.length}</span>
                                        <Link to="/cart">
                                            <img src={Cart} alt="" width="20" />
                                        </Link>
                                    </div>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;