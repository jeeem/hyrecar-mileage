import React from 'react';

const InsertConfirmation = ({ vehicle }) => {
  return (
    <div>
      <p>
        {`CREATED NEW ${vehicle.brand}, ${vehicle.make}, ${vehicle.model}, with license ${vehicle.license}.`}
      </p>
    </div>
  );
};

export default InsertConfirmation;
