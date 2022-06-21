import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <h1>Welcome to my website!</h1>
      <p>Hello! My name is Justin,</p>
      <p>
        I archive some of my personal projects and blog about things I am
        learning on this website.
      </p>
      <hr />
      <h2>Links</h2>
      <Link href="http://github.com/justinac0">github</Link>
      <br />
      <Link href="mailto:contact.justinac@gmail.com">email</Link>
      <br />
      <br />
      <h3>Resume</h3>
      <Link href="/resume">view online</Link>
      {/* <hr /> */}
      {/* <br />
      <Link href="">download pdf</Link> */}
    </>
  );
};

export default Home;
