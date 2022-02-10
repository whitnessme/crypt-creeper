function HauntBookingInfo ({haunt, hauntId}) {
    if(!haunt) return null
    
    let info = haunt[0].AreaFeatures
    const findOccupancy = () => {
        let features = Object.values(info)
        let occupancy = features.filter((feature) => feature.name.includes('adults') || feature.name.includes('guests'))
        // console.log(occupancy[0].name)
        return occupancy[0].name
    }

    let numOfGuests = findOccupancy();

    const findNumOfGuestOptions = () => {
        let guests = findOccupancy();
        let nums = guests.split(" ").filter(word => parseInt(word))
        if (nums.length === 1) {
            let result = [];
            for (let i = 0; i <= nums[0]; i++) {
                result.push(i)
            }
            return result;
        }
        if (nums.length === 2) {
            let result = [];
            for (let i = nums[0]; i <= nums[1]; i++) {
                result.push(i)
            }
            return result;
        }
    };

    let numOptions = findNumOfGuestOptions();


    return (
        <div className="haunt-booking-info-container">
            <div className="haunt-price-top">
                <h2>${haunt[0].price}</h2>
                <span>per night {`(${numOfGuests})`}</span>
            </div>
            <div className="book-dates-buttons-container">
                <span className="check-in">
                    <p className="bold-text">Check in</p>
                    <p>Select date</p>
                </span>
                <span className="check-out">
                    <p className="bold-text">Check out</p>
                    <p>Select date</p>
                </span>
            </div>
            <label>Guests</label>
            <select name='guests' className="guests-select-dropdown">
                {numOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <p>2 nights minimum stay</p>
            <button>Request to book</button>
        </div>
    )
}


export default HauntBookingInfo;