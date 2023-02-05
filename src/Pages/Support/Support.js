import "./Support.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "../Support/Component/Chat.jsx";

const socket = io.connect("https://socket-server-1559ix97r-delower68.vercel.app", {
  reconnectionDelay: 1000,
  reconnection:true,
  reconnectionAttempts: 10,
  transports: ['websocket'],
  agent: false, // [2] Please don't set this to true
  upgrade: false,
  rejectUnauthorized: false
});

function Support() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="support mx-auto">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Live Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button  onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Support;