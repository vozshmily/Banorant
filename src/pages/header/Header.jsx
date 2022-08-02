import React from "react";
import videoBg from "../../assets/agent-background-generic.mp4";
import picBg from "../../assets/agent-background-generic.JPG";
import "../header/header.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Header = () => {
  const API = "https://valorant-api.com/v1/agents?isPlayableCharacter=True";

  const [agents, setAgents] = useState([]);
  const [agentInfos, setagentInfos] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(API);
    setAgents(data.data);
    data.data.sort((a, b) => (a.id > b.id ? 1 : -1));
    //console.log(data)
  };

  //console.log(agents);
  console.log(agentInfos);

  return (
    <header>
      <div>
        <video src={videoBg} autoplay loop muted></video>
        {/* <video preload="true" loop playsinline poster={picBg} data-video="0"><source src={videoBg} type="video/mp4"/></video> */}
        <div className="header__container">
          <div id="slider" className="agents__header wrapper">
            {agents.map((agent) => (
              <div
                key={agent.uuid}
                onClick={(agentInfos) => setagentInfos(agent)}
              >
                <i className="h1__font">{agent.displayName.toUpperCase()}</i>
              </div>
            ))}
          </div>

          <div className="agents__image">
            {!agentInfos ? (
              ""
            ) : (
              <img
                src={agentInfos.fullPortraitV2}
                alt="icons"
                width={600}
                height={600}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
