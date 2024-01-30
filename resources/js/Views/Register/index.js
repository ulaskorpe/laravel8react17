import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import  * as Yup from 'yup' ;
import Swal from "sweetalert2";
import axios from "axios";
const Register=()=>{
    const handleSubmit =(values)=>{

        axios.post(`/api/auth/register`,{...values})
        .then((res)=>{
            console.log(res);
            Swal.fire({
                title: '',
                text: res.statusText,
                icon: 'success',
              });
        })
        .catch(error=>{
            console.log(error);
        })

        
    }
    return(

<div className="d-flex align-items-center justify-content-center mt-5 login-register-container"  > 
   
 
   <form className="form">
   
   <h1 className="h3 mb-3 fw-normal">Register Form</h1>
   <Formik initialValues={{
    name:'',email:'',password:'',password_confirmation:''
   }}
   onSubmit={handleSubmit}
   validationSchema={
    Yup.object().shape({
        email:Yup.string().email('wrong email format').required('email required'),
        name:Yup.string().required('name is required'),
        password:Yup.string().required('password is required'),
        password_confirmation:Yup.string().required('password confirm is required').oneOf([Yup.ref('password'),null],'confirm password')

    })
   }>

    {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        isValid,
        isSubmitting,
        touched
    }) => (  

    <div>
   <div className="mb-3 form-group">
   <label htmlFor="name" className="form-label">Name Surname</label>
     <input type="text" name="name" className="form-control" id="name" placeholder="freddy kruger"
      value={values.name}
      onBlur={handleBlur}
      onChange={handleChange('name')}
     />
       {(errors.name && touched.name) && <p className="error-p">{errors.name}</p> }
   </div>
   <div className="mb-3 form-group">
   <label htmlFor="email" className="form-label">Email address</label>
     <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com"
     value={values.email}
     onBlur={handleBlur}
     onChange={handleChange('email')}
     />
    {(errors.email && touched.email) && <p className="error-p">{errors.email}</p> }
   </div>
   <div className="mb-3 form-group" >
   <label htmlFor="password" className="form-label">Password</label>
     <input type="password" name="password" className="form-control" id="password" placeholder="Password"
     value={values.password}
     onBlur={handleBlur}
     onChange={handleChange('password')}
     />
    {(errors.password && touched.password) && <p className="error-p">{errors.password}</p> }
      
    
   </div>

   <div className="mb-3 form-group">
   <label htmlFor="password_confirmation" className="form-label">Password Confirm</label>
     <input type="password" name="password_confirmation" className="form-control" id="password_confirmation" 
     placeholder="password_confirmation"  
     onBlur={handleBlur}
     value={values.password_confirmation}
     onChange={handleChange('password_confirmation')}
     />
    {(errors.password_confirmation && touched.password_confirmation) && <p className="error-p">{errors.password_confirmation}</p> }
    
   </div>
   <button 
   disabled={!isValid || isSubmitting}
   onClick={handleSubmit}
   className="btn btn-primary w-100 py-2" type="button">Sign in</button>
   </div>
   )}
   </Formik>
   <Link to="/login" className="mt-4" style={{display:'block'}} >Login</Link>
 </form>
   
    
    </div>

    )
}

export default Register; 