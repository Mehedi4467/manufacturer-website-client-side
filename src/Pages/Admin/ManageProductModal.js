import React from 'react';
import { toast } from 'react-toastify';

const ManageProductModal = ({ openModal, setOpenModal, refetch }) => {
    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/product/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast("Product Delete Successfully");
                    refetch();
                    setOpenModal(null)
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="product-delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-orange-600">{`Do you want to delete the ${openModal.name} product?`}</h3>
                    <p className="py-4">If you delete the product, the product will be deleted from the database.</p>
                    <div className='flex justify-end'>
                        <div className="modal-action mr-4">
                            <button onClick={() => deleteProduct(openModal._id)} className="btn bg-orange-500">Delete</button>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="product-delete-modal" className="btn">Cencel</label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageProductModal;