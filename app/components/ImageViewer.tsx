import { useState } from "react";

interface ImageViewerParams {
    img: string,
    isLarge: boolean
};

export default function ImageViewer({
    img,
    isLarge
}: ImageViewerParams) {
    return (
        <>
            <div>
                <img className="portfolio-item-image" src={img} alt="" />
                {isLarge &&
                <div className="enlarge-backdrop">
                    <img className="enlarge-image" src={img} alt="" />
                </div>}
            </div>
        </>
    );
}