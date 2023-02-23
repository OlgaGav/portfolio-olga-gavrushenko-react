import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({});

  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouchedFields((prevTouchedFields) => ({ ...prevTouchedFields, [name]: true }));

    if (!value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "This field is required" }));
    } else if (name === "email" && !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "Please provide a valid email address" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = formData;
    console.log(name, email, message);
    // Perform validation checks here
    // If validation passes, save the data to the server
    // await fetch('/api/messages', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ name, email, message }),
    // });
    // setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="tab-container">
      <h2>Contact</h2>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              isInvalid={touchedFields.name && !!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              isInvalid={touchedFields.email && !!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              isInvalid={touchedFields.message && !!errors.message}
            />
            <Form.Control.Feedback type="invalid">
              Please add a message.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" className="contact-button">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
