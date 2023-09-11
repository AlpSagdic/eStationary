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
          class={"Uçlu Kalem"}
          discount={"20%"}
          name={"Faber Uçlu Kalem"}
          img={Pen}
        />
        <Card
          class={"Uçlu Kalem"}
          discount={"20%"}
          name={"Faber Uçlu Kalem"}
          img={Pencil}
        />
        <Card
          class={"Uçlu Kalem"}
          discount={"20%"}
          name={"Faber Uçlu Kalem"}
          img={Pen}
        />
        <Card
          class={"Uçlu Kalem"}
          discount={"20%"}
          name={"Faber Uçlu Kalem"}
          img={Pen}
        />
        <Card
          class={"Uçlu Kalem"}
          discount={"20%"}
          name={"Faber Uçlu Kalem"}
          img={Pen}
        />
        <Card
          class={"Uçlu Kalem"}
          discount={"20%"}
          name={"Faber Uçlu Kalem"}
          img={Pen}
        />
        <Card
          class={"Uçlu Kalem"}
          discount={"20%"}
          name={"Faber Uçlu Kalem"}
          img={Pen}
        />
        <Card
          class={"Uçlu Kalem"}
          discount={"20%"}
          name={"Faber Uçlu Kalem"}
          img={Pen}
        />
      </div>
    </section>
  );
}
