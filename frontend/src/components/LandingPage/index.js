import ImageBlockWide from "./ImageBlockWide";

function LandingPage() {

    let url = "https://wallpaperaccess.com/full/1228567.jpg"

    return (
        <div className="home-div">
            <h1>Visit the Unknown!</h1>
            <h2>Uncover mysterious haunts--crypts, coves, manors, lakes, and forests--with known supernatural inhabitants and rich histories.</h2>
            <ImageBlockWide url={url} />
        </div>
    );
}

export default LandingPage;