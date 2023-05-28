import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ourpatients from "../assets/image/svg/patientsimg.svg";
import Slider from "react-slick";

const Patinets = () => {
  var outpatinets = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const first = React.useRef();
  return (
    <>
      <section className="py-5 my-lg-5">
        <Container>
          <div className="d-flex flex-column align-items-center mt-lg-5">
            <h2 className="ff_PlusJakarta fw_500 fs_4xl text-white opacity_9 patentsarrows position-relative">
              What our patients say
            </h2>
            <p className=" ff_Roboto fw_400 fs_md clr_lightwhite opacity_7 text-center max_w637 mb-lg-5 mb-4 pb-xl-4">
              Viverra nisi integer convallis ultricies tellus mauris. Ante purus
              pretium ac vitae morbi in ultricies ut. Orci pharetra adipiscing
              ut.
            </p>
          </div>
          <Row className=" justify-content-between align-items-center">
            <Col md={5} lg={5} xl={5}>
              <div className="ourpatientshadow position-relative">
                <img src={ourpatients} alt="" className="w-100" />
              </div>
            </Col>
            <Col md={7} lg={6} xl={5}>
              <Slider {...outpatinets} ref={first}>
                <div className="pe-xl-3">
                  <p className="ff_PlusJakarta fw_500 fs_2xl clr_lightwhite mb-2 pb-1">
                    Alex willson
                  </p>
                  <p className=" ff_Roboto fw_400 fs_md text-white opacity_7 mb-2 pb-1">
                    Lectus adipiscing pulvinar et praesent justo libero luctus
                    tortor. A semper feugiat non dui ut egestas eu. Euismod eu
                    fames ante in vestibulum duis in odio. Amet pharetra mauris
                    at pellentesque. Netus libero nulla eu id.
                  </p>
                  <button className="ff_Roboto fw_400 fs_md clr_00FFCC bg-transparent border-0 readmore">
                    Read More...
                  </button>
                </div>
                <div className="pe-xl-3">
                  <p className="ff_PlusJakarta fw_500 fs_2xl clr_lightwhite mb-2 pb-1">
                    Ankit godara
                  </p>
                  <p className=" ff_Roboto fw_400 fs_md text-white opacity_7 mb-2 pb-1">
                    Lectus adipiscing pulvinar et praesent justo libero luctus
                    tortor. A semper feugiat non dui ut egestas eu. Euismod eu
                    fames ante in vestibulum duis in odio. Amet pharetra mauris
                    at pellentesque. Netus libero nulla eu id.
                  </p>
                  <button className="ff_Roboto fw_400 fs_md clr_00FFCC bg-transparent border-0 readmore">
                    Read More...
                  </button>
                </div>
              </Slider>
              <div className="d-flex gap-3 mt-4 pt-1">
                <svg
                  onClick={() => first.current.slickPrev()}
                  className="hoverarrows"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1478 24.939L13.3919 18.2031C13.3117 18.123 13.2548 18.0361 13.2211 17.9425C13.1874 17.849 13.1709 17.7487 13.1714 17.6418C13.1714 17.5349 13.188 17.4347 13.2211 17.3411C13.2543 17.2476 13.3112 17.1607 13.3919 17.0805L20.1478 10.3246C20.3349 10.1375 20.5688 10.0439 20.8495 10.0439C21.1301 10.0439 21.3707 10.1442 21.5712 10.3447C21.7716 10.5451 21.8719 10.779 21.8719 11.0463C21.8719 11.3136 21.7716 11.5475 21.5712 11.748L15.6773 17.6418L21.5712 23.5357C21.7583 23.7228 21.8518 23.9535 21.8518 24.2277C21.8518 24.502 21.7516 24.7391 21.5511 24.939C21.3506 25.1395 21.1168 25.2397 20.8495 25.2397C20.5822 25.2397 20.3483 25.1395 20.1478 24.939Z"
                    fill="#27BBA2"
                  />
                  <circle
                    cx="17.6415"
                    cy="17.6415"
                    r="17.2406"
                    stroke="#27BBA2"
                    stroke-width="0.801887"
                  />
                </svg>
                <svg
                  onClick={() => first.current.slickNext()}
                  className="hoverarrows"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="17.9247"
                    cy="17.6415"
                    r="17.6415"
                    fill="#27BBA2"
                  />
                  <path
                    d="M15.4186 10.3442L22.1745 17.0801C22.2547 17.1602 22.3116 17.2471 22.3453 17.3407C22.379 17.4342 22.3955 17.5345 22.395 17.6414C22.395 17.7483 22.3784 17.8485 22.3453 17.9421C22.3121 18.0356 22.2552 18.1225 22.1745 18.2027L15.4186 24.9586C15.2315 25.1457 14.9976 25.2393 14.7169 25.2393C14.4363 25.2393 14.1957 25.139 13.9952 24.9386C13.7948 24.7381 13.6945 24.5042 13.6945 24.2369C13.6945 23.9696 13.7948 23.7357 13.9952 23.5352L19.8891 17.6414L13.9952 11.7475C13.8081 11.5604 13.7146 11.3297 13.7146 11.0555C13.7146 10.7812 13.8148 10.5441 14.0153 10.3442C14.2158 10.1437 14.4496 10.0435 14.7169 10.0435C14.9842 10.0435 15.2181 10.1437 15.4186 10.3442Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Patinets;
