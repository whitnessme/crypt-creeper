import ImageSlide from "./ImageSlide";
import HauntHeader from "./HauntHeader";
import HauntBookingInfo from "./HauntBookingInfo";
import HauntFeatures from "./HauntFeatures";
import './haunt-page.css'

import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";

import { getOneHaunt } from "../../store/haunt";

function HauntPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { hauntId } = useParams();
  const haunt = useSelector((state) => {
    return Object.values(state.haunt.entries);
  });
  const sessionUser = useSelector((state) => state.session.user);
  

  useEffect(async () => {
   await dispatch(getOneHaunt(hauntId)).then((data) => {
      if (!data) history.push("/404");
    });
  }, [dispatch, hauntId]);

  return (
    <>
      {haunt.length && (
        <div className="haunt-div">
          <ImageSlide haunt={haunt} hauntId={hauntId} />
          <HauntHeader haunt={haunt} hauntId={hauntId} />
          <HauntBookingInfo haunt={haunt} hauntId={hauntId} />
          <HauntFeatures haunt={haunt} hauntId={hauntId} />
        </div>
      )}
    </>
  );
}

export default HauntPage;
