import React from 'react';

interface ContentProps {
    color: string;
    text: string;
  }

export const Content: React.FC<ContentProps> = ({ color, text }) => {
    return (
      <div className="header">
        <p style={{ color: color }}>{text}</p>
      </div>
    );
  };