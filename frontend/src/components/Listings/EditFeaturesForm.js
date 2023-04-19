import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Radio from "./Radio";
import "./feature.css";
import { createFeature, grabFeatures } from "../../store/feature";
import { amenitiesIcons, areaIcons, essentialIcons } from "./info-listing";
import IconList from "./IconList";

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

    setCurrentFeatures(Object.values(features[showFeatures.toLowerCase()]))

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
      await dispatch(createFeature({ name: inputField, icon: iconValue }, selectedHaunt, showFeatures.toLowerCase()))
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


  let iconListContents;
  let iconListLabels;

  if (showFeatures === "Area") {
    iconListContents = areaIcons;
    iconListLabels = ["Structures", "Guests"];
  } else if (showFeatures === "Essentials") {
    iconListContents = essentialIcons;
    iconListLabels = ["Restroom", "Pets", "Other"];
  } else if (showFeatures === "Amenities") {
    iconListContents = amenitiesIcons;
    iconListLabels = ["Consumables", "Other"];

  }


  return (
    <>
      <div className="all-features-div">
        <div className="feature-show-buttons">
          <button
          onClick={e => {
            e.preventDefault();
            setShowFeatures("Area");
          }}
          className="show-button show-feature">
            Area Features
          </button>
          <button
          onClick={e => {
            e.preventDefault();
            setShowFeatures("Essentials");
          }}
          className="show-button show-feature">
            Essentials
          </button>
          <button
          onClick={e => {
            e.preventDefault();
            setShowFeatures("Amenities");
          }}
          className="show-button show-feature">
            Amenities
          </button>
        </div>
        <div>
        <h4>{showFeatures} Features:</h4>
        <div className="all-icon">
            <p className="subtext">
              Please let seekers know what type of place they're staying at, if there's bedding available, and how many guests are allowed!
            </p>
          <p>Select an icon:</p>
          <div className="section-container">
            <div className="icon-labels-left">
              {iconListLabels.map(label => (
                <p className="subtext">{label}:</p> 
              ))}
            </div>
            <div className="sub-section-container">
              {iconListContents.map((icons, idx) => (
                <IconList
                key={`iconlist-${idx}`}
                icons={icons}
                iconValue={iconValue}
                setIconValue={setIconValue}
                idx={idx}
                />
              ))}
            </div>
          </div>
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
          {currentFeatures?.length === 0 && (
            <p id="no-features">Add some features above to see them here!</p>
          )}
        <ul className="current-features">
          {currentFeatures?.map(feature => (
              <li key={feature.name} className="feature-li">
                <div dangerouslySetInnerHTML={{__html: feature.icon}}></div>
                <p>{feature.name}</p>
              </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
}

export default EditFeaturesForm;
