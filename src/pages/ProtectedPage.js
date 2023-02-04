import { Navigate, Outlet } from "react-router-dom";

export const ProtectedPage = () => {
    
    const isAuthed = false;

    // return (isAuthed ? <Outlet/> : <Navigate to="/"/>)
}

// useEffect(()=> {
//     if (!isAuthed) {
//         history.push('/');
//     }
// });

// 