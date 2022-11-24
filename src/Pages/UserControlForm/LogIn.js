import React, { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';

const LogIn = () => {
    const {logInUser} = useContext(AuthContext);
    const {handleSubmit, register} = useForm();
    const handleLogin = data =>{
        logInUser(data.email,data.password)
        .then(result=>{
            console.log(result)
            toast.success(`successfully login`)
        })
        .catch(error =>{
            console.log(error)
        })
        console.log(data)
    }
    return (
       <>
       <Navbar></Navbar>
       <div className="hero min-h-screen bg-base-200">
           <div className="hero-content w-full">
             <form onSubmit={handleSubmit(handleLogin)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <div className="card-body">
               <div className='text-center text-3xl mb-5 font-mono font-semibold'>
                         <h1>LogIn Now</h1>
                     </div>
                 <div className="form-control">
                   <input type="text" {...register('email')}  placeholder="Email" className="input input-bordered" />
                 </div>
                 <div className="form-control">
                   <input type="text" {...register('password')} placeholder="password" className="input input-bordered" />
                 </div>
                 <div className="form-control mt-6">
                   <button type='submit' className="btn btn-primary">Login</button>
                 </div>
                 <div className="form-control mt-3">
                   <button type='submit' className="btn btn-primary">Google</button>
                 </div>
                 <div>
                     <p>Already have an account <Link to='/register' className='text-red-900 link link-hover  text-xl'>Register</Link></p>
                 </div>
               </div>
             </form>
            
           </div>
         </div>
       </>
    );
};

export default LogIn;