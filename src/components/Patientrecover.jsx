import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import doctor from "../assets/image/webp/usinginjection.webp";
import Greenbtn from "./Greenbtn";
import eye from "../assets/image/svg/eye.svg";
import patient from "../assets/image/svg/patientrecover.svg";

const Patientrecover = () => {
  return (
    <>
      <section className="py-5 my-lg-5">
        <Container className="contaner1">
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="Patient_Recover position-relative d-flex justify-content-center mb-5">
                <img src={doctor} alt="" className="w_90" />
                <div className="d-flex p-2 bg_clr_eye position-absolute">
                  <img src={eye} alt="" />
                  <p className="ff_Poppins fw_400 fs_md clr_lightwhite mb-0 ms-3">
                    Macular Degeneration
                  </p>
                </div>
                <div className="pantien_bg position-absolute">
                  <p className="mb-2 ff_Poppins fw_600 fs_md clr_lightwhite">
                    <img src={patient} alt="" className="me-2" /> Patient
                    Recover
                  </p>
                  <p className="ff_Poppins fw_400 fs_md clr_lightwhite opacity_9 mb-0">
                    We are using an injection to stop the growth factor of
                    Retina
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg={7}
              className="d-flex justify-content-start justify-content-lg-end position-relative mt-5 mt-lg-0"
            >
              <div className="mw_555 arrowsafter">
                <p className="ff_PlusJakarta fw_500 fs_4xl text-white opacity_9 pb-1">
                  More than 50% patients recovered
                </p>
                <p className=" ff_Poppins fw_400 fs_md clr_lightwhite opacity_7 mb-lg-4 pb-3">
                  In 2013, We conducted a test with 365 dry and wet AMD
                  patients. In this test recovery rate of patients is 48% of dry
                  AMD and 60% of wet AMD. Another patient named Paddy, was
                  suffering from dry AMD and temporary vision loss. Our
                  strategies cured her and now she is living happily.
                </p>
                <Greenbtn btntext="Book Call" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Patientrecover;
