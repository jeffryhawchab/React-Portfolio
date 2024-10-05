import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';
import animationData from '../assets/404.json'; // Replace with the actual path to your animation file

const NotFound = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div ref={containerRef} style={{ width: '300px', height: '300px' }}></div>
      <p className="text-2xl mt-4 text-white">Oops! This page doesn't exist.</p>
      <Link to="/" className="text-white mt-2 underline hover:text-stone-50">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;