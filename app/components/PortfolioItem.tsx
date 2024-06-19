import ImageViewer from "./ImageViewer";
import { useEffect, useState } from "react";

interface PortfolioItemParams {
    title: string;
    description: string;
    image: string;
    ghLink?: string;
    tags?: string[];
}

export default function PortfolioItem({
    title, description, image, ghLink, tags
}: PortfolioItemParams) {
    const [isLarge, setIsLarge] = useState(false);

    const view_image = () => {
        document.body.style.overflow = "hidden";
        setIsLarge(true);
    }

    const close_image = (e) => {
        document.body.style.overflow = "scroll";
        e.stopPropagation()
        setIsLarge(false);    
    }

    return (
        <div className="portfolio-item shadow-md p-4 mb-2 mr-2" onClick={view_image}>
            <h2 className="text-xl">{title}</h2>
            <div className="p-2 pb-0 portfolio-description">
                <p className="text-md text-gray-200">{description}</p>
            </div>
            <ImageViewer img={image} isLarge={isLarge}/>
            {isLarge && 
            <div className=" z-2">
                <a className="fixed bottom-2 left-2 bg-blue-700 hover:bg-blue-500 p-2 rounded-md text-xl" href={ghLink} target="_blank">Github</a>
                <a className="fixed bottom-2 right-2 bg-red-700 hover:bg-red-500 p-2 rounded-md text-xl" onClick={close_image}>Close</a>
            </div>
            }
        </div>
    );
}