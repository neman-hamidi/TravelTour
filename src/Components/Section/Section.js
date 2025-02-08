import React from "react";
import "./Section.css";
import SectionItem from "../SectionItem/SectionItem";
import SectionSrc from "./Text";

export default function Section() {
  return (
    <>
      <h3 className="text-center fs-2 fw-bold my-5">
        چرا برای مسافرت خود باید ما را انتخاب کنید
      </h3>
      <div className="back-img">
        <div className="section-div">
          {SectionSrc.map((item, index) => (
            <SectionItem
              key={index}
              title="سازگاری با شخصیت افراد"
              desc="لورم اپیسوم"
              {...item}
            />
          ))}
        </div>
      </div>
    </>
  );
}
