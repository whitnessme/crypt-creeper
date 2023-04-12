import React, { useState } from "react";
import './Radio.css'

function Radio({ i, icon, iconValue, setIconValue }) {
  return (
  <div className="icon-radio">
      <input
        className="icons-list-radio"
        id={`icon-${i}`}
        type="radio"
        value={icon}
        checked={iconValue === icon}
        onChange={(e) => setIconValue(e.target.value)}
        >
      </input>
    <label className="radio-labels" htmlFor={`icon-${i}`} dangerouslySetInnerHTML={{__html: icon}}>
      {/* <div dangerouslySetInnerHTML={{__html: icon}}></div> */}
    </label>
    </div>

  );
}

export default Radio;
