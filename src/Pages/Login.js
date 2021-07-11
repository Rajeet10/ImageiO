import React from 'react';

const Login = () => {
    return (
        <div className="flex h-screen bg-gray-200">
        <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-purple-800 to-purple-600">

          <form lassName="m-5 w-10/12">
          <h1 className="w-full text-4xl tracking-widest text-center my-6">
            Login
          </h1> 
              <div className="w-full my-6 ">
                  <input type="email" 
                  className="p-2 rounded shadow w-full text-black"/>
              </div>
              <div className="w-full my-6">
                  <input type="password"  className="p-2 rounded shadow w-full text-black"/>
              </div>
              <div className="w-full my-10">
                  <button type="submit"  
                  className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-700 to-yellow-400 text-black" 
                  onSubmit={()=>{}}
                  >Login
                  </button>
              </div>
          </form>
          </div>
      </div>
      );
    }

export default Login
