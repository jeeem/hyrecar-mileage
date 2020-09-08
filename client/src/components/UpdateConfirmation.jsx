import React from 'react';

const UpdateConfirmation = ({ vehicle }) => {
  return (
    <div>
      <p>
        {`UPDATED ${vehicle.brand}, ${vehicle.make}, ${vehicle.model}, with license ${vehicle.license}.`}
      </p>
    </div>
  );
};

export default UpdateConfirmation;
