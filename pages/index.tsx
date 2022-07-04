import { NextPage } from "next";
import Link from "next/link";

import About from "./about";
import Blogs from "./blogs";
import Portfolio from "./portfolio";

const Home: NextPage = () => {
  return (
    <div>
      <About/>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <img className="img-fluid" src="/dp.png" alt="picture of me" style={{border: "1px solid var(--outline-gray)"}} />
          </div>
          <div className="col-md"> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
      {/* <Link href="/resume">view resume</Link> */}
      <hr/>
      <Portfolio />
      
      <hr/>
      <Blogs />
    </div>
  );
};

export default Home;
