import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Marieme Benzha </span>
        
            <br />
            I am currently an engineering student specializing in Software Engineering at Télécom Saint-Étienne.
            <br />
            I enjoy working on web development and AI, leveraging data to make informed decisions and enhance user experiences.
            <br />
            <br />
            
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
          "I am passionate about creating solutions that improve lives and drive technological progress."{" "}
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
