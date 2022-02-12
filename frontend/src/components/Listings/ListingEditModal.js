import ListingEditForm from "./ListingEditForm";
import { useState } from 'react'
import { Modal } from '../../context/Modal';

function ListingEditModal ({hauntId}) {
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {

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