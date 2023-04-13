import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Radio from "./Radio";
import "./feature.css";
import { createFeature, grabFeatures } from "../../store/feature";
import { amenitiesIcons, areaIcons, essentialIcons } from "./info-listing";

function EditFeaturesForm({ selectedHaunt, errors, setErrors, showErrors, setShowErrors }) {
  const dispatch = useDispatch();

  const [iconValue, setIconValue] = useState('');
  const [inputField, setInputField] = useState('');
  const [currentFeatures, setCurrentFeatures] = useState([]);

  const [showFeatures, setShowFeatures] = useState("Area");

  const features = useSelector((state) => state.feature)

  useEffect(() => {
    dispatch(grabFeatures(selectedHaunt))
  }, [])

  useEffect(() => {
    setCurrentFeatures(features[showFeatures])
  }, [showFeatures])

  useEffect(() => {
    const errs = []
    if (!iconValue) {
      errs.push("Please select an icon.")
    }
    if (!inputField || inputField.length < 5) {
      errs.push("Please describe the feature with at least 5 characters.")
    }
    setErrors(errs)
  }, [inputField, iconValue])

  const handleAddClickArea = async (e) => {
    e.preventDefault()
    setShowErrors(true)
    if (!errors.length) {
      await dispatch(createFeature({ name: inputField, icon: iconValue }, selectedHaunt, "area"))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          if (data.errors)
          setErrors(data.errors);
          console.log(errors)
        }});
        if (!errors.length) {
          setCurrentFeatures([...currentFeatures, {icon: iconValue, name: inputField}])
          setInputField('');
          setIconValue('')
          setShowErrors(false)

        }
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
        <div className="all-icon">
            <p className="subtext">
              Please let seekers know what type of place they're staying at, if there's bedding available, and how many guests are allowed!
            </p>
          <p>Select an icon:</p>
          <div className="section-container">
            <div className="icon-labels-left">
              <p className="subtext">Structures:</p> 
              <p className="subtext">Guests:</p> 
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
              value={inputField}
              placeholder='Describe the feature'
            />
            <button onClick={handleAddClickArea} className="add-feature">
              Add
            </button>
          </div>
        </div>
        <h6>Added {showFeatures} Features:</h6>
          {currentFeatures.length === 0 && (
            <p id="no-features">Add some features above to see them here!</p>
          )}
        <ul className="current-features">
          {currentFeatures.map(feature => (
              <li className="feature-li">
                <div dangerouslySetInnerHTML={{__html: feature.icon}}></div>
                <p>{feature.name}</p>
              </li>
          ))}
        </ul>
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
