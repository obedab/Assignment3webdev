import React from 'react';

const CurrentDate = () => {
  const today = new Date().toLocaleDateString();
  return <p>On: {today}</p>;
};

export default CurrentDate;
