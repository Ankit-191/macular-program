import React from "react";
import Navbar from "./components/Navbar";
import Patientrecover from "./components/Patientrecover";
import Success from "./components/Success";
import Patinets from "./components/Patinets";
import Askedquestions from "./components/Askedquestions";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Outteam from "./components/Outteam";
import Ourjourney from "./components/Ourjourney";

const About = () => {
  return (
    <>
      <Navbar />
      <Aboutus herotext="About Us" />
      <Ourjourney />
      <Outteam />
      <Patientrecover />
      <Success />
      <Patinets />
      <Askedquestions
        shadow="bg_askedquestion position-relative"
        arrow="questionsarrows position-relative"
      />
      <Footer />
    </>
  );
};

export default About;
