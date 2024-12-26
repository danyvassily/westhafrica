import React from 'react';

const SubHeading = ({title}) => (
  <div>
    <p className="font-heading text-secondary font-bold tracking-wider capitalize text-3xl mb-4 
                 hover:text-accent transition-colors duration-300">
      {title}
    </p>
  </div>
);

export default SubHeading; 