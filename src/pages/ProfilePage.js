import React from "react";
import MainLayout from "../components/MainLayout";
import TopLogo from "../components/TopNavbar";
import HeaderTitle from "../components/HeaderTitle";
import classes from "../css/ProfilePage.module.css";
import SubscriptionInfo from "../components/SubscriptionInfo";
import Footer from "../components/Footer";

const ProfilePage = () => {
  return (
    <MainLayout>
      <TopLogo />
      <HeaderTitle title="Profile" />
      <SubscriptionInfo />
      <div className={classes.line}></div>
      <div className={classes.btn_container}>
        <button className={classes.btn}>Continue Playing</button>
      </div>
      <div className={classes.padding}>
        <div className={classes.unsubscribe_container}>
          <div className={classes.image_text_container}>
            <img
              src="/assets/images/cat.png"
              alt="cat"
              className={classes.cat}
            />
            <div className={classes.text_container}>
              <h3 className={classes.text}>Unsubscribe</h3>
              <p className={classes.p}>It’s free and fun to learn on MyKidzHub!</p>
            </div>
          </div>
          <button className={`${classes.btn} ${classes.btn2}`}>UNSUBSCRIBE</button>
        </div>
      </div>
      <Footer active={1} />
    </MainLayout>
  );
};

export default ProfilePage;
