import React from "react";
import { LOGIN_FIELDS } from "./Login.config";
import Input from "../../components/Input";

const Login = () => {
  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2>Login</h2>
      {LOGIN_FIELDS.map((field) => (
        <Input {...field} />
      ))}
    </div>
  );
};

export default Login;
