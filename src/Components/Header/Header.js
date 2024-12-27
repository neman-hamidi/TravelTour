import React from "react";
import HeaderItem from "../HeaderItem/HeaderItem";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div>
        <p className="text-center mt-4 fs-2">بهترین پیشنهادات</p>
        <p className="text-center fs-5">تورها با امتیاز بالا را بررسی کنید</p>
      </div>
      <div className="div-grid">
        <HeaderItem title="اروپا شرقی" src="a1.jpg"/>
        <HeaderItem title="انگلیس" src="a2.png"/>
        <HeaderItem title="اسپانیا" src="a3.png"/>
        <HeaderItem title="ترکیه" src="a4.png"/>
      </div>
    </>
  );
}
