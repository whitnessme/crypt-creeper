import React, { useState } from "react";
import FeatureList from "./FeatureList";
import { amenitiesIcons, areaIcons, essentialIcons } from "./info-listing";

function EditFeaturesForm({ selectedHaunt }) {
  const [areaFeatures, setAreaFeatures] = useState(selectedHaunt.AreaFeatures);
  const [essentials, setEssentials] = useState(selectedHaunt.Essentials);
  const [amentities, setAmentities] = useState(selectedHaunt.Amentities);

  return (
    <div className="all-features-div">
      <div className="area-features-div">
        <>
          <div className="icons-list">
            areaIcons.map(option => (
            <div dangerouslySetInnerHTML={{__html: option.icon}}></div>
          </div>        
            ))
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
