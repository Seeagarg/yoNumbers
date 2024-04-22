import React from "react";
import classes from "../css/HeaderTitle.module.css";

const HeaderTitle = ({title}) => {
  return (
    <div className={classes.header}>
      <div className={classes.header_sub_container}>
        <div className={classes.tab}>
            <h3 className={classes.text}>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;
