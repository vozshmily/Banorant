import React from "react";
import videoBg from "../../assets/agent-background-generic.mp4";
//import picBg from "../../assets/agent-background-generic.JPG";
import "../header/header.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Agents from "../agents/Agents";

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
  //console.log(agentInfos);

  return (
    <>
      <div className="main__container">
        <div className="sub__container">
          <div className="video___bg">
            <video src={videoBg} muted loop autoPlay></video>
          </div>

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
        </div>

        <div className="agent__details">
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

          <div className="agents__info">
            <article className="about__card">
              {!agentInfos ? (
                ""
              ) : (
                <>
                  <small>ROLE</small>
                  <h5>
                    {agentInfos.role.displayName.toUpperCase()}{" "}
                    <img
                      src={agentInfos.role.displayIcon}
                      alt="icons"
                      width={30}
                      height={30}
                    />
                  </h5>
                  <small>BIOGRAPHY</small>
                  <p>{agentInfos.description}</p>
                </>
              )}
            </article>
          </div>
        </div>
      </div>
      <Agents getagentSkillInfos={agentInfos} />
    </>
  );
};

export default Header;
