import React from "react";
import "./BestTravel.css";
import { Button } from "react-bootstrap";

export default function BestTravel({ title, desc, newImg, newP, end }) {
  return (
    <section className={`besttravel ${newImg && "newImg"}`}>
      <h3 className={`fs-2 fw-bold p-style ${newP && "newP"}`}>{title}</h3>
      <h4 className={`fs-2 fw-bold p-style ${newP && "newP"}`}>{desc}</h4>
      <div className={`${end && "div-button-style"}`}>
        <Button variant="outline-info m-5">دیدن از بقیه پیشنهادات</Button>
      </div>
    </section>
  );
}
