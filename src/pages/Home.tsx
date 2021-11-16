import React from "react";

import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Statements from "./../components/Statements/Statements";
import WhatWeDo from "./../components/WhatWeDo/WhatWeDo";
import Contact from "./../components/Contact/Contact";
import Footer from "./../components/Footer/Footer";

export default function Home() {
  return (
    <div className="home">
      {/* <Head>
        <title>Young Talents | Home</title>
        <meta name="description" content="Nurturing and developing skills" />
        <meta name="author" content="Mohammed Kabir Hussaini" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="keywords"
          content="Young talents, skill acquisition, training, talent showcase"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main>
        {/* <Nav /> */}
        <Hero />
        <About />
        <Statements />
        <WhatWeDo />
        <Contact />
        {/* <Footer /> */}
      </main>
    </div>
  );
}
