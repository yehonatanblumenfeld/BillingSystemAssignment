import React from "react";
import { Nav, Navbar,DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle,} from "reactstrap";


class NavManu extends React.Component {


    render(){
    return(
    <Navbar  color="dark" variant="dark">
        <Nav>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Transactions
                </DropdownToggle>
                <DropdownMenu left>
                    <DropdownItem href="/addTransaction">Add New</DropdownItem>                  
                    <DropdownItem divider />
                    <DropdownItem href="/showTransactions">Show All</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Customers
                </DropdownToggle>
                <DropdownMenu left >
                    <DropdownItem href="/addCustomer">Add New</DropdownItem>                   
                    <DropdownItem divider />
                    <DropdownItem href="/showCustomers">Show All</DropdownItem>

                </DropdownMenu>
            </UncontrolledDropdown> 
        </Nav>
    </Navbar>
    )};
}
export default NavManu;