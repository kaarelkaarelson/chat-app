import React from "react";
import { Button } from "./Button";
import { InputField } from "./InputField";

const SignUp = () => {
  return (
    <form className="flex flex-col items-center space-y-8 shadow-xl rounded-lg p-10 min-w-min w-full">
      <h1 className="text-2xl text-center">Sign Up</h1>
      <InputField label={"Email"} />
      <InputField label={"Password"} />
      <div className="flex flex-col space-y-1">
        <Button type="button" onClick={() => console.log("Sign up button clicked")}>
          Sign up
        </Button>
      </div>
    </form>
  );
};

export { SignUp };
