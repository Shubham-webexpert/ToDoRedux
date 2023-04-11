import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreateUser from "./Components/Create/CreateUser";
import UserList from "./Components/UserList/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <CreateUser/>
    

    </div>
  );
}

export default App;
