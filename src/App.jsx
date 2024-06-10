/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

//only username to be used here
const siteProps = {
  name: "Ateeba Mateen",
  title: "React | Next Js Developer",
  email: "work@ateebamateen.me",
  gitHub: "ateebamateen21",
  instagram: "microsoft",
  linkedIn: "ateeba-mateen/",
  medium: "",
  twitter: "",
  youTube: "@ateeba-mateen",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
