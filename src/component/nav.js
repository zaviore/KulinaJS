import React, { useState } from "react";
import { connect } from "react-redux";
import back from "../images/back.png";
import Modal from "../component/modal/modal_location";

const Navs = () => {
  return (
    <div className="navs">
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "15%", padding: "15px" }}>
          <img src={back} alt="down" width="20px" />
        </div>
        <div>
          <div>alamat pengataran</div>
          <div style={{ display: "flex" }}>
            <div>
              <h4>Tokopedia Tower </h4>
            </div>
            <div style={{ alignSelf: "center" }}>
              &nbsp;
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { STATES: state.STATES };
};

export default connect(mapStateToProps)(Navs);
