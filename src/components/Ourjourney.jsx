import React from "react";
import { Container } from "react-bootstrap";

const Ourjourney = () => {
  return (
    <>
      <section className="py-4 my-lg-5 position-relative ourjourney_shadow">
        <Container className="contaner1 ourjourneycenter_shadow">
          <h2 className=" ff_PlusJakarta fw_400 fs_4xl text-center mb-lg-5 ourjourney_arrow position-relative clr_lightwhite">
            Our Journey
          </h2>
          <div className="timeline">
            <div className="our_journey right d-flex justify-content-end">
              <div className="content">
                <h2 className="ff_PlusJakarta fw_500 fs_2xl text-white">
                  16 May, 2013
                </h2>
                <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8 mb-0 mt-3">
                  My mother had macular degeneration for the last 15 years.
                  After conducting research on the disease, I successfully
                  treated her, and she showed improvement within six months.
                </p>
              </div>
            </div>
            <div className="our_journey left d-flex justify-content-center justify-content-lg-start">
              <div className="content">
                <h2 className="ff_PlusJakarta fw_500 fs_2xl text-white">
                  2015
                </h2>
                <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8 mb-0 mt-3">
                  A patient named Paddy did not respond to injections for her
                  eye treatment. I conducted research and found an alternative
                  treatment that did not involve injections. As a result,
                  Paddy's vision improved, and she was able to see clearly.
                </p>
              </div>
            </div>
            <div className="our_journey right d-flex justify-content-end">
              <div className="content">
                <h2 className="ff_PlusJakarta fw_500 fs_2xl text-white">
                  2017
                </h2>
                <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8 mb-0 mt-3">
                  MIn 2017, I studied migraines and worked with 69 patients.
                  Within three to six months of treatment, 54 patients showed
                  improvement in their vision.
                </p>
              </div>
            </div>
            <div className="our_journey left d-flex justify-content-center justify-content-lg-start">
              <div className="content">
                <h2 className="ff_PlusJakarta fw_500 fs_2xl text-white">
                  2021
                </h2>
                <p className="ff_Roboto fw_400 fs_md clr_lightwhite opacity_8 mb-0 mt-3">
                  In 2020, I studied 365 cases of eye disease and conducted
                  research on them. In 2021, I conducted a test based on my
                  research, and the results showed a recovery rate of 48% for
                  dry AMD and 60% for wet AMD patients.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Ourjourney;
