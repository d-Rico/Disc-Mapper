import React from 'react';

const ChatMessage = ({ first_name, message }) => {
  return(
    <p>
      <strong> {first_name}: </strong>
      {message}
    </p>
  );
};

export default ChatMessage;
