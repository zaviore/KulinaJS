import React, { useState } from "react";

const Inputs = (props) => {
  const [type, varian] = useState(props);
  return (
    <div>
      <label>{props.label}</label>
      <div className="input-style">
        <input className={`input-${varian}`}>{props.children}</input>
      </div>
    </div>
  );
};

export default Inputs;
