import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarComponent from "./components/NavbarComponent";
import HeroSectionComponent from "./components/HeroSection";
import LiveShowsComponents from "./components/LiveShowsComponents";
import AboutMeComponent from "./components/AboutMeComponent";
import VideoComponents from "./components/VideoComponents";
import DonationComponent from "./components/DonationComponent";
import FooterComponent from "./components/FooterComponent";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white">
      {/* Header */}
      <NavbarComponent />
      {/* Hero Section */}
      <HeroSectionComponent />
      {/* Live Shows Section */}
      <LiveShowsComponents />
      {/* About & Statistics Section */}
      <AboutMeComponent />
      {/* Videos Section */}
      <VideoComponents />
      {/* Support Section */}
      <DonationComponent />
      {/* Footer */}
      <FooterComponent />
    </div>
  );
}

export default App;
