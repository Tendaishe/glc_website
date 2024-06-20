import { useState } from "react";
import { Link } from "react-router-dom";
import "./GallerySection.css";
import Modal from "react-modal";
import useGalleryHook, { IMedia } from "../../utils/useGalleryHook";
import getImageUrl from "../../utils/getImageUrl";

Modal.setAppElement("#root");

const GallerySection = ({ limit }: { limit?: number }) => {
    const { mediaItems, isLoading, error } = useGalleryHook(limit);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentMedia, setCurrentMedia] = useState<{
        url: string;
        type: string;
    } | null>(null);

    const openModal = (media: { url: string; type: string }) => {
        setCurrentMedia(media);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentMedia(null);
    };

    const renderMediaItem = (item: IMedia) => {
        if (item.mediaType === "image" && item.imageAsset) {
            const imageUrl = getImageUrl(item.imageAsset).url();
            return (
                <img
                    key={item._id}
                    className="gallery-image"
                    src={imageUrl}
                    alt={item.title}
                    onClick={() => openModal({ url: imageUrl, type: "image" })}
                />
            );
        } else if (item.mediaType === "video" && item.videoUrl) {
            const thumbnailUrl = item.thumbnail;
            const embedUrl = getYouTubeEmbedUrl(item.videoUrl);
            if (embedUrl) {
                return (
                    <>
                        <img
                            className="gallery-image"
                            src={thumbnailUrl}
                            alt={item.title}
                            onClick={() =>
                                openModal({ url: embedUrl, type: "video" })
                            }
                        />
                        <div className="video-icon-overlay">
                            <i
                                className="fas fa-play-circle"
                                aria-hidden="true"
                            ></i>
                        </div>
                    </>
                );
            }
            return null;
        }
        return null;
    };

    function getYouTubeEmbedUrl(url: string) {
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
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
            {limit === 4 && (
                <div className="more-gallery-container">
                    <Link
                        to="/gallery"
                        className="more-gallery-button"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        More Gallery Items
                    </Link>
                </div>
            )}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Media Modal"
                className="media-modal"
                overlayClassName="media-modal-overlay"
            >
                <button onClick={closeModal} className="close-button">
                    &times;
                </button>
                {currentMedia?.type === "image" ? (
                    <img
                        src={currentMedia.url}
                        alt="Modal Content"
                        className="modal-image"
                    />
                ) : (
                    <div className="iframe-container">
                        <iframe
                            id="iframe"
                            src={currentMedia?.url}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="modal-media video"
                        />
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default GallerySection;
