import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";

import Header from "./Components/Header";

import Hero from "./Components/Hero";
import SubHero from "./Components/SubHero";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Helmet bodyAttributes={{ style: "background-color : #001213" }} />
    <Header />
    <Hero />
    <SubHero />
    <Resume />
    <Footer />
  </StrictMode>,
  rootElement
);
