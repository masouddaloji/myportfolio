import { useEffect, useState } from "react";
//packages
import { Route, Routes } from "react-router-dom";
//components
import Home from "./pages/home";
import Layout from "./components/Layout/Layout";

//styles
import "./App.css";

function App() {

  return (
    <div className="app w-full min-h-screen font-iran persian scroll-smooth overflow-y-scroll no-scrollbar">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
