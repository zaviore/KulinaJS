import React, { useState } from "react";
import Box from "./box";

const Dates = (props) => {
  const [type, variant] = useState(props);
  return (
    <div className="containers-2">
      <Box variant="lg" style={{ width: "100%" }}>
        <div className="scroll">
          <div className="date">10</div>
          <div className="date">11</div>
          <div className="date">12</div>
          <div className="date">13</div>
          <div className="date">14</div>
          <div className="date">15</div>
          <div className="date">16</div>
          <div className="date">17</div>
          <div className="date">18</div>
        </div>
      </Box>{" "}
    </div>
  );
};

export default Dates;
