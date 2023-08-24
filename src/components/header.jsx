import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../stores/auth";
function header() {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);

  const loginHandle = (user) => {
    dispatch(login(user))
  }

  const logoutHandle = () => {
    dispatch(logout(false))
  }
  return (
    <div>
      <h2>Logo</h2>
      {!user && (
        <div>
          <button onClick={() => loginHandle({ id: 1, username: "senan" })}>
            login as senan
          </button>
          <button onClick={() => loginHandle({ id: 2, username: "u.u.u.u" })}>
            login{" "}
          </button>
        </div>
      )}
      {user && (
        <button onClick={logoutHandle}>Log out - {user.username}</button>
      )}
    </div>
  );
}

export default header;
