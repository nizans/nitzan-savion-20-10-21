import React from 'react';

const Divider = ({ className, ...props }) => {
  return (
    <div
      className={`flex flex-col divide-y-2 divide-primary  ${className}`}
      {...props}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default Divider;
