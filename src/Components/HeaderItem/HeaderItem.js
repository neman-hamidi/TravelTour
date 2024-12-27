import React from "react";
import { Button } from "react-bootstrap";

export default function HeaderItem({ title,src}) {
  return (
    <div>
      <div className="text-center">
        <img src={src} />
        <p className="text-center">{title}</p>
        <Button variant="outline-info">مشاهده بیشتر</Button>
      </div>
    </div>
  );
}
