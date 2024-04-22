import React from 'react'
import classes from "../css/Loader.module.css";

const Loader = ({style}) => {
  return (
    <div className={classes.loader_container} style={style}>
        <span className={classes.loader}></span>
    </div>
  )
}

export default Loader