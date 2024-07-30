
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Display from "./Display";
import Part from "./Pages/Web/Part";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/web" element={<Part />} />
      
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}
