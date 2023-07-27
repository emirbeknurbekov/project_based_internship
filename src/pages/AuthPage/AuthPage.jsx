import React, { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { notify } from "../../components/Toastify";
import "./AuthPage.css";

const AuthPage = () => {
  const { user, login, register } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      notify("Заполните поля", "error");
      return;
    }

    if (isLogin) {
      login(formValue);
    } else {
      register(formValue);
    }
  }

  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div>
        <button onClick={() => setIsLogin(false)}>Sing up</button>{" "}
        <button onClick={() => setIsLogin(true)}>Sign in</button>
      </div>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            placeholder="name"
            name="name"
            onChange={handleChange}
            type="text"
          />
        )}
        <input
          placeholder="email"
          name="email"
          onChange={handleChange}
          type="text"
        />
        <input
          placeholder="password"
          name="password"
          onChange={handleChange}
          type="text"
        />
        <button>{isLogin ? "Sign in" : "Sing up"}</button>
      </form>
    </div>
  );
};

export default AuthPage;
