import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LogoutButton: React.FC = () => {
    const { logout, isAuthenticated } = useAuth0();

    // return to 'homepage' after user logs out 
    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    }; 

    if(isAuthenticated) return (<Button className="logout-btn logout-button" onClick={handleLogout}>Log Out</Button>)
        return null;
}; 

export default LogoutButton; 
