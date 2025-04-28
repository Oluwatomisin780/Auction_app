import React from 'react';
import LoginForm from '../features /Authentication/LoginForm';

const Login = () => (
  <>
    <div className="flex  h-screen justify-between items-center ">
      <LoginForm />
      <div className=" hidden h-full  w-1/2 md:block">
        <img
          src="/assets/login.jpg"
          alt="login"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </>
);
export default Login;
