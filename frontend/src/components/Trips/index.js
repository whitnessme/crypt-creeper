import { useHistory, useParams } from "react-router-dom";
import ImageBlock from "../LandingPage/ImageBlock";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getBookingsByUser } from "../../store/booking";
import "../Listings/listing.css";


function Trips() {
  let history = useHistory();
  const dispatch = useDispatch();

  const bookings = useSelector((state) => Object.values(state.booking.byUser));



  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getBookingsByUser(sessionUser?.id));
  }, [dispatch]);

  let lastInitial = sessionUser?.lastName.slice(0, 1);

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

  const changeDateFormat = (date) => {
    const dateArr = date.split("-");
    let month = months[dateArr[1]];
    return `${month} ${dateArr[2]}`;
  };

  return (
    <>
      <div className="listings-page-container">
        <div className="user-left-col">
            <div className="name-icon-div">
              <i className="fa-solid fa-skull user-profile"></i>
              {sessionUser &&
              <h3>
                {sessionUser?.firstName} {lastInitial}.
              </h3>}
              <div>
                <i className="fa-solid fa-square-check host-check-icon"></i>
                <p>Seeker</p>
              </div>
            </div>
        </div>
        <div className="listings-right-div">
          <div className="listing-nav">
            <ul className="listing-nav-links">
              <li>
                <p className="num">{bookings?.length}</p>
                <p className="listing-nav-title">Trips</p>
              </li>
              <li>
                <p className="coming-soon">coming soon</p>
                <p className="listing-nav-title">Saves</p>
              </li>
              <li>
                <p className="coming-soon">coming soon</p>
                <p className="listing-nav-title">Reviews</p>
              </li>
            </ul>
          </div>
          {bookings && (
            <div className="listings-haunts-div">
              {bookings?.map((booking) => (
                <>
                  <ImageBlock
                    key={`listing-${booking?.id}`}
                    classNames="user-view-haunts"
                    url={booking?.Haunt?.Images && booking?.Haunt?.Images[0]?.url}
                    tripId={booking?.id}
                    caption={[
                      `${changeDateFormat(booking.startDate)} - ${changeDateFormat(
                        booking.endDate
                      )}`,
                      `In ${booking?.Haunt.city}, ${booking?.Haunt.state}`,
                    ]}
                    // buttonText={<i className="fa-solid fa-trash-can"></i>}
                    caption0Class="listing-title"
                    caption1Class="listing-location"
                    hauntId={booking?.Haunt?.id}
                    booking='true'
                    trip={booking}
                    bookingId={booking?.id}
                  />
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Trips;
