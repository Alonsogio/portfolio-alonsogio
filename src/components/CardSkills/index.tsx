import React, { useEffect, useState } from 'react';
import './card.css'

interface CardProps {
  icon: React.ReactNode;
  text: string;
  percentage: number;
}

export const Card: React.FC<CardProps> = ({ icon, text, percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className='backgroundCard'>
      <div className="card">
        <div className="card-header">
          <div className="card-icon">{icon}</div>
          <p className="card-text">{text}</p>
        </div>
        <p className="percentage-text">{progress}%</p>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div> 
    </div>
  );
};

export default Card;
