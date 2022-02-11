import { NavLink } from "react-router-dom";

const ImageBlockCaption = ({
  caption,
  caption0Class,
  caption1Class,
  buttonText,
  buttonLink,
  hauntId,
  relativeLink
}) => {

  // console.log(hauntId)

  return (
    <div className="block-info-container">
{/* No button */}
      {caption && hauntId && !buttonText && (
        <>
        <p className={caption0Class}>{caption[0]}</p>
        <p className={caption1Class}>{caption[1]}</p>
        </>
      )}
      {caption && hauntId && buttonText && (
        <>
          <p className={caption0Class}>{caption[0]}</p>
          <div className="block-button-container">
            <p className={caption1Class}>{caption[1]}</p>
            <NavLink exact to={relativeLink} className="block-button">
              {buttonText}
            </NavLink>
          </div>
        </>
      )}
{/* Button but not hauntId */}
      {caption && !hauntId && buttonText && (
        <>
            <p className={caption0Class}>{caption[0]}</p>
            <p className={caption1Class}>{caption[1]}</p>
            <div className="block-button-container">
                {buttonText && (
                <>
                    {buttonLink && (
                        <NavLink to={buttonLink} className="block-button">
                            {buttonText}
                        </NavLink>
                    )}
                </>
                )}
      </div>
        </>
        )}
    </div>
  );
};

export default ImageBlockCaption;
