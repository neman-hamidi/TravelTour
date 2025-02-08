import React from "react";
import BestTravel from "../BestTravel/BestTravel";
import SectionItem from "../SectionItem/SectionItem";
import infoSite from "./Text";
const Suggest = () => {
  return (
    <div>
      <BestTravel
        title="یک سفر کامل را با متخصصان حرفه ای و با"
        desc="تجربه در این زمینه تجربه کنید"
      />
      <div className="div-grid">
        {infoSite.map((item, index) => (
          <SectionItem key={index} {...item} newClass={true} />
        ))}
      </div>
      <BestTravel
        title="سریع ترین راه برای مقایسه و"
        desc="رزرو پرواز های مناسب"
        newImg="true"
        newP="true"
        end="end"
      />
    </div>
  );
};

export default Suggest;
