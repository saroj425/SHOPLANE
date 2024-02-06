import '../../App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
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
        navigate("/login");
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
                    <button className='head-button signup'>Signup</button>
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-2">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                      <Form.Label className=''>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                      />
                      <Form.Control.Feedback type="invalid">Enter First Name</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last Name"
                      />
                      <Form.Control.Feedback type="invalid">Enter Last Name</Form.Control.Feedback>
                    </Form.Group>                    
                  </Row>
                  <Row className='mb-2'>
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Email"
                      />
                      <Form.Control.Feedback type="invalid">Enter Eamil</Form.Control.Feedback>
                    </Form.Group> 
                  </Row>
                  <Row className='mb-2'>
                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                      />
                      <Form.Control.Feedback type="invalid">Enter Last Name</Form.Control.Feedback>
                    </Form.Group> 
                  </Row>
                  <Row className='mb-2'>
                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                        <Form.Label>Country</Form.Label>
                        {/* <Form.Control
                          required
                          type="text"
                          placeholder="Country name"
                        /> */}
                        <Form.Select aria-label="Country">
                          <option>Select Country</option>
                          <option value="India">India</option>
                          <option value="nepal">Nepal</option>
                          <option value="bangladesh">Bangladesh</option>
                        </Form.Select>
                        {/* <Form.Control required as="select" controlId="validationCustom06" type="select" name="">
                          <option value="">Select Country</option>
                          <option value="cash">India</option>
                          <option value="online">Pakistan</option>
                          <option value="card_machine">Nepal</option>
                          <option value="card_machine">Bangladesh</option>
                        </Form.Control> */}
                        
                        <Form.Control.Feedback type="invalid">Select Country Name</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="6" controlId="validationCustom07">
                        <Form.Label>State</Form.Label>
                        <Form.Select aria-label="State">
                          <option value="">Select state</option>
                          <option value="delhi">Delhi</option>
                          <option value="patna">Bihar</option>
                          <option value="">Uttar Pradesh</option>
                          <option value="card_machine">Jharkhand</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Select State Name</Form.Control.Feedback>
                      </Form.Group>  
                  </Row>
                  <Row className='mb-2'>
                    <Form.Group as={Col} md="6" controlId="validationCustom08">
                        <Form.Label>City</Form.Label>
                        <Form.Select aria-label="City">
                          <option value="">Select City</option>
                          <option value="delhi">Delhi</option>
                          <option value="lucknow">Lucknow</option>
                          <option value="kanpur">Kanpur</option>
                          <option value="patna">Patna</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Select City name</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="6" controlId="validationCustom09">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Pincode"
                        />
                        <Form.Control.Feedback type="invalid">Enter Pincode</Form.Control.Feedback>
                      </Form.Group>  
                  </Row>
                  <Row className='mb-2'>
                    <Form.Group as={Col} md="4" controlId="validationCustom10">
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Select aria-label="Country Code">
                          <option value="">ISD Code</option>
                          <option value="delhi">+91</option>
                          <option value="lucknow">0091</option>
                          <option value="kanpur">+62</option>
                          <option value="patna">+01</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Select ISD Code</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="8" controlId="validationCustom11">
                        <Form.Label>&nbsp;</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Last Name"
                        />
                        <Form.Control.Feedback type="invalid">Enter Mobile No</Form.Control.Feedback>
                      </Form.Group>  
                  </Row>
                  <Row className='mb-2'>
                    <Form.Group as={Col} md="6" controlId="validationCustom12">
                        <Form.Label>Fax</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Fax No"
                        />
                        <Form.Control.Feedback type="invalid">Enter Fax No</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="6" controlId="validationCustom13">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Phone No"
                        />
                        <Form.Control.Feedback type="invalid">Enter Phone No</Form.Control.Feedback>
                      </Form.Group>  
                  </Row>
                  <Row className='mb-2'>
                    <Form.Group as={Col} md="12" controlId="validationCustom14">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                      />
                      <Form.Control.Feedback type="invalid">Enter Password</Form.Control.Feedback>
                    </Form.Group> 
                  </Row>
                  <Row className='mb-2'>
                    <Form.Group as={Col} md="12" controlId="validationCustom15">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Conform Password"
                      />
                      <Form.Control.Feedback type="invalid">Confirm Password Shoud be same as password</Form.Control.Feedback>
                    </Form.Group> 
                  </Row>                  
                  <Button type="submit" className='sub-signup'>Signup</Button>
                </Form>
            </div>   
          </div>
      </div>
  );
}

export default Signup;
