// the root component of the application

import React from "react";
import "./App.css";
import { Footer } from "./components";
import {
  Header,
  Event,
  Menu,
  Gallery,
  Histoire,
  Intro,
  Reviews,
} from "./container";
import { FloatingNav } from "./components/ui/FloatingNav";

const navItems = [
  {
    name: "Accueil",
    link: "#header",
  },
  {
    name: "Menu",
    link: "#menu",
  },
  {
    name: "Galerie",
    link: "#gallery",
  },
  {
    name: "Histoire",
    link: "#histoire",
  },
];

const App = () => {
  return (
    <div>
      <FloatingNav navItems={navItems} />
      <Header />
      <Event />
      <Menu />
      <Gallery />
      <Histoire />
      <Intro />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;
