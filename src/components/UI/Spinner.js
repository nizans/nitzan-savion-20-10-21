import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Spinner = ({ size = '1.5rem', ...rest }) => {
  return (
    <FaSpinner
      className="animate-spin"

      size={size}
    />
  );
};

export default Spinner;
