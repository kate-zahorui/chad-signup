import React from 'react';

// import s from './StepsMobile.module.css';

const StepsMobile: React.FunctionComponent = () => {
  return (
    <div>
      <p>Step 1 of 4</p>
      <div>
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default StepsMobile;
