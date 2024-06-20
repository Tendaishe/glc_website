import { useState, useEffect } from "react";
import sanityClient from "../../utils/sanityClient";
import "./Banner.css";

interface BannerContent {
    title: string;
    message: string;
    imageUrl: string;
}

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [bannerContent, setBannerContent] = useState<BannerContent[]>([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `
            *[_type == "banner"] | order(order asc){
                title,
                message,
                "imageUrl": image.asset->url
            }
             `
            )
            .then((data) => {
                setBannerContent(data);
            })
            .catch(console.error);
    }, []);

    const goToPrevious = () => {
        const isFirstImage = currentImageIndex === 0;
        const newIndex = isFirstImage
            ? bannerContent.length - 1
            : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentImageIndex === bannerContent.length - 1;
        const newIndex = isLastImage ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };

    if (!bannerContent.length) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="banner-container">
                {bannerContent.map((content, index) => (
                    <img
                        key={content.title}
                        src={content.imageUrl}
                        alt={`Slide ${index}`}
                        className={`banner-image ${
                            index === currentImageIndex ? "active" : ""
                        }`}
                    />
                ))}
                <div className="banner-text">
                    <h2 className="welcome-header">
                        {bannerContent[currentImageIndex].title
                            ? bannerContent[
                                  currentImageIndex
                              ].title.toUpperCase()
                            : ""}
                    </h2>
                    <h1 className="welcome-msg">
                        {bannerContent[currentImageIndex].message
                            ? bannerContent[
                                  currentImageIndex
                              ].message.toUpperCase()
                            : ""}
                    </h1>
                </div>

                <button className="banner-arrow left" onClick={goToPrevious}>
                    &#9664;
                </button>
                <button className="banner-arrow right" onClick={goToNext}>
                    &#9654;
                </button>
                <div className="banner-indicators">
                    {bannerContent.map((_, index) => (
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
