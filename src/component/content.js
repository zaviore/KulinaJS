import React from "react";
import Lunch from "./content/lunch";
import Dinner from "./content/dinner";
import { Tab, Nav, Row, Col } from "react-bootstrap";
const Content = () => {
  return (
    <div className="content">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={6} style={{ textAlign: "center" }}>
            <Nav variant="pills" className="flex-column">
              <Nav.Link eventKey="first">Lunch</Nav.Link>
            </Nav>
          </Col>
          <Col sm={6} style={{ textAlign: "center" }}>
            <Nav variant="pills" className="flex-column">
              <Nav.Link eventKey="second">Dinner</Nav.Link>
            </Nav>
          </Col>

          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div>
                  <Lunch />
                  <Lunch />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Dinner />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};
export default Content;
