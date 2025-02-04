import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Srikanth Thanneeru </span>
            from <span className="purple"> Guntur, India.</span>
            <br />
            I am currently intern as a software developer at Innovarsity.
            <br />
            I am pursuing Bachelor of Technology in Computer Science and Engineering with specialization of AI at KKR & KSR Institute of Technology and Sciences, Guntur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to music 
            </li>
            <li className="about-activity">
              <ImPointRight /> Surfing the internet
            </li>
            <li className="about-activity">
              <ImPointRight /> watching podcasts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Srikanth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
