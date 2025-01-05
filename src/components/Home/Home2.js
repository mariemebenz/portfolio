import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/icon-home.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’ve always been captivated by how technology can transform ideas into tangible solutions 
            that make a real impact. This curiosity has driven me to explore different fields like web 
            development, AI, and mobile apps.
              <br />
              <br />I love crafting applications that blend creativity and technical expertise. My goal 
              is to develop tools that not only function well but also 
              <i>
                <b className="purple"> improve the user experience</b> and
                <b className="purple"> solve  real-world problems </b>.
              </i>
              <br />
              <br />
              My fields of interest include  &nbsp;
              <i>
                <b className="purple">web and mobile application development </b>,{" "}
                <b className="purple"> artificial intelligence
                </b>,
                <b className="purple"> data integration
                </b>,
                <b className="purple"> machine learning
                </b> and exploring technologies such as 
                <b className="purple"> DevOps
                 
                </b>.
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar d-flex justify-content-center align-items-center">
  <Tilt>
    <img
      src={myImg}
      className="img-fluid"
      alt="avatar"
      style={{
        maxWidth: '65%', // Set a max width to control the size
        height: 'auto',    // Maintain aspect ratio
      }}
    />
  </Tilt>
</Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/marieme-benzha-802419247/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/mariemebenz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
            
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
