import React from 'react';
import RegistrationForm from '../features /Authentication/RegistrationForm';

function Register() {
  return (
    <div className="flex  h-screen justify-between items-center ">
      <RegistrationForm />
      <div className=" hidden h-full  w-1/2 md:block">
        <img
          src="/assets/login.jpg"
          alt="login"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Register;
