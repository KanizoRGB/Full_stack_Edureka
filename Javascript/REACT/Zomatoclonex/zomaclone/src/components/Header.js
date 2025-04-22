import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand as ={Link} to="/">ZomaClone</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse >
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/"></Nav.Link>
                        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                        <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
                    </Nav>    
                        
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
