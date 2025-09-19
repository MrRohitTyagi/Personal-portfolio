import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Bot } from "lucide-react";

function Chatbot() {
  const [showModal, setShowModal] = useState(false);
  const [iframeloading, setIframeloading] = useState(true);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setShowModal(false);
    setIframeloading(true);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  // ESC key listener
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && showModal) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showModal]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    openModal();
  };

  return (
    <>
      {/* Floating Chat Button - Always fixed bottom right */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 10000,
          pointerEvents: 'auto'
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 1
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
        <motion.button
          onClick={handleButtonClick}
          className="group relative w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
          }}
        >
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Icon */}
          <motion.div
            className="relative z-10"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </motion.div>

          {/* Pulse animation */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.button>

        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          Chat with AI Assistant
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
        </motion.div>
        </motion.div>
      </div>

      {/* Chat Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              style={{ zIndex: 10001 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 flex items-end justify-end p-4"
              style={{ zIndex: 10002 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden w-full max-w-md h-[600px] md:max-w-lg md:h-[700px]"
                initial={{
                  scale: 0.8,
                  opacity: 0,
                  x: 100,
                  y: 100
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  x: 0,
                  y: 0
                }}
                exit={{
                  scale: 0.8,
                  opacity: 0,
                  x: 100,
                  y: 100
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Bot className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-white font-semibold">AI Assistant</h3>
                      <p className="text-white/60 text-sm">Always here to help</p>
                    </div>
                  </div>

                  <motion.button
                    onClick={closeModal}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="relative h-full">
                  {iframeloading && (
                    <motion.div
                      className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="w-12 h-12 border-3 border-blue-500 border-t-transparent rounded-full mb-4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <p className="text-lg font-medium mb-2">Loading AI Assistant...</p>
                      <p className="text-white/60 text-sm">Hold tight, we're getting everything ready</p>
                    </motion.div>
                  )}

                  <iframe
                    className="w-full h-full border-0"
                    title="AI Chatbot"
                    src="https://gemini-chatbot-fe.vercel.app/"
                    onLoad={() => setIframeloading(false)}
                    style={{
                      height: 'calc(100% - 80px)',
                      borderRadius: '0 0 16px 16px'
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Chatbot;
