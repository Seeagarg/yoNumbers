import React from "react";
import Layout from "./Layout";
import TopLines from "./TopLines";
import SubLayout from "./SubLayout";
import classes from "../css/Loading.module.css";

const Loading = () => {
  return (
    <Layout>
      {/* <TopLines /> */}
      <SubLayout>
        <div className={classes.image_container}>
          <img
            src="/assets/images/loading.png"
            alt="loading"
            className={classes.image}
          />
        </div>
        <div className={classes.name_container}>
          <img
            src="/assets/images/name.png"
            alt="name"
            className={classes.name}
          />
        </div>
        <p className={classes.text}>
          Discover the joy of playing and learning for all ages!
        </p>
      </SubLayout>
    </Layout>
  );
};

export default Loading;
