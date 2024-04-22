import React from "react";
import classes from "../css/Footer.module.css";
import { useNavigate } from "react-router-dom";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Footer = ({active}) => {
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(path);
  };
  return (
    <div className={classes.footer_container}>
      <div className={classes.footer_sub_container}>
        <div className={classes.tab} onClick={()=>navigateHandler("/home")}>
          <i
            // className={`fa-solid fa-house-chimney ${classes.icon} ${active==0 && classes.active}`}
          ></i>
          <HomeIcon fontSize="large" className={`${classes.icon} ${active==0 && classes.active}`} />
          <p>Home</p>
        </div>
        <div className={classes.tab} onClick={()=>navigateHandler("/game")}>
          {/* <i className={`fa-solid fa-user ${classes.icon} ${active==1 && classes.active}`}></i> */}
          <SportsEsportsIcon fontSize="large" style={{FontSize:"4rem"}} className={`${classes.icon} ${active==1 && classes.active}`} />
          <p>Games</p>
        </div>
        <div className={classes.tab} onClick={()=>navigateHandler("/leaderBoard")}>
          {/* <i className={`fa-solid fa-gear ${classes.icon} ${active==2 && classes.active}`}></i> */}
          <EmojiEventsIcon fontSize="large" className={`${classes.icon} ${active==2 && classes.active}`} />
          <p>LeaderBoard</p>
        </div>
      </div>
      <div className={classes.bottom}>
      </div>
    </div>
  );
};

export default Footer;
