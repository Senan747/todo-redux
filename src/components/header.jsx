import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../stores/auth";
function header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const loginHandle = (user) => {
    dispatch(login(user));
  };

  const logoutHandle = () => {
    dispatch(logout(false));
  };
  return (
    <div className="header">
      <h2>
        Welcome <span>{user && user.username}</span>
      </h2>
      {!user && (
        <div>
          <button onClick={() => loginHandle({ id: 1, username: "Senan" })}>
            login as Senan
          </button>
          <button
            onClick={() =>
              loginHandle({ id: 2, username: "Front-end developer" })
            }
          >
            login as Front-end developer
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
