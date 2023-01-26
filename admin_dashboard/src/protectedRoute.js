import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  const { userId, userData } = useSelector((state) => state.user);
  if (!userData) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
