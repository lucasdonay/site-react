import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faApple,
  faAndroid,
  faJenkins,
  faNodeJs,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "Angular",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Java",
  "SQL",
  "PostgreSQL",
];

const labelsSecond = ["Flutter", "Dart", "Android", "Ios"];

const labelsThird = [
  "OpenAI",
  "Firebase",
  "Codemagic",
  "Postman",
  "Docker",
  "AWS",
  "Selenium",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Experiência</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon
              icon={faReact}
              size="3x"
              style={{ paddingRight: "15px" }}
            />
            <FontAwesomeIcon
              icon={faNodeJs}
              size="3x"
              style={{ paddingRight: "15px" }}
            />
            <FontAwesomeIcon
              icon={faJava}
              size="3x"
              style={{ paddingRight: "15px" }}
            />
            <h3>Full Stack Web Development</h3>
            <p>
              Desenvolvo sistemas web completos, do front-end ao back-end,
              utilizando tecnologias modernas para entregar soluções rápidas,
              seguras e escaláveis. Transformo ideias em plataformas digitais
              eficientes que otimizam processos e geram resultados.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon
              icon={faApple}
              style={{ paddingRight: "15px" }}
              size="3x"
            />
            <FontAwesomeIcon icon={faAndroid} size="3x" />
            <h3>Mobile Development</h3>
            <p>
              Desenvolvo aplicações móveis multiplataforma utilizando Flutter,
              garantindo alta performance, design responsivo e experiência de
              usuário consistente em Android e iOS.
            </p>
            <br></br>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faJenkins} size="3x" />

            <h3>CI/CD</h3>
            <p>
              Também auxilio na configuração de testes automatizados, pipelines
              de CI/CD e integração com APIs e serviços externos para garantir
              um ciclo de desenvolvimento ágil e eficiente.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
