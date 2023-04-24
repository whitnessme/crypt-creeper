import './imageslide.css'


function ImageSlide({hauntId, haunt}) {
    let images = haunt[0]?.Images

    if (!images?.length) {

        let defaultImages = [
            {url: "https://images.freeimages.com/images/large-previews/d09/spooky-trees-1151024.jpg"},
            {url: "https://images.freeimages.com/images/large-previews/92c/railroad-crossing-1636197.jpg"},
            {url: "https://images.freeimages.com/images/large-previews/9e0/jack-the-ripper-s-playground-it-s-not-finish-1148163.jpg"},
            {url: "https://images.freeimages.com/images/large-previews/cc5/haunting-hallway-1625092.jpg"},
            {url: "https://images.freeimages.com/images/large-previews/e57/old-photo-of-spooky-houses-1201803.jpg"},
            {url: "https://images.freeimages.com/images/large-previews/d38/spooky-house-1210372.jpg"},
            {url: "https://images.freeimages.com/images/large-previews/9f3/chapel-3-1234332.jpg"},
            {url: "https://images.freeimages.com/images/large-previews/54a/whitby-abbey-1208396.jpg"},
            {url: "https://images.freeimages.com/images/large-previews/53e/gargula-1217464.jpg"},
        ]

        // Shuffle the array
        for (let i = defaultImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [defaultImages[i], defaultImages[j]] = [defaultImages[j], defaultImages[i]]
        }

        // Pick out the first 4 photos
        images = defaultImages.slice(0, 4)

    }
    
    return (
        <div className='slide-container'>
            <div className='slide-img-container'>
                {images?.map((img, i) => {
                    return <img key={`imgslide-${i}`} className='slide-img' src={img.url}></img>
                })}
            </div>
            {/* <div className='slide-button-container'>
               <div className='slide-button-prev'>
               <i className="fa-solid fa-circle-chevron-left"></i>
               </div>
               <div className='slide-button-next'>
               <i className="fa-solid fa-circle-chevron-right"></i>
               </div>
            </div> */}
        </div>
    );
}


export default ImageSlide;