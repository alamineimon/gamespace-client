import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const AdminModal = ({closeAdmin, message, successAction}) => {
    return (
        <div>
      {/* admin modal */}
      <input type="checkbox" id="admin-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="admin-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Are you sure you want to make hi admin???</h3>
  </div>
</div>
    </div>
    );
};

export default AdminModal;