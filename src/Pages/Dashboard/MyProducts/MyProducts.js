import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const {data: products=[],refetch,isLoading} = useQuery({
        queryKey:['products',user?.email],
        queryFn:()=>fetch(`http://localhost:5000/products?email=${user?.email}`,{
            headers:{
                authorization : `bearer ${localStorage.getItem('resellToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>data)
    })
    const handleAdvertise = id =>{
        fetch(`http://localhost:5000/product-advertise/${id}`,{
            method:"PUT"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch()
                toast.success('product successfully added for advertise')
            }
        })
    }
    const handleDeleteProduct = id =>{
        fetch(`http://localhost:5000/products/${id}`,{
            method:"DELETE",

        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                toast.success('product delete successfully')
                refetch();
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl font-bold font-mono mt-10 text-center'>My Products</h1>
            <div>
              
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th></th>
        <th>image</th>
        <th>Name</th>
        <th>Sell Price</th>
        <th>Published Date</th>
        <th>Condition</th>
        <th>Sell status</th>
        <th>Advertise</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
                    products && products?.map((pd,idx) => <tr key={pd._id}>
                        <th>{idx + 1}</th>
                        <th><img className='w-20 rounded-full' src={pd.image} alt="" /></th>
                        <td>{pd.productName}</td>
                        <td>{pd.sellPrice}</td>
                        <td>{pd.postTime}</td>
                        <td>{pd.condition}</td>
                        <td>{pd?.sold ? 'sold' : "Available"}</td>
                        <td><button onClick={()=>handleAdvertise(pd._id)} className={`${pd?.sold && 'btn-disabled'} btn btn-xs ${pd?.advertise && 'btn-primary btn-disabled text-black'}`}>{pd?.advertise ? ' Advertised Done' : 'Advertise'}</button></td>
                        <td><button onClick={()=>handleDeleteProduct(pd._id)} className='btn btn-xs'>delete</button></td>
                      </tr>
                     )
                }
     
   
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default MyProducts;