import TripEditForm from "./TripEditForm";
import { useState } from 'react'
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector} from "react-redux";
import {  getOneBooking, getBookingsByHaunt } from '../../store/booking'

function ListingEditModal ({bookingId, trip}) {
  const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const sessionUser = useSelector((state) => state.session.user)

    const userBookings = useSelector((state) => {
        return Object.values(state?.booking?.byUser);
      });


    const handleDelete = async (e) => {
        e.preventDefault();
        
        if(bookingId){
          dispatch(getOneBooking(bookingId))
          dispatch(getBookingsByHaunt(trip?.hauntId));
        }
    }

    return (
        <>
        <div className="edit-delete-buttons">
          <button className="edit-button" onClick={() => setShowModal(true)}>EDIT</button>
          <button className="delete-button" onClick={handleDelete}>
            <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <TripEditForm showModel={showModal} setShowModal={setShowModal} bookingId={bookingId} />
            </Modal>
          )}
        </>
      );
}

export default ListingEditModal;