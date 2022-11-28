import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTokenJwt from '../../Hook/useTokenJwt';

const GoogleSignIn = () => {
    const {handleGoogleLogIn} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [token] = useTokenJwt(email);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    if(token){
        navigate(from , {replace:true})
    }
    const handleGoogleSignIn = () =>{
        handleGoogleLogIn()
        .then(result =>{
            const info = {
                email : result?.user?.email,
                name: result?.user?.displayName,
                role:'buyer'
            }
            fetch('https://assignment-server-mdansarulislam641.vercel.app/users',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(info)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged){
                    setEmail(result.user.email)
                    toast.success('successfully log in')
                  
                }
            })
          
        })
    }

    return (
        <button onClick={handleGoogleSignIn} type='submit' className="btn btn-primary">Google</button>
    );
};

export default GoogleSignIn;