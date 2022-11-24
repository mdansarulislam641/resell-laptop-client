import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';

const Register = () => {
    const {createNewUser} = useContext(AuthContext);
    const {handleSubmit, register} = useForm();
    const handleRegister = data =>{
        createNewUser(data.email,data.password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
        console.log(data)
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
          <select className='select select-bordered' {...register('account-type')}>
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