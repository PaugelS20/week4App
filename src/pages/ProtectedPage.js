import { Navigate } from "react-router-dom";

export const ProtectedPage = () => {
    const isAuthed = false;
    return isAuthed 
    ? <h1>Only authorized users should be able to see this</h1> 
    : <Navigate to="/"/>
    

}
