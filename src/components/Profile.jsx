import React from "react";
import { Button } from "./Button";
import { InputField } from "./InputField";

const Profile = () => {
  return (
    <form className="flex flex-col items-center space-y-8 shadow-xl rounded-lg p-10 min-w-min w-full">
      <h1 className="text-2xl text-center">Profile</h1>
      <p>name</p>
      <p>email</p>
      
      <div className="flex flex-col space-y-1">
        <Button type="button" onClick={() => console.log("Send button clicked")}>
          Edit
        </Button>
      </div>
    </form>
  );
};

export { Profile };
