import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"

const PrivateRoute = () => {
  const { isLogged } = useAuth()
    return isLogged ? <Outlet /> : <Navigate to="/dashboard/projects" />;
}
export default PrivateRoute

