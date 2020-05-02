import React, { useState } from "react";

const Box = (props) => {
  const [variant] = useState(props.variant);
  return <div className={`box-${variant}`}>{props.children} </div>;
};

export default Box;
