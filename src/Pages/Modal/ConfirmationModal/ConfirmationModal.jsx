import React from 'react';

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  successAction,
  modalData,
}) => {
  return (
    <div className='bg-white'>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-1/4 max-w-5xl">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="confirmation-modal"
              className="btn btn-error bg-red-500"
            >
              Delete
            </label>
            <label
              onClick={closeModal}
              htmlFor="confirmation-modal"
              className="btn"
            >
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;