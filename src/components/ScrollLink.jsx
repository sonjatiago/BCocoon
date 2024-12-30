// ScrollLink.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ScrollLink = ({ to, children, ...props }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default ScrollLink;