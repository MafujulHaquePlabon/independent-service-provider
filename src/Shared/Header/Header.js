import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
               <Navbar collapseOnSelect expand="lg" sticky='top' bg="success" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                    <img height={32} className='rounded' src={`https://imgs.search.brave.com/yiPOkjkxcgPV2yca7eK-MdHeorsFULuFyHoWFpYK4WE/rs:fit:626:626:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mcmVlLXZlY3Rv/ci9kb2N0b3ItaWNv/bi1hdmF0YXItd2hp/dGVfMTM2MTYyLTU4/LmpwZw`} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                           
                           
                           
                        </Nav>
                        <Nav>
                        <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link as={Link}  to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="Blogs">
                                Blogs
                            </Nav.Link>
                                
                                  {/*   <button className='btn btn-link text-white text-decoration-none'>sign out</button> */}
                                
                               
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;