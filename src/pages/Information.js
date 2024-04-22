import React,{useState} from 'react'
import Layout from '../components/Layout'
import SubLayout from '../components/SubLayout'
import TopNavbar from '../components/TopNavbar'
import classes from '../css/Information.module.css'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Information = () => {

    const [view1,setView1] = useState(true)
    const [view2,setView2] = useState(false)
    const [view3,setView3] = useState(false)


    const clickView1=()=>{
        setView1(!view1)
        setView2(!view2)
    }
    const clickView2=()=>{
        setView2(!view2)
        setView3(!view3)
    }
    const clickView3=()=>{
        setView3(!view3)
        setView1(!view1)
    }




  return (
    <Layout>
        {/* <SubLayout> */}
            <TopNavbar title="Information"/>
            <div className={classes.main_container}>
            <div className={classes.header}>
            <p>Information</p>
            </div>

            <div className={classes.accordian}>

            <div className={classes.accordian1}>
            <div className={classes.accordianTitle}>
           <div className={classes.title_left}>
           <div className={classes.icon}></div>
            <p>How It Works</p>
           </div>
           <div onClick={clickView1}>
           {view1? <ExpandLessIcon style={{cursor:"pointer"}}/> : <ExpandMoreIcon style={{cursor:"pointer"}} />}
           
           </div>
            
            </div>
            {
                view1 && 
                <div className={`${classes.accordianText} `}>
           {` Using SmartWinners couldn’t be easier! Once you select your winning numbers, one of our official agents will purchase your lottery tickets on your behalf before lottery sales close for that day. We will then scan your ticket and upload it to your user account. When you win, we’ll automatically transfer commission-free winnings directly to you! To choose your games and pick your winning numbers.`}
            </div>
            }
          
            </div>



            <div className={classes.accordian1}>
            <div className={classes.accordianTitle}>
           <div className={classes.title_left}>
           <div className={classes.icon}></div>
            <p>Terms and Conditions</p>
            <hr />
           </div>
           <div onClick={clickView2}>
           {view2? <ExpandLessIcon style={{cursor:"pointer"}}/> : <ExpandMoreIcon style={{cursor:"pointer"}}/>}
           </div>
            
            </div>
           {view2 &&  <div className={`${classes.accordianText} `}  >
           {` Using SmartWinners couldn’t be easier! Once you select your winning numbers, one of our official agents will purchase your lottery tickets on your behalf before lottery sales close for that day. We will then scan your ticket and upload it to your user account. When you win, we’ll automatically transfer commission-free winnings directly to you! To choose your games and pick your winning numbers.`}
            </div>}
            </div>


            <div className={classes.accordian1}>
            <div className={classes.accordianTitle}>
           <div className={classes.title_left}>
           <div className={classes.icon}></div>
            <p>About</p>
            <hr />
           </div>
           <div onClick={clickView3}>
           {view3? <ExpandLessIcon style={{cursor:"pointer"}}/> : <ExpandMoreIcon style={{cursor:"pointer"}}/>}
           </div>
            
            </div>
            {view3 && 
                <div className={`${classes.accordianText} `}>
            Using SmartWinners couldn’t be easier! Once you select your winning numbers, one of our official agents will purchase your lottery tickets on your behalf before lottery sales close for that day. We will then scan your ticket and upload it to your user account. When you win, we’ll automatically transfer commission-free winnings directly to you! To choose your games and pick your winning numbers.
            </div>
            }
           
            </div>
            </div>

            </div>
        {/* </SubLayout> */}
    </Layout>
  )
}

export default Information;
