import React from "react";
import "./Comments.css";

export default function Comments({ src, title, desc }) {
  return (
    <>
      <div className="text-center">
        <div  className="div-img-footer" >
          <img src={src} />
        </div>
        <h3>{title}</h3>
        <p className="text-center pt-2">{desc}</p>
      </div>
    </>
  );
}
