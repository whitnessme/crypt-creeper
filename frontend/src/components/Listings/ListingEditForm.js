import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import EditFeaturesForm from "./EditFeaturesForm";
import ShowInfo from "./showInfo";

import { updateHaunt, getHauntsbyHostId } from "../../store/haunt";

function ListingEditForm({ hauntId, setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const haunts = useSelector((state) => state.haunt.entries);

  const [errors, setErrors] = useState(["default"]);
  const [showErrors, setShowErrors] = useState(false)
  const [showInfo, setShowInfo] = useState(false);
  const [showSum, setShowSum] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [selectedHaunt, setSelectedHaunt] = useState(haunts[hauntId]);


  const showInfoHideOthers = () => {
    setShowInfo(true);
    setShowSum(false);
    setShowFeatures(false);
  };
  const showSumHideOthers = () => {
    setShowInfo(false);
    setShowSum(true);
    setShowFeatures(false);
  };
  const showFeaturesHideOthers = () => {
    setShowInfo(false);
    setShowSum(false);
    setShowFeatures(true);
  };

  const [name, setName] = useState(selectedHaunt.name);
  const [address, setAddress] = useState(selectedHaunt.address);
  const [city, setCity] = useState(selectedHaunt.city);
  const [state, setState] = useState(selectedHaunt.state);
  const [zipcode, setZipcode] = useState(selectedHaunt.zipcode);
  const [country, setCountry] = useState(selectedHaunt.country);
  const [closeLandmark, setCloseLandmark] = useState(
    selectedHaunt.closeLandmark
  );
  const [price, setPrice] = useState(selectedHaunt.price);
  const [summary, setSummary] = useState(selectedHaunt.summary);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(["default"]);

    const payload = {
      name,
      address,
      city,
      state,
      zipcode,
      country,
      closeLandmark,
      price,
      summary,
    };
    const result = await dispatch(updateHaunt(payload, selectedHaunt.id)).catch(
      async (res) => {
        console.log(res);
        const data = await res.json();
        if (data && data.errors) {
          if (data.errors) setErrors(data.errors);
        }
      }
    );

    if (result) {
      dispatch(getHauntsbyHostId(sessionUser?.id));
      setShowModal(false);
      history.push(`/listings/${sessionUser?.id}`);
    }
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="edit-listing-form">
          <h2>Edit</h2>
          <h5>{selectedHaunt?.name}</h5>
          {(errors.length > 0 && showErrors) && (
            <ul className="error-list">
              <button onClick={() => setErrors([])} className="error-x">
                X
              </button>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          )}
          {showInfo ? (
            <ShowInfo
              name={name}
              setName={setName}
              address={address}
              setAddress={setAddress}
              city={city}
              setCity={setCity}
              state={state}
              setState={setState}
              zipcode={zipcode}
              setZipcode={setZipcode}
              country={country}
              setCountry={setCountry}
              closeLandmark={closeLandmark}
              setCloseLandmark={setCloseLandmark}
              price={price}
              setPrice={setPrice}
              setShowInfo={setShowInfo}
            />
          ) : (
            <>
              <button className="show-button" onClick={showInfoHideOthers}>
                Edit Information
              </button>
            </>
          )}

          {showSum ? (
            <>
              <p>Summary:</p>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
              <button className="hide-button" onClick={() => setShowSum(false)}>
                Hide
              </button>
            </>
          ) : (
            <>
              <button className="show-button" onClick={showSumHideOthers}>
                Edit Summary
              </button>
            </>
          )}

          {showFeatures ? (
            <>
              <EditFeaturesForm showError={showErrors} setShowErrors={setShowErrors} selectedHaunt={selectedHaunt} errors={errors} setErrors={setErrors} />
              <button
                className="hide-button"
                onClick={() => setShowFeatures(false)}
              >
                Hide
              </button>
            </>
          ) : (
            <>
              <button className="show-button" onClick={showFeaturesHideOthers}>
                Edit Features
              </button>
            </>
          )}
          <button className="edit-haunt-submit-button">Confirm Changes</button>
        </form>
      </div>
    </>
  );
}

export default ListingEditForm;
