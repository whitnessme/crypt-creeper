
const ImageBlockCaption = ({ caption, caption0Class, caption1Class, buttonText }) => {
    return(
    <div className="block-info-container">
        {caption &&
        <>
            <p className={caption0Class}>{caption[0]}</p>
            <p className={caption1Class}>{caption[1]}</p>
        </>
        }
        {buttonText &&
            <button className="block-button">{buttonText}</button>
        }
</div>
)}

export default ImageBlockCaption;