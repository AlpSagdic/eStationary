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
          category={"Uçlu Kalem"}
          price={9}
          name={"Faber Uçlu Kalem"}
          img={Pen}
        />
        <Card
          id_={2}
          category={"Uçlu Kalem"}
          price={9.49}
          name={"Faber Uçlu Kalem"}
          img={Pencil}
        />
        <Card
          id_={3}
          category={"Uçlu Kalem"}
          price={9}
          name={"Faber Uçlu Kalem"}
          img={Pen}
        />
        <Card
          id_={4}
          category={"Uçlu Kalem"}
          price={9}
          name={"Faber Uçlu Kalem"}
          img={Pen}
        />
        <Card
          id_={5}
          category={"Uçlu Kalem"}
          price={6.99}
          name={"Faber Uçlu Kalem"}
          img={Pen}
        />
        <Card
          id_={6}
          category={"Uçlu Kalem"}
          price={9}
          name={"Faber Uçlu Kalem"}
          img={Pen}
        />
        <Card
          id_={7}
          category={"Uçlu Kalem"}
          price={9}
          name={"Faber Uçlu Kalem"}
          img={Pen}
        />
        <Card
          id_={8}
          category={"Uçlu Kalem"}
          price={9}
          name={"Faber Uçlu Kalem"}
          img={Pen}
        />
      </div>
    </section>
  );
}
