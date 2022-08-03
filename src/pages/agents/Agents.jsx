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
                width={250}
                height={250}
              ></img>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <div className="about__card__agent">
                <img
                  src={getagentSkillInfos.abilities[0].displayIcon}
                  onClick={(skills) =>
                    getSkills(getagentSkillInfos.abilities[0])
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
                    getSkills(getagentSkillInfos.abilities[1])
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
                    getSkills(getagentSkillInfos.abilities[2])
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
                    getSkills(getagentSkillInfos.abilities[3])
                  }
                  alt="skill1"
                  width={50}
                  height={50}
                ></img>
              </div>
            </div>
            {!skills ? (
              // !getagentSkillInfos ? (
              //   ""
              // ) : (
              //   <>
              //     <h5>
              //       {getagentSkillInfos.abilities[0].displayName.toUpperCase()}
              //     </h5>
              //     <p>{getagentSkillInfos.abilities[0].description}</p>
              //   </>
              // )
              ""
            ) : (
              <>
                <h5>{skills.displayName.toUpperCase()}</h5>
                <p>{skills.description}</p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Agents;
