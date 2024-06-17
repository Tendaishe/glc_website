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
    const [currentImage, setCurrentImage] = useState("");

    const openModal = (imageUrl: string) => {
        setCurrentImage(imageUrl);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentImage("");
    };

    const renderMediaItem = (item: IMedia) => {
        if (item.mediaType === "image" && item.imageAsset) {
            const imageUrl = getImageUrl(item.imageAsset).url();
            return (
                <img
                    key={item._id}
                    className="gallery-image"
                    src={imageUrl}
                    alt="Gallery Image"
                    onClick={() => openModal(imageUrl)}
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
                contentLabel="Image Modal"
                className="image-modal"
                overlayClassName="image-modal-overlay"
            >
                <button onClick={closeModal} className="close-button">
                    &times;
                </button>
                <img
                    src={currentImage}
                    alt="Modal Content"
                    className="modal-image"
                />
            </Modal>
        </div>
    );
};

export default GallerySection;
