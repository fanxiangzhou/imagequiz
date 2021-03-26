import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
            <Nav.Link><Link to="/home">Home</Link></Nav.Link>
            <Nav.Link><Link to="/login">Login</Link></Nav.Link>
        </Nav>
        </Navbar>
    );
}

export default NavigationBar;