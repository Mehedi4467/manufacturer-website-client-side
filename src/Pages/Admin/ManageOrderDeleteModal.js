import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderDeleteModal = ({ openDeleteModal, refetch, setOpenDeleteModal }) => {
    const handelDeleteOrder = (id) => {
        fetch(`https://lit-mountain-23720.herokuapp.com/order/delete/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast("Order Deleted Successfully");
                    refetch();
                }
            })
    }
    return (
        <div>

            <input type="checkbox" id="manage-order-delete" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-orange-500 text-center">Do you want to delete the order?</h3>

                    <div className='flex justify-end'>
                        <div class="modal-action mr-4">
                            <label onClick={() => handelDeleteOrder(openDeleteModal._id)} for="manage-order-delete" class="btn bg-orange-500">Yes</label>
                        </div>
                        <div class="modal-action">
                            <label for="manage-order-delete" class="btn">Cencel</label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageOrderDeleteModal;