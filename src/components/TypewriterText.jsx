import React, { useState, useEffect } from 'react';

export default function TypewriterText({ 
  words = [], 
  typingSpeed = 90, 
  deletingSpeed = 45, 
  pauseTime = 2200,
  className = '',
  cursorColor = '#E4C77E'
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentFullWord = words[wordIndex % words.length];

    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentFullWord.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      if (text.length < currentFullWord.length) {
        timer = setTimeout(() => {
          setText(currentFullWord.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`typewriter-container ${className}`}>
      <span className="typewriter-text">{text}</span>
      <span 
        className="typewriter-cursor"
        style={{ 
          display: 'inline-block',
          marginLeft: '4px',
          width: '3px',
          height: '1.05em',
          verticalAlign: 'middle',
          backgroundColor: cursorColor,
          animation: 'cursorBlink 0.9s infinite'
        }}
      />
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
