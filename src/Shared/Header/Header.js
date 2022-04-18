import { signOut } from '@firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
     const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    } 
    return (
        <div>
               <Navbar collapseOnSelect expand="lg"  /* fixed='top' */ bg="success" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                    <img height={32} className='rounded' src={`https://imgs.search.brave.com/yiPOkjkxcgPV2yca7eK-MdHeorsFULuFyHoWFpYK4WE/rs:fit:626:626:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mcmVlLXZlY3Rv/ci9kb2N0b3ItaWNv/bi1hdmF0YXItd2hp/dGVfMTM2MTYyLTU4/LmpwZw`} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                           
                           
                           
                        </Nav>
                        <Nav>
                        <Nav.Link className="fw-bolder hover:text-white"as={Link} to="Home" >Home</Nav.Link>
                            <Nav.Link className="fw-bolder hover:text-white" as={Link}  to="about">About</Nav.Link>
                            <Nav.Link className="fw-bolder hover:text-white" as={Link} to="Blogs">
                                Blogs
                            </Nav.Link>
                            {
                                 user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                : 
                                <Nav.Link className="fw-bolder hover:text-white" as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;