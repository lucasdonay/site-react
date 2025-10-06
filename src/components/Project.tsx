import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";

import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projetos Pessoais</h1>
      <div className="projects-grid">
        <div className="project">
          <div className="coming-soon">
            <img src={mock02} alt="thumbnail" />
          </div>
          <h2>HealthTrack Mobile</h2>
          <p>
            Aplicativo mobile desenvolvido com Flutter e Firebase para
            monitoramento de saúde. Features incluem autenticação biométrica,
            notificações push e integração com API REST em Java.
          </p>
        </div>
        <div className="project">
          <div className="coming-soon">
            <img src={mock01} alt="thumbnail" width="100%" />
          </div>

          <h2>Sistema de Gestão Hospitalar</h2>

          <p>
            Backend em Java Spring Boot com arquitetura microserviços, API REST,
            autenticação JWT e PostgreSQL. Frontend em Angular com Material UI,
            dashboard interativo e relatórios em tempo real.
          </p>
        </div>
        <div className="project">
          <div className="coming-soon">
            <img src={mock01} alt="thumbnail" width="100%" />
          </div>

          <h2>Portal de Agendamentos</h2>

          <p>
            Plataforma web em React com TypeScript para agendamento de
            consultas. Interface moderna com Material-UI, integração com API
            RESTful, autenticação OAuth2 e dashboard administrativo.
          </p>
        </div>
        <div className="project">
          <div className="coming-soon">
            <img src={mock02} alt="thumbnail" width="100%" />
          </div>

          <h2>App de Prescrição Digital</h2>

          <p>
            Aplicativo Flutter com backend Java Spring para prescrições médicas
            digitais. Recursos incluem assinatura digital, QR Code para
            validação, e integração com sistemas de farmácia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
