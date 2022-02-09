import ImageBlock from "./ImageBlock";
import ImageBlockGrid from './ImageBlockGrid';
import { twoWide, threeWide1} from './image-block-info'

import './LandingPage.css'

function LandingPage() {

    // need to update URLS for images
    let url = "https://media.cntraveler.com/photos/57ec02078300776b0f420a13/3:2/w_2046,h_1364,c_limit/haunted-forests-black-forest-germany-GettyImages-467120271.jpg"
// console.log(threeWide1)
    return (
        <div className="home-div">
            <header>
                <h1>Visit the Unexplained!</h1>
                <div className="h2-container">
                    <h2>Uncover and book haunt locations with known supernatural inhabitants and rich histories.</h2>
                </div>
            </header>
            <div className="lone">
            <ImageBlock url={url} classNames='wide tall' />
            </div>
            <ImageBlockGrid classNames='two-wide' blocks={twoWide} />
            <div className="lone">
            <ImageBlock url={url} classNames='wide tall' caption={["Own a Supernatural Location? Earn money with CryptSeeker.", "Host our cryptozoology and parapsychology community at your transcendental places!"]} buttonText="Learn more" buttonLink="host/signup" />
            </div>
            <ImageBlockGrid classNames="three-wide tall" blocks={threeWide1} />
        </div>
    );
}

export default LandingPage;