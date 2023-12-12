import { LinksFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import DefaultPageLayout from "~/components/DefaultPageLayout";
import PortfolioItem from "~/components/PortfolioItem";

import stylesheet from "~/styles/portfolio.css"

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
];

export const loader = async () => {
    return json([
        { title: "Game of Life", description: "", image: "/portfolio/life.gif", ghLink: "https://github.com/justinac0/raylib-game-of-life" },
        { title: "Mandlebrot Renderer", description: "", image: "/portfolio/fractal.png", ghLink: "https://github.com/justinac0/raylib-fractals" },
        { title: "This Website!", description: "", image: "/portfolio/website.png" },
        { title: "Basic Bible Study App", description: "", image: "/portfolio/bible.png", ghLink: "https://github.com/justinac0/bible-study-basic" },
        { title: "IoT Renderer", description: "", image: "/portfolio/cube.gif" },
        { title: "Raycaster", description: "", image: "/portfolio/raycaster.gif", ghLink: "https://github.com/justinac0/raylib-raycaster" },
        { title: "Shady (Shader Toy Clone)", description: "", image: "/portfolio/rtweekend_1.gif", ghLink: "https://github.com/justinac0/shady" },
        { title: "Flask Todo App", description: "", image: "/portfolio/flask-todo.png", ghLink: "https://github.com/justinac0/flask-todo" },
    ]);
}

export default function Portfolio() {
    // TODO: to fetch from somewhere else eventually
    const portfolioItems = useLoaderData<typeof loader>();

    const leftGrid = portfolioItems.filter((element, index, _) => {
        return (index % 2 === 0);
    });

    const rightGrid = portfolioItems.filter((element, index, _) => {
        return (index % 2 === 1);
    });

    return (
        <DefaultPageLayout content={
            <>
                <h1 className="text-3xl">Portfolio</h1>

                <br />

                <div className="lg:flex lg:items-start md:flex md:items-start">
                    <span className="grid grid-cols-1 m-2 gap-4">
                        {leftGrid.map((contents) => (
                            <PortfolioItem key={contents.title} {...contents} />
                        ))}
                    </span>
                    <span className="grid grid-cols-1 m-2 gap-4">
                        {rightGrid.map((contents) => (
                            <PortfolioItem key={contents.title} {...contents} />
                        ))}
                    </span>
                </div>

                <br />
            </>}
        />
    )
}