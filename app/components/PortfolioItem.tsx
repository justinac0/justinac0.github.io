import ImageViewer from "./ImageViewer";

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
        <div className="portfolio-item shadow-md p-4 mb-2 mr-2">
            <h2 className="text-xl">{title}</h2>
            <p className="text-sm text-gray-300">{description}</p>
            <ImageViewer img={image} />
            <br />
            {ghLink && <a className="bg-blue-600 hover:bg-blue-500 p-2 rounded-md" href={ghLink} target="_blank">View on Github</a>}
        </div>
    );
}