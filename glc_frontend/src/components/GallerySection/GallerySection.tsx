import "./GallerySection.css";
import useGalleryHook, { IMedia } from "../../utils/useGalleryHook";
import getImageUrl from "../../utils/getImageUrl";

const GallerySection = ({ limit }: { limit?: number }) => {
    const { mediaItems, isLoading, error } = useGalleryHook(limit);

    const renderMediaItem = (item: IMedia) => {
        if (item.mediaType === "image" && item.imageAsset) {
            return (
                <img
                    className="gallery-image"
                    src={getImageUrl(item.imageAsset).url()}
                    alt="Gallery Image"
                />
            );
        } else if (item.mediaType === "video" && item.videoUrl) {
            const embedUrl = getYouTubeEmbedUrl(item.videoUrl);
            if (embedUrl) {
                return (
                    <iframe
                        className="gallery-image"
                        src={embedUrl}
                        title="Gallery Video"
                        frameBorder="0"
                        allowFullScreen
                    />
                );
            }
            return null;
        }
        return null;
    };

    function getYouTubeEmbedUrl(url: string) {
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        if (match && match[2].length === 11) {
            return `https://www.youtube.com/embed/${match[2]}`;
        }
        return null;
    }

    if (isLoading) {
        return <div className="gallery-loading">Loading gallery...</div>;
    }

    if (error) {
        return (
            <div className="gallery-error">
                Error fetching gallery items: {error.message}
            </div>
        );
    }

    return (
        <div className="gallery-section">
            <h2 className="gallery-title">GALLERY</h2>
            <div className="gallery">
                {mediaItems.map((item) => (
                    <div key={item._id} className="gallery-item">
                        {renderMediaItem(item)}
                        <p className="item-title">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GallerySection;
