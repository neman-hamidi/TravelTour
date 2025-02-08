import React from "react";
import "./CommentsItem.css";

const CommentsItem = ({ src, title, desc }) => (
  <section className="text-center">
    <div className="div-img-footer">
      <img src={src} alt="img" />
    </div>
    <h3 className="my-2">{title}</h3>
    <p className="text-center pt-2">{desc}</p>
  </section>
);
export default CommentsItem;
