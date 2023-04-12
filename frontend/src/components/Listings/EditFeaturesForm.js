import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Radio from "./Radio";
import "./feature.css";
import { createFeature } from "../../store/feature";
import { amenitiesIcons, areaIcons, essentialIcons } from "./info-listing";

function EditFeaturesForm({ selectedHaunt, errors, setErrors }) {
  const dispatch = useDispatch();

  const [iconValue, setIconValue] = useState('');
  const [inputField, setInputField] = useState('');

  const [showFeatures, setShowFeatures] = useState("Area");

  const hauntId = selectedHaunt.id

  const handleAddClickArea = async (e) => {
    e.preventDefault()
    if (!errors.length) {
      await dispatch(createFeature({ name: inputField, icon: iconValue }, hauntId, "area"))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          if (data.errors)
          setErrors(data.errors);
          console.log(errors)
        }});
        setInputField('');
        setIconValue('')
    }
  };


  let Contents;

  // if (showFeatures === 'Ess') {
  //   Contents= (
  //     <div>

  //     <h4>Under construction</h4>
  //     </div>
  //     )
  // }

  if (showFeatures === "Area") {
    Contents = (
      <div>
        <h4>{showFeatures} Features:</h4>
        {(errors.length > 0) && (
          <div className="feature-errors">
            {errors.map(e => (
              <p>{e}</p>
            ))}
          </div>
        )}
        
        <div className="all-icon">
            <p className="subtext">
              Please let seekers know what type of place they're staying at, if there's bedding available, and how many guests are allowed!
            </p>
          <p>Select an icon:</p>
          <div className="section-container">
            <div className="icon-labels-left">
            <h6>Structures:</h6> 
            <h6>Guests:</h6> 
            </div>
            <div className="sub-section-container">
              <div className="icon-section">
                {areaIcons[0].map((icon, i) => (
                  <Radio
                  key={`${icon}`}
                  i={`0${i}`}
                  iconValue={iconValue}
                  icon={icon}
                  setIconValue={setIconValue}
                  />
                  ))}
              </div>
              <div className="icon-section">
                {areaIcons[1].map((icon, i) => (
                  <Radio
                  key={`${icon}`}
                  i={`1${i}`}
                  iconValue={iconValue}
                  icon={icon}
                  setIconValue={setIconValue}
                  required
                  />
                  ))}
              </div>
            </div>
          </div>
           {/* {areaFeatures.map((feature) => (
             <FeatureList
              name={"areaFeature"}
              feature={feature}
              featureState={areaFeatures}
              setFeatureState={setAreaFeatures}
            />
          ))} */}
          <div className={`feature-input-div`}>
            <input
              onChange={(e) => setInputField(e.target.value)}
              type="text"
              value={inputField.name}
              placeholder='Describe the feature'
            >
              {inputField.name}
            </input>
            <button onClick={handleAddClickArea} className="add-feature">
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="all-features-div">
        <div className="feature-show-buttons">
          <button onClick={e => setShowFeatures("Area")} className="show-button show-feature">
            Area Feature
          </button>
          <button className="show-button show-feature">
            Coming Soon
          </button>
          <button className="show-button show-feature">
            Coming Soon
          </button>
        </div>
        {Contents}
      </div>
    </>
  );
}

export default EditFeaturesForm;
