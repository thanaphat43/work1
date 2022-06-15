import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
           
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Navbar color="dark" light expand="md" fixed="top">
          <NavbarBrand href="/"><a><h5>Thanaphat Pinthong</h5></a></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#Profile"><a><h5>ประวัติส่วนตัว</h5></a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Skill"><a><h5>ทักษะ</h5></a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Work"><a><h5>ผลงาน</h5></a></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </nav>
        
      </div>
    );
  }
}