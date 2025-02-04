import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              title="Data Insights"
              description="Led the cleanup of Diwali sales data, ensuring 100% accuracy for key metrics, and analyzed purchasing patterns by gender, age, and location to identify high-potential demographics. Provided insights on revenue contributions from different states and age groups, influencing targeted marketing strategies and optimizing future sales initiatives."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Vacuum Cleaner bot "
              description="Designed and developed an autonomous vacuum cleaner with optimized motor control and obstacle detection, utilizing advanced microcontroller programming for smooth operation and enhanced system performance through precise integration."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
