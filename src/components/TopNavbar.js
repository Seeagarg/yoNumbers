import React,{useState} from "react";
import classes from "../css/TopNavbar.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StarIcon from '@mui/icons-material/Star';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RocketIcon from '@mui/icons-material/Rocket';
import ExtensionIcon from '@mui/icons-material/Extension';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const TopNavbar = ({title,active=0}) => {

  const [open, setOpen] = useState(false);
  const [viewCategories,setViewCategories] = useState(true)
  // const [active,setActive] = useState(0)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250}} className={classes.SideBar} role="presentation" >
    <div className={classes.logo_side}> <img src="/assets/images/name_dark.png" alt=""  style={{height:"10rem",width:"12rem"}}/></div>
    <div className={classes.games}>
    <p>GAMES</p>
    <ExpandLessIcon/>
    </div>
    <p className={classes.allgames}>All Games</p>

<div className={classes.category_data}>


    <div className={classes.categories}>
    <p style={{fontSize:"1.5rem",fontWeight:"bold"}}>Categories</p>
    {viewCategories?<ExpandLessIcon onClick={()=>{setViewCategories(!viewCategories)}}/>:<ExpandMoreIcon onClick={()=>{setViewCategories(!viewCategories)}}/>}
    </div>
    <div className={classes.cats}>
    {viewCategories &&
<>
<div className={`${classes.category} ${active == 0 && classes.active}`}>
      <p ><ArchitectureIcon className={`${active == 0 && classes.icon}`}/> Actions</p>
      </div>
      <div className={`${classes.category} ${active == 1 && classes.active}`}>
    <p><RocketIcon className={`${active == 1 && classes.icon}`}/> Adventure</p>
    </div>
    <div className={`${classes.category} ${active == 2 && classes.active}`}>
    <p><ExtensionIcon className={`${active == 2 && classes.icon}`}/> Arcade</p>
    </div>
    <div className={`${classes.category} ${active == 3 && classes.active}`}>
    <p><i class={`fa-solid fa-chess-rook ${active == 3 && classes.icon}`}></i> Strategy</p>
    </div>
    <div className={`${classes.category} ${active == 4 && classes.active}`}>
    <p> <i class={`fa-solid fa-cube ${active == 4 && classes.icon}`}></i> Intellectual</p>
    </div>
    <div className={`${classes.category} ${active == 5 && classes.active}`}>
    <p><SportsVolleyballIcon className={`${active == 5 && classes.icon}`}/> Sport</p>
    </div>
    </>
    
    
    }
    
    </div>
    </div>

    <div className={classes.item}>
      Friends
    </div>
    <div className={classes.item}>
      New!
    </div>
    <div className={classes.item}>
      FAQ's
    </div>

      <Divider />
      <div className={classes.favorite}>
        <StarIcon style={{color:"red"}} /> <strong>Favourites</strong> 
      </div>
      <br />
      <div className={classes.info_tag}>
      How it Works <ChevronRightIcon/>
      </div>
      <hr  />
      <div className={classes.info_tag}>
Terms & Conditions <ChevronRightIcon/>
      </div>
      <hr />
      <div className={classes.info_tag}>
      About <ChevronRightIcon/>
      </div>
      <hr />

      <div className={classes.side_footer}>
         <p> Copyright © 2024 
    YoNumbers</p>
      </div>
    </Box>
  );


  return (
    <div className={classes.main}>
    <div className={classes.top_logo_container}>
      <div className={classes.logo}>
      <img
        src="/assets/images/name_dark.png"
        alt="name"
        className={classes.top_logo_image}
      />
      <p>{title}</p>
      </div>

      <div className={classes.menu_btn} onClick={toggleDrawer(true)}>
      <MenuIcon className={classes.menu_icon} fontSize="large"/>
      <p>Menu</p>
      </div>
    </div>
    <Drawer open={open} onClose={toggleDrawer(false)} >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default TopNavbar;
