import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function LogOutButton() {
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  async function logOut() {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`);
    await getLoggedIn();
    history.push("/login");
  }
  return <button className="logout-btn"onClick={logOut}>Logout</button>;
}

export default LogOutButton;