import React from "react";
import { Button } from "./Button";
import { InputField } from "./InputField";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  return (
    <form className="flex flex-col items-center space-y-8 shadow-xl rounded-lg p-10 min-w-min w-full">
      <h1 className="text-2xl text-center">Log in</h1>
      <InputField label={"Email"} />
      <InputField label={"Password"} />
      <div className="flex flex-col space-y-1">
        <Button type="button" onClick={() => navigate("/chat")}>
          Login
        </Button>
        <p className="text-xl text-center">or</p>
        <Button type="button" onClick={() => navigate("/signup")}>
          Sign up
        </Button>
      </div>
    </form>
  );
};

export { Login };
