import ImageBlock from "./ImageBlock";
import ImageBlockGrid from './ImageBlockGrid';
import { twoWide, threeWide1} from './image-block-info'

function LandingPage() {

    // <span>
    let url = "https://wallpaperaccess.com/full/1228567.jpg"
// Image blocks need: image url, size, caption text, caption size & location, 
    return (
        <div className="home-div">
            <h1>Visit the Unknown!</h1>
            <h2>Uncover mysterious haunts--crypts, coves, manors, lakes, and forests--with known supernatural inhabitants and rich histories.</h2>
            <ImageBlock url={url} classNames='wide' />
            <ImageBlockGrid classNames='two-wide' blocks={twoWide} />
            <ImageBlock url={url} classNames='wide tall' caption={["Own a Supernatural Location? Earn money with CryptSeeker.", "Host our cryptozoology and parapsychology community at your transcendental places!"]} buttonText="Learn more" />
            <ImageBlockGrid classNames="three-wide tall" blocks={threeWide1} />
        </div>
    );
}

export default LandingPage;