import React from "react";
import { Button } from "react-bootstrap";

export default function HeaderItem({ title, src }) {
  return (
    <div className="text-center">
      <img src={src} alt="img" />
      <h3 className="text-center mt-3 fs-5">{title}</h3>
      <Button variant="outline-info">مشاهده بیشتر</Button>
    </div>
  );
}
