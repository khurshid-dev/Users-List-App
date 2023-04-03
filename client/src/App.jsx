import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import EmpListing from "./components/EmpListing";
import EmpCreate from "./components/EmpCreate";
import EmpDetail from "./components/EmpDetail";
import EmpEdit from "./components/EmpEdit";
import "./index.css";

function App() {
  return (
    <div className="App text-center mt-16">
      <h1 className="text-[30px] font-bold mb-5 text-green-500">React JS CRUD Operations</h1>
      <Routes>
        <Route path="/" exact element={<EmpListing />} />
        <Route path="/create" exact element={<EmpCreate />} />

        <Route path="/detail/:id" exact element={<EmpDetail />} />
        <Route path="/edit/:id" exact element={<EmpEdit />} />
      </Routes>
    </div>
  );
}

export default App;
