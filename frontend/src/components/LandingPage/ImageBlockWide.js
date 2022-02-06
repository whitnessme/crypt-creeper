import { Link } from "react-router-dom";

function ImageBlockWide({ hauntId, url }) {
    return (
        <div className="image-block wide">
            {hauntId ?
            <Link to={`/haunt/${hauntId}`}>
                <img src={url} />
            </Link> :
            <img src={url} />
            }
        </div>
    )
}

export default ImageBlockWide;