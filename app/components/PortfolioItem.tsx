import { Link } from "@remix-run/react";

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
    return (
        <Link to={ghLink ? ghLink : "/"} target="_blank" className="portfolio-item shadow-md p-4">
            <h2 className="text-xl">{title}</h2>
            <p className="text-sm text-gray-300">{description}</p>
            <img className="portfolio-item-image" src={image} alt="" />
        </Link>
    );
}