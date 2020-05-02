import React, { useState } from "react";

const Button = (props) => {
  const [variant] = useState(props.variant);

  return (
    <div>
      <div>
        <button className={`${variant}`} onClick={props.onClick}>
          {props.children}
        </button>
      </div>
    </div>
  );
};

export default Button;
