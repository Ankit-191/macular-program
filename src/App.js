import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router";
import About from "./About";
import Testimonials from "./Testimonials";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
      </Routes>
    </>
  );
}

export default App;
