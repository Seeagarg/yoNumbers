import React from 'react';
import classes from "../css/Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
        <div className={classes.header_sub_container}>
          <div className={classes.tab}>
            <img
              src="/assets/images/fire.png"
              alt="icon"
              className={classes.icon}
            />
            <p className={classes.text}>2 Completes</p>
          </div>
          <div className={classes.tab}>
            <img
              src="/assets/images/medal.png"
              alt="icon"
              className={classes.icon}
            />

            <p className={classes.text}>32 Plays</p>
          </div>
          <div className={classes.tab}>
            <img
              src="/assets/images/heart.png"
              alt="icon"
              className={classes.icon}
            />

            <p className={classes.text}>2 Likes</p>
          </div>
        </div>
      </div>
  )
}

export default Header