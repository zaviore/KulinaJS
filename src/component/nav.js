import React, { useState } from "react";
import { connect } from "react-redux";
import down from "../images/down.png";
import Modal from "../component/modal/modal_location";

const Navs = () => {
  return (
    <div className="navs">
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "10%", padding: "5px" }}></div>
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
