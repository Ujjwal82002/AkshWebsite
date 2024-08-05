import About from "./components/About";
import Banner from "./components/Banner";
import Client from "./components/Client";
// import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
// import Header from "./components/Header";
import CenteredContent from "./components/Main";
import MenuSection from "./components/MenuSection";
import Services from "./components/Services";
import Team from "./components/Team";

// import Banner from "./components/Banner";
// import Client from "./components/Client";
// // import Footer from "./components/Footer";
// import Gallery from "./components/Gallery";
// // import Header from "./components/Header";
// import CenteredContent from "./components/Main";
// import MenuSection from "./components/MenuSection";
// import Services from "./components/Services";
// import Team from "./components/Team";
// import Team from "./components/Team";
import AboutPage from "./Pages/About/About";
// import Policy from "./Pages/Policy/Policy";
// import TermCondition from "./Pages/TermConditions/TermCondition";

export default function Display() {
  return (
   <>
      <Banner />
      <div id="about"><About /></div>
      <Services />
      <MenuSection />
      <CenteredContent />
      <div id="gallery"><Gallery /></div>
      <div id="team"><Team /></div>
      <div id="testimonial"><Client /></div>
      <AboutPage />
   </>
  );
}
