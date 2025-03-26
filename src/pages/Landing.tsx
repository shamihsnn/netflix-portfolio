
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { myInfo } from "@/lib/data";

const Landing = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  // Play animation automatically after initial delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      
      // Play the Netflix "tudum" sound
      const audio = new Audio("/tudum.mp3");
      audio.volume = 0.7;
      audio.play().catch(e => console.log("Audio playback failed:", e));
      
      // Show the pulsing animation and then navigate
      setTimeout(() => {
        navigate("/profiles");
      }, 3000); // Allow time for the sound to play
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-netflix-dark cursor-pointer"
      onClick={handleClick}
    >
      <div 
        className={`transition-all duration-1000 ease-in-out ${
          clicked 
            ? "scale-150 opacity-0" 
            : showAnimation 
              ? "scale-110 opacity-100" 
              : "scale-100 opacity-0"
        }`}
      >
        <h1 className="text-netflix-red font-bold text-5xl md:text-8xl tracking-tighter">
          {myInfo.name}
        </h1>
        {showAnimation && !clicked && (
          <p className="text-white text-center mt-4 animate-pulse">
            Click to continue
          </p>
        )}
      </div>
    </div>
  );
};

export default Landing;
