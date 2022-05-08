import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark" >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link className='text-white' href="home#inventories">Inventories</Nav.Link>
                        <Nav.Link className='text-white' href="home#kidsCollections">KidsCollections</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='text-white' as={Link} to="about">About</Nav.Link>
                        <Nav.Link className='text-white' as={Link} to="blog">Blog</Nav.Link>
                        {
                            user ?
                            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Log Out</button>
                            :
                                <Nav.Link className='text-white' as={Link} to="login">
                                    Login
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;