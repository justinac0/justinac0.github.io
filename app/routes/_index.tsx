import type { MetaFunction } from "@remix-run/node";
import { LinksFunction } from "@remix-run/node";

import NavBar from "~/components/NavBar";
import Copyright from "~/components/Copyright";

import landingStyles from "~/styles/landing.css";
import navbarStyles from "~/styles/navbar.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Justin Chappell's Website" },
    { name: "description", content: "..." },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: landingStyles },
  { rel: "stylesheet", href: navbarStyles },
];

export default function Index() {
  return (
    <>
      <NavBar />

      <div className="flex text-center items-center justify-center h-screen text-white">
        <span id="landing-page-bg" className="bg-cover bg-center" />

        {/* Center Card */}
        <div className="absolute backdrop-blur-md outline outline-4 rounded-md profile-card">
          <div className='p-8'>
            <img className="w-32 h-32 mx-auto object-center mb-4 rounded-full border-2 border-white hide-on-small" src="/profile.jpg" alt="" width="128" />
            <h1 className="text-3xl">Justin Chappell</h1>
            <hr />
            <p className="text-xl text-gray-400">Software Developer</p>
          </div>

          <ul className='flex items-center justify-end'>
            <p>view my</p>
            <a href="https://github.com/justinac0" target="_blank">
              <img className="animate-wobble" src="/github.png" alt="" width="64" />
            </a>
          </ul>
        </div>

        <Copyright />
      </div>
    </>
  );
}
