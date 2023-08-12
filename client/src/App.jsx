/* eslint-disable react/prop-types */
import './App.css'
import {Navigate, Route,Routes} from "react-router-dom"
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import Login from './pages/Login'




function App() {
  

  return (
    <Routes>
      <Route path='/' element={<ProtectedRoute> <Homepage/></ProtectedRoute>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>

  )
}

const ProtectedRoute = (props)=> {
  if(localStorage.getItem("data")){
    return props.children
  }else {
    return <Navigate to="/login"/>
  }
   
}
  

export default App
