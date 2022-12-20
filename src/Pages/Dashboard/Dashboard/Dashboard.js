import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='flex items-center justify-center h-[80vh] flex-col'>
           <figure>
           <img className='rounded-full' src={user?.photoURL} alt="" />
           </figure>
            <h1 className='text-4xl'>WellCome  {user?.displayName}</h1>
           <div>
            <Link className='underline text-2xl'>Profile</Link>
           
           </div>
        </div>
    );
};

export default Dashboard;