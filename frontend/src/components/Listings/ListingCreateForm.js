import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ShowInfo from "./showInfo";
import EditFeaturesForm from "./EditFeaturesForm";

import { createNewHaunt, getHauntsbyHostId } from "../../store/haunt";
import { useEffect } from "react";

function ListingEditForm({ setShowModal }) {
  const userId = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  //   const haunts = useSelector((state) => state.haunt.entries);
  //   let selectedHaunt = haunts[hauntId];

  const [errors, setErrors] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [showSum, setShowSum] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [selectedHaunt, setSelectedHaunt] = useState(null);

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

  const [name, setName] = useState("testing");
  const [address, setAddress] = useState("remove later");
  const [city, setCity] = useState("remove later");
  const [state, setState] = useState("Alaska");
  const [zipcode, setZipcode] = useState(58693);
  const [country, setCountry] = useState("United States");
  const [closeLandmark, setCloseLandmark] = useState("remove later");
  const [price, setPrice] = useState(67);
  const [summary, setSummary] = useState("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,");

  const handleSubmit = async (e) => {
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
      setSelectedHaunt(newListing.id);
      setErrors([])
      showFeaturesHideOthers();
    }
  };

  const handleFeatureSubmit = (e) => {
    e.preventDefault();

    // Needs some sort of error check first?
    dispatch(getHauntsbyHostId(sessionUser.id));
    setShowModal(false);
    history.push(`/listings/${sessionUser.id}`);
  };

  let contents;

  if (showFeatures) {
    contents = <EditFeaturesForm selectedHaunt={selectedHaunt} errors={errors} setErrors={setErrors} />;
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
          {(errors.length > 0) && (
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
