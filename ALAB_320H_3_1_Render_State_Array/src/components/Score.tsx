import React from 'react';

interface ScoreProps {
  score: {
    date: string;
    score: number;
  };
}

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className='card-score'>
      <p>Date: {score.date}</p>
      <p>Score: {score.score}</p>
    </div>
  );
};

export default Score;
