import { useHistory, useParams } from 'react-router-dom'
import ImageBlock from '../LandingPage/ImageBlock';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect  } from 'react';

import { getHauntsbyHostId } from '../../store/haunt'
import './listing.css'

function Listings () {
    let history = useHistory();
    const dispatch = useDispatch();

    const haunts = useSelector(state => (
        Object.values(state.haunt.entries)
    ))
    
    const sessionUser = useSelector((state) => state.session.user)

    useEffect(() => {
       dispatch(getHauntsbyHostId(sessionUser.id))
}, [dispatch, ])

    let lastInitial = sessionUser.lastName.slice(0,1)

    // const { hauntId, url, classNames, caption, buttonText, buttonLink, caption0Class, caption1Class }    

    if(!haunts.length) return null

    if(!sessionUser) {
        history.push(`/`)
    }

    if (sessionUser.userTypeId === 1) {
        history.push(`/host/signup`)
    }

    return (
        <>
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
                            <p className='num'>{haunts?.length}</p>
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
        {haunts &&
                <div className='listings-haunts-div'>
                    {haunts?.map((haunt) => (
                        <>
                        {console.log('helllllo', haunt.id)}
                        <ImageBlock
                        key={`listing-${haunt?.name}`}
                        classNames='user-view-haunts'
                        url={haunt?.Images[0].url}
                        hauntId={haunt.id}
                        caption={[haunt?.name, `In ${haunt?.city}, ${haunt.state}`]}
                        buttonText='Edit Listing'
                        caption0Class='listing-title'
                        caption1Class='listing-location'
                        listing={true}
                        />
                        </>
                    ))}
                </div>
                }
            </div>
        </div>
        </>
    )
}

export default Listings