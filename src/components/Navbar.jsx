import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/image/png/logo.png";
import { Link } from "react-router-dom";
import Greenbtn from "./Greenbtn";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";

const Navbar = () => {
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
  }
  if (!head) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Container className="py-3 contaner1">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/">
            <img src={logo} alt="macular program"/>
          </Link>
          <div
            className={`d-flex align-items-center justify-content-center phone ${
              head ? "" : "left_0"
            }`}
          >
            <ul className="d-flex align-items-center gap-lg-5 gap-4 flex-column flex-lg-row">
              <li>
                <Link
                  to="/"
                  className="ff_PlusJakarta fw_400 opacity_7 navhover position-relative  fs_md text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="ff_PlusJakarta fw_400 opacity_7 navhover position-relative fs_md text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="ff_PlusJakarta fw_400 opacity_7 navhover position-relative fs_md text-white"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ff_PlusJakarta fw_400 opacity_7 navhover position-relative fs_md text-white"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ff_PlusJakarta fw_400 opacity_7 navhover position-relative fs_md text-white"
                >
                  Process
                </Link>
              </li>
              <li className="d-lg-none">
                <Greenbtn btntext="Contact Us" />
              </li>
            </ul>
          </div>
          <div onClick={showUl} className="z_30">
            <span className="d-block d-lg-none fs_3xl text-white">
              {head ? <RiMenuUnfoldLine /> : <RiMenuFoldLine />}
            </span>
          </div>
          <div className="d-none d-lg-block">
            <Greenbtn btntext="Contact Us" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
