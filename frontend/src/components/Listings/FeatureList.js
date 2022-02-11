import React, { useState } from "react";


function FeatureList({name, feature, featureState, setFeatureState}) {
    // const [checked, setChecked] = useState(false);
    const [inputField, setInputField] = useState([{name: '', icon: ''}])

    const handleAddClick = () => {
      setFeatureState([...featureState, { name: "", icon: "" }]);
      setInputField([{name: '', icon: ''}])
    };

  return (
    <div className={`feature-input-div ${name}`}>

      <input onChange={handleAddClick} type="text" key={feature.name} value={feature.name}>
        {feature.name}
      </input>
      <button className="add-feature">Add</button>
    </div>
  );
}

export default FeatureList;
