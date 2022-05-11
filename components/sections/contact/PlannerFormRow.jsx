import { forwardRef, useState } from 'react';

export default forwardRef(function FormRow(
  { label, type, name, id, placeholder },
  ref
) {
  return (
    <div className='row'>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        ref={ref}
      />
      <div className='slide'></div>
    </div>
  );
});
