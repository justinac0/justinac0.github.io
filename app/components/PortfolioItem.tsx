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
                <p className="text-md text-gray-300">{description}</p>
            </div>
            <ImageViewer img={image} isLarge={isLarge}/>
            {isLarge && 
            <div className="z-2">
                <a className="fixed top-6 left-2 p-2 rounded-md text-xl btn" href={ghLink} target="_blank">View Project On Github</a>
                <a className="fixed top-6 right-2 ml-2 p-2 rounded-md text-xl text-red-400" onClick={close_image}>Close Image</a>
            </div>
            }
        </div>
    );
}