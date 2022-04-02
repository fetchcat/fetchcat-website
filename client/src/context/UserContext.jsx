import { useState, createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ isAuth: false });

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (user) {
  //     setUser(JSON.parse(user));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
