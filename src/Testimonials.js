import React from "react";
import Navbar from "./components/Navbar";
import Askedquestions from "./components/Askedquestions";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Videotestimonials from "./components/Videotestimonials";
import Wet from "./components/Wet";

const Testimonials = () => {
  return (
    <>
      <Navbar />
      <Aboutus herotext="What people say" />
      <Videotestimonials/>
      <Wet/>
      <Askedquestions />
      <Footer />
    </>
  );
};

export default Testimonials;
