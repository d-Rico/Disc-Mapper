import React from 'react';

const TextFieldWithSubmit = props => {
  return (
    <div className='input-group'>
      <div className="text-box">
      <input
        className='input-group-field'
        name={props.name}
        onChange={props.handlerFunction}
        type='text'
        value={props.content}
      />
      </div>
      <div className='input-group-button'>
        <input type='submit' className='button' value='Chat' />
      </div>
    </div>
  );
}

export default TextFieldWithSubmit;
