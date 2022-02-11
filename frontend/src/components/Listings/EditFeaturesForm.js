import React, { useState } from "react";


function EditFeaturesForm() {
    const [areaFeatures, setAreaFeatures] = useState([]);
    const [essentials, setEssentials] = useState([]);
    const [amentities, setAmentities] = useState([]);

  return (
    <>
      <div className="area-features-div"></div>
      <div className="essentials-div"></div>
      <div className="amenities-div"></div>
    </>
  );
}

export default EditFeaturesForm;
