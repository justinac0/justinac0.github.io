import { LinksFunction } from "@remix-run/node";

import DefaultPageLayout from "~/components/DefaultPageLayout";
import PortfolioItem from "~/components/PortfolioItem";

import stylesheet from "~/styles/portfolio.css"

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
];

export default function Portfolio() {
    // TODO: to fetch from somewhere else eventually
    const portfolioItems = [
        { title: "Game of Life", description: "", image: "/portfolio/life.gif" },
        { title: "Mandlebrot Renderer", description: "", image: "/portfolio/fractal.png" },
        { title: "This Website!", description: "", image: "/portfolio/website.png" },
        { title: "IoT Renderer", description: "", image: "/portfolio/cube.gif" },
        { title: "Raycaster", description: "", image: "/portfolio/raycaster.gif" },
        { title: "Shady (Shader Toy Clone)", description: "", image: "/portfolio/rtweekend_1.gif" },
        { title: "Flask Todo App", description: "", image: "/portfolio/flask-todo.png" },
    ];

    // const gridA = portfolioItems.filter((element, index, array) => {
    //     return (index % 2 === 0); // even
    // });

    // const gridB = portfolioItems.filter((element, index, array) => {
    //     return (index % 2 === 1); // odd
    // });

    return (
        <DefaultPageLayout title="Justin Chappell - Portfolio" content={
            <>
                <h1 className="text-3xl">Portfolio</h1>

                <br />

                <div className="lg:flex lg:items-start md:flex md:items-start">
                    <span className="grid grid-cols-1 m-2 gap-4">
                        {/* {gridA.map((contents) => (
                            <PortfolioItem {...contents} />
                        ))} */}
                        {portfolioItems.map((contents) => (
                            <PortfolioItem {...contents} />
                        ))}
                    </span>

                    {/* <span className="grid grid-cols-1 m-2 gap-4">
                        {gridB.map((contents) => (
                            <PortfolioItem {...contents} />
                        ))}
                    </span> */}
                </div>

                <br />
            </>}
        />
    )
}