import React, { useEffect,useState } from "react";
import Layout from "../components/Layout";
import classes from "../css/IntroPage.module.css";
import { useNavigate } from "react-router-dom";
import TopLines from "../components/TopLines";
import SubLayout from "../components/SubLayout";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const IntroPage = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     navigate("/loading");
  //   }, 1500);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  const [progress, setProgress] = useState(100);

  useEffect(() => {

    const endTime = Date.now() + 5000; // Get the end time (30 seconds from now)

    const intervalId = setInterval(() => {
      const currentTime = Date.now(); // Get the current time
      const elapsedTime = endTime - currentTime; // Calculate the remaining time
      const remainingProgress = Math.max((elapsedTime / 5000) * 100, 0); // Calculate the remaining progress

      setProgress(remainingProgress); // Update progress

      // Store progress data in localStorage
      localStorage.setItem('progressData', JSON.stringify({
        time: (5000 - elapsedTime) / 1000, // Time in seconds (increasing from 0 to 30)
        timeForProgress: 30, // Total time for progress (30 seconds)
        progress: remainingProgress // Progress value
      }));

      if (remainingProgress === 0) {
        clearInterval(intervalId); // Stop the interval when progress reaches 0
        console.log("Progress completed");
        navigate('/loading')
        // dispatch(openShowModal());
      }
    }, 1000); // Update progress every second

    return () => clearInterval(intervalId); // Cleanup function
  }, []);



  return (
    <Layout style={{maxHeight:"100dvh"}} style={{backgroundColor: "#2B368A"}}>
      {/* <TopLines /> */}
      <SubLayout style={{top:'-5rem'}}>
      <div className={classes.main}>
      <div className={classes.top}>

      </div>
        <div className={classes.logo_container}>
          <img src="/assets/images/name.png" alt="logo"  />
          <div className={classes.text}>
          <p>Play and Stand a Chance to  
            Win Airtime & More!</p>
            </div>
        </div>

        <div className={classes.progressBar} >
        <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
        </div>



        </div>
      </SubLayout>
    </Layout>
  );
};

export default IntroPage;
