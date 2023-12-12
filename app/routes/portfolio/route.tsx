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
        { title: "Game of Life", description: "A naive implementation of conways game of life in C (with raylib), with some custom UI controls.", image: "/portfolio/life.gif", ghLink: "https://github.com/justinac0/raylib-game-of-life" },
        { title: "Mandlebrot Renderer", description: "Software rendered mandlebrot in C (with raylib).", image: "/portfolio/fractal.png", ghLink: "https://github.com/justinac0/raylib-fractals" },
        { title: "This Website!", description: "With a need for a refresh I switched out NextJS for Remix. And with this new found insperation I think it now looks pretty neat!", image: "/portfolio/website.png" },
        { title: "Basic Bible Study App", description: "In exploring how bible translations are served through the web, I embarked on this project with the aim to create a simple bible study webapp. The stack is Remix + the ESV API.", image: "/portfolio/bible.png", ghLink: "https://github.com/justinac0/bible-study-basic" },
        { title: "IoT Renderer", description: "One of my courses in my computer science degree required drawing pixels on a old nokia screen. I decided to write a software renderer to emulate the screen when I accidentially fried the physical one.", image: "/portfolio/cube.gif" },
        { title: "Raycaster", description: "I at first didn't believe that raycasting (such as the rendering found in Wolfenstein 3D) was just 2D with some fancy tricks, I decided to write a small tool to visualize the basic concepts of what happens behind the scence. This was written in C (using raylib).", image: "/portfolio/raycaster.gif", ghLink: "https://github.com/justinac0/raylib-raycaster" },
        { title: "Shady (Shader Toy Clone)", description: "Graphics/Maths and generally nice looking things have spiked my interest in hobby programming. The peak of this field in my opinion is shader programming. Shader Toy is a web application where you can write your own shaders and create pretty art. With a desire to understand how such an application could be developed I made a basic clone in C with GLFW and OpenGL.", image: "/portfolio/rtweekend_1.gif", ghLink: "https://github.com/justinac0/shady" },
        // { title: "Flask Todo App", description: "", image: "/portfolio/flask-todo.png", ghLink: "https://github.com/justinac0/flask-todo" },
        { title: "dmenu fork", description: "As a daily linux user I wanted to update the look of my application menu bar. This is my personal patch dmenu.", image: "/portfolio/dmenu.png", ghLink: "https://github.com/justinac0/justinac0-dmenu" },
    ]);
}

export default function Portfolio() {
    const portfolioItems = useLoaderData<typeof loader>();

    return (
        <DefaultPageLayout content={
            <>
                <h1 className="text-4xl text-center">Portfolio</h1>
                <br />
                <div className="flex flex-wrap justify-center">
                    {portfolioItems.map((contents) => (
                        <PortfolioItem key={contents.title} {...contents} />
                    ))}
                </div>

                <br />
            </>}
        />
    )
}