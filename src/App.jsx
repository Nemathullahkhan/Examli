import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePageExamli from "./pages/HomePageExamli";
import AboutPageExamli from "./pages/AboutPageExamli";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePageExamli />} />
        <Route path="/about" element={<AboutPageExamli />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
