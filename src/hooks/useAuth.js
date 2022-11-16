import React, { useState, useContext, createContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import endPoints from "@services/api";
import { useRouter } from "next/router";

const AuthContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  const signIn = async (email, password) => {
    const options = {
      Headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };

    try {
      setLoading(true);
      const { data: access_token } = await axios.post(
        endPoints.auth.login,
        { email, password },
        options
      );

      if (access_token) {
        const token = access_token.access_token;
        Cookies.set("access_token", token, { expires: 5 });
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = await axios.post(endPoints.auth.me);
        setUser(user);
        setLoading(false);
        router.push("/admin/proyectos");
      }
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };

  const logout = () => {
    Cookies.remove("access_token");
    setUser(null);
  };

  return {
    user,
    signIn,
    errorMessage,
    logout,
    loading,
  };
}

export function AuthRoute(props) {
  const auth = useAuth();
  if (!auth.user) {
 /*    return <Navigate to="/auth/login" />; */
  } else {
    return props.children;
  }
}
