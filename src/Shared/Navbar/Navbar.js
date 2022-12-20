import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
  const {user,logOutUser} = useContext(AuthContext);
  const handleSignOutUser = () =>{
    logOutUser()
    .then(result =>{
      toast.success('sign out successfully');
    })
    .catch(e=>{
      toast.error(e.message);
    })
  }
       
    const menuList =<>
        <Link to='/home'>Home</Link>
        
        <Link to='/blog'>Blog</Link>
        {
          user && user?.email ?  <>
          <Link to="/dashboard">Dashboard</Link><p className='text-xl'>
          <button onClick={handleSignOutUser} className='btn btn-ghost'>LogOut</button>
        </p> 
          </>: <>
        <Link to='/login'>LogIn</Link>
        </>
        }
      
       
    </>

   
    
    return (
   <section className='bg-[#0b78e4] text-white sticky top-0 z-20 w-full'>
         <div className="navbar  container ">
       <div className='flex justify-between w-full'>
       <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>{menuList}</li>
            </ul>
          </div>
          <Link to='/home' className="btn btn-ghost normal-case text-xl font-extrabold font-mono md:text-4xl">Resell Laptop</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           <li className='text-xl'>{menuList}</li>
          
       
          </ul>
          
        </div>
        <label tabIndex={0}  htmlFor="dashboard-drawer" className="btn btn-ghost drawer-button lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
       </div>
       
      </div>
   </section>
    );
};

export default Navbar;