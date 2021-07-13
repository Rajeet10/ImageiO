import React,{useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
    const formik=useFormik({
        initialValues:{email:"",password:""},
        onSubmit:value=>{
            console.log("Formik",value)
        },
      validationSchema:Yup.object({
          email:Yup.string().required('Email is Required').email('Email is invalid'),
          password:Yup.string().required("Password  is required").min(6),
      }),
        
    });
    return (
        <div className="flex h-screen bg-gray-200">
        <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-purple-800 to-purple-600">

          <form className="m-5 w-10/12" onSubmit={formik.handleSubmit}>
          <h1 className="w-full text-4xl tracking-widest text-center my-6">
            SignUp
          </h1> 
              <div className="w-full my-6 ">
                  <input type="email" 
                  className="p-2 rounded shadow w-full text-black"
                  placeholder="Email Id"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  />
                  {
                      formik.touched.email && formik.errors.email ?
                        <p>{formik.errors.email}</p>:null
                  }
                  
              </div>
              <div className="w-full my-6">
                  <input type="password" 
                   className="p-2 rounded shadow w-full text-black"
                   placeholder="Password"
                   name="password"
                   value={formik.values.password}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   />
                   {
                      formik.touched.password && formik.errors.password ?
                        <p>{formik.errors.password}</p>:null
                  }
              </div>
              <div className="w-full my-10">
                  <button type="submit"  
                  className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-700 to-yellow-400 text-black" 
                  >
                      {/* {
                      isLoading ? (
                      <i className="fas fa-circle-notch fa-spin"></i>
                      ) :
                      ( */}
                          SignUp
                      {/* )
                  } */}
                  </button>
              </div>
          </form>
          </div>
      </div>
      );
    }

export default SignUp;
