import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import cleveland from "../assets/image/webp/cleveland.webp";

const Success = () => {
  return (
    <>
      <section className="bg_successsection py-md-5 my-lg-5 py-lg-3 position-relative zindex_4 h_647">
        <Container className="contaner1">
          <Row className=" align-items-center">
            <Col lg={6} className="pt-xl-5">
              <div className="bg_success mt-xl-5">
                <h2 className="ff_PlusJakarta fw_500 fs_4xl clr_lightwhite mb-3">
                  Success: Strive, Thrive, and Shine
                </h2>
                <p className=" ff_Roboto fw_400 fs_md clr_lightwhite opacity_7 mb-5">
                  When it comes to achieving success, there are certain
                  qualities that can help you reach your goals. Had it not been
                  for our success in many patients we may never have pursued
                  macular degeneration
                </p>
                <button className="ff_PlusJakarta fw_600 fs_md learnbtn">
                  Learn More
                </button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="position_absolute h_552 zindex_1 end-0 top_43 mt-3 mt-lg-0">
                <img src={cleveland} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Success;
