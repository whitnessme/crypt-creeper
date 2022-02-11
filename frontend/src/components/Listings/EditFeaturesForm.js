import React, { useState } from "react";
import FeatureCheckbox from './FeatureCheckbox';


function EditFeaturesForm({ selectedHaunt }) {
    const [areaFeatures, setAreaFeatures] = useState(selectedHaunt.AreaFeatures);
    const [essentials, setEssentials] = useState(selectedHaunt.Essentials);
    const [amentities, setAmentities] = useState(selectedHaunt.Amentities);
  console.log(selectedHaunt.Amenities)

  const handleChecksChanges = () => {

  }

  return (
    <div className="all-features-div">
      <div className="area-features-div">
        <div className="icons-list">
          {areaFeatures.map((feature, i)=> (
              <FeatureCheckbox feature={feature} />
            ))
          }
        </div>
        <div className="inputs-list">

        </div>
      </div>

      <div className="essentials-div">
        <div className="icons-list">

        </div>
        <div className="inputs-list">
          
        </div>
      </div>

      <div className="amenities-div">
        <div className="icons-list">

        </div>
        <div className="inputs-list">
          
        </div>
      </div>
    </div>
  );
}

export default EditFeaturesForm;
