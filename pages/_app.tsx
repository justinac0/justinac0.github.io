import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";

import Head from "next/head";

import type { AppProps } from "next/app";
import { SideBar } from "@/components/sidebar";
import { TopBar } from "@/components/topbar";
import { useRouter } from "next/router";

import { useMediaQuery } from "react-responsive";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div>
      <Head>
        <title>Justin Chappell | Website</title>
        <link rel="icon" type="image/x-icon" href="/dp.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container-fluid">
        <section className="row">
          {isTabletOrMobile ? <TopBar /> : <SideBar />}
          <div className="col-md p-4 focused-content">
            <Component {...pageProps} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
