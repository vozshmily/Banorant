import React, { useState } from "react";
import "./agents.css";
//import agentInfos from "../../pages/header/Header";

const Agents = ({ getAgent }) => {
  const [skills, getSkills] = useState();
  //console.log(getagentSkillInfos);

  //console.log(getagentSkillInfos);
  return (
    <section id="agents">
      {!getAgent ? (
        ""
      ) : (
        <div className="about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img
                src={getAgent.displayIcon}
                alt="viper"
                width={250}
                height={250}
              ></img>
            </div>
          </div>

          {getAgent.abilities.slice(0, 4).map((agent) => (
            <div className="agent__skill-logo__card">
              <div className="agent__logo__card">
                <img
                  src={agent.displayIcon}
                  onClick={(skills) => getSkills(agent.abilities.displayName)}
                  alt="skill1"
                  width={50}
                  height={50}
                ></img>
              </div>
              <div className="agent__skill__card">
                <h5>{agent.displayName.toUpperCase()}</h5>
                <p>{agent.description}</p>
              </div>
            </div>
          ))}
          {/* {console.log(getagentSkillInfos)} */}
        </div>
      )}
    </section>
  );
};

export default Agents;
