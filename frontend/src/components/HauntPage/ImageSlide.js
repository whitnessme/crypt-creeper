import './imageslide.css'
import { useSelector } from 'react-redux'

function ImageSlide({hauntId, haunt}) {
    let images = haunt[0].Images
    
    console.log(haunt, images)
    return (
        <div className='slide-container'>
            <div className='img-container'>
                {images.map((img) => {
                    return <img className='slide-img' src={img.url}></img>
                })}
            </div>
            <div className='slide-button-container'>
               <div className='slide-button'>
                   
               </div>
            </div>
        </div>
    );
}


export default ImageSlide;