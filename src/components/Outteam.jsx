import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Brian from "../assets/image/webp/george.webp";
import george from "../assets/image/webp/briana.webp";

const Outteam = () => {
  return (
    <>
      <section className="py-lg-5 pt-5 my-lg-5 position-relative">
        <Container className=" contaner1">
          <h2 className="ff_PlusJakarta fw_500 fs_5xl clr_lightwhite text-center mb-lg-5 pb-2 ourleftshadow">
            Our Team
          </h2>
          <Row className="justify-content-between align-items-center pt-1 ourteamshadow">
            <Col lg={5} xl={5}>
              <div className="georgetrangle position-relative ps-sm-5 ps-3 ">
                <img
                  src={george}
                  alt="George W. Rozakis, MD"
                  className="w-100 br_12 ourteamimg"
                />
              </div>
            </Col>
            <Col lg={7} xl={6} className="ps-xl-5 pt-4 pt-lg-0">
              <h5 className="ff_PlusJakarta fw_500 fs_3xl text-white pb-1">
                George W. Rozakis, MD
              </h5>
              <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8">
                Dr. Rozakis is a board certified biomedical engineer who studied
                medicine at Cornell Medical Center and studied Ophthalmology at
                the Duke Eye Center. Dr. Rozakis worked in the field of Advanced
                Wellness / Functional Medicine & The Optimization of
                Biochemistry for over 15 years. He has applied this science
                age-related chronic conditions. Dr. Rozakis won the advancements
                in healthcare award in Cleveland, Ohio (beating out the
                Cleveland Clinic) in 2015 for his work in Advanced Wellness and
                advocates for this approach to health care to his patients and
                colleagues.
              </p>
              <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8 pb-1">
                Dr. Rozakis pioneered the field of Lasik refractive surgery,
                phakic refractive lenses, and the use of hormones and other
                advanced testing to treat macular degeneration, migraine,
                parkinson's, arthritis, insomnia, menopause, low testosterone,
                auto immune disease and other age-related chronic conditions.
              </p>
            </Col>
          </Row>
          <Row className="flex-column-reverse flex-lg-row align-items-center justify-content-between mt-lg-5 pt-5">
            <Col lg={7} xl={6} className="pt-4 pt-lg-0">
              <h5 className="ff_PlusJakarta fw_500 fs_3xl text-white">
                Brian Bakke, Ph.D.
              </h5>
              <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8">
                Dr. Bakke also holds a master’s degree in human nutrition from
                Columbia University. His master’s thesis work focused on
                studying the clinical nutrition practice patterns used by eye
                professionals in the prevention and treatment of Age-Related
                Macular Degeneration (AMD).
              </p>
              <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8">
                Prior to partnering with the Advanced Wellness Program through
                Investihealth, Dr. Bakke spent 6 years working as chief science
                officer with a medical consulting company. His work as chief
                science officer focused on collaborating with primary care
                physicians in developing personalized nutrition and bioidentical
                hormone based care plans for improving clinical outcomes for
                patients with complex medical conditions. Previously, Dr. Bakke
                spent 7 years working with the multi- national chemistry,
                biotechnology and life science companies BASF and Syngenta as a
                senior chemist.
              </p>
            </Col>
            <Col lg={5} xl={5}>
              <div className="briantrangle position-relative pe-sm-4 pe-3">
                <img
                  src={Brian}
                  alt="Brian Bakke, Ph.D."
                  className="w-100 br_12 ourteamimg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Outteam;
