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
        { title: "Binary Visualizer (bv)", description: "Tool for visualizing binary blobs.", image: "/portfolio/bv.png", ghLink: "https://github.com/justinac0/bv" },
        { title: "Game of Life", description: "Conways game of life, written in C using raylib.", image: "/portfolio/life.gif", ghLink: "https://github.com/justinac0/raylib-game-of-life" },
        { title: "Mandlebrot Renderer", description: "Software rendered mandlebrot in C using raylib.", image: "/portfolio/fractal.png", ghLink: "https://github.com/justinac0/raylib-fractals" },
        { title: "This Website", description: "My old website was using nextjs. I updated and ported it to remix.", image: "/portfolio/website.png" },
        { title: "Basic Bible Study App", description: "Webapp for reading the Bible, remix + ESV.", image: "/portfolio/bible.png", ghLink: "https://github.com/justinac0/bible-study-basic" },
        { title: "IoT Renderer", description: "Emulated Nokia screen to test rendering methods for a university assessment.", image: "/portfolio/cube.gif" },
        { title: "Raycaster", description: "Basic raycaster, like its the early 90s all over again.", image: "/portfolio/raycaster.gif", ghLink: "https://github.com/justinac0/raylib-raycaster" },
        { title: "Shady (Shader Toy Clone)", description: "Graphics shader programming tool. Based off shader toy.", image: "/portfolio/rtweekend_1.gif", ghLink: "https://github.com/justinac0/shady" },
        // { title: "Flask Todo App", description: "", image: "/portfolio/flask-todo.png", ghLink: "https://github.com/justinac0/flask-todo" },
        { title: "dmenu fork", description: "Personal dmenu patch.", image: "/portfolio/dmenu.png", ghLink: "https://github.com/justinac0/justinac0-dmenu" },
    ]);
}

export default function Portfolio() {
    const portfolioItems = useLoaderData<typeof loader>();

    return (
        <DefaultPageLayout content={
            <div className="center-content">
                <h1 className="text-4xl text-center">Portfolio</h1>
                <br />
                <div className="flex flex-wrap justify-center">
                    {portfolioItems.map((contents) => (
                        <PortfolioItem key={contents.title} {...contents} />
                    ))}
                </div>

                <br />
            </div>
        } />
    )
}
