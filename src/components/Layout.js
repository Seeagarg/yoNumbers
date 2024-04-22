import React from 'react'
import classes from "../css/Layout.module.css";

const Layout = ({children,style}) => {
  return (
    <div className={classes.container}>
        <div className={classes.sub_container} style={style}>
            {children}
        </div>
    </div>
  )
}

export default Layout