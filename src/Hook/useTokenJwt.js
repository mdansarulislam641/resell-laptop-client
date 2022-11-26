import {  useEffect, useState } from 'react';

const useTokenJwt = (email) => {
    const [token,setToken] = useState('');
    useEffect(()=>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res=>res.json())
    .then(data=>{
        if(data.resellToken){

            setToken(data.resellToken)
            localStorage.setItem('resellToken',data.resellToken);
        }
    })
    },[email])
    return [token]
};

export default useTokenJwt;