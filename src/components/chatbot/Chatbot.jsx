import React, { useState } from "react";
import "./chatbot.css"; // Import your CSS file
import chatbotimg from "assets/chatbot.jpg";
import { motion } from "framer-motion";

function Chatbot() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  console.log("showModal", showModal);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleImageClick = () => {
    openModal();
  };

  return (
    <div>
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        src={chatbotimg}
        alt="Chatbot"
        height="1"
        id="chatbot-img"
        onClick={handleImageClick}
      />

      {showModal && (
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          id="chatbot-modal"
        >
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <iframe
            id="iframe-chat"
            title="chatbot"
            // src=" http://localhost:3000"
            src="https://gemini-chatbot-fe.vercel.app/"
            frameborder="0"
            height="600px"
            width="500px"
          ></iframe>
        </motion.div>
      )}
    </div>
  );
}

export default Chatbot;
