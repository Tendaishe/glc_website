import "./GallerySection.css"; // Make sure to create and include this CSS file
// import playIcon from '../../assets/play-icon.png'; // Replace with your play icon image path
import { ReadingImg } from "../../assets/images";

const GallerySection = () => {
    const galleryItems = [
        { title: "Video Title", thumbnail: ReadingImg },
        { title: "Video Title", thumbnail: ReadingImg },
        { title: "Video Title", thumbnail: ReadingImg },
        { title: "Video Title", thumbnail: ReadingImg },
    ];

    return (
        <div className="gallery-section">
            <h2 className="gallery-title">GALLERY</h2>
            <div className="video-gallery">
                {galleryItems.map((item, index) => (
                    <div key={index} className="video-item">
                        <img
                            className="video-thumbnail"
                            src={item.thumbnail}
                            alt={item.title}
                        />
                        {/* <img className="play-icon" src={playIcon} alt="Play icon" /> */}
                        <p className="video-title">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GallerySection;
