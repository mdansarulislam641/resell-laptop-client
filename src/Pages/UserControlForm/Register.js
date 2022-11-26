import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTokenJwt from '../../Hook/useTokenJwt';
import Navbar from '../../Shared/Navbar/Navbar';

const Register = () => {
    const {handleSubmit, register} = useForm();
    const [registerEmail, setRegisterEmail] = useState('');
    const [token] = useTokenJwt(registerEmail)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    if(token){
      navigate(from,{replace:true});
     
    }
    const {createNewUser,updateUserProfile} = useContext(AuthContext);
    const handleRegister = data =>{
        createNewUser(data.email,data.password)
        .then(result=>{
          const name = {
            displayName:data.name
          }
            updateUserProfile(name)
            .then(result=>{
              
              collectUserInformation(data.email,data.accountType,data.name)

            })
        })
        .catch(e=>{
          console.log(e.message);
        })
        .catch(error=>{
            console.log(error)
        })
        
    }

    const collectUserInformation = (email, role,name) =>{
      const info = {
        email,
        role,
        name
      }
      fetch('http://localhost:5000/users',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(info)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.acknowledged){
          toast.success("successfully Registered");
          setRegisterEmail(email)
        }
      })
    }

    return (
        <>
       <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-200">
           
  <div className="hero-content w-full">
 
    <form onSubmit={handleSubmit(handleRegister)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <div className='text-center text-3xl font-mono font-semibold'>
                <h1>Register Now</h1>
            </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Account Type</span>
          </label>
          <select className='select select-bordered' {...register('accountType')}>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
          </select>
        </div>
        <div className="form-control">
          <input type="text" {...register('name')}  placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" {...register('email')}  placeholder="Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="password" {...register('password')} placeholder="password" className="input input-bordered" />
        
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Register</button>
        </div>
        <div className="form-control mt-3">
          <button type='submit' className="btn btn-primary">Google</button>
        </div>
        <div>
            <p>Already have an account <Link to='/login' className='text-red-900 link text-xl'>Login</Link></p>
        </div>
      </div>
    </form>
   
  </div>
</div>
       </>
    );
};

export default Register;