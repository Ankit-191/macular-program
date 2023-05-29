import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rodney from "../assets/image/webp/rodney.webp";
import Gunther from '../assets/image/webp/wetimg2.webp'
import left from "../assets/image/svg/sliderleftarrow.svg";
import right from "../assets/image/svg/sliderrightarrow.svg";
import stary from "../assets/image/svg/Staryellow.svg";
import starw from "../assets/image/svg/Starwhite.svg";
import six from "../assets/image/svg/six.svg";
import Slider from "react-slick";
const Wet = () => {
  var wet = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const arrow = React.useRef();
  return (
    <>
      <section className="my-5 py-lg-5 overflow-hidden">
        <Container className=" contaner1">
          <div className="d-flex gap-4">
            <button className="ff_Roboto fw_500 fs_xl clr_lightwhite btnwet">
              Wet AMD Testimonials
            </button>
            <button className="ff_Roboto fw_500 fs_xl clr_lightwhite btndry">
              Dry AMD Testimonials
            </button>
          </div>
          <div className="wetslider mt-lg-5 mt-3">
            <Slider {...wet} ref={arrow}>
              <div className="px-md-3">
                <div className="p-2 p-lg-5 bg_wet position-relative overflow-hidden">
                  <Row className="justify-content-between align-items-center p-lg-3 pt-3">
                    <Col md={5} lg={4}>
                      <div className="pe-3 rodneyimg_ractange position-relative">
                        <img
                          src={Rodney}
                          alt="Rodney Gunther"
                          className="w-100"
                        />
                      </div>
                    </Col>
                    <Col md={7} lg={7}>
                      <div>
                        <img
                          src={six}
                          alt="slicoln"
                          className=" position-relative sixsvf"
                        />
                        <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8">
                          My experience with the Rozakis
                          institute/Advanced-Wellness has been a success. I was
                          receiving the eye shots, but after the nutritional
                          program recommended by Dr. Rozakis, my eyesight in my
                          damaged eye improved and now I have gone from monthly
                          shots to a five month period, and I am expecting to
                          stop them altogether, soon These research have their
                          hands on a valuable remedy and are successful with
                          their pioneering <br />
                          Thanks to them!
                        </p>
                        <p className=" ff_PlusJakarta fw_500 fs_2xxl text-white mt-3">
                          Rodney Gunther
                        </p>
                        <div className="d-flex gap-2">
                          <img src={stary} alt="star" />
                          <img src={stary} alt="star" />
                          <img src={stary} alt="star" />
                          <img src={stary} alt="star" />
                          <img src={starw} alt="star" />
                        </div>
                        <div className="d-flex gap-3 justify-content-end">
                          <img
                            src={left}
                            alt="arrows left"
                            onClick={() => arrow.current.slickPrev()}
                            className="crsor_pointer"
                          />
                          <img
                            src={right}
                            alt="arrows right"
                            onClick={() => arrow.current.slickNext()}
                            className="crsor_pointer"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="px-md-3">
                <div className="p-2 p-lg-5  bg_wet position-relative overflow-hidden">
                  <Row className="justify-content-between  p-lg-3 pt-3">
                    <Col md={5} lg={4}>
                      <div className="pe-3 rodneyimg_ractange position-relative">
                        <img
                          src={Gunther}
                          alt="Rodney Gunther"
                          className="w-100"
                        />
                      </div>
                    </Col>
                    <Col md={7} lg={7}>
                      <div>
                        <img
                          src={six}
                          alt="slicoln"
                          className=" position-relative sixsvf"
                        />
                        <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8">
                          My experience with the Rozakis
                          institute/Advanced-Wellness has been a success. I was
                          receiving the eye shots, but after the nutritional
                          program recommended by Dr. Rozakis, my eyesight in my
                          damaged eye improved and now I have gone from monthly
                          shots to a five month period, and I am expecting to
                          stop them altogether, soon These research have their
                          hands on a valuable remedy and are successful with
                          their pioneering <br />
                          Thanks to them!
                        </p>
                        <p className=" ff_PlusJakarta fw_500 fs_2xxl text-white mt-3">
                          Rodney Gunther
                        </p>
                        <div className="d-flex gap-2">
                          <img src={stary} alt="star" />
                          <img src={stary} alt="star" />
                          <img src={stary} alt="star" />
                          <img src={stary} alt="star" />
                          <img src={starw} alt="star" />
                        </div>
                        <div className="d-flex gap-3 justify-content-end">
                          <img
                            src={left}
                            alt="arrows left"
                            onClick={() => arrow.current.slickPrev()}
                            className="crsor_pointer"
                          />
                          <img
                            src={right}
                            alt="arrows right"
                            onClick={() => arrow.current.slickNext()}
                            className="crsor_pointer"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="px-sm-3">
                <div className="p-2 p-lg-5  bg_wet position-relative overflow-hidden">
                  <Row className="justify-content-between  p-lg-3 pt-3">
                    <Col md={5} lg={4}>
                      <div className="pe-3 rodneyimg_ractange position-relative">
                        <img
                          src={Gunther}
                          alt="Rodney Gunther"
                          className="w-100"
                        />
                      </div>
                    </Col>
                    <Col md={7} lg={7}>
                      <div>
                        <img
                          src={six}
                          alt="slicoln"
                          className=" position-relative sixsvf"
                        />
                        <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8">
                          My experience with the Rozakis
                          institute/Advanced-Wellness has been a success. I was
                          receiving the eye shots, but after the nutritional
                          program recommended by Dr. Rozakis, my eyesight in my
                          damaged eye improved and now I have gone from monthly
                          shots to a five month period, and I am expecting to
                          stop them altogether, soon These research have their
                          hands on a valuable remedy and are successful with
                          their pioneering <br />
                          Thanks to them!
                        </p>
                        <p className=" ff_PlusJakarta fw_500 fs_2xxl text-white mt-3">
                          Rodney Gunther
                        </p>
                        <div className="d-flex gap-2">
                          <img src={stary} alt="star" />
                          <img src={stary} alt="star" />
                          <img src={stary} alt="star" />
                          <img src={stary} alt="star" />
                          <img src={starw} alt="star" />
                        </div>
                        <div className="d-flex gap-3 justify-content-end">
                          <img
                            src={left}
                            alt="arrows left"
                            onClick={() => arrow.current.slickPrev()}
                            className="crsor_pointer"
                          />
                          <img
                            src={right}
                            alt="arrows right"
                            onClick={() => arrow.current.slickNext()}
                            className="crsor_pointer"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Wet;
