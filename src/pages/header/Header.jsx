import React from 'react'
import videoBg from '../../assets/agent-background-generic.mp4'
import picBg from '../../assets/agent-background-generic.JPG'
import '../header/header.css'
import axios from "axios";
import { useState, useEffect } from "react";

const Header = () => {

  const API = 'https://valorant-api.com/v1/agents?isPlayableCharacter=True';

  const [agents, setAgents] = useState([])
  

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () =>{
    const {data} = await axios.get(API)
    setAgents(data.data)
    //console.log(data)
  }

  console.log(agents)
  
  return (
    <>
        <div className="container header__container">
          <video src={videoBg} autoPlay loop muted/>
          {/* <video preload="true" loop playsinline poster={picBg} data-video="0"><source src={videoBg} type="video/mp4"/></video> */}
        </div>
        <div>{agents.map(agent =>(
        <div key={agent.uuid}>
          {agent.displayName}
          <img src={agent.fullPortraitV2} alt="icons" width={250} height={250}/>
        </div>
      ))}
      </div>
    </>
  )
}

export default Header