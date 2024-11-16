import React, { Component, FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import "../css/WomensRules.css";

const WomensRules: FC = () => {
  const columns: JSX.Element[] = [
    <Col md={6} lg={6} className="left col-md-6 col-lg-6">
      <p> Camden fields two senior teams in SEWLA, with an opportunity to perform and compete for any player. Whether you are a current international player or somebody just starting out on your lacrosse journey, we have a squad for you! Coaching is provided at trainings and matches by England Coach Rob Ingham Clark. 
      </p>
    </Col>,
    <Col md={6} lg={6} className="right col-md-6 col-lg-6">
      <p>Womens Team</p>
    </Col>,
  ];

  const renderColumns = () => {
    return isMobile ? [...columns].reverse() : columns;
  };

  return (
    <Container fluid className="womensRules">
      <Row className="h-100 align-items-center">{renderColumns()}</Row>
    </Container>
  );
};
export default WomensRules;
