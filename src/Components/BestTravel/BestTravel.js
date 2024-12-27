import React from "react";
import "./BestTravel.css";
import { Button } from "react-bootstrap";

export default function BestTravel({ title, desc, newImg, newP,end }) {
  return (
    <div className={`besttravel ${newImg ? "newImg" : ""}`}>
      <p className={`fs-2 fw-bold p-style ${newP ? "newP" : ""}`}>{title}</p>
      <p className={`fs-2 fw-bold p-style ${newP ? "newP" : ""}`}>{desc}</p>
      <div className={`${end ? "div-button-style" : ""}`}>
        <Button variant="outline-info m-5">دیدن از بقیه پیشنهادات</Button>
      </div>
    </div>
  );
}
