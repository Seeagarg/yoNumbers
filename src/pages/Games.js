import React from 'react'
import Layout from '../components/Layout'
import SubLayout from '../components/SubLayout'
import TopNavbar from '../components/TopNavbar'
import Footer from '../components/Footer'
import classes from '../css/Games.module.css'
import { Link } from 'react-router-dom'

const Games = () => {

    const arr =[
        {
            src:'/assets/images/gameImg.jpeg',
            name:"Arcade"
        },
        {
            src:'/assets/images/sport.jpeg',
            name:"Sports"
        },
        {
            src:'/assets/images/strategy.png',
            name:"Strategy"
        },
        {
            src:'/assets/images/adventure.jpeg',
            name:"Adventure"
        },
        {
            src:'/assets/images/puzzle.png',
            name:"Puzzle"
        },
        {
            src:'/assets/images/mind_game.png',
            name:"Mind Game"
        }
    ]



  return (
   <Layout>
    <SubLayout>
    <TopNavbar title="Games"/>
        <div className={classes.container}>
        
        <div className={classes.top}>
        <div className={classes.cat}>Categories</div>
        
        <div className={classes.seeAll}>
        <Link to='/allgames'>
            <p style={{cursor:"pointer",color:"#E92230",fontSize:"1.5rem"}}>See All</p>
            </Link>
        </div>
        
        </div>

        <div className={classes.games}>
        {arr.map((item,index)=>(
            <div className={classes.card}>
            <img src={item.src} alt="" />
            <p>{item.name}</p>
            </div>
        ))}
        </div>

        </div>
        <Footer active ={1}/>
    </SubLayout>
   </Layout>
  )
}

export default Games
