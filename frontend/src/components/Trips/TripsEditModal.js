import TripEditForm from "./TripEditForm";
import { useState } from 'react'
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector} from "react-redux";
import { deleteBooking, getBookingByUser } from '../../store/haunt'

function ListingEditModal ({hauntId}) {
  const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const sessionUser = useSelector((state) => state.session.user)

    const handleDelete = async (e) => {
        e.preventDefault();
        
        if(hauntId){
          dispatch(deleteHaunt(hauntId))
          dispatch(getHauntsbyHostId(sessionUser?.id))
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
              <ListingEditForm setShowModal={setShowModal} hauntId={hauntId} />
            </Modal>
          )}
        </>
      );
}

export default ListingEditModal;