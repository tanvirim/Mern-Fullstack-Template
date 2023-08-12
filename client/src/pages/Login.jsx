import { Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { endpoint } from "../constants";
const Login = () => {

  const navigate = useNavigate()
  const [showSpinner , setShowSpinner] = useState(false)
  


  const submitHandler =async  (values) => {
    
    try {
      setShowSpinner(true)
      const {data} = await axios.post(endpoint+"/users/login" , values)
      localStorage.setItem("data" ,JSON.stringify({...data.user, password:''}))
      console.log(data)
      message.success("Login Successful")
      setShowSpinner(false)
      

      navigate("/")

      
    } catch (error) {
      message.error("Login Failed")
      setShowSpinner(false)
      
    }
  };

  //Prevent for Login User
useEffect(()=> {
  if(localStorage.getItem("data")){
    navigate("/")
  }
} , [navigate])
//Prevent for Login User


  return (
    <div className="login-page">

      <Form onFinish={submitHandler}>
        <h1>Login Now!</h1>
      { showSpinner && <Spinner/>}

        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Pasword" name="password">
          <Input type="password" />
        </Form.Item>

        <div className="d-flex flex-column gap-3">
          <Link to="/register"> Not Registered ? Click Here to Register</Link>
          <button className="btn btn-primary"> Login</button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
