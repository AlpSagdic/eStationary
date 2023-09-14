import React, { useContext } from "react";
import Header from "../components/Header";
import Items from "../components/Items";
import Footer from "../components/Footer";
import { UserContext } from "../UserContext";

export default function Main() {
  const { userInfo } = useContext(UserContext);
  const name = userInfo?.name;
  return (
    <>
      <Header
        title={"Your school items here!"}
        name={name}
        content={
          "You can find all your school, office and business needs here. Happy shopping!"
        }
      />
      <Items />
      <Footer />
    </>
  );
}
