import React from "react";
import Layout from "../components/Layout";
import TopLines from "../components/TopLines";
import SubLayout from "../components/SubLayout";
import TopLogo from "../components/TopNavbar";
import classes from "../css/Auth.module.css";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate=useNavigate();
  const navigateHandler=()=>{
    navigate("/setAge");
  }
  return (
    <Layout>
      {/* <TopLines /> */}
      <SubLayout>
      <div className={classes.main}>
        {/* <TopLogo /> */}
        <div className={classes.success_container}>
          <div className={classes.circle}>
            <i className={`fa-solid fa-check ${classes.icon}`}></i>
          </div>

          <h3 className={classes.title}>Success!</h3>
          <p className={classes.description}>
            Congratulations! You have been successfully authenticated
          </p>
          <button type="button" className={classes.continue_btn} onClick={navigateHandler}>
            Continue
          </button>
        </div>
        <div className={classes.nameImage_container}>
          <img
            src="/assets/images/name_dark.png"
            alt="name"
            className={classes.name_image}
          />
        </div>
        <div className={classes.footer_container}>
          <div className={classes.footer_sub_container}>
            <img
              src="/assets/images/econet_logo.png"
              alt="econet"
              className={classes.footer}
            />
            <p className={classes.footer_text}>
              By clicking subscribe, you have read, understood and agree to be
              bound by the MyKidzHub service’s Terms & Conditions and FAQ’s
            </p>
          </div>
        </div>
        </div>
      </SubLayout>
    </Layout>
  );
};

export default AuthPage;
