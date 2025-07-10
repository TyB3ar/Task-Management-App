
import ReactDOM from 'react-dom/client'; 
import App from './App'; 
import { Auth0Provider } from '@auth0/auth0-react'; 

ReactDOM.createRoot(document.getElementById('root')!).render( 
  <Auth0Provider 
    domain="dev-n25a3vh1x8de66qo.us.auth0.com" 
    clientId="SKC0SXz9JvzNZnFQUwSA8AZxt0b0UjJb" 
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />    
  </Auth0Provider> 
)
