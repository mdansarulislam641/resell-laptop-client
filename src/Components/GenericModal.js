import React from 'react';

const GenericModal = ({title,message, product, handleWishList}) => {
    return (
        <div>

<input type="checkbox" id="generic-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-2xl">{title}!</h3>
    <p className="py-4 text-xl">{message}</p>
    <div className="modal-action">
      <label onClick={()=>handleWishList(product._id)} className="btn">Yes</label>
      <label htmlFor="generic-modal" className="btn btn-outline">No</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default GenericModal;