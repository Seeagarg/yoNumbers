import React from "react";
import MainLayout from "../components/MainLayout";
import TopLogo from "../components/TopNavbar";
import CategoryHeader from "../components/CategoryHeader";
import ProgressBar from "../components/ProgressBar";
import classes from "../css/CategoryPage.module.css";
import Footer from "../components/Footer";

const CategoryPage = () => {
  return (
    <MainLayout>
      <TopLogo />
      <CategoryHeader />
      <div className={classes.container}>
        <div className={classes.sub_container}>
          <div className={classes.points_container}>
            <img
              src="/assets/images/horse.png"
              alt="horse"
              className={classes.horse}
            />
            <p className={classes.level}>Level 1</p>
            <div className={classes.percentage}>
              <ProgressBar width="20%" />
              <p className={classes.points}>3/40</p>
            </div>
          </div>

          <div className={classes.levels_container}>
            <div className={classes.level_1}>
              <div className={classes.level_1_circle}>
                <img
                  src="/assets/images/pencil.png"
                  alt="pencil"
                  className={classes.pencil}
                />
                <div className={classes.image}>
                  <img
                    src="/assets/images/crown.png"
                    alt="crown"
                    className={classes.crown}
                  />
                </div>
                <p className={classes.span}>1</p>
              </div>
              <p className={classes.level_text}>Intro</p>
            </div>

            <div className={classes.levels_grid}>
              <div className={classes.level_1}>
                <div className={classes.level_1_circle}>
                  <img
                    src="/assets/images/book.png"
                    alt="pencil"
                    className={classes.pencil}
                  />
                  <div className={classes.image}>
                    <img
                      src="/assets/images/crown.png"
                      alt="crown"
                      className={classes.crown}
                    />
                  </div>
                  <p className={classes.span}>1</p>
                </div>
                <p className={classes.level_text}>Phrases</p>
              </div>

              <div className={classes.level_1}>
                <div className={classes.level_1_circle}>
                  <img
                    src="/assets/images/bike.png"
                    alt="pencil"
                    className={classes.pencil}
                  />
                  <div className={classes.image}>
                    <img
                      src="/assets/images/crown.png"
                      alt="crown"
                      className={classes.crown}
                    />
                  </div>
                  <p className={classes.span}>1</p>
                </div>
                <p className={classes.level_text}>Travel</p>
              </div>
            </div>

            <div className={classes.level_1}>
              <div
                className={classes.level_1_circle}
                style={{ borderColor: "#019FE3" }}
              >
                <img
                  src="/assets/images/lock.png"
                  alt="pencil"
                  className={classes.pencil}
                  style={{ width: "2rem" }}
                />
                <div className={classes.image}>
                  <img
                    src="/assets/images/crown.png"
                    alt="crown"
                    className={classes.crown}
                  />
                </div>
                {/* <p className={classes.span}>1</p> */}
              </div>
              {/* <p className={classes.level_text}>Intro</p> */}
            </div>

            <div className={classes.levels_grid}>
              <div className={classes.level_1}>
                <div
                  className={classes.level_1_circle}
                  style={{ borderColor: "#019FE3" }}
                >
                  <img
                    src="/assets/images/lock.png"
                    alt="pencil"
                    className={classes.pencil}
                    style={{ width: "2rem" }}
                  />
                  <div className={classes.image}>
                    <img
                      src="/assets/images/crown.png"
                      alt="crown"
                      className={classes.crown}
                    />
                  </div>
                  {/* <p className={classes.span}>1</p> */}
                </div>
                {/* <p className={classes.level_text}>Intro</p> */}
              </div>

              <div className={classes.level_1}>
                <div
                  className={classes.level_1_circle}
                  style={{ borderColor: "#019FE3" }}
                >
                  <img
                    src="/assets/images/lock.png"
                    alt="pencil"
                    className={classes.pencil}
                    style={{ width: "2rem" }}
                  />
                  <div className={classes.image}>
                    <img
                      src="/assets/images/crown.png"
                      alt="crown"
                      className={classes.crown}
                    />
                  </div>
                  {/* <p className={classes.span}>1</p> */}
                </div>
                {/* <p className={classes.level_text}>Intro</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </MainLayout>
  );
};

export default CategoryPage;
