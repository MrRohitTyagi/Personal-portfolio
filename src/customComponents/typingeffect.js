import React, { useState, useEffect } from "react";
import "./typingeffect.css"; // Import your CSS file for styling

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setisDone] = useState(false);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index += 1;
      } else {
        setisDone(true);
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the interval based on your preference

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return (
    <div className="typing-effect">
      {displayedText}
      {!isDone && <span className="blinking-cursor">|</span>}
    </div>
  );
};

export default TypingEffect;
