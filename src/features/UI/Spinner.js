import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Spinner = ({ size = '1.5rem', className }) => {
  return (
    <FaSpinner
      color="#FCA311"
      className={`animate-spin  ${className}`}
      size={size}
    />
  );
};

export default Spinner;
