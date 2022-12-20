import React from 'react';

const JoinUs = () => {
    const handleClick =e =>{
        e.preventDefault()
    }
    return (
     <section className='py-24 bg-[#f1f1f1]'>
           <div className='container'>
            <h1 className='lg:text-6xl text-center py-10 text-3xl text-bold font-mono'>Join Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5' >
               <figure>
               <img className='w-full' src="https://i.ibb.co/h7xQz4B/images.jpg" alt="" />
               </figure>
               <div className='w-full'>
                <form action="">
                    <input type="text" name="name" id="" placeholder='Your Name' className='input input-bordered py-2 my-2 w-3/4 ' />
                    <input type="email" name="name" id="" placeholder='Your email' className='input input-bordered py-2 my-2 w-3/4 ' />
                    <input type="text" name="name" id="" placeholder='Your Address' className='input input-bordered py-2 my-2 w-3/4 ' />
                    <textarea name="message" placeholder='please tell something with us' className='input input-bordered w-3/4 py-2  my-2 h-[150px] block' id="" cols="30" rows="10"></textarea>
                    <button onClick={handleClick} className='btn btn-primary w-3/4 text-3xl my-3'>SUBmit</button>
                </form>
               </div>

            </div>
        </div>
     </section>
    );
};

export default JoinUs;