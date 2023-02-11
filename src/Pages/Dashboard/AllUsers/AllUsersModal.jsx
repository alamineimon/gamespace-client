import React from "react";

const AllUsersModal = ({message, successAction, closeModal, data}) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="delete-user" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {message}
          </h3>
          <div className="modal-action">
            <label htmlFor="delete-user" className="btn btn-primary btn-sm mr-3 rounded-sm" onClick={() => successAction(data)}>
              Yes
            </label>
            <button onClick={closeModal} className="btn btn-error btn-sm rounded-sm">No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsersModal;
