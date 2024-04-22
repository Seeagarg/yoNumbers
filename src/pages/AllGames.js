import React from 'react'
import Layout from '../components/Layout'
import SubLayout from '../components/SubLayout'
import TopNavbar from '../components/TopNavbar'
import classes from '../css/AllGames.module.css'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SearchIcon from '@mui/icons-material/Search';
import GradeIcon from '@mui/icons-material/Grade';
import Footer from '../components/Footer'

const AllGames = () => {


    const arr=[
    {
        src:"/assets/images/badland.png",
        name:"BadLand",

    },
    {
        src:"/assets/images/1941Frozen.png",
        name:"BadLand",

    },
    {
        src:"/assets/images/AngryGran.png",
        name:"BadLand",

    },
    {
        src:"/assets/images/AlphaGuns.png",
        name:"BadLand",

    },
    {
        src:"/assets/images/ArcheryHero.png",
        name:"BadLand",

    },
    {
        src:"/assets/images/BabyAva.png",
        name:"BadLand",

    }

]



  return (
   <Layout>
    <SubLayout>
        <TopNavbar title="All Games"/>
        <div className={classes.main_container}>
        <div className={classes.header}>
        <h2 className={classes.title}>All Games</h2>
        <div className={classes.search}>
        <SearchIcon className={classes.icon}/>
            <input type="text" placeholder='search' />
            <KeyboardVoiceIcon className={classes.icon}/>
        </div>
        </div>
        <div className={classes.games}>
       {
        arr.map((item,idx)=>(
            
            <div className={classes.item}>
        <div className={classes.star_icon}>
        <GradeIcon fontSize='large' style={{}}/>
        </div>
       <div className={classes.image}>
       <img src={item.src} alt="" className={classes.img} />
       </div>
        <div className={classes.text}>
        <p>{item.name}</p>
        </div>
        <div className={classes.button}>
        <button>Play Now</button>
        </div>
        
        </div>
         
        ))
       }
        </div>

        </div>
        <Footer active={1}/>
    </SubLayout>
   </Layout>
  )
}

export default AllGames
