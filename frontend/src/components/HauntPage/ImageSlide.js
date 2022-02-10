import './imageslide.css'


function ImageSlide({hauntId, haunt}) {
    let images = haunt[0].Images
    
    // console.log(haunt, images)
    return (
        <div className='slide-container'>
            <div className='slide-img-container'>
                {images.map((img) => {
                    return <img className='slide-img' src={img.url}></img>
                })}
            </div>
            <div className='slide-button-container'>
               <div className='slide-button-prev'>
               <i className="fa-solid fa-circle-chevron-left"></i>
               </div>
               <div className='slide-button-next'>
               <i className="fa-solid fa-circle-chevron-right"></i>
               </div>
            </div>
        </div>
    );
}


export default ImageSlide;