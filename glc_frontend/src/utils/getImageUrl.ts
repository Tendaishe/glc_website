import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "./sanityClient";

const builder = imageUrlBuilder(sanityClient);

export default function getImageUrl(source: any) {
    return builder.image(source);
}
