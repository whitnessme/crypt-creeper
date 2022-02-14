import { Link, useHistory} from 'react-router-dom';
import ImageBlockCaption from "./ImageBlockCaption";

function ImageBlock({ hauntId, bookingId, go, trip, url, classNames, caption, buttonText, buttonLink, caption0Class, caption1Class, listing, booking }) {
    let history = useHistory();
    let redirect;
    let relativeLink;
    if(listing) {
        relativeLink = `/listings/host/${hauntId}`
        redirect = () => {
            history.push(`/listings/host/${hauntId}`)
        }
     } else if (booking) {
        relativeLink = `/booking/user/${hauntId}`
        redirect = () => {
            history.push(`/booking/user/${hauntId}`)
        }
    } else {
        relativeLink = `/haunts/${hauntId}`
        redirect = () => {
            history.push(`/haunts/${hauntId}`)
        }
    }


    return (
        <div className={`image-block ${classNames}`}>
            {hauntId && !buttonText
            ?
            <>
                <div onClick={() => {
            history.push(`/haunts/${hauntId}`)
        } } className="img-container" style={{backgroundImage: `url(${url})`}}>
                </div>
                <ImageBlockCaption
                redirect={redirect}
                caption={caption}
                hauntId={hauntId}
                caption0Class={caption0Class}
                booking={booking}
                bookingId={bookingId}
                caption1Class={caption1Class} />
            </>
            :
            <>
                <div
                onClick={go ? () => {history.push('/haunts')} : () => history.push(`/haunts/${hauntId}`)}
                className="img-container" style={{backgroundImage: `url(${url})`}}>
                </div>
                <ImageBlockCaption
                hauntId={hauntId}
                caption={caption}
                buttonText={buttonText}
                buttonLink={buttonLink}
                caption0Class={caption0Class}
                caption1Class={caption1Class}
                relativeLink={relativeLink}
                listing={listing}
                />
            </>
            }
        </div>
    )
}

export default ImageBlock;