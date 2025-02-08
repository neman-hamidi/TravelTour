import React from "react";
import HeaderItem from "../HeaderItem/HeaderItem";
import "./Lastestpost.css";

const country = [
  { title: "دیدن از عمارت متحده عربی", src: "d1.png" },
  { title: "ساعت در تورنتو", src: "d2.jpg" },
  { title: "بهترین مقصد های مسافرتی 2018", src: "d3.png" },
];

const Lastestpost = () => (
  <div className="latestour">
    {country.map((item, index) => (
      <HeaderItem key={index} {...item} />
    ))}
  </div>
);
export default Lastestpost;
