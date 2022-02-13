import { useHistory, useParams } from "react-router-dom";
import ImageBlock from "../LandingPage/ImageBlock";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getBookingsByUser } from "../../store/booking";
import "../Listings/listing.css";
import TripsEditModal from "./TripsEditModal";

function Trips() {
  let history = useHistory();
  const dispatch = useDispatch();

  const trips = useSelector((state) => Object.values(state.booking.byUser));

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
                <p className="num">{trips?.length}</p>
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
          {trips && (
            <div className="listings-haunts-div">
              {trips?.map((trip) => (
                <>
                  <ImageBlock
                    key={`listing-${trip?.id}`}
                    classNames="user-view-haunts"
                    url={trip?.Haunts?.Images && trip?.Haunts?.Images[0]?.url}
                    hauntId={trip?.id}
                    caption={[
                      trip?.name,
                      `In ${trip?.city}, ${trip?.state}`,
                    ]}
                    buttonText="Edit Trip"
                    caption0Class="listing-title"
                    caption1Class="listing-location"
                    trip={true}
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
