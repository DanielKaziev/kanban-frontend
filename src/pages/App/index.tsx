import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LazyUnauthorized from "./Unauthorized";
import LazyAuthorized from "./Authorized";
import useAuthorized from "../../hooks/useAuthorized";

const App = () => {
  const navigate = useNavigate();
  const isAuth = useAuthorized();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return isAuth ? <LazyAuthorized /> : <LazyUnauthorized />;
};

export default App;
