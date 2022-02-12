import React, { useState } from "react";

function Radio({ i, icon, iconValue, setIconValue }) {
  return (
      <div className="icon-radio">
    <input
      className="icons-list"
      type="radio"
      value={icon}
      checked={iconValue === icon}
      onChange={(e) => setIconValue(e.target.value)}
      >
    </input>
    <div onClick={e => setIconValue(icon)} dangerouslySetInnerHTML={{__html: icon}}></div>
    </div>
  );
}

export default Radio;
