//import { useState } from 'react'
//import './App.css'

//ccd5ae,e9edc9,fefae0,faedcd,d4a373


import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import TeachingExamples from "./pages/TeachingExamples";
import Calendar from "./pages/Calendar";
import ScrollToTop from "./ScrollToTop";
import FAQ from "./pages/FAQ";

function App() {

  return (
    <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachingexamples" element={<TeachingExamples />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
    </>
  )
}

export default App
