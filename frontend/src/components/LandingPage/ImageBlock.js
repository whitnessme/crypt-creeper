import { Link } from "react-router-dom";
import ImageBlockCaption from "./ImageBlockCaption";

function ImageBlock({ hauntId, url, classNames, caption, buttonText, buttonLink, caption0Class, caption1Class }) {
    return (
        <div className={`image-block ${classNames}`}>
            {hauntId && !buttonText
            ?
            <Link to={`/haunt/${hauntId}`}>
                <div className="img-container" style={{backgroundImage: `url(${url})`}}>
                </div>
                <ImageBlockCaption
                caption={caption}
                caption0Class={caption0Class}
                caption1Class={caption1Class} />
            </Link>
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