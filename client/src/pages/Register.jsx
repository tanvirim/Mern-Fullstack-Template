import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { endpoint } from "../constants";

const Register = () => {
  const navigate = useNavigate()
  const [showSpinner , setShowSpinner] = useState(false)

const submitHandler = async(values)=> {
  try {

    setShowSpinner(true)
    await axios.post(endpoint+"/users/register", values)
    message.success("Registration Successfull")
    navigate("/login")
    setShowSpinner(false)
  } catch (error) {
    setShowSpinner(false)
    message.error("Invalid usename or password")
    
    
  }
}

  //Prevent for Login User
  useEffect(()=> {
    if(localStorage.getItem("data")){
      navigate("/")
    }
  } , [navigate])
  //Prevent for Login User

  return (
    <div className="register-page">
  {showSpinner && <Spinner/>}
      <Form onFinish={submitHandler}>
      <h1>Register Now!</h1>
        <Form.Item label="Name" name="name">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Pasword" name="password">
          <Input type="password" />
        </Form.Item>

        <div className="d-flex flex-column gap-3">
          <Link to="/login"> Already Registered ? Click Here to Login</Link>
          <button className="btn btn-primary"> Register</button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
