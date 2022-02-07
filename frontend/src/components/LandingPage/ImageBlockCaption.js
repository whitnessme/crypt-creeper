import { NavLink } from "react-router-dom";

const ImageBlockCaption = ({
  caption,
  caption0Class,
  caption1Class,
  buttonText,
  buttonLink,
  hauntId,
}) => {
  return (
    <div className="block-info-container">
      {caption && hauntId && buttonText && (
        <>
          <p className={caption0Class}>{caption[0]}</p>
          <div className="block-button-container">
            <p className={caption1Class}>{caption[1]}</p>
            <NavLink to={`/haunts/${hauntId}`} className="block-button">
              {buttonText}
            </NavLink>
          </div>
        </>
      )}
      {caption && !hauntId && (
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
