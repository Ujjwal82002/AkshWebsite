import Banner from "./components/Banner";
import Client from "./components/Client";
// import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
// import Header from "./components/Header";
import CenteredContent from "./components/Main";
import MenuSection from "./components/MenuSection";
import Services from "./components/Services";
import Team from "./components/Team";




export default function Display() {
  return (
   <>
   
      <Banner />
      <Services />
      <MenuSection />
      <CenteredContent />
      <Gallery />
      <Team />
      <Client/>
   
   </>
  )
}
