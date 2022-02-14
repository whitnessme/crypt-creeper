function HauntHeader({ haunt, hauntId }) {
  let info = haunt[0];
  let lastInitial = info?.User?.lastName?.slice(0, 1);


  return (
    <div className="haunt-info-div">
     {haunt &&
      <div className="haunt-header">
        <div className="location-header-div">
          <span>{info.country}</span>
          <i className="fa-solid fa-angle-right"></i>
          <span>{info.state}</span>
          <i className="fa-solid fa-angle-right"></i>
          <span>{info.city}</span>
        </div>
        <div className="haunt-title">
          <h1>{info.name}</h1>
          <p>{info.closeLandmark}</p>
        </div>
        <div className="haunt-information">
          <div className="host-info">
            <div className="skull-host-icon user-profile">
            <i className="fa-solid fa-ghost"></i>
            </div>
            <div className="host-name">
              <p>Hosted by</p>
              <p>
                {info?.User?.firstName} {lastInitial}.
              </p>
            </div>
          </div>
          <div className="haunt-summary">
            <p>{info.summary}</p>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default HauntHeader;
