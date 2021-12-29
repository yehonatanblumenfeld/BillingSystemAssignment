import React from "react";
import { Container } from "reactstrap";
import NavManu from "./NavManu";


class Layout extends React.Component {


  static displayname = Layout.name;
  render() {
    return (
      <div>
        <NavManu></NavManu>
        <Container>
          {this.props.children}
        </Container>
      </div>
    )
  }
}
export default Layout;