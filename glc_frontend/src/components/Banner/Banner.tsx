import { useState } from "react";
import images from "./BannerImages";
import "./Banner.css";

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstImage = currentImageIndex === 0;
        const newIndex = isFirstImage
            ? images.length - 1
            : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentImageIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };

    return (
        <>
            <div className="banner-container">
                {images.map((image, index) => (
                    <img
                        key={image.label}
                        src={image.imgPath}
                        alt={`Slide ${index}`}
                        className={`banner-image ${
                            index === currentImageIndex ? "active" : ""
                        }`}
                    />
                ))}
                <div className="banner-text">
                    <h2 className="welcome-header">
                        {images[currentImageIndex].title?.toUpperCase()}
                    </h2>
                    <h1 className="welcome-msg">
                        {images[currentImageIndex].message?.toUpperCase()}
                    </h1>
                </div>

                <button className="banner-arrow left" onClick={goToPrevious}>
                    &#9664;
                </button>
                <button className="banner-arrow right" onClick={goToNext}>
                    &#9654;
                </button>
                <div className="banner-indicators">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`banner-indicator ${
                                index === currentImageIndex ? "active" : ""
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Banner;
