import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../Layout';

const Register = () => {

  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs( prev => ({ ...prev, [e.target.name] : e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:5000/auth/register", inputs);
      navigate("/signin");
    }catch(err){
      console.log(err.response.data);
      setError(err.response.data);
    }
    
  }
  return (
    <Layout>
    <div class="container mx-auto p-4 bg-white">
  <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
    <h1 class="text-lg font-bold">Register</h1>
    <form class="flex flex-col mt-4">
      <input
          type="text"
          name="fullname"
          class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          placeholder="Full Name"
          onChange={handleChange}
      />
      <input
          type="email"
          name="email"
          class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          placeholder="Email address"
          onChange={handleChange}
      />
      <input
          type="password"
          name="password"
          class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          placeholder="Password"
          onChange={handleChange}
      />
      <input
          type="password"
          name="repeat-password"
          class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          placeholder="Repeat Password"
          // onClick={handleChange}
      />
      <button
          type="submit"
          class="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
          onClick={handleSubmit}
     >
        Register
      </button>
      {err && <p className='text-red-600 p-6 text-center'>{err.message}</p>}
      <div class="flex flex-col items-center mt-5">
        <p class="mt-1 text-xs font-light text-gray-500">
          Register already?<Link to="/signin" class="ml-1 font-medium text-blue-400">Sign in now</Link>
          </p>
      </div>
    </form>
  </div>
</div>
</Layout>
  )
}

export default Register;