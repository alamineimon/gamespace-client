import React from "react";
import ReactPlayer from "react-player";
const VideoModal = ({ videolink }) => {
  return (
    <>
      <input type="checkbox" id="see-video" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          {/* video setting */}
          <ReactPlayer url={videolink} controls={true} width="100%" />
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
