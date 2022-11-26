import React from 'react';
import AllUsers from '../AllUsers/AllUsers';
import MyProducts from '../MyProducts/MyProducts';

const Dashboard = () => {
    return (
        <div>
            <h1>this is dashboard</h1>
            <MyProducts></MyProducts>
            <AllUsers></AllUsers>
        </div>
    );
};

export default Dashboard;