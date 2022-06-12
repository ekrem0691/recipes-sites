import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Github from "./pages/about/Github";
import Detail from "./pages/details/Detail";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AppRouter from "./router/AppRouter";


function App() {
  const [details, setDetails] = useState({
    label: "",
    image: "",
    ingredientLines: [],
    totalNutrients: {},
  });
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/recipes-sites/" element={<Login />} />
          <Route path="/recipes-sites/home" element={<AppRouter />} />
          <Route path="/recipes-sites/home/search" element={<Home setDetails={setDetails} details={details}/>} />
          <Route path="/recipes-sites/home/about" element={<About />} />
          <Route path="/recipes-sites/home/github" element={<Github />} />
          <Route path="/recipes-sites/home/detail" element={<Detail details = {details}/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
