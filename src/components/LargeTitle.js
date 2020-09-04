import React from 'react';

const LargeTitle = (props) => {
  return (
    <div className="large-title-container">
        <h2 className="large-title">{props.titleText}</h2>
    </div>
  );
};

export default LargeTitle;