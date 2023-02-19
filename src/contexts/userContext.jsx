import { createContext, useState } from "react";

const UserContext = createContext({
  successAuth: false,
  setSuccessAuth: () => {},
});
let initialState = {};

const UserProvider = ({ props }) => {
  //the user is successfully login/signup
  const [successAuth, setSuccessAuth] = useState(false);

  const value = { successAuth, setSuccessAuth };

  const [state, setState] = useState(initialState);

  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
