import { LinksFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

import DefaultPageLayout from "~/components/DefaultPageLayout";
import PortfolioItem from "~/components/PortfolioItem";

import stylesheet from "~/styles/portfolio.css"

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
];

export const loader = async () => {
    return json([
        { title: "University Physics Research Project (WIP)", description: "Monte carlo simulation of water diffusion in articular cartilage.", image: "/portfolio/0_10128_diffuse.png", ghLink: "https://github.com/justinac0/CollagenPrototype" },
        { title: "Water Diffuse in Collagen", description: "Proof of concept simulation of bulk water diffusion inside a collagen fibre network (in the radial zone).", image: "/portfolio/collagen.png", ghLink: "https://github.com/justinac0/CollagenPrototype" },
        { title: "Image to Ascii Tool", description: "Tool for converting image data into plain text, written in python.", image: "/portfolio/ascii.png", ghLink: "https://github.com/justinac0/image-ascii" },
        { title: "Single Crystal Cubic Analysis", description: "Tool for conducting basic analysis of single crystal cubic structures with Powder XRD data.", image: "/portfolio/xrd.png", ghLink: "https://github.com/justinac0/scca" },
        { title: "Polarization Simulation", description: "Visualizing polarization with rotating polerizers.", image: "/portfolio/3polar.gif", ghLink: "https://github.com/justinac0/polar" },
        { title: "Binary Visualizer (bv)", description: "Tool for visualizing binary blobs.", image: "/portfolio/bv.png", ghLink: "https://github.com/justinac0/bv" },
        { title: "Game of Life", description: "Conways game of life, written in C using raylib.", image: "/portfolio/life.gif", ghLink: "https://github.com/justinac0/raylib-game-of-life" },
        { title: "Mandlebrot Renderer", description: "Software rendered mandlebrot in C using raylib.", image: "/portfolio/fractal.png", ghLink: "https://github.com/justinac0/raylib-fractals" },
        { title: "This Website", description: "My old website was using nextjs. I updated and ported it to remix.", image: "/portfolio/website.png" },
        { title: "Basic Bible Study App", description: "Webapp for reading the Bible, remix + ESV.", image: "/portfolio/bible.png", ghLink: "https://github.com/justinac0/bible-study-basic" },
        { title: "IoT Renderer", description: "Emulated Nokia screen to test rendering methods for a university assessment.", image: "/portfolio/cube.gif" },
        { title: "Raycaster", description: "Basic raycaster, like its the early 90s all over again.", image: "/portfolio/raycaster.gif", ghLink: "https://github.com/justinac0/raylib-raycaster" },
        { title: "Shady (Shader Toy Clone)", description: "Graphics shader programming tool. Based off shader toy.", image: "/portfolio/rtweekend_1.gif", ghLink: "https://github.com/justinac0/shady" },
        { title: "dmenu fork", description: "Personal dmenu patch.", image: "/portfolio/dmenu.png", ghLink: "https://github.com/justinac0/justinac0-dmenu" },
    ]);
}

export default function Portfolio() {
    const portfolioItems = useLoaderData<typeof loader>();
    const [search, setSearch] = useState("");

    const handle_search_change = (e) => {
        setSearch(e.target.value);
    }

    const escape_reg_exp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    const filtered_portfolio = portfolioItems.filter(item => {
        const escapedTerm = escape_reg_exp(search);
        const regex = new RegExp(escapedTerm, 'i');
        return regex.test(item.title) || regex.test(item.description);
    });

    const hightlight_text = (text, term) => {
        if (!term) return text;

        const escapedTerm = escape_reg_exp(search);
        const regex = new RegExp(`(${escapedTerm})`, 'gi');
        const parts = text.split(regex);

        return parts.map((part, index) =>
          regex.test(part) ? <span key={index} className="highlight">{part}</span> : part
        );
    };

    return (
        <DefaultPageLayout content={
            <div className="center-content">
                <h1 className="text-4xl text-center">Portfolio</h1>
                <br />
                <input className="text-lg input-box text-black" name="search" placeholder="Seach Portfolio..." type="text" value={search} onChange={handle_search_change}/>
                <p className="mt-2 text-gray-400">Seach Results: {filtered_portfolio.length} of {portfolioItems.length}</p>
                <br />
                <div className="flex flex-wrap justify-center">
                    {filtered_portfolio.map((contents) => (
                        <PortfolioItem key={contents.title} {...contents} title={hightlight_text(contents.title, search)} description={hightlight_text(contents.description, search)} />
                    ))}
                </div>
            </div>
        } />
    )
}
