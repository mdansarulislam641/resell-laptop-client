import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AddProducts = () => {
    const {user} = useContext(AuthContext);
    const {handleSubmit, register, reset} = useForm();
    const navigate = useNavigate();
    const handleAddProduct = data =>{
        const image = data.productImage[0];
        const formData = new FormData();
        formData.append('image',image);
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;


       fetch(`https://api.imgbb.com/1/upload?key=4a91eded7ff36adc25cc23954b01b729`,{
        method:"POST",
        body:(formData)
       })
       .then(res=>res.json())
       .then(result=>{
        if(result.success){
            const imageUrl = result.data.display_url ;
            const productInfo = {
                categoryName:data.category,
                image:imageUrl,
                productName:data.productName,
                location:data.location,
                condition:data.condition,
                sellerName:data.sellerName,
                sellPrice:data.sellPrice,
                phone:data.phone,
                description:data.description,
                purchasePrice:data.purchasePrice,
                usedYear:data.usedYear,
                userEmail:user?.email,
                userImage:user?.photoURL,
                postTime:today
            }
            fetch('http://localhost:5000/products',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(productInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged){
                    toast.success("successfully added product")
                    reset();
                    navigate('/dashboard/my-products')
                }
            })
               
        }
       })
    }


    return (
        <div className="hero min-h-screen  bg-base-200">
           <div className="hero-content w-full">
             <form onSubmit={handleSubmit(handleAddProduct)} className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
               <div className="card-body">
                 <div className="form-control">
                   <input type="text" {...register('productName',{required:true})}  placeholder="product name & model" className="input input-bordered" required/>
                 </div>
                 <div className="form-control mt-1">
                   <select {...register('category',{required:true})} className='select select-bordered text-xl' required>
                    <option value="asus">ASUS</option>
                    <option value="lenovo">LENOVO</option>
                    <option value="hp">HP</option>
                   </select>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                
                <input  type="text" {...register('purchasePrice',{required:true})} placeholder="purchase Price" className="input input-bordered text-xl" required/>
             
                   <div className='w-full'>
                  
                   <select className='select select-bordered w-full text-xl' {...register('condition',{required:true})} required>
                    <option disabled selected>product condition</option>
                    <option value="excellent">excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                   </select>
                   </div>
                 </div>
                 <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div className="form-control mt-2">
                        <input  type="text" {...register('sellerName',{required:true})} placeholder='Your Name' className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-2">
                        <input type="text" {...register('sellPrice',{required:true})} placeholder='sell price ' className="input input-bordered" required/>
                    </div>
                 </div>
                 <div className="form-control mt-2">
                   <input type="text" {...register('phone',{required:true})}  placeholder="phone number" className="input input-bordered" required/>
                 </div>
                 <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div className="form-control mt-2">
                        <input  type="text" {...register('location',{required:true})} placeholder='Your Location' className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-2">
                        <input type="text" {...register('usedYear',{required:true})} placeholder='Year of purchase ' className="input input-bordered" required/>
                    </div>
                 </div>
                 <div className='mt-2'>
                    <label htmlFor="" className=''>Product Image</label>
                    <input type="file" className='w-full input input-bordered py-2 ' {...register('productImage',{required:true})} required/>
                 </div>
                 <div className='mt-2 '>
                    <textarea {...register('description',{required:true})} cols="30" rows="3" className='resize-none w-full border border-gray-500 rounded px-5 py-2 text-xl' placeholder='description.....' required></textarea>
                 </div>
                 <div className="form-control mt-6">
                   <button type='submit' className="btn btn-primary">Login</button>
                 </div>
               </div>
             </form>
            
           </div>
         </div>
    );
};

export default AddProducts;