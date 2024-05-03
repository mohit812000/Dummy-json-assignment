import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Appbar() {
    
    return (
        <Navbar expand="lg" className="fixed-top navstyle" >
            <Container>
                <Navbar.Brand href="#home" className='dummylogo'>DUMMY JSON</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/categories">Categories</NavLink>

                        <NavLink className="nav-link" to="/products">Products</NavLink>
                        <Button className='btn btn-danger'>Cart 0</Button>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Appbar;