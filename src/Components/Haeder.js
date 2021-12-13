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
          <NavbarBrand href="/"><a>Thanaphat Pinthong</a></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#Profile"><a>ประวัติส่วนตัว</a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Skill"><a>ทักษะ</a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Reason"><a>เหตุผลที่ต้องการฝึกงานในหน่วยงานนี้</a></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </nav>
        
      </div>
    );
  }
}
