import React from "react";

const VideoModal = ({ videolink }) => {
  return (
    <>
      <input type="checkbox" id="see-video" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          {/* video setting */}

          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="see-video" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoModal;
