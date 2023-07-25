import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { notify } from "../components/Toastify";
const authContext = createContext();

export function useAuthContext() {
  return useContext(authContext);
}

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  async function register({ email, password, name }) {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, {
        displayName: name,
      });
    } catch (e) {
      notify(e.code, "error");
    }
  }
  async function login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      notify(e.code, "error");
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  async function logout() {
    try {
      await signOut(auth);
    } catch (e) {
      notify(e.code, "error");
    }
  }

  const value = {
    user,
    register,
    login,
    logout,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;
