import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import Head from "next/head";

import type { AppProps } from "next/app";
import { SideBar } from "@/components/sidebar";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Justin Chappell | Website</title>
        <link rel="icon" type="image/x-icon" href="/dp.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container-fluid">
        <section className="row">
          <SideBar />
          <div
            className="col-md p-4"
            style={{
              margin: "0 0 auto",
              maxWidth: "45rem",
            }}
          >
            <p
              style={{
                color: "#b0b0b0",
              }}
            >
              {router.asPath}
            </p>
            <Component {...pageProps} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
