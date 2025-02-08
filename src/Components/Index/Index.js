import React from "react";
import Navitem from "../Navitem/Navitem";
import Header from "../Header/Header";
import Section from "../Section/Section";
import Lastestpost from "../Lastestpost/Lastestpost";
import Suggest from "../Suggest/Suggest";
import Footer from "../Footer/Footer";
import Comments from "../Comments/Comments";
export default function Index() {
  return (
    <>
      <Navitem />
      <Header />
      <Section />
      <Lastestpost />
      <Suggest />
      <Comments />
      <Footer />
    </>
  );
}
