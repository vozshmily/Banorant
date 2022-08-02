import React, { useState } from "react";
import "./agents.css";
//import agentInfos from "../../pages/header/Header";

const Agents = ({ getagentSkillInfos }) => {
  const [skills, getSkills] = useState();
  //console.log(getagentSkillInfos);
  console.log(skills);
  return (
    <section id="agents">
      {!getagentSkillInfos ? (
        ""
      ) : (
        <div className="about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img
                src={getagentSkillInfos.displayIcon}
                alt="viper"
                width={300}
                height={300}
              ></img>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <div className="about__card__agent">
                <img
                  src={getagentSkillInfos.abilities[0].displayIcon}
                  onClick={(skills) =>
                    getSkills(getagentSkillInfos.abilities[0].description)
                  }
                  alt="skill1"
                  width={50}
                  height={50}
                ></img>
              </div>
              <div className="about__card__agent">
                <img
                  src={getagentSkillInfos.abilities[1].displayIcon}
                  onClick={(skills) =>
                    getSkills(getagentSkillInfos.abilities[1].description)
                  }
                  alt="skill1"
                  width={50}
                  height={50}
                ></img>
              </div>
              <div className="about__card__agent">
                <img
                  src={getagentSkillInfos.abilities[2].displayIcon}
                  onClick={(skills) =>
                    getSkills(getagentSkillInfos.abilities[2].description)
                  }
                  alt="skill1"
                  width={50}
                  height={50}
                ></img>
              </div>
              <div className="about__card__agent">
                <img
                  src={getagentSkillInfos.abilities[3].displayIcon}
                  onClick={(skills) =>
                    getSkills(getagentSkillInfos.abilities[3].description)
                  }
                  alt="skill1"
                  width={50}
                  height={50}
                ></img>
              </div>
            </div>

            <p>{skills}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Agents;
