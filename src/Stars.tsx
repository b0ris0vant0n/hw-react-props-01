import React from 'react';

interface StarProps {
  filled: boolean;
}

const Star: React.FC<StarProps> = ({ filled }) => {
  return (
    <li>
      <svg fill={filled ? "#D3BCA2" : "none"} height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
        <path d="M0 0h18v18H0z" fill="none"/>
      </svg>
    </li>
  );
};

interface StarsProps {
  count: number;
}

const Stars: React.FC<StarsProps> = ({ count }) => {
  if (isNaN(count) || count < 1 || count > 5) {
    return null;
  }

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={i} filled={i <= count} />);
  }

  return <ul className="card-body-stars u-clearfix">{stars}</ul>;
};

export default Stars;
