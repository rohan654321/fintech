"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  pauseTime?: number; // Pause duration before restarting
}

export function Typewriter({ text, delay = 50, pauseTime = 1500 }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      // Pause before resetting
      setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
      }, pauseTime);
    }
  }, [currentIndex, delay, text, pauseTime]);

  return (
    <div className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
}
