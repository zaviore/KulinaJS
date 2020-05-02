import React, { useState } from "react";
import Navs from "../component/nav";
import Content from "../component/content";
import Date from "../component/date";

const Index = () => {
  return (
    <>
      <Navs />
      <Date />
      <div className="containers">
        <Content />
      </div>
    </>
  );
};
export default Index;
