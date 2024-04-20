import { useState, useEffect } from "react";
import sanityClient from "./sanityClient";

export interface IMedia {
    _id: string;
    title: string;
    mediaType: "image" | "video";
    imageUrl?: string;
    videoUrl?: string;
}

const useGalleryHook = (limit?: number) => {
    const [mediaItems, setMediaItems] = useState<IMedia[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const query = `*[_type == "media"]${limit ? `[0...${limit}]` : ""} {
            _id,
            title,
            mediaType,
            imageUrl,
            videoUrl
        }`;

        sanityClient
            .fetch(query)
            .then((data) => {
                setMediaItems(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setError(error);
                setIsLoading(false);
            });
    }, [limit]);

    return { mediaItems, isLoading, error };
};

export default useGalleryHook;
