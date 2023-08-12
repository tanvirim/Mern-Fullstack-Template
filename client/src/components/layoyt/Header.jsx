
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 import { message} from 'antd'
const Header = () => {

  //Hooks
  const navigate = useNavigate()
  const [loginUser, setLoginuser] = useState({});
  
  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      const loginUser = JSON.parse(data);
      setLoginuser(loginUser);
      
    }
  }, []);

//Hooks

//other constants
  const logoutHandler = ()=> {
    localStorage.removeItem("data")
    message.success("logout successful")
    navigate("/login")
    
  }
  //other constants
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              Expense Management
            </Link>
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto p-1 d-flex align-items-center">
              <li className="nav-item me-3">{loginUser && loginUser.name}</li>
              <li className="nav-item">
                <button className="btn btn-primary" onClick={logoutHandler}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
