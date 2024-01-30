import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
    return (
    <div className="d-flex align-items-center justify-content-center mt-5 login-register-container"> 
   
 
    <form>
    
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
     
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
     
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    <Link to="/register" className="mt-4" style={{display:'block'}} >Register</Link>
  </form>
    
     
     </div>)
}

export default Login; 