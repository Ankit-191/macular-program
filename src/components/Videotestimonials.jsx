import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import AMD from "../assets/image/webp/videohead.webp";
import Jenny from "../assets/image/webp/oldwoman.webp";
import Dianne from "../assets/image/webp/dianne.webp";
import Jacob from "../assets/image/webp/jacob.webp";
import Cameron from "../assets/image/webp/cameronn.webp";
import Esther from "../assets/image/webp/esther.webp";
import Eleanor from "../assets/image/webp/eleanor.webp";
import Greenbtn from "./Greenbtn";

const Videotestimonials = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      <section className="my-5 py-lg-5 position-relative videoshadow">
        <Container className="contaner1 video_centershadow">
          <h2 className="ff_PlusJakarta fw_500 fs_4xl clr_lightwhite text-center mb-0 video_arrows position-relative">
            Video Testimonials
          </h2>
          <Row className="videsshadow">
            <Col xs={12}>
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="mt-5 youtubelogo position-relative"
                  onClick={() => handleShow(v)}
                >
                  <img src={AMD} alt="AMD" className="w-100" />
                  {typeof v === "string" && `below ${v.split("-")[0]}`}
                </div>
              ))}
              <Modal
                show={show}
                fullscreen={fullscreen}
                onHide={() => setShow(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    A patient named Paddy, was suffering from dry AMD and
                    temporary vision loss. Our strategies cured her and now she
                    is living happily.
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <iframe
                    src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                    frameborder="0"
                    allow="autoplay"
                    allowfullscreen
                    title="video"
                    width={"100%"}
                    height={"100%"}
                  />
                </Modal.Body>
              </Modal>
              <p className="ff_PlusJakarta fw_500 fs_3xl text-white mt-4 pt-1">
                A patient named Paddy, was suffering from dry AMD and temporary
                vision loss. Our strategies cured her and now she is living
                happily.
              </p>
            </Col>
            <Col sm={6} lg={4}>
              <div className="videobg mt-lg-5 mt-3">
                {values.map((v, idx) => (
                  <div
                    key={idx}
                    className="youtubelogo2 position-relative"
                    onClick={() => handleShow(v)}
                  >
                    <img
                      src={Jenny}
                      alt="Jenny Wilson"
                      className="w-100 br_10"
                    />
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </div>
                ))}
                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia cons
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <iframe
                      src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                      frameborder="0"
                      allow="autoplay;"
                      allowfullscreen
                      title="video"
                      width={"100%"}
                      height={"100%"}
                    />
                  </Modal.Body>
                </Modal>
                <div className="p-3">
                  <p className=" ff_PlusJakarta fw_500 fs_xl clr_lightwhite">
                    Jenny Wilson
                  </p>
                  <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8 mb-4">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div className="videobg mt-lg-5 mt-3">
                {values.map((v, idx) => (
                  <div
                    key={idx}
                    className="youtubelogo2 position-relative"
                    onClick={() => handleShow(v)}
                  >
                    <img
                      src={Dianne}
                      alt="Dianne Russell"
                      className="w-100 br_10"
                    />
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </div>
                ))}
                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia cons
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <iframe
                      src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                      frameborder="0"
                      allow="autoplay;"
                      allowfullscreen
                      title="video"
                      width={"100%"}
                      height={"100%"}
                    />
                  </Modal.Body>
                </Modal>
                <div className="p-3">
                  <p className=" ff_PlusJakarta fw_500 fs_xl clr_lightwhite">
                    Dianne Russell
                  </p>
                  <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8 mb-4">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div className="videobg mt-lg-5 mt-3">
                {values.map((v, idx) => (
                  <div
                    key={idx}
                    className="youtubelogo2 position-relative"
                    onClick={() => handleShow(v)}
                  >
                    <img
                      src={Jacob}
                      alt="Jacob Jones"
                      className="w-100 br_10"
                    />
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </div>
                ))}
                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia cons
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <iframe
                      src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                      frameborder="0"
                      allow="autoplay;"
                      allowfullscreen
                      title="video"
                      width={"100%"}
                      height={"100%"}
                    />
                  </Modal.Body>
                </Modal>
                <div className="p-3">
                  <p className=" ff_PlusJakarta fw_500 fs_xl clr_lightwhite">
                    Jacob Jones
                  </p>
                  <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8 mb-4">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div className="videobg mt-lg-5 mt-3">
                {values.map((v, idx) => (
                  <div
                    key={idx}
                    className="youtubelogo2 position-relative"
                    onClick={() => handleShow(v)}
                  >
                    <img
                      src={Cameron}
                      alt="Cameron Williamson"
                      className="w-100 br_10"
                    />
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </div>
                ))}
                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia cons
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <iframe
                      src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                      frameborder="0"
                      allow="autoplay;"
                      allowfullscreen
                      title="video"
                      width={"100%"}
                      height={"100%"}
                    />
                  </Modal.Body>
                </Modal>
                <div className="p-3">
                  <p className=" ff_PlusJakarta fw_500 fs_xl clr_lightwhite">
                    Cameron Williamson
                  </p>
                  <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8 mb-4">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div className="videobg mt-lg-5 mt-3">
                {values.map((v, idx) => (
                  <div
                    key={idx}
                    className="youtubelogo2 position-relative"
                    onClick={() => handleShow(v)}
                  >
                    <img
                      src={Esther}
                      alt="Esther Howard"
                      className="w-100 br_10"
                    />
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </div>
                ))}
                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia cons
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <iframe
                      src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                      frameborder="0"
                      allow="autoplay;"
                      allowfullscreen
                      title="video"
                      width={"100%"}
                      height={"100%"}
                    />
                  </Modal.Body>
                </Modal>
                <div className="p-3">
                  <p className=" ff_PlusJakarta fw_500 fs_xl clr_lightwhite">
                    Esther Howard
                  </p>
                  <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8 mb-4">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div className="videobg mt-lg-5 mt-3">
                {values.map((v, idx) => (
                  <div
                    key={idx}
                    className="youtubelogo2 position-relative"
                    onClick={() => handleShow(v)}
                  >
                    <img
                      src={Eleanor}
                      alt="Eleanor Pena"
                      className="w-100 br_10"
                    />
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </div>
                ))}
                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia cons
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <iframe
                      src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                      frameborder="0"
                      allow="autoplay;"
                      allowfullscreen
                      title="video"
                      width={"100%"}
                      height={"100%"}
                    />
                  </Modal.Body>
                </Modal>
                <div className="p-3">
                  <p className=" ff_PlusJakarta fw_500 fs_xl clr_lightwhite">
                    Eleanor Pena
                  </p>
                  <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8 mb-4">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4 pt-lg-3">
            <Greenbtn btntext="See all" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Videotestimonials;
