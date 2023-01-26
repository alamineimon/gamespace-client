import React from "react";
import ReactPlayer from "react-player";
import { MdClose } from "react-icons/md";
const VideoModal = ({ videolink, setVideo }) => {
  return (
    <>
      <input type="checkbox" id="see-video" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box w-11/12 max-w-5xl h-[70vh]   ">
          {/* video setting */}
          <div className="modal-action mt-0 absolute top-2 right-2">
            <label
              onClick={() => setVideo("")}
              htmlFor="see-video"
              className="cursor-pointer"
            >
              <MdClose />
            </label>
          </div>
          <ReactPlayer
            url={videolink}
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
};

export default VideoModal;
