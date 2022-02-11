import ListingEditForm from "./ListingEditForm";
import { useState } from 'react'
import { Modal } from '../../context/Modal';

function ListingEditModal ({hauntId}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button onClick={() => setShowModal(true)}>Edit</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <ListingEditForm hauntId={hauntId} />
            </Modal>
          )}
        </>
      );
}

export default ListingEditModal;