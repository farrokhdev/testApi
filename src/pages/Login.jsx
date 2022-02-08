import React, { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { useMainContext } from "../context/MainContext";

export const Login = () => {
  const { signIn } = useMainContext();

  // FORM SUBMIT HANDLERS
  const onFinish = (val) => {
    console.log("Success:", val);

    if ((val.username, val.password)) {
      localStorage.setItem("user", val.username);
      signIn();
    }
  };

  return (
    <div className="login">
      <LoginForm onFinish={onFinish} />
    </div>
  );
};
