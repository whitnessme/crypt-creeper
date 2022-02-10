function HauntFeatures ({haunt, hauntId}) {
    if(!haunt) return null
    let area = haunt[0].AreaFeatures
    let ess = haunt[0].Essentials
    let amenity = haunt[0].Amenities;
    let count = 1
    let title = {1: "Area Features", 2: 'Essentials', 3: 'Amenities'}
    return (
        <>
        <div className="haunt-features-container">
            {[area, ess, amenity].map((info) => (
                <>
                    <div key={`feature-${count}`} className={`${count}-features-div`}>
                        <h3>{title[count]}</h3>
                    {info.map(option => (
                        <div key={`each${option.id}`}>
                            <div dangerouslySetInnerHTML={{__html: option.icon}}></div>
                            <div>{option.name}</div>
                        </div>
                        ))}
                    </div>
                    <div style={{display: 'hidden'}}>
                        {count++}
                    </div>
                </>
            ))}
        </div>
        </>
    )
}


export default HauntFeatures;