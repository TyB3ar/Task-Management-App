import { Nav, Navbar } from 'react-bootstrap'; 
import { useAuth0 } from '@auth0/auth0-react';

const NavBar: React.FC = () => {
    const { isAuthenticated } = useAuth0(); 

    return (
        <Navbar>
            <Nav>
                <Nav.Link href='/'>Home |</Nav.Link>
                {isAuthenticated && 
                    <>
                        <Nav.Link href='/profile'> Profile |</Nav.Link>
                        <Nav.Link href='/protected'> Protected |</Nav.Link>
                    </>
                }
            </Nav>
        </Navbar>
    );
};

export default NavBar; 

