import ImageSlide from './ImageSlide';
import HauntHeader from './HauntHeader';
import HauntBookingInfo from './HauntBookingInfo';
import HauntFeatures from './HauntFeatures';
import store from '../../store'

import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { useEffect  } from 'react';

import { getOneHaunt } from '../../store/haunt'

function HauntPage() {
    const dispatch = useDispatch();
    const { hauntId } = useParams();
    const haunt = useSelector(state => (
        Object.values(state.haunt.entries)
    ))
    // console.log('hello?', window.store.getState())
// console.log('MAIN', haunt)
    useEffect(() => {
            dispatch(getOneHaunt(hauntId))
    }, [dispatch])

    if(!haunt.length) {
        return null
    }
    // console.log(window.state)

    return (
        <div className="haunt-div">
            <ImageSlide haunt={haunt} hauntId={hauntId} />
            <HauntHeader haunt={haunt} hauntId={hauntId} />
            <HauntBookingInfo haunt={haunt} hauntId={hauntId} />
            <HauntFeatures haunt={haunt} hauntId={hauntId} />
        </div>
    );
};

export default HauntPage;