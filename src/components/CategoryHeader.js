import React from "react";
import classes from "../css/CategoryHeader.module.css";

const CategoryHeader = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header_sub_container}>
        <div className={classes.title_container}>
          <p className={classes.title}>English</p>
        </div>
        <div className={classes.tab}>
          <div className={classes.tab_sub_container}>
            <img
              src="/assets/images/crown.png"
              alt="icon"
              className={classes.icon}
            />
            <p className={classes.text}>3</p>
          </div>
          <div className={classes.tab_sub_container}>
            <img
              src="/assets/images/diamond.png"
              alt="icon"
              className={classes.icon}
            />
            <p className={classes.text}>213</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
