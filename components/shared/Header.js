import React, {useState} from "react";
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, Dropdown,DropdownToggle,
    DropdownMenu,
    DropdownItem} from "reactstrap";
import BsNavLink from "../BsNavLink";

export default function Header({user, loading, className}){
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const LoginLink = () =>
        <BsNavLink href="/api/auth/login" title="Login" />
    const LogoutLink = () =>
        <BsNavLink href="/api/auth/logout" title="Logout" />
    return (

        <div>
            <Navbar
                className={`port-navbar port-default absolute ${className}`}
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
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/me" title="Me"/>
                        </NavItem>
                        {/*<NavItem className="port-navbar-item">*/}
                        {/*    <BsNavLink href="/secretssr" title="SecretSSR"/>*/}
                        {/*</NavItem>*/}
                        {/*<NavItem className="port-navbar-item">*/}
                        {/*    <BsNavLink href="/onlyadmin" title="Admin"/>*/}
                        {/*</NavItem>*/}
                        {/*<NavItem className="port-navbar-item">*/}
                        {/*    <BsNavLink href="/onlyadminssr" title="AdminSsr"/>*/}
                        {/*</NavItem>*/}
                    </Nav>
                    <Nav navbar>
                        {!loading &&
                        <>
                            {user && <>
                                    <AdminMenu/>
                                    <NavItem className="port-navbar-item">
                                        <LogoutLink/>
                                    </NavItem>
                                </>
                            }
                            {!user &&
                            <NavItem className="port-navbar-item">
                                <LoginLink/>
                            </NavItem>
                            }
                        </>}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
const AdminMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dropdown
            className="port-navbar-link port-dropdown-menu"
            nav
            isOpen={isOpen}
            toggle={() => setIsOpen(!isOpen)}>
            <DropdownToggle className="port-dropdown-toggle" nav caret>
                Admin
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    <BsNavLink
                        className="port-dropdown-item"
                        href="/portfolios/new"
                        title="Create Portfolio"
                    />
                </DropdownItem>
                <DropdownItem>
                    <BsNavLink
                        className="port-dropdown-item"
                        href="/blogs/editor"
                        title="Blog Editor"
                    />
                </DropdownItem>
                <DropdownItem>
                    <BsNavLink
                        className="port-dropdown-item"
                        href="/blogs/dashboard"
                        title="Dashboard"
                    />
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
