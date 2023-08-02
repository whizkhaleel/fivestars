import { useEffect } from "react";
import About from "./about/About";
import Features from "./features/Features";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import KnowHow from "./knowhow/KnowHow";
import Pricing from "./pricing/Pricing";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  useEffect(() => {
    document.title = "FiveStars | Buy Data, Airtime and Pay Bills";
  }, []);

  return (
    <>
      <Header />
      <About />
      <Features />
      <Services />
      <Pricing />
      <KnowHow />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
