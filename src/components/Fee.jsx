import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import girlimgfee from "../assets/image/webp/feeimg.webp";
const Fee = () => {
  return (
    <>
      <section className="py-5 my-lg-5 position-relative">
        <Container className="contaner1 feeshadow1">
          <Row>
            <Col lg={5}>
              <div className="position-relative feearow">
                <p className="ff_PlusJakarta fw_500 fs_4xl text-white opacity_9">
                  Fee Structure
                </p>
                <span className="ps-5 mt-lg-5">
                  <img src={girlimgfee} alt="" className="w_80 mt-lg-5 pt-4" />
                </span>
              </div>
            </Col>
            <Col lg={7} className="px-4 mt-4 mt-lg-0">
              <div className="feeshadow position-relative leftcross">
                <span className="rightcross"></span>
                <div className="enrollment_bg">
                  <h5 className=" ff_PlusJakarta fw_500 fs_2xl text-white">
                    One Time Enrollment $3000/y
                  </h5>
                  <p className=" ff_Roboto fw_400 fs_md text-white opacity_7">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint Velit officia consequat duis enim
                  </p>
                </div>
                <div className="enrollment_bg mt-4">
                  <h5 className=" ff_PlusJakarta fw_500 fs_2xl text-white">
                    Medical Grade Supplements $80-125/m
                  </h5>
                  <p className=" ff_Roboto fw_400 fs_md text-white opacity_7">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint Velit officia consequat duis enim
                  </p>
                </div>
                <div className="enrollment_bg mt-4">
                  <h5 className=" ff_PlusJakarta fw_500 fs_2xl text-white">
                    Maintenance $450/ Lab check{" "}
                  </h5>
                  <p className=" ff_Roboto fw_400 fs_md text-white opacity_7">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint Velit officia consequat duis enim
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Fee;
