import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../App.css'

const Navbarmenu = () => {
  return (
    <div className='main-div'>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Navbar.Brand href="#home"><h2><span style={{color:"#208377"}}>SHOP</span>LANE</h2></Navbar.Brand>
            <Navbar.Toggle lassName="me-left" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link ><Link to="/dashboard" className='menu-item'>HOME</Link></Nav.Link>
                <Nav.Link ><Link to="/dashboard" className='menu-item'>CLOATHING</Link></Nav.Link>
                <Nav.Link ><Link to="/dashboard" className='menu-item'>ACESSORIES</Link></Nav.Link>
                
              </Nav>
              <Nav className="me-right">
                <Nav.Link href=""><i className='fa fa-search fa-1.5x'></i></Nav.Link>
                <Nav.Link href=""><i class="fa fa-shopping-cart fa-1.5x"><span style={{color:"red"}}><sup>2</sup></span></i></Nav.Link>
                <Nav.Link > <i class="fa-solid fa-circle-user fa-1.5x"></i> </Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navbarmenu