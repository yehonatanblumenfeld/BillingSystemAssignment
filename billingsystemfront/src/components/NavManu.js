import React from "react";
import { Nav, Navbar, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, NavLink } from "reactstrap";
import { Link } from 'react-router-dom';


class NavManu extends React.Component {


    render() {
        return (
            <Navbar color="dark" variant="dark">
                <Nav>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Transactions
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><NavLink tag={Link} to="/addTransaction" > Add New</NavLink></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><NavLink tag={Link} to="/showTransactions" >Show All</NavLink></DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Customers
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><NavLink tag={Link} to="/addCustomer" >Add New</NavLink></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><NavLink tag={Link} to="/showCustomers" >Show All</NavLink></DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
        )
    };
}
export default NavManu;