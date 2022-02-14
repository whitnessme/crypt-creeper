import React, { useEffect, useState  } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useHistory} from 'react-router-dom';
import { usStates } from "./info-listing";
import EditFeaturesForm from "./EditFeaturesForm";

import { updateHaunt, getHauntsbyHostId } from '../../store/haunt'

function ListingEditForm({ hauntId, setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const haunts = useSelector((state) => state.haunt.entries);
  let selectedHaunt = haunts[hauntId];

  const [errors, setErrors] = useState(['default']);
  const [showInfo, setShowInfo] = useState(false);
  const [showSum, setShowSum] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);


  const showInfoHideOthers = () => {
      setShowInfo(true);
      setShowSum(false);
      setShowFeatures(false);
  }
  const showSumHideOthers = () => {
      setShowInfo(false);
      setShowSum(true);
      setShowFeatures(false);
  }
  const showFeaturesHideOthers = () => {
      setShowInfo(false);
      setShowSum(false);
      setShowFeatures(true);
  }

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
  setErrors(['default']);

const payload = {name, address, city, state, zipcode, country, closeLandmark, price, summary}
  const result = await dispatch(updateHaunt(payload, selectedHaunt.id))
  .catch(async (res) => {
    const data = await res.json();
    if (data && data.errors) {
      if (data.errors)
      setErrors(data.errors);
    }});

    if (result) {
      console.log('hello?')
        dispatch(getHauntsbyHostId(sessionUser?.id))
        setShowModal(false)
        history.push(`/listings/${sessionUser?.id}`)
    }
}


  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="edit-listing-form">
          <h2>Edit</h2>
          <h5>{selectedHaunt?.name}</h5>
          {errors && errors != 'default' && (
            <ul className="error-list">
              <button onClick={() => setErrors('default')} className="error-x">X</button>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          )}
          {showInfo ? (
            <>
              <label>
                Name:
                <input
                  className="listing-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label>
                Address:
                <input
                  className="listing-address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>

              <label>
                City:
                <input
                  className="listing-city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>

              <label>
                State:
                <select
                  className="listing-state"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  {usStates.map((USstate) => (
                    <option key={USstate} value={USstate}>
                      {USstate}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Country:
                <select
                  className="listing-country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {/* {countries.map(c => (
                        <option key={c} value={c}>{c}</option>
                    ))} */}
                  <option value="United States">United States</option>
                </select>
              </label>

              <label>
                Zip Code:
                <input
                  className="listing-zip"
                  type="number"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  min="00001"
                  max="99950"
                />
              </label>

              <label>
                Close Landmark:
                <input
                  className="listing-closeLandmark"
                  type="text"
                  value={closeLandmark}
                  onChange={(e) => setCloseLandmark(e.target.value)}
                />
              </label>

              <label>
                Price per night:
                <input
                  className="listing-price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              <button className="hide-button" onClick={() => setShowInfo(false)}>Hide</button>
            </>
          ) : (
            <>
              <button className="show-button" onClick={showInfoHideOthers}>Edit Information</button>
            </>
          )}

          {showSum ? (
            <>
              <p>Summary:</p>
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              <button className="hide-button" onClick={() => setShowSum(false)}>Hide</button>
            </>
          ) : (
            <>
              <button className="show-button" onClick={showSumHideOthers}>Edit Summary</button>
            </>
          )}

          {showFeatures ? (
              <>
                <EditFeaturesForm selectedHaunt={selectedHaunt} />
                <button className="hide-button" onClick={() => setShowFeatures(false)}>Hide</button>
              </>
          ) : (
              <>
                <button className="show-button" onClick={showFeaturesHideOthers}>Edit Features</button>
              </>
          )
        }
        <button className="edit-haunt-submit-button">Confirm Changes</button>
        </form>
      </div>
    </>
  );
}

export default ListingEditForm;
