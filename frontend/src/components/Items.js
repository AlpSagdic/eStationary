import React from "react";
import Card from "./Card";
import Pen from "../img/pen.jpg";
import Pencil from "../img/pencil.jpg";

export default function Items() {
  return (
    <section className="section-items">
      <div className="container">
        <span className="subheading">Top Sellers</span>
      </div>
      <div className="container grid grid--4-cols">
        <Card
          id_={1}
          category={"Faber Castel"}
          price={6.49}
          name={"Pen"}
          img={Pen}
        />
        <Card
          id_={2}
          category={"Faber Castel"}
          price={9.49}
          name={"Colored Pencil"}
          img={Pencil}
        />
        <Card
          id_={3}
          category={"Faber Castel"}
          price={1.99}
          name={"Tipped Pen"}
          img={Pen}
        />
        <Card
          id_={4}
          category={"Faber Castel"}
          price={6.99}
          name={"Tipped Pen"}
          img={Pen}
        />
      </div>
    </section>
  );
}
