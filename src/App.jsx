import { BrowserRouter, Route, Routes } from "react-router-dom";
import Display from "./Display";
import ServicesPage1 from "./components/ServicesPage1";

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Display />}/>
      <Route path= "/servicespage1" element={<ServicesPage1/>}/>
    </Routes>
   </BrowserRouter>

  )

}
