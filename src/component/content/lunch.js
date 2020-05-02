import React, { useState } from "react";
import { connect } from "react-redux";
import { increment } from "../../_action/state";
import Box from "../box";
import news from "../../images/chiken.jpg";
import star from "../../images/star.png";

const Lunch = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
    var data = count;
    increment(data);
    //  setA("SDSDS");
  };

  return (
    <div className="containers-1">
      <Box variant="lg">
        <div style={{ display: "flex", width: "100%" }}>
          <div className="new">
            <img src={news} alt="news" width="330px" height="220px" />
          </div>
          <div style={{ margin: "20px" }}>
            {count}
            <div className="op">
              4,6 <img src={star} alt="star" width="15px" />
              <img src={star} alt="star" width="15px" />
              <img src={star} alt="star" width="15px" />
              <img src={star} alt="star" width="15px" />
              <img src={star} alt="star" width="15px" />
              <h4>Roasted Chicken with Scramble Egg</h4>
              <p>By. kulina </p>
              <h4>Rp. 300.000 </h4>
            </div>
          </div>
          <div>
            <div style={{ margin: " 150px 40px 0px 80px" }}>
              <button className="add" onClick={inc}>
                add +
              </button>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { increment: (data) => dispatch(increment(data)) };
};
export default connect(mapDispatchToProps)(Lunch);
