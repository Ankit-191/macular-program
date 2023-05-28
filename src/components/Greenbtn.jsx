import React from "react";

const Greenbtn = (props) => {
  return (
    <>
      <button className="ff_PlusJakarta fw_600 green_btn rounded-pill fs_md text-white">
        {props.btntext}
      </button>
    </>
  );
};

export default Greenbtn;
