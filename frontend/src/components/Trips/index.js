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

  console.log(bookings)

  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getBookingsByUser(sessionUser?.id));
  }, [dispatch]);

  let lastInitial = sessionUser?.lastName.slice(0, 1);

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
                <p className="listing-nav-title">Listings</p>
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
                      booking?.name,
                      `In ${booking?.Haunt.city}, ${booking?.Haunt.state}`,
                    ]}
                    buttonText="Edit booking"
                    caption0Class="listing-title"
                    caption1Class="listing-location"
                    hauntId={booking?.Haunt?.id}
                    booking={true}
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
