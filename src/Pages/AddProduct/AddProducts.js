import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const {handleSubmit, register} = useForm();
    const handleAddProduct = data =>{
        const image = data.productImage[0];
        const formData = new FormData();
        formData.append('image',image);

       fetch(`https://api.imgbb.com/1/upload?key=4a91eded7ff36adc25cc23954b01b729`,{
        method:"POST",
        body:(formData)
       })
       .then(res=>res.json())
       .then(data=>console.log(data))
    }


    return (
        <div className="hero min-h-screen  bg-base-200">
           <div className="hero-content w-full">
             <form onSubmit={handleSubmit(handleAddProduct)} className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
               <div className="card-body">
                 <div className="form-control">
                   <input type="text" {...register('product-name')}  placeholder="product name" className="input input-bordered" />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                
                <input  type="text" {...register('purchase-price')} placeholder="purchase Price" className="input input-bordered text-xl" />
             
                   <div className='w-full'>
                  
                   <select className='select select-bordered w-full text-xl' {...register('condition')}>
                    <option disabled selected>product condition</option>
                    <option value="excellent">excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                   </select>
                   </div>
                 </div>
                 <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div className="form-control mt-2">
                        <input  type="text" {...register('seller-name')} placeholder='Your Name' className="input input-bordered"/>
                    </div>
                    <div className="form-control mt-2">
                        <input type="text" {...register('sell-price')} placeholder='sell price ' className="input input-bordered"/>
                    </div>
                 </div>
                 <div className="form-control mt-2">
                   <input type="text" {...register('phone')}  placeholder="phone number" className="input input-bordered" />
                 </div>
                 <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div className="form-control mt-2">
                        <input  type="text" {...register('location')} placeholder='Your Location' className="input input-bordered"/>
                    </div>
                    <div className="form-control mt-2">
                        <input type="text" {...register('used-year')} placeholder='Year of purchase ' className="input input-bordered"/>
                    </div>
                 </div>
                 <div className='mt-2'>
                    <label htmlFor="" className=''>Product Image</label>
                    <input type="file" className='w-full input input-bordered py-2 ' {...register('productImage')} />
                 </div>
                 <div className='mt-2 '>
                    <textarea {...register('description')} cols="30" rows="3" className='resize-none w-full border border-gray-500 rounded px-5 py-2 text-xl' placeholder='description.....'></textarea>
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