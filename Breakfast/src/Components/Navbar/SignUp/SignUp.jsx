import React, { useState } from "react";
import { Button, Form, FormGroup, Alert } from "react-bootstrap";
import { authentication, db } from "../../../FirebaseCode/FirebaseCode";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [SignUpDetails, SetSignUpDetails] = useState({
    name: "",
    password: "",
    email: "",
    role: "",
  });

  // ✅ Validate form fields
  const validateForm = () => {
    const { name, email, password, role } = SignUpDetails;
    if (!name || !email || !password || !role) {
      setError("Please fill all fields");
      return false;
    }
    if (role !== "Customer" && role !== "Admin") {
      setError("Please select a valid role");
      return false;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return false;
    }
    return true;
  };

  // ✅ Firestore save function
  const HandleSignUpForm = async (uid) => {
    try {
      await setDoc(doc(db, "users", uid), {
        name: SignUpDetails.name,
        email: SignUpDetails.email,
        role: SignUpDetails.role,
        id: uid,
        createdAt: new Date(),
      });

     
    } catch (err) {
      console.log("Firestore Error:", err.message);
       alert("Signup Successful!");
      navigate("/Login");
      // setError("Failed to save user details.");
    }
  };

  // ✅ Signup button handler
  const HandleSignUpButton = async () => {
    // if (!validateForm()) return;

    try {
      // Create user in Firebase Authentication
      const userdetails = await createUserWithEmailAndPassword(
        authentication,
        SignUpDetails.email,
        SignUpDetails.password
      );

      console.log("Created User:", userdetails.user);

      // Save to Firestore
      await HandleSignUpForm(userdetails.user.uid);

      // Update Firebase profile
      if (userdetails.user) {
        await updateProfile(userdetails.user, {
          displayName: SignUpDetails.name,
        });
      }
      alert("Signup Successfull")
      navigate("/Login")
    } catch (err) {
      console.log("Signup Error:", err);
      switch (err.code) {
        case "auth/email-already-in-use":
          setError("Email already in use. Please use a different email.");
          break;
        case "auth/invalid-email":
          setError("Invalid email address.");
          break;
        case "auth/weak-password":
          setError("Password should be at least 6 characters.");
          break;
        // default:
        //   setError("Failed to create account. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">SignUp</h1>
      {error && <Alert variant="danger" className="signup-alert">{error}</Alert>}

      <Form className="signup-form">
        <FormGroup className="form-group">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            autoFocus
            className="form-control"
            onChange={(e) =>
              SetSignUpDetails({ ...SignUpDetails, name: e.target.value })
            }
          />
        </FormGroup>

        <FormGroup className="form-group">
          <Form.Label className="form-label">E-Mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Your E-Mail"
            className="form-control"
            onChange={(e) =>
              SetSignUpDetails({ ...SignUpDetails, email: e.target.value })
            }
          />
        </FormGroup>

        <FormGroup className="form-group">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            className="form-control"
            onChange={(e) =>
              SetSignUpDetails({ ...SignUpDetails, password: e.target.value })
            }
          />
        </FormGroup>

        <FormGroup className="form-group">
          <Form.Label className="form-label">Select Your Role</Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="form-select"
            onChange={(e) =>
              SetSignUpDetails({ ...SignUpDetails, role: e.target.value })
            }
          >
            <option value="">Open this select menu</option>
            <option value="Customer">Customer</option>
            <option value="Admin">Admin</option>
          </Form.Select>
        </FormGroup>
      </Form>

      <Button className="signup-button" onClick={HandleSignUpButton}>
        SignUp
      </Button>
    </div>
  );
};

export default SignUp;
