import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createNewBooking,
  getOneBooking,
  getBookingsByHaunt,
} from "../../store/booking";
import "../HauntPage/booking-form.css";

const Moment = require("moment");
const MomentRange = require("moment-range");

function TripEditForm({ hauntId, showModal, setShowModal, bookingId }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const moment = MomentRange.extendMoment(Moment);

  const [errors, setErrors] = useState(["default"]);
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

//   dispatch(getOneBooking(bookingId))

  const sessionUser = useSelector((state) => state.session.user);

  const selectedBooking = useSelector((state) => {
    return Object.values(state?.booking?.entries);
  });
let haunt;
let hauntBookings;
  console.log();

  useEffect(() => {
    // dispatch(getOneBooking(bookingId))
    // dispatch(getBookingsByHaunt(hauntId));
  }, [dispatch, sessionUser.id]);

//   let info = haunt[0].AreaFeatures;
let info;

  const findOccupancy = () => {
    let features = Object.values(info);
    let occupancy = features.filter(
      (feature) =>
        feature.name.includes("adults") || feature.name.includes("guests")
    );

    return occupancy[0].name;
  };

//   let allowedGuests = findOccupancy();

//   const findNumOfGuestOptions = () => {
//     let guests = findOccupancy();
//     let nums = guests.split(" ").filter((word) => parseInt(word, 10));

//     if (nums.length === 1) {
//       let result = [];
//       for (let i = 0; i <= nums[0]; i++) {
//         result.push(i);
//       }
//       return result;
//     }
//     if (nums.length === 2) {
//       let result = [];
//       for (let i = parseInt(nums[0]); i <= nums[1]; i++) {
//         result.push(i);
//       }
//       return result;
//     }
//   };

//   let numOptions = findNumOfGuestOptions();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
//   const [numOfGuests, setNumOfGuests] = useState(numOptions[0]);

//   if (!haunt) return null;

  const months = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sept",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

//  const changeDateFormat = (date) => {
//     const dateArr = date.split("-");
//     let month = months[dateArr[1]];
//     return `${month} ${dateArr[2]}`;
//   };

//   const alreadyBookedDays = () => {
//     let ranges = [];
//     let result = [];
//     hauntBookings
//       ?.filter((book) => book.userId === sessionUser.id)
//       .map((book) => {
//         ranges.push(
//           `${changeDateFormat(book.startDate)} - ${changeDateFormat(
//             book.endDate
//           )}`
//         );
//         let startString = book.startDate.split("-").join(", ");
//         let endString = book.endDate.split("-").join(", ");
//         const start = new Date(startString);
//         const end = new Date(endString);
//         const range = moment.range(start, end);
//         result.push(range);
//       });
//     return { ranges, result };
//   };

//   const checkIfIntersect = () => {
//     let result = false;
//     let currentBookings = alreadyBookedDays();
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     const range = moment.range(start, end);
//     console.log("current", currentBookings);
//     currentBookings.result.map((booking) => {
//       if (booking.overlaps(range)) {
//         result = true;
//       }
//     });
//     return result;
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(["default"]);
    if (!sessionUser) {
      setErrors("Please log in to book");
    } 
    // else if (checkIfIntersect()) {
    //   setErrors(["Invalid range, intersects with other bookings"]);
    // } 
    else {
      const payload = {
        startDate,
        endDate,
        // numOfGuests: parseInt(numOfGuests),
        userId: sessionUser.id,
        hauntId,
      };
      dispatch(createNewBooking(payload)).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          if (data.errors) setErrors(data.errors);
        }
      });
      if (!errors) {
        // dispatch(getBookingsByUser(sessionUser.id));
        // dispatch(getBookingsByHaunt(hauntId));
        // history.push(`/trips/${sessionUser.id}`)
      }
    }
  };

   return (
 <>
     {/* <div className="booking-form-container">
       <div className="sticky-form">
        <form onSubmit={handleSubmit} className="haunt-booking-info-container">
           <div className="haunt-price-top">
            <h2>${haunt[0].price}</h2>
            <div>per night {`(${allowedGuests})`}</div>
          </div>
          {errors != "default" && (
            <ul className="error-list-inline">
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          )}
          <div className="book-dates-buttons-container">
            <div
              className={`checkin-div selected-${showStart}`}
              onClick={() => {
                setShowStart(true);
                setShowEnd(false);
              }}
            >
              <p className="bold-text">Check in</p>
              {startDate ? (
                <p className="select-p">{changeDateFormat(startDate)}</p>
              ) : (
                <p className="select-p">Select date</p>
              )}
            </div>
            <div
              className={`checkout-div selected-${showEnd}`}
              onClick={() => {
                setShowEnd(true);
                setShowStart(false);
              }}
            >
              <p className="bold-text">Check out</p>
              {endDate ? (
                <p className="select-p">{changeDateFormat(endDate)}</p>
              ) : (
                <p className="select-p">Select date</p>
              )}
             </div>
           </div>
           <div className="date-input-container">
             {showStart && (
               <>
                 <i className="fa-solid fa-backward-step"></i>
                 <input
                   type="date"
                   className="check-in"
                   value={startDate}
                   onChange={(e) => {
                     setStartDate(e.target.value);
                     setShowStart(!showStart);
                   }}
                 />
               </>
             )}
             {showEnd && (
               <>
                 <i className="fa-solid fa-forward-step"></i>
                 <input
                   type="date"
                   className="check-out"
                   value={endDate}
                   onChange={(e) => {
                     setEndDate(e.target.value);
                     setShowEnd(!showEnd);
                   }}
                 />
               </>
             )}
           </div>
           <div className="guests-container">
           <label>Guests</label>
           <select
             value={numOfGuests}
             placeholder="#"
             name="guests"
             className="guests-select-dropdown"
             onChange={(e) => setNumOfGuests(e.target.value)}
           >
             {numOptions.map((option) => (
               <option key={`guests-allowed-${option}`} value={option}>
                 {option}
               </option>
             ))}
           </select>
           </div>
           <div className="book-submit-container">
           <button className="book-submit" type="submit">Instant book</button>
           </div>
         </form>
         <div className="current-booking-ranges-div">
           <h5>Dates already booked:</h5>
           <ul>
             {alreadyBookedDays().ranges.map((e) => (
               <>
               <li><i className="fa-solid fa-calendar-minus"></i>  {e}</li>
               </>
             ))}
           </ul>
         </div>
       </div>
     </div> */}
</>
 );
}

export default TripEditForm;
