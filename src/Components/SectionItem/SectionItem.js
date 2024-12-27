import React from "react";
import "./SectionItem.css"

export default function SectionItem({ src, title, desc,newClass }) {
  return (
    <div className="one-section" >
      <div className={`div-p ${newClass ? "newClass" : ""} `}>
        <div className="div-img">
          <img
            src={src}
            style={{
              backgroundColor: "peru",
              borderRadius: "50%",
              width: "3rem",
            }}
          />
        </div>
        <p>{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
}
