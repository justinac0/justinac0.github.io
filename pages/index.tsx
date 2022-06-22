import { NextPage } from "next";
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
      <section>
        <h2>Links</h2>
        <li>
          <Link href="http://github.com/justinac0">github</Link>
        </li>
        <li>
          <Link href="mailto:contact.justinac@gmail.com">email</Link>
        </li>
      </section>
      <hr />
      <section>
        <h3>Resume</h3>
        <li>
          <Link href="/resume">view online</Link>
        </li>
        <li>
          <s>
            <Link href="">download pdf</Link>
          </s>
        </li>
      </section>
    </>
  );
};

export default Home;
