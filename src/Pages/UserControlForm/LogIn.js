import React, {  useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTokenJwt from '../../Hook/useTokenJwt';
import Navbar from '../../Shared/Navbar/Navbar';

const LogIn = () => {
    const [userEmail, setUserEmail] = useState('');
    const [token] = useTokenJwt(userEmail);
    const {handleSubmit, register} = useForm();
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    if(token){
      navigate(from,{replace:true})
      
    }
    const {logInUser} = useContext(AuthContext);
    const handleLogin = data =>{
        logInUser(data.email,data.password)
        .then(result=>{
            console.log(result)
           setUserEmail(result?.user?.email)
           toast.success(`successfully login`)
        })
        .catch(error =>{
            toast.success(error.message)
        })
       
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