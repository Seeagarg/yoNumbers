import React from "react";
import classes from "../css/ModalInfo.module.css";
import { useNavigate } from "react-router-dom";

const ModalInfo = ({ text, pressHandler, subscribeBtn }) => {
  const navigate = useNavigate();

  const navigateHandler = (path) => {
    navigate(path);
  };
  return (
    <div className={classes.container}>
      <div className={classes.sub_container}>
        <div className={classes.info}>
          <img
            src="/assets/images/info.png"
            alt="info"
            className={classes.img}
          />
        </div>
        <div className={classes.msg}>
          <p className={classes.text}>{text}</p>
        </div>
        <div className={classes.btns_container}>
          <button className={classes.btn} type="button" onClick={pressHandler}>
            Cancel
          </button>
          {subscribeBtn && (
            <button
              className={classes.btn_2}
              type="button"
              onClick={() => navigateHandler("/subscribe")}
            >
              Subscribe
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
