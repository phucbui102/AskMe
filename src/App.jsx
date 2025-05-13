import "./App.css";
import React, { useEffect, useState } from "react";
import socket from "./socket";
function App() {
  const [message, setMessage] = useState("");
  // const [chatMessages, setChatMessages] = useState([]);

  // useEffect(() => {
  //   // Lắng nghe tin nhắn từ server
  //   const handleMessage = (msg) => {
  //     setChatMessages((prevMessages) => [...prevMessages, msg]);
  //   };

  //   socket.on("chat message", handleMessage);

  //   return () => {
  //     socket.off("chat message", handleMessage); // 👈 cleanup
  //   };
  // }, []);

  const sendMessage = () => {
    // Gửi tin nhắn đến server
    socket.emit("chat message", message);
    setMessage("");
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <label htmlFor="Email" className="w-80">
          <div className="mb-0 text-center w-full h-16 flex items-center justify-center bg-[var(--color-bg-text)] text-blue-50 text-sm font-medium rounded-tl-2xl rounded-tr-2xl">
            Hỏi tôi bất cứ điều gì
          </div>

          <textarea
            id="Email"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-[18px_24px] h-[140px] box-border text-[20px] font-semibold  border-2 rounded-bl-2xl rounded-br-2xl  border-b-gray-950 outline-none bg-transparent resize-none"
          />

          <a
            onClick={sendMessage}
            className="inline-block mt-4 w-full rounded-2xl  border text-center border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-3d hover:shadow-xl focus:ring-3 focus:outline-hidden"
            href="#">
            Gửi
          </a>
        </label>
      </div>
    </>
  );
}

export default App;
