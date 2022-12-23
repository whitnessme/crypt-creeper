import ImageBlock from "../LandingPage/ImageBlock";
import ImageBlockGrid from '../LandingPage/ImageBlockGrid';

import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import '../LandingPage/LandingPage.css'

import { getHaunts } from "../../store/haunt";

function HauntsList() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const haunts = useSelector((state) => {
        return Object.values(state.haunt.entries);
      });
    
      useEffect(() => {
        dispatch(getHaunts()).then((data) => {
          if (!data) history.push("/404");
        });
      }, [dispatch]);
 


    return (
        <div className="haunts-list-page-container">
            <h2>Seeking out some cryptids and supernatural beings?</h2>
            <div className="cryptids-list-container">
                {haunts?.map((haunt) => (
                    <ImageBlock caption={[`${haunt.name}`]} url={haunt?.Images[haunt.Images.length - 1]?.url} hauntId={haunt?.id} classNames='normal lone' />
                ))}
            </div>

        </div>
    )
}

export default HauntsList;