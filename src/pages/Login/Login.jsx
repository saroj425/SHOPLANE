import '../../App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if(validated){
        navigate("/dashboard");
    }  
    
  };
  return (
      <div>
          <div className="signup-header">
            <h2></h2>      
          </div>
          <div className='container'>
            <div className='form-div'>
                <div className='form-head'>
                    <button className='head-button login'>Login</button>
                    <button className='head-button '>Signup</button>
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>                  
                  <Row className='mb-2'>
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                      <Form.Label>Email</Form.Label>
                      <Form.Control required type="text" placeholder="Email" style={{borderRadius:"20px"}}/>
                      <Form.Control.Feedback type="invalid">Enter Email</Form.Control.Feedback>
                    </Form.Group> 
                  </Row>
                  
                  <Row className='mb-2'>
                    <Form.Group as={Col} md="12" controlId="validationCustom14">
                      <Form.Label>Password</Form.Label>
                      <Form.Control required type="password" placeholder="Password" style={{borderRadius:"20px"}}/>
                      <Form.Control.Feedback type="invalid">Enter Password</Form.Control.Feedback>
                    </Form.Group> 
                  </Row>
                  <Row className='mb-3 '>
                    <Link to="/forgotpassword" className='d-inline-flex justify-content-end'>Forgot Password</Link>
                  </Row>             
                  <Button type="submit" className='sub-signup'>Login</Button>
                </Form>
            </div>   
          </div>
      </div>
  );
}

export default Login;
