import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// redirects to login page if user is not logged

const privateRoute = (Component) => {
  const Route = (props) => {
    const auth = useSelector((state) => state.auth);
    return auth.token ?<Component {...props} />: <Navigate to="/login" />;
  };

  return Route;
};

export default privateRoute;