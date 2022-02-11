import React, { useState } from "react";
import FeatureList from "./FeatureList";
import './feature.css'
import { amenitiesIcons, areaIcons, essentialIcons } from "./info-listing";

function EditFeaturesForm({ selectedHaunt }) {
  const [areaFeatures, setAreaFeatures] = useState(selectedHaunt.AreaFeatures);
  const [essentials, setEssentials] = useState(selectedHaunt.Essentials);
  const [amentities, setAmentities] = useState(selectedHaunt.Amentities);

  console.log(areaIcons[0])

  return (
    <div className="all-features-div">
      <div className="area-features-div">
        <>
          <div className="icons-list">
            {areaIcons[0].map(option => (
            <div key={option} dangerouslySetInnerHTML={{__html: option}}>
            </div>        
            ))}
            </div>
          {areaFeatures.map((feature) => (
            <FeatureList
              name={'areaFeature'}
              feature={feature}
              featureState={areaFeatures}
              setFeatureState={setAreaFeatures}
            />
          ))}
        </>
        <div className="icons-list">

        </div>
        <div className="inputs-list"></div>
      </div>

      <div className="essentials-div">
        <div className="icons-list"></div>
        <div className="inputs-list"></div>
      </div>

      <div className="amenities-div">
        <div className="icons-list"></div>
        <div className="inputs-list"></div>
      </div>
    </div>
  );
}

export default EditFeaturesForm;
