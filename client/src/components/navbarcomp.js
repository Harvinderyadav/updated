import React, { Component } from 'react'
import { Navbar, Container , Nav } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import axios from 'axios';

function Navbarcomp(){
//   const [user,setuser]=useState(false);

//   useEffect( ()=>{ //checking if user is logged in or not
//    async function getting(){
//     await axios.get("http://localhost:8080/login") 
//    .then(Response=>{
//        if(Response.data.loggedIn){
//           setuser(true);
//        }  
//    })
//    }
//   getting();
// });



  return (
          <div>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Student Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
    
          {/* <Nav.Link href="/login">Login</Nav.Link>   */}
          {/* <Nav.Link href="/register">Register</Nav.Link> */}
            <Nav.Link href="/add">New Student</Nav.Link>
            <Nav.Link href="/contact">All</Nav.Link>
          {/* {user ?  <Nav.Link href="/signout">Sign Out</Nav.Link> : null}  */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
          </div>
        )
}

export default Navbarcomp;