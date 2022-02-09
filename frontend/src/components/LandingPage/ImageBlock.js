import { useHistory} from 'react-router-dom';
import ImageBlockCaption from "./ImageBlockCaption";

function ImageBlock({ hauntId, url, classNames, caption, buttonText, buttonLink, caption0Class, caption1Class }) {
    let history = useHistory();
    // console.log('Hmm', hauntId, buttonText, caption)
    const redirect = () => {
        history.push(`/haunts/${hauntId}`)
    }

    return (
        <div className={`image-block ${classNames}`}>
            {hauntId && !buttonText
            ?
            <>
                <div onClick={redirect} className="img-container" style={{backgroundImage: `url(${url})`}}>
                </div>
                <ImageBlockCaption
                redirect={redirect}
                caption={caption}
                hauntId={hauntId}
                caption0Class={caption0Class}
                caption1Class={caption1Class} />
            </>
            :
            <>
                <div className="img-container" style={{backgroundImage: `url(${url})`}}>
                </div>
                <ImageBlockCaption
                hauntId={hauntId}
                caption={caption}
                buttonText={buttonText}
                buttonLink={buttonLink}
                caption0Class={caption0Class}
                caption1Class={caption1Class}
                />
            </>
            }
        </div>
    )
}

export default ImageBlock;