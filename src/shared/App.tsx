import React from "react";
import { Route, Routes } from "react-router";
import ChatBox from "../components/chat/chatBox";
import Navbar from "../components/navbar/navbar";
import Main from "../pages/main/main";
import Trip from "../pages/trip/trip";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="trip/:city" element={<Trip />} />
        {/* <Route path="chat" element={<ChatBox />} /> */}
      </Routes>
    </>
  );
}

export default App;
