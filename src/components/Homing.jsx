import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import svg from "../assets/image/svg/clicksvg.svg";
import homingmethod from "../assets/image/png/homingmethod.png";

const Homing = () => {
  return (
    <>
      <section>
        <Container className="contaner1">
          <Row className="align-items-center">
            <Col lg={6}>
              <h3 className="ff_PlusJakarta fs_3xl fw_500 text-white mb-3 pb-1">
                The HOMING Method
              </h3>
              <p className="ff_Roboto fs_md fw_400 text-white opacity_7">
                We will start by taking a detailed medical history, including
                any symptoms you may be experiencing. They will ask about your
                family history of eye diseases and other medical conditions.
              </p>
              <div className="d-flex">
                <img src={svg} alt="" />
                <p className="ff_PlusJakarta fs_md fw_500 text-white mb-2 mt-2 ms-2">
                  Medical History - Patient Portal
                </p>
              </div>
              <p className="ms-4 ps-2 ff_Roboto fw_400 fs_md clr_lightwhite opacity_7 pb-1">
                Quisque arcu erat aenean iaculis nisl molestie et tellus. In
              </p>
              <hr className="border_line" />
              <div className="d-flex mt-1">
                <img src={svg} alt="" />
                <p className="ff_PlusJakarta fs_md fw_500 text-white mb-2 mt-2 ms-2">
                  Lab Test (Insurance Covered)
                </p>
              </div>
              <p className="ms-4 ps-2 ff_Roboto fw_400 fs_md clr_lightwhite opacity_7 pb-1">
                Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                <span className="d-md-block"> purus aliquam mauris</span>
              </p>
              <hr className="border_line" />
              <div className="d-flex mt-1">
                <img src={svg} alt="" />
                <p className="ff_PlusJakarta fs_md fw_500 text-white mb-2 mt-2 ms-2">
                  Customized Macular Program Report
                </p>
              </div>
              <p className="ms-4 ps-2 ff_Roboto fw_400 fs_md clr_lightwhite opacity_7 pb-1">
                Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                <span className="d-md-block"> purus aliquam mauris</span>
              </p>
            </Col>
            <Col lg={6}>
              <div className="position-relative hormonesafter hormonesbefore">
                <img src={homingmethod} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Homing;
