import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import vitnage from "../assets/image/png/vitnagetypewriter.png";


const Symptoms = () => {
  return (
    <>
      <section className="py-5 my-lg-4">
        <Container className="contaner1">
          <div className="bg_clr">
            <div className="py-sm-5 py-2 bg_lightblack text-center">
              <h2 className="ff_PlusJakarta fs_4xl fw_500 text-white opacity_9">
                Symptoms of the disease
              </h2>
              <p className="ff_Roboto fs_md fw_400 clr_lightwhite opacity_7">
                Macular degeneration is a progressive eye disease that can cause
                a range of problems, including:
              </p>
            </div>
            <Row className="symptomsshadows flex-column-reverse flex-lg-row ps-lg-5 position-relative align-items-center">
              <Col lg={7}>
                <div className="ps-1">
                  <p className="ff_PlusJakarta fw_500 fs_3xl text-white mb-2">
                    Blurred or distorted central vision
                  </p>
                  <p className="ff_Roboto fs_md fw_400 clr_lightwhite opacity_7 mb-sm-5">
                    This is one of the primary symptoms of macular degeneration.
                    As the disease progresses, it can cause the vision to become
                    increasingly blurred or distorted, making it difficult to
                    read, recognize faces, or perform other tasks that require
                    clear vision.
                  </p>
                </div>
                <div className="d-flex gap-3 pb-2">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.1478 25.3015L13.3919 18.5656C13.3117 18.4854 13.2548 18.3986 13.2211 18.305C13.1874 18.2115 13.1709 18.1112 13.1714 18.0043C13.1714 17.8974 13.188 17.7972 13.2211 17.7036C13.2543 17.61 13.3112 17.5232 13.3919 17.443L20.1478 10.6871C20.3349 10.5 20.5688 10.4064 20.8495 10.4064C21.1301 10.4064 21.3707 10.5067 21.5712 10.7071C21.7716 10.9076 21.8719 11.1415 21.8719 11.4088C21.8719 11.6761 21.7716 11.91 21.5712 12.1104L15.6773 18.0043L21.5712 23.8982C21.7583 24.0853 21.8518 24.316 21.8518 24.5902C21.8518 24.8645 21.7516 25.1015 21.5511 25.3015C21.3506 25.502 21.1168 25.6022 20.8495 25.6022C20.5822 25.6022 20.3483 25.502 20.1478 25.3015Z"
                      fill="#27BBA2"
                    />
                    <circle
                      cx="17.6415"
                      cy="18.0043"
                      r="17.2406"
                      stroke="#27BBA2"
                      stroke-width="0.801887"
                    />
                  </svg>

                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="17.9247"
                      cy="18.0043"
                      r="17.6415"
                      fill="#27BBA2"
                    />
                    <path
                      d="M15.4186 10.7071L22.1745 17.4429C22.2547 17.5231 22.3116 17.61 22.3453 17.7035C22.379 17.7971 22.3955 17.8973 22.395 18.0042C22.395 18.1112 22.3784 18.2114 22.3453 18.3049C22.3121 18.3985 22.2552 18.4854 22.1745 18.5656L15.4186 25.3215C15.2315 25.5086 14.9976 25.6021 14.7169 25.6021C14.4363 25.6021 14.1957 25.5019 13.9952 25.3014C13.7948 25.1009 13.6945 24.867 13.6945 24.5998C13.6945 24.3325 13.7948 24.0986 13.9952 23.8981L19.8891 18.0042L13.9952 12.1104C13.8081 11.9233 13.7146 11.6926 13.7146 11.4183C13.7146 11.1441 13.8148 10.907 14.0153 10.7071C14.2158 10.5066 14.4496 10.4064 14.7169 10.4064C14.9842 10.4064 15.2181 10.5066 15.4186 10.7071Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                </div>
              </Col>
              <Col lg={5}>
                <div>
                  <img src={vitnage} alt="vitnage" className="w-100" />
                </div>
              </Col>
            </Row>
          </div>

          
        </Container>
      </section>
    </>
  );
};

export default Symptoms;
