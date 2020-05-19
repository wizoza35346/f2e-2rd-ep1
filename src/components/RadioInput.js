import React, { memo } from 'react';

function RadioInput(props) {
  function ControlIcon() {
    const shareClass = 'material-icons select-none cursor-pointer mr-1';
    return props.checked ? (
      <span className={`text-primary ${shareClass}`}>radio_button_checked</span>
    ) : (
      <span className={`text-white ${shareClass}`}>radio_button_unchecked</span>
    );
  }
  return (
    <div className="flex">
      <ControlIcon />
      <label className="uppercase text-white cursor-pointer truncate" htmlFor={props.id}>
        {props.label}
      </label>
      <input type="radio" className="hidden" {...props} />
    </div>
  );
}

export default memo(RadioInput);
