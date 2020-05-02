import React, { useState } from "react";

const Dates = (props) => {
  const [type, variant] = useState(props);
  return (
    <div>
      <label> {props.label}</label>
      <div className=""></div>
    </div>
  );
};

export default Dates;
