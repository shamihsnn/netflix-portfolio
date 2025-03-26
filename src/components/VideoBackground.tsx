import { useEffect, useRef } from 'react';

const VideoBackground = () => {
  console.log("VideoBackground component rendering");
  
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        backgroundColor: '#000'
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.6
        }}
      >
        <source src="/video/background.mp4" type="video/mp4" />
      </video>
      
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}
      />
    </div>
  );
};

export default VideoBackground;
