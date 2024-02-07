import "./App.css";
import { Home } from "./components/Home/Home";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Article } from "./components/Article/Article";
import { useState } from "react";

export default function App() {
  const [categories] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:cardId" element={<Article categories={categories} />}/>
      </Routes>
    </BrowserRouter>
  );
}
