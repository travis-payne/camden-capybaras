import React, { Component, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../css/JoinUs.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
const axios = require("axios").default;

const blankForm = {
  firstName: "",
  lastName: "",
  email: "",
  number: "",
  message: "",
};

export const JoinUs = () => {
  const [formData, setFormData] = useState(blankForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://wci6ukybl0.execute-api.eu-west-2.amazonaws.com/prod/contact-us",
        {
          ...formData,
        }
      )
      .then((res) => {
        alert("Form Submitted, we'll get back to you as soon as possible!");
        console.log("Success");
        console.log(res);
        setFormData(blankForm);
      })
      .catch((err) => {
        console.log("Error:");
        console.log(err);
        alert("Error: " + err);

        setFormData(blankForm);
      });
  };

  const onFormChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  return (
    <Container fluid className="joinUs">
      <Row className="h-100 justify-content-center text-a">
        <div className="text">
          <h2>Join Us</h2>
          <p>
            {" "}
            At Camden we welcome everyone and pride ourselves on the good vibes
            we bring, on and off the field. We would love to get in touch so we
            can keep you updated and welcome you to the team!
          </p>
        </div>
        <Form
          onSubmit={(e) => handleSubmit(e)}
          onChange={(e) => onFormChange(e)}
        >
          <Form.Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Control
                value={formData.firstName}
                placeholder="First Name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Control value={formData.lastName} placeholder="Surname" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="email">
            <Form.Control
              value={formData.email}
              type="email"
              placeholder="Email Address"
            />
          </Form.Group>

          <Form.Group controlId="number">
            <Form.Control
              value={formData.number}
              placeholder="Contact Number"
            />
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Control
              value={formData.message}
              as="textarea"
              rows={5}
              placeholder="Message"
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Row>
      <br />
      <div className="text">
        <a href="https://www.facebook.com/CamdenLacrosse/">
          <img alt="Facebook Page" src={facebook} />
        </a>
        <a href="https://www.instagram.com/camdencapybaras/">
          <img alt="Instagram Page" src={instagram} />{" "}
        </a>
      </div>
    </Container>
  );
};

export default JoinUs;
