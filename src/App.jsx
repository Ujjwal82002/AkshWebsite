
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Display from "./Display";




export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Display />}/>
    
    </Routes>
   </BrowserRouter>

  )

}
