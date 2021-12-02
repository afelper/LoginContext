import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext';
import { Form, Button, Alert } from "react-bootstrap";
// import Axios from 'axios'
// import Swal from 'sweetalert2'

const objForm={
    correo: "",
    password:"",
};

export const TheLogin = () => {

    //usar contexto
    const { handleLogin } = useContext(AuthContext);

    const [form,setForm]= useState(objForm)
    const [show,setShow]= useState(false)


    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(form).then((status)=>{
          if (status === 200) {
            setForm(objForm);
            setShow(false);
          } else {
            setShow(true);
          }
        });
        
      };
    
    return (
        <div>
      <h2>Login</h2>
      <Alert variant="danger" show={show}>
        Invalid credentials
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={form.correo}
            onChange={handleForm}
            name="correo"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={form.password}
            onChange={handleForm}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>

    )
}
