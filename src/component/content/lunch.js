import React, { useState } from "react";
import { connect } from "react-redux";
import { increment } from "../../_action/state";
import Box from "../box";
import news from "../../images/chiken.jpg";
import star from "../../images/star.png";
import shop from "../../images/shop.png";

const Lunch = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
    var data = count;
    increment(data);
    //  setA("SDSDS");
  };

  return (
    <>
      <div className="containers-1">
        <Box variant="lg">
          <div style={{ width: "100%" }}>
            <div className="new">
              <img src={news} alt="news" width="330px" height="220px" />
            </div>
            <div>
              <div className="op">
                4,6 <img src={star} alt="star" width="15px" />
                <img src={star} alt="star" width="15px" />
                <img src={star} alt="star" width="15px" />
                <img src={star} alt="star" width="15px" />
                <img src={star} alt="star" width="15px" />
                <h4>Roasted Chicken with Scramble Egg</h4>
                By. kulina
                <h4>Rp. 300.000 </h4>
                <div style={{ textAlign: "right" }}>
                  <button className="add" onClick={inc}>
                    add +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
      <div>
        {count > 0 ? (
          <div
            style={{
              backgroundColor: "#a23530",
              padding: "10px",
              position: "fixed",
              bottom: -10,

              left: 0,
              borderRadius: "10px",
              width: "100%",
              color: "white",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <b>{count} Item | Rp. 50.000</b>
                <p style={{ fontSize: "16px" }}>termasuk ongkos kirim</p>
              </div>

              <div>
                <img
                  src={shop}
                  alt="news"
                  width="30px"
                  height="30px"
                  style={{ marginTop: "10px" }}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { increment: (data) => dispatch(increment(data)) };
};
export default connect(mapDispatchToProps)(Lunch);
