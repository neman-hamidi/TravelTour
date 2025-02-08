import React from "react";
import HeaderItem from "../HeaderItem/HeaderItem";
import "./Header.css";
import Tors from "./Text";
const Header = () => (
  <>
    <div>
      <h3 className="text-center mt-4 fs-2">بهترین پیشنهادات</h3>
      <h2 className="text-center fs-5">تورها با امتیاز بالا را بررسی کنید</h2>
    </div>
    <div className="div-grid">
      {Tors.map((item, index) => (
        <HeaderItem key={index} {...item} />
      ))}
    </div>
  </>
);
export default Header;
