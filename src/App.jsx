
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Display from "./Display";
import Header from "./components/Header";
import Footer from "./components/Footer";




export default function App() {
  return (
    <>
    <Header />
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Display />}/>
    
    </Routes>
   </BrowserRouter>
   <Footer />
</>
  )

}
