import { Navigate} from "react-router-dom";

export const ProtectedPage = () => {
    const isAuthenticated = true;
    return isAuthenticated 
     ? (
     <h1>Only authorized users can see this!</h1>
     ) : (
     <Navigate to="/"/>
     );
}
