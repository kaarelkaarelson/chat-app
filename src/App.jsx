import React from "react";
import { Layout } from "./layout/Layout";
import { Login } from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound";
import { SignUp } from "./components/SignUp";
import { Chat } from "./components/Chat";
import { Profile } from "./components/Profile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="chat" element={<Chat />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
