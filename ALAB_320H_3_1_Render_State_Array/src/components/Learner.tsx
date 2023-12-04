import React from 'react';
import Score from './Score';


interface LearnerProps {
  learner: {
    name: string;
    bio: string;
    scores: {
      date: string;
      score: number;
    }[];
  };
}

const Learner: React.FC<LearnerProps> = ({ learner }) => {
  return (
    <div className='card-learner'>
      <div className='card-bio'>
        <h2>{learner.name}</h2>
        <p>{learner.bio}</p>
      </div>
      <div>
        {learner.scores.map((score, index) => (
          <Score key={index} score={score} />
        ))}
      </div>
    </div>
  );
};

export default Learner;
