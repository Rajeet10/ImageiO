import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../config/Firebase';

const Login = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState({email:"",password:""});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleForm=(e)=>{
        if (isLoading) return ;
        setIsLoading(true);
        e.preventDefault();
        firebase
        .auth()
        .signInWithEmailAndPassword(form.email,form.password)
        .then((res)=>{
            setIsLoggedIn(true);
            setError("");
            setIsLoading(false);
        }).catch(e=>{
           setError(e.message);
            setIsLoading(false);
        });
    };

    const handleInput=(e)=>{
        setForm({
            ...form,
           [ e.target.name]:e.target.value

        })
    }

    if(isLoggedIn) return <Redirect  to="/" exact/>
    return (
        <div className="flex h-screen bg-gray-200">
        <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-purple-800 to-purple-600">

          <form className="m-5 w-10/12" onSubmit={handleForm}>
              {(error !== "") && <p>{error}</p>}
          <h1 className="w-full text-4xl tracking-widest text-center my-6">
            Login
          </h1> 
              <div className="w-full my-6 ">
                  <input type="email" 
                  className="p-2 rounded shadow w-full text-black"
                  placeholder="Email Id"
                  name="email"
                  value={form.email}
                  onChange={handleInput}
                  />
              </div>
              <div className="w-full my-6">
                  <input type="password" 
                   className="p-2 rounded shadow w-full text-black"
                   placeholder="Password"
                   name="password"
                   value={form.password}
                   onChange={handleInput}
                   />
              </div>
              <div className="w-full my-10">
                  <button type="submit"  
                  className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-700 to-yellow-400 text-black" 
                  >{
                      isLoading ? (
                      <i className="fas fa-circle-notch fa-spin"></i>
                      ) :
                      (
                          "Login"
                      )
                  }
                  </button>
              </div>
          </form>
          </div>
      </div>
      );
    }

export default Login;
