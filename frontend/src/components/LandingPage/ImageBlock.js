import { Link } from "react-router-dom";
import ImageBlockCaption from "./ImageBlockCaption";

function ImageBlock({ hauntId, url, classNames, caption, buttonText, caption0Class, caption1Class }) {
    return (
        <div className={`image-block ${classNames}`}>
            {hauntId && !buttonText
            ?
            <Link to={`/haunt/${hauntId}`}>
                <img src={url} />
                <ImageBlockCaption
                caption={caption}
                caption0Class={caption0Class}
                caption1Class={caption1Class} />
            </Link>
            :
            <>
                <img src={url} />
                <ImageBlockCaption
                hauntId={hauntId}
                caption={caption}
                buttonText={buttonText}
                caption0Class={caption0Class}
                caption1Class={caption1Class}
                />
            </>
            }
        </div>
    )
}

export default ImageBlock;