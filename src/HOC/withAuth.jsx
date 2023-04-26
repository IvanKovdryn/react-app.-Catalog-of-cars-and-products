import { useContext } from "react";

export const withAuth = (Component) => (props) => {
  const { user } = useContext(AuthContext);
};
