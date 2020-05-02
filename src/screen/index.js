import React, { useState } from "react";
import Navs from "../component/nav";
import Content from "../component/content";

const Index = () => {
  return (
    <>
      <Navs />
      <div className="containers">
        <Content />
      </div>
    </>
  );
};
export default Index;
