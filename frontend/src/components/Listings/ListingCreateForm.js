import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ShowInfo from "./showInfo";
import EditFeaturesForm from "./EditFeaturesForm";

import { createNewHaunt, getHauntsbyHostId } from "../../store/haunt";

function ListingEditForm({ setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const [errors, setErrors] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [showSum, setShowSum] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showErrors, setShowErrors] = useState(false)
  const [selectedHaunt, setSelectedHaunt] = useState();

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

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alaska");
  const [zipcode, setZipcode] = useState();
  const [country, setCountry] = useState("United States");
  const [closeLandmark, setCloseLandmark] = useState("");
  const [price, setPrice] = useState(0);
  const [summary, setSummary] = useState("");

  const handleSubmit = async (e) => {
    setShowErrors(true)
    e.preventDefault();
    const payload = {
      name,
      userId: sessionUser.id,
      address,
      city,
      state,
      zipcode,
      country,
      closeLandmark,
      price,
      summary,
    };
    const newListing = await dispatch(createNewHaunt(payload)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          if (data.errors) setErrors(data.errors);
        }
      }
    );

    if (newListing) {
      setSelectedHaunt(newListing)
      setErrors([])
      setShowErrors(false)
      showFeaturesHideOthers();
    }
  };

  const handleFeatureSubmit = (e) => {
    e.preventDefault();

    dispatch(getHauntsbyHostId(sessionUser.id));
    setShowModal(false);
    history.push(`/listings/${sessionUser.id}`);
  };

  let contents;

  if (showFeatures && selectedHaunt) {
    contents = <EditFeaturesForm showError={showErrors} setShowErrors={setShowErrors} selectedHaunt={selectedHaunt} errors={errors} setErrors={setErrors} />;
  } else {
    contents = (
      <>
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
              Add Information
            </button>
          </>
        )}

        {showSum ? (
          <>
            <label>
              Summary:
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </label>
            <button className="hide-button" onClick={() => setShowSum(false)}>
              Hide
            </button>
          </>
        ) : (
          <>
            <button className="show-button" onClick={showSumHideOthers}>
              Add Summary
            </button>
          </>
        )}
      </>
    );
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={showFeatures ? handleFeatureSubmit : handleSubmit} className="edit-listing-form">
          <div className="dungeon-icon">
            <i className="fa-solid fa-dungeon haunts-icon"></i>
          </div>
          <h2>{showFeatures ? "Add some features to your new listing!" : "Create a New Haunt Listing!"}</h2>
          {/* <div
            className="add-help"
            style={{ color: "transparent", margin: "0px", fontStyle: "italic" }}
          >
            Add features with edit button after submitting!
          </div> */}
          {(errors.length > 0 && showErrors) && (
            <ul className="create-errors error-list">
              <button
                onClick={() => setErrors([])}
                className="error-x"
              >
                X
              </button>
              {errors?.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          )}
          {contents}
          <button className="edit-haunt-submit-button">{showFeatures ? "Finish" : "Next"}</button>
        </form>
      </div>
    </>
  );
}

export default ListingEditForm;
