import React from "react";
import Header from "../components/Header";
import Items from "../components/Items";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <>
      <Header title={"Your school items here!"} />
      <Items />
      <Footer />
    </>
  );
}
