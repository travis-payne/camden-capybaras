import React, { Component, FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import "../css/WomensRules.css";

const WomensRules: FC = () => {
  const columns: JSX.Element[] = [
    <Col md={6} lg={6} className="left col-md-6 col-lg-6">
      <p> A true mixed-ability team, this side features international talent,
         to players who are playing their first ever season of lacrosse - we cater for everyone! Coaching is
        provided by Rob Ingham Clark, Head of Lacrosse at Stowe School,
        Assistant Coach of England Box Lacrosse and former Head Coach of Belgium
        Women 6s and Wales Under-20s. Drawing from his wealth of experience, Rob
        draws the best out of his players whilst ensuring trainings cater for
        all.
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
