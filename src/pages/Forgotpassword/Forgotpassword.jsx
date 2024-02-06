import React from 'react'
import './forgotpassword.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

const Forgotpassword = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);    
  };
  return (
    <div className="forgot-container">
      <div className='fogot-form'>
        <p>Please provide registered email id to reset password</p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>                              
              <Row className='mb-2'>
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control required type="text" placeholder="Email" />
                  <Form.Control.Feedback type="invalid">Enter Email</Form.Control.Feedback>
                </Form.Group> 
              </Row>       
                          
              <Row>
                <Col md="6">
                  <Button type="submit" className='reset-btn'>Reset Password</Button>
                </Col>
                <Col md="6">
                  <Button type="submit" className='reset-btn'>Login / Signup</Button>
                </Col>
              </Row>
            </Form>
      </div>
    </div>
  )
}

export default Forgotpassword