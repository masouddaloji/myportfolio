import { useEffect } from "react";
//packages
import { Route, Routes } from "react-router-dom";
import AOS from 'aos';
//style aos
import 'aos/dist/aos.css';
//components
import Home from "./pages/home";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

//styles
import "./App.css";

function App() {
useEffect(()=>{
  AOS.init({duration:1500});
},[])
  return (
    <div className="app ss02 w-full min-h-screen font-iran persian scroll-smooth overflow-y-scroll no-scrollbar">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

