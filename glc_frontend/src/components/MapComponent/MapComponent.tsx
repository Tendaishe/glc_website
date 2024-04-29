import "./MapComponent.css";

const MapComponent = () => {
    return (
        <div className="map-component">
            <h2>Our Location</h2>
            <div className="map-info">
                <p>
                    <strong>Visit Us:</strong>
                </p>
                80 MOTT STREET, BIRMINGHAM
                <br /> B19 3HD
                <a
                    href="https://www.openstreetmap.org/?mlat=52.4887&amp;mlon=-1.9037#map=17/52.4887/-1.9037"
                    target="_blank"
                >
                    Get Directions
                </a>
            </div>
            <iframe
                width="100%"
                height="450"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-1.9087159534506867%2C52.48670889158769%2C-1.8987159534506867%2C52.49070889158769&amp;layer=mapnik&amp;marker=52.48870889158769%2C-1.9037159534506867"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default MapComponent;
