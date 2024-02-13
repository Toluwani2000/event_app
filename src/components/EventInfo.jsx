import React from 'react';

const IconWithText = ({ icon, text }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {icon}
      <span style={{ marginLeft: '8px' }}>{text}</span>
    </div>
  );
};

export default IconWithText;