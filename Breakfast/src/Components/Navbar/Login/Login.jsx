import React, { useState } from 'react'
import { Button, Form, FormGroup, Container, Row, Col, Card } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { authentication } from '../../../FirebaseCode/FirebaseCode'
import "./Login.css"

const Login = () => {
  const navigate = useNavigate()
  const [LoginDetails, SetLoginDetails] = useState({
    name: "", email: "", password: "", role: ""
  })
  
  const HandleLoginButton = async () => {
    let { email, password, role } = LoginDetails
    if (!email || !password) {
      alert("Please enter both email and password")
      return
    }
    if (!role || role === "Open this select menu") {
      alert("Please select your role")
      return
    }
    try {
      const userlogin = await signInWithEmailAndPassword(authentication, email, password)
      console.log(userlogin)

      if (role === "Admin") {
        localStorage.setItem("Admin", JSON.stringify(userlogin))
      } else if (role === "Customer") {
        localStorage.setItem("Customer", JSON.stringify(userlogin))
      }
      navigate(`/${role}`)
      alert("Welcome to The BreakFast App")
    } catch(err) {
      console.log(err)
      alert("Login failed: " + err.message)
    }
  }

  return (
    <Container fluid className="login-container">
      <Row className="login-row justify-content-center align-items-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={4}>
          <Card className="login-card shadow">
            <Card.Body>
              <div className="login-header">
                <h1 className="login-title">Login</h1>
                <div className="login-divider"></div>
              </div>
              
              <Form className="login-form">
                <FormGroup className="mb-3 form-group">
                  <Form.Label className="form-label">E-Mail</Form.Label>
                  <Form.Control 
                    type='email' 
                    placeholder='Enter Your E-Mail'  
                    onChange={(e) => SetLoginDetails({...LoginDetails, email: e.target.value})}
                    className="form-input"
                  />
                </FormGroup>
                
                <FormGroup className="mb-3 form-group">
                  <Form.Label className="form-label">Password</Form.Label>
                  <Form.Control 
                    type='password' 
                    placeholder='Enter Your Password'  
                    onChange={(e) => SetLoginDetails({...LoginDetails, password: e.target.value})}
                    className="form-input"
                  />
                </FormGroup>
                
                <FormGroup className="mb-4 form-group">
                  <Form.Label className="form-label">Select Your Role</Form.Label>
                  <Form.Select 
                    aria-label="Select role"  
                    onChange={(e) => SetLoginDetails({...LoginDetails, role: e.target.value})}
                    className="form-select"
                  >
                    <option value="">Select your role</option>
                    <option value="Customer">Customer</option>
                    <option value="Admin">Admin</option>
                  </Form.Select>
                </FormGroup>

                <div className="login-button-container">
                  <Button 
                    onClick={HandleLoginButton}
                    className="login-button"
                  >
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login