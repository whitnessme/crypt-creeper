import React, { useState } from "react";


function FeatureCheckbox() {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }

  return (
    <input onChange={handleChange} type="checkbox" key={feature.name} value={feature.name}>
      {feature.name}
    </input>
  );
}

export default FeatureCheckbox;
