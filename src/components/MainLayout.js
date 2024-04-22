import React from 'react'
import classes from "../css/MainLayout.module.css";

const MainLayout = ({children}) => {
  return (
    <div className={classes.container}>
        <div className={classes.sub_container}>
            {children}
        </div>
    </div>
  )
}

export default MainLayout