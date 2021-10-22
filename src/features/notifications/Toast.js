import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const Toast = () => {
  const [show, setShow] = useState(false);

  if (show)
    return (
      createPortal(
        <div className="fixed bottom-0 w-full h-52 bg-dark-lighter">asdasd</div>
      ),
      document.body
    );
  return null;
};

export default Toast;
