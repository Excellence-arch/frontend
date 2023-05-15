import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Auth = () => {
  const navigate = useNavigate();
  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");
  useEffect(() => {
    localStorage.setItem("token", token);
    navigate("/homepage");
  }, []);
  return <></>;
};

export { Auth };
