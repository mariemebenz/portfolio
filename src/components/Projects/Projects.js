import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mobile from "../../Assets/Projects/mobile-interface.png";
import detection from "../../Assets/Projects/people-detection.png";
import chatbot from "../../Assets/Projects/chatbot-interface.png";
import minesafe from "../../Assets/Projects/minesafe_interface.png";
import travel from "../../Assets/Projects/travel-interface.png";
import stage from "../../Assets/Projects/stage_interface.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="ChatBot for Stock Management"
              description="Developed a stock management chatbot to simplify stock level monitoring and streamline the ordering process. It leverages Rasa Framework, speech recognition, NLP, and uses PostgreSQL as the database. Technologies used include Python, JavaScript, HTML, and CSS."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stage}
              isBlog={false}
              title="Internship Report Management System"
              description="Designed and developed a system to digitize, centralize, and visualize internship data. This system facilitates easy access and management of internship records. Built using Java, Spring Boot, Angular, TypeScript, and PostgreSQL."
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minesafe}
              isBlog={false}
              title="Real-Time AI-Based Mine Accident Prevention System"
              description="Developed a real-time AI-powered application to predict and prevent mining accidents using computer vision and AI models. Built with Python, PyTorch, OpenCV, and PyQt, it enhances miner safety by detecting hazards and providing timely alerts."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobile}
              isBlog={false}
              title="Voyageur Connecté - Travel Mobile App"
              description="Created a mobile application to help users discover and share travel experiences. Features include integration with Google Maps API and Firebase, and it was developed using Android Studio, Java, and Firebase for seamless user interaction."
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel Blog Website with Microservices"
              description="Developed a travel blog website using microservices architecture with Docker for containerization. The application supports testing and is built using Spring Boot, Angular, PostgreSQL, SQL, Docker, Kubernetes, and Kafka for robust, scalable performance."
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={detection}
              isBlog={false}
              title=" Security Alarm System "
              description="Developed a security alarm system using YOLO for real-time object detection to identify intruders near a property. The system sends email notifications to the owner with the number of detected people upon detecting a potential intrusion. Built with Python, OpenCV, and SMTP for notifications."
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
