import React from 'react'
import classes from '../css/LeaderBoard.module.css'
import Layout from '../components/Layout'
import SubLayout from '../components/SubLayout'
import TopNavbar from '../components/TopNavbar'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Footer from '../components/Footer'

const LeaderBoard = () => {

    const arr=[
        {
            points:"00989",
            price:"$90"
        },
        {
            points:"00989",
            price:"$90"
        },
        {
            points:"00989",
            price:"$90"
        },
        {
            points:"00989",
            price:"$90"
        },
        {
            points:"00989",
            price:"$90"
        },
        {
            points:"00989",
            price:"$90"
        }
    ]

  return (
    <Layout>
        <SubLayout>
            <TopNavbar title="LeaderBoard" className={classes.top_navbar}/>
            <div className={classes.main_container}>
            <div className={classes.header}>
            <p>LeaderBoard</p>
            </div>
            <div className={classes.positions}>
            <div className={classes.position}>

            
            <div className={classes.position2}>
            <img src="assets/images/name_dark.png" alt="" className={classes.img} />
            <p>2</p>
            </div>
            
            <div style={{display:'flex',flexDirection:"column"}}>
            <p>65734</p>
            <div style={{display:"flex"}}>

            
            <FitnessCenterIcon style={{color:"red"}} />
            <p style={{color:"#2B358A",fontSize:"1.5rem"}}>$90</p>
            </div>
            </div>
            </div>
            <div className={classes.position}>
            <div className={classes.position1}>
            <i class={`fa-solid fa-crown ${classes.icon}`}></i>
            <img src="assets/images/name_dark.png" alt="" className={classes.img}/>
            <p style={{color:"white"}}>1</p>
            </div>
            <div style={{display:'flex',flexDirection:"column"}}>
            <p>65734</p>
            <div style={{display:"flex"}}>
            <FitnessCenterIcon style={{color:"red"}} />
            <p style={{color:"#2B358A",fontSize:"1.5rem"}}>$90</p>
            </div>
            </div>
            </div>
            <div className={classes.position}>
            <div className={classes.position3}>
            <img src="assets/images/name_dark.png" alt="" className={classes.img}/>
            <p>3</p>
            </div>
            <div style={{display:'flex',flexDirection:"column"}}>
            <p>65734</p>
            <div style={{display:"flex"}}>

            
            <FitnessCenterIcon style={{color:"red"}} />
            <p style={{color:"#2B358A",fontSize:"1.5rem"}}>$90</p>
            </div>
            </div>
            </div>
            </div>

            <div className={classes.data}>
            {
                arr.map((item,idx)=>(
                    <div className={classes.item}>
                    <div className={classes.left}>
                    <p>{idx+1}</p>
                    <img src="/assets/images/name_dark.png" alt="" />
                    <p>{item.points}</p>
                    </div>
                    <div className={classes.right}>
                    <p>{item.price}</p>
                    </div>
                    </div>
                ))
            }
            </div>



            </div>


          <Footer active={2}/>

        </SubLayout>
    </Layout>
  )
}

export default LeaderBoard
