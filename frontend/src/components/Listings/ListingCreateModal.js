import ListingCreateForm from "./ListingCreateForm";
import { useState } from 'react'
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector} from "react-redux";
// import { deleteHaunt, getHauntsbyHostId } from '../../store/haunt'

function ListingCreateModal ({hauntId}) {
  const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const sessionUser = useSelector((state) => state.session.user)

    // const handleDelete = async (e) => {
    //     e.preventDefault();
        
    //     if(hauntId){
    //       dispatch(deleteHaunt(hauntId))
    //       dispatch(getHauntsbyHostId(sessionUser?.id))
    //     }
    // }

    return (
        <>
        <div className="edit-delete-buttons">
          <button onClick={() => setShowModal(true)} className="create-button">CREATE NEW LISTING</button>
        </div>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <ListingCreateForm setShowModal={setShowModal} />
            </Modal>
          )}
        </>
      );
}

export default ListingCreateModal;