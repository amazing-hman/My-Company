import React, { useState, useEffect, useRef } from 'react';
import CountUpAnimation from './CountUpAnimation';


const StatBox_component = ({ targetNumber, description, icon, target_style }) => {
  const [visible, setVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (boxRef.current) {
      observer.observe(boxRef.current);
    }
    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <div className="stat-box" ref={boxRef}>
      <div className="stat-box-icon">{icon}</div>
      <div className="stat-box-number">
        {visible ? <CountUpAnimation targetNumber={targetNumber} /> : '0'}{target_style}
      </div>
      <div className="stat-box-description">{description}</div>
    </div>
  );
};

export default StatBox_component;
