
const ShowInfo = function({
    name, setName, address, setAddress,
    city, setCity, state, setState,
    zipcode, setZipcode, country, setCountry,
    closeLandmark, setCloseLandmark, price, setPrice,
    setShowInfo
}) {
    return (
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
    )
}

export default ShowInfo;