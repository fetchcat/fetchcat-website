import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";

const Landing = () => {
  const [user, setUser] = useContext(UserContext);
  const logout = () => {
    setUser({ isAuth: false });
    localStorage.removeItem("user");
  };

  return (
    <div>
      Landing page yo...
      <div>
        {user.isAuth}
        {user.email}
        {user.firstName}
      </div>
      <button
        onClick={() =>
          setUser({ isAuth: true, email: "test@test.com", firstName: "test" })
        }
      >
        Set User
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Landing;
