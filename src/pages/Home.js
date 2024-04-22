import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Layout from "../components/Layout";
import TopLines from "../components/TopLines";
import SubLayout from "../components/SubLayout";
import TopNavbar from "../components/TopNavbar";
import classes from "../css/Home.module.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/helper";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Carousel from "../components/CarouselComponent";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const navigateHandler=(age)=>{
    const msisdn=getCookie("msisdn");
    if(!msisdn){
      navigate("/login");
    }
    else{
      navigate(`/LilOnes?msisdn=${msisdn}&age=${age}`);
    }
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          {/* <TopLines /> */}
         
          <SubLayout>
          <TopNavbar title="Home" />
            
            <div className={classes.main_container}>
            <div className={classes.title_container}>
              <h4 className={classes.title}>2024-02-22</h4>
            </div>
            <div className={classes.number}>
            2
            </div>
            <div className={classes.text}>
            <p> Subscribers won yesterday and the winning number was: </p>
           
            </div>
            <div className={classes.code}>
            <div className={classes.digit}>
            8
            </div>
            <div className={classes.digit}>
            2
            </div>
            <div className={classes.digit}>
            3
            </div>
            <div className={classes.digit}>
            5
            </div>
            </div>
            <div className={classes.card}>
            <p>Dial <strong>*647#</strong> and stand a chance to Win Airtime & More!</p>
            <button>How it Works</button>
            </div>

            <div className={classes.carousel}>
            <Carousel/>
            </div>



            </div>

            <Footer active={0}/>
            
          </SubLayout>
        </Layout>
      )}
    </>
  );
};

export default Home;
