import React from "react";
import MainLayout from "../components/MainLayout";
import TopNavbar from "../components/TopNavbar";
import classes from "../css/LilOnesPage.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const LilOnesPage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/LilOnes_English");
  };
  return (
    <MainLayout>
      <TopNavbar />
      <Header />
      <div className={classes.container}>
        <div className={classes.title_container}>
          <h3 className={classes.title}>Math</h3>
          <div className={classes.image_container}>
            <img
              src="/assets/images/crown.png"
              alt="crown"
              className={classes.icon}
            />
            <p className={classes.points}>18/40</p>
          </div>
        </div>

        <div className={classes.card_container}>
          <div className={classes.card} onClick={navigateHandler}>
            <h3 className={classes.level}>Level 1</h3>
            <div className={classes.progress_bar}>
              <img
                src="/assets/images/crown2.png"
                alt="crown"
                className={classes.crown}
              />
              <div className={classes.progress_bar_percentage}></div>
            </div>
          </div>
          <div
            className={classes.card}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <img
              src="/assets/images/lock.png"
              alt="lock"
              className={classes.lock}
            />
          </div>
        </div>

        <div className={classes.title_container}>
          <h3 className={classes.title}>Art</h3>
          <div className={classes.image_container}>
            <img
              src="/assets/images/crown.png"
              alt="crown"
              className={classes.icon}
            />
            <p className={classes.points}>35/40</p>
          </div>
        </div>

        <div className={classes.card_container}>
          <div className={classes.card} onClick={navigateHandler}>
            <h3 className={classes.level}>Level 1</h3>
            <div className={classes.progress_bar}>
              <img
                src="/assets/images/crown2.png"
                alt="crown"
                className={classes.crown}
              />
              <div
                className={classes.progress_bar_percentage}
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div
            className={classes.card}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <img
              src="/assets/images/lock.png"
              alt="lock"
              className={classes.lock}
            />
          </div>
        </div>

        <div className={classes.title_container}>
          <h3 className={classes.title}>English</h3>
          <div className={classes.image_container}>
            <img
              src="/assets/images/crown.png"
              alt="crown"
              className={classes.icon}
            />
            <p className={classes.points}>3/40</p>
          </div>
        </div>

        <div className={classes.card_container}>
          <div className={classes.card} onClick={navigateHandler}>
            <h3 className={classes.level}>Level 1</h3>
            <div className={classes.progress_bar}>
              <img
                src="/assets/images/crown2.png"
                alt="crown"
                className={classes.crown}
              />
              <div
                className={classes.progress_bar_percentage}
                style={{ width: "20%" }}
              ></div>
            </div>
          </div>
          <div
            className={classes.card}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <img
              src="/assets/images/lock.png"
              alt="lock"
              className={classes.lock}
            />
          </div>
        </div>

        <Footer />
      </div>
    </MainLayout>
  );
};

export default LilOnesPage;
