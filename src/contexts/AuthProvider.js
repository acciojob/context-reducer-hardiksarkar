import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  let [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        auth: auth,
        setAuth: setAuth,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
