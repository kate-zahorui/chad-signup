import React from 'react';

// import s from './StepsMobile.module.css';

const StepsSidebar: React.FunctionComponent = () => {
  return (
    <div>
      <ul>
        <li>Welcome</li>
        <li>Connect your Shopify store</li>
        <li>Connect your customer support email</li>
        <li>Done</li>
      </ul>
      <div>
        <button>Back</button>
        <button>Next</button>
      </div>
      <div>
        <p>
          Acquiring a new customer is 5x more costly than making an unhappy
          customer happy
        </p>
      </div>
    </div>
  );
};

export default StepsSidebar;
