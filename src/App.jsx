
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Display from "./Display";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WebDevlopment from "./Pages/Web/WebDevlopment";
import UiUx from "./Pages/UI/UiUx";
import SoftwareDevlopment from "./Pages/Software/SoftwareDevlopment";
import GameDevlopment from "./Pages/Game/GameDevlopment";
import Digital from "./Pages/Digital/Digital";
import AppDevlopment from "./Pages/App/AppDevlopment";




export default function App() {
  return (
    <>
    <Header />
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Display />}/>
      <Route path="/web" element={<WebDevlopment />}/>
      <Route path="/ui" element={<UiUx />}/>
      <Route path="/sw" element={<SoftwareDevlopment />}/>
     <Route path="/gm" element={<GameDevlopment />}/>
     <Route path="/dt" element={<Digital />}/>
     <Route path="/ap" element={<AppDevlopment />}/>
     
    </Routes>
   </BrowserRouter>
   <Footer />
</>
  )

}
