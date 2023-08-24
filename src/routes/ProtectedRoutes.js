import { Navigate } from "react-router";

export const ProtectedRoutes = ({children}) => {
    const token = JSON.parse(sessionStorage.getItem("token"));

  return token ? children : <Navigate to="/login" />
}


