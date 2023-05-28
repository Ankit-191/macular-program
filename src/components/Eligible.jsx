import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import yeseligible from "../assets/image/svg/yessvg.svg";
import yescheckbox from "../assets/image/svg/eligibleyesarrow.svg";
import cross from "../assets/image/svg/cross.svg";
import Greenbtn from "./Greenbtn";

const Eligible = () => {
  return (
    <>
      <section className="my-5 py-lg-5">
        <Container className="contaner1 position-relative eligilbleendshadow">
          <h2 className="ff_PlusJakarta fw_500 fs_4xl text-white opacity_9 text-center mb-1 eligiblearrows">
            Who will be eligible for{" "}
            <span className="d-block"> the Program</span>
          </h2>
          <Row className="justify-content-center mt-lg-5 mt-3">
            <Col lg={5}>
              <div className="eligibleyes position-relative overflow-hidden p-4 p-lg-5 ">
                <img src={yeseligible} alt="" className="mb-3" />
                <div className="d-flex align-items-center mb-2 mt-4">
                  <img src={yescheckbox} alt="" />
                  <p className="ff_Roboto fw_400 fs_md mb-0 ps-3 clr_lightwhite">
                    Prevention vision loss
                  </p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img src={yescheckbox} alt="" />
                  <p className="ff_Roboto fw_400 fs_md mb-0 ps-3 clr_lightwhite">
                    Drusen
                  </p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img src={yescheckbox} alt="" />
                  <p className="ff_Roboto fw_400 fs_md mb-0 ps-3 clr_lightwhite">
                    Wet in an eye
                  </p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img src={yescheckbox} alt="" />
                  <p className="ff_Roboto fw_400 fs_md mb-0 ps-3 clr_lightwhite">
                    Diabetic Retinopathy
                  </p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img src={yescheckbox} alt="" />
                  <p className="ff_Roboto fw_400 fs_md mb-0 ps-3 clr_lightwhite">
                    Prevention wet AMD
                  </p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img src={yescheckbox} alt="" />
                  <p className="ff_Roboto fw_400 fs_md mb-0 ps-3 clr_lightwhite">
                    Vision loss
                  </p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img src={yescheckbox} alt="" />
                  <p className="ff_Roboto fw_400 fs_md mb-0 ps-3 clr_lightwhite">
                    Wet in both eyes
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={yescheckbox} alt="" />
                  <p className="ff_Roboto fw_400 fs_md mb-0 ps-3 clr_lightwhite">
                    Cataract + AMD
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="eligibleyes position-relative mt-4 mt-lg-0 overflow-hidden p-4 p-lg-5  h-100">
                <img src={cross} alt="" className="mb-3" />
                <div className="d-flex align-items-center mb-2 mt-4">
                  <img src={yescheckbox} alt="" />
                  <p className="ff_Roboto fw_400 fs_md mb-0 ps-3 clr_lightwhite">
                    Macular hole
                  </p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img src={yescheckbox} alt="" />
                  <p className="ff_Roboto fw_400 fs_md mb-0 ps-3 clr_lightwhite">
                    Irreversible legal Blindness
                  </p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img src={yescheckbox} alt="" />
                  <p className="ff_Roboto fw_400 fs_md mb-0 ps-3 clr_lightwhite">
                    Macular Puckar
                  </p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img src={yescheckbox} alt="" />
                  <p className="ff_Roboto fw_400 fs_md mb-0 ps-3 clr_lightwhite">
                    Chemotherapy
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4 pt-3">
            <Greenbtn btntext="Book Call" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Eligible;
