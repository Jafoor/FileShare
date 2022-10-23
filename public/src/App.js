import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateProfile from "./pages/CreateProfile";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/user/profile/create" element={<CreateProfile />} />
        <Route path="/user/profile" element={<Profile/>}/>
        <Route path="/user/profile/update" element={<EditProfile/>}/>
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
