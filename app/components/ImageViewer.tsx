import { useState } from "react";

interface ImageViewerParams {
    img: string
};

export default function ImageViewer({
    img
}: ImageViewerParams) {
    const [isLarge, setIsLarge] = useState(false);

    const view_image = () => {
        setIsLarge(!isLarge);

        if (isLarge) {

        }
    }

    return (
        <>
            <div>
                <img className="portfolio-item-image" src={img} alt="" onClick={view_image}/>
                {isLarge &&
                <div className="enlarge-backdrop" onClick={view_image}>
                    <img className="enlarge-image" src={img} alt="" onClick={view_image}/>
                </div>}
            </div>
        </>
    );
}