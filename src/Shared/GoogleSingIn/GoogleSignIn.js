import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const GoogleSignIn = () => {
    const {handleGoogleLogIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleSignIn = () =>{
        handleGoogleLogIn()
        .then(result =>{
            console.log(result)
            toast.success('successfully log in')
            navigate(from , {replace:true})
        })
    }

    return (
        <button onClick={handleGoogleSignIn} type='submit' className="btn btn-primary">Google</button>
    );
};

export default GoogleSignIn;