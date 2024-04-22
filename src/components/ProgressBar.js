import React from 'react'
import classes from "../css/ProgressBar.module.css";

const ProgressBar = ({width}) => {
  return (
    <div className={classes.progress_bar}>
    <img
      src="/assets/images/crown2.png"
      alt="crown"
      className={classes.crown}
    />
    <div className={classes.progress_bar_percentage} style={{width:width}}></div>
  </div>
  )
}

export default ProgressBar