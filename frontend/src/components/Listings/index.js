import { useHistory, useParams } from 'react-router-dom'
import ImageBlock from '../LandingPage/ImageBlock';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect  } from 'react';

import { getHauntsbyHostId } from '../../store/haunt'

function Listings () {
    let history = useHistory();
    const dispatch = useDispatch();

    const haunts = useSelector(state => (
        Object.values(state.haunt.entries)
    ))

    let state = window.store.getState()
    let sessionUser = state.session.user


    useEffect(() => {
        dispatch(getHauntsbyHostId(sessionUser.id))
}, [dispatch])

    console.log(haunts)

    let lastInitial = sessionUser.lastName.slice(0,1)

    // const { hauntId, url, classNames, caption, buttonText, buttonLink, caption0Class, caption1Class }    

    if(!haunts.length) return null

    if (sessionUser.userTypeId === 1) {
        history.push(`/host/signup`)
    }

    return (
        <div className='listings-page-container'>
            <div className='user-left-col'>
                <div className='name-icon-div'>
                    <i className="fa-solid fa-skull user-profile"></i>
                    <h3>{sessionUser.firstName} {lastInitial}.</h3>
                    <div>
                        <i className="fa-solid fa-square-check host-check-icon"></i>
                        <p>Host</p>
                    </div>
                </div>
            </div>
            <div className='listings-right-div'>
                <div className='listing-nav'>
                    <ul className='listing-nav-links'>
                        <li>
                            <p className='num'>0</p>
                            <p className='listing-nav-title'>Listings</p>
                        </li>
                        <li>
                            <p className='coming-soon'>coming soon</p>
                            <p className='listing-nav-title'>Saves</p>
                        </li>
                        <li>
                            <p className='coming-soon'>coming soon</p>
                            <p className='listing-nav-title'>Reviews</p>
                        </li>
                    </ul>
                </div>
                <div className='listings-blocks-div'>
                    {haunts.map((haunt) => {
                        <ImageBlock />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Listings