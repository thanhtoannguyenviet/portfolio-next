import React, {useState} from "react";
import {Collapse,Navbar,NavbarToggler,Nav,NavItem} from "reactstrap";
import BsNavLink from "../BsNavLink";

export default function Header(){
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const LoginLink = () =>
        <span className="nav-link port-navbar-link">Login</span>
    const LogoutLink = () =>
        <span className="nav-link port-navbar-link">Logout</span>
    return (
        <div>
            <Navbar
                className="port-navbar port-default absolute"
                color="transparent"
                dark
                expand="md">
                <div className="navbar-brand">
                    <BsNavLink href="/" title="NVTT"/>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/" title="Home"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/about" title="About"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/portfolios" title="Portfolios"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/blogs" title="Blogs"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/cv" title="Cv"/>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem className="port-navbar-item">
                            <LoginLink/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <LogoutLink/>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}