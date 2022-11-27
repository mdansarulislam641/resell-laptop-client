import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../../Components/Loading';

const AllBuyers = () =>{
const [buyers, setBuyers] = useState([])
const {data:sellers=[],isLoading,refetch} = useQuery({
    queryKey:['users'],
    queryFn:()=>fetch('http://localhost:5000/users/seller',{
        headers:{
            authorization: `bearer ${localStorage.getItem("resellToken")}`
        }
    })
    .then(res=>res.json())
    .then(sellers=>sellers)
})
console.log(sellers)

// get all buyers
useEffect(()=>{
    fetch('http://localhost:5000/users/buyer',{
        headers:{
            authorization:`bearer ${localStorage.getItem('resellToken')}`
        }
    })
    .then(res=>res.json())
    .then(buyers=>setBuyers(buyers))
},[])
const handleDeleteUser = (id) =>{
    fetch(`http://localhost:5000/users/${id}`,{
        method:"DELETE",
        headers:{
            authorization:`bearer ${localStorage.getItem('resellToken')}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.acknowledged){
            toast.success('successfully delete user')
            refetch()
        }
    })
   
}



if(isLoading){
    return <Loading></Loading>
}
return (
    <div className=' mt-10 text-xl'>
        <div>
            <h2 className='text-3xl text-center mb-5'>All Buyers</h2>
        <table className="table table-zebra w-full">
<thead>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Email</th>
    <th>Role</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
{
                buyers && buyers?.map((sl,idx) => <tr key={sl._id}>
                    <th>{idx + 1}</th>
                    <td>{sl?.name}</td>
                    <td>{sl.email}</td>
                    <td>{sl.role}</td>
                    <td><button onClick={()=>handleDeleteUser(sl._id)} className='btn btn-xs'>delete</button></td>
                  </tr>
                 )
            }
 

</tbody>
</table>
        </div>
    </div>
);
        }

export default AllBuyers;