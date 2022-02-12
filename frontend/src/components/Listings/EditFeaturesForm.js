import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FeatureList from "./FeatureList";
import Radio from "./Radio";
import "./feature.css";
import { createNewAreaFeature } from "../../store/feature";
import { amenitiesIcon, areaIcons, essentialIcon } from "./info-listing";

function EditFeaturesForm({ selectedHaunt }) {
  const dispatch = useDispatch();
  const [areaFeatures, setAreaFeatures] = useState([]);
  const [essentials, setEssentials] = useState([]);
  const [amentities, setAmentities] = useState([]);

  const [iconValue, setIconValue] = useState('');
  const [inputField, setInputField] = useState('');

  const [showFeatures, setShowFeatures] = useState("Area");

  const hauntId = selectedHaunt.id

  const handleAddClickArea = (e) => {
    e.preventDefault()
    setAreaFeatures([{ name: inputField, icon: iconValue }]);
    setInputField('');
    setIconValue('')
  };

  useEffect(() => {
    if(selectedHaunt && areaFeatures.length != selectedHaunt.AreaFeatures.length) {
      areaFeatures.forEach((feature) => dispatch(createNewAreaFeature({feature, hauntId})))
    }
  }, [dispatch, areaFeatures])

  let Contents;

  if (showFeatures === "Area") {
    Contents = (
      <div>
        <h4>Add an Area Feature:</h4>
        <div className="all-icon">
            <p className="subtext">
              Please let seekers know what type of place they're staying at, if there's bedding available, and how many guests are allowed!
            </p>
          <p>Select an icon:</p>
          <div className="icon-section">
            {areaIcons[0].map((icon) => (
              <Radio
              key={`${icon}`}
              i="0"
              iconValue={iconValue}
              icon={icon}
              setIconValue={setIconValue}
              />
              ))}
          </div>
          <div className="icon-section">
              {/* <h6>GUESTS:</h6> */}
            {areaIcons[1].map((icon) => (
              <Radio
                key={`${icon}`}
                i="1"
                iconValue={iconValue}
                icon={icon}
                setIconValue={setIconValue}
                required
              />
            ))}
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
              required
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
          <button onClick={e => setShowFeatures("Ess")}className="show-button show-feature">
            Essential
          </button>
          <button onClick={e => setShowFeatures("Ess")} className="show-button show-feature">
            Amenity
          </button>
        </div>
        {Contents}
      </div>
    </>
  );
}

export default EditFeaturesForm;
