import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I’m <span className="purple">Shaikh Nabil Ahmed</span> from <span className="purple">Mumbai, India</span>.
            <br />
            I'm pursuing a B.E. in <span className="purple">Computer Science & Engineering (AI & ML)</span> at AIKTC under Mumbai University.
            <br />
            I'm a consistent <strong>University Topper</strong> and was proudly honored with a <strong>Topper Award by Padma Shree Dr.Zahir Kazi </strong>.
            <br />
            <br />
            👑 <strong>Achievements</strong>:
            <ul>
              <li>🏆 Winner of <strong>CSMU Hackathon 2024</strong></li>
              <li>🥈 2nd place in <strong>SIH Internal Hackathon</strong></li>
              <li>🏅 Honored with <strong>Topper Award by Dr. Zahir Kazi (President of Anjuman-I-Islam)</strong></li>
            </ul>
            <br />
            🧠 <strong>Key Projects</strong> I’ve worked on:
            <ul>
              <li>🛤️ AI-based Railway Crack Detection</li>
              <li>💉 Medical Diagnosis from Symptoms using ML</li>
              <li>🔍 Face Liveliness Detection for UIDAI</li>
              <li>🦠 Pneumonia & COVID-19 Detection from X-rays</li>
            </ul>
            <br />
            Apart from tech, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling & Exploring new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Content Writing 
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Tech Events & Hackathons
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build solutions that truly make a difference."
          </p>
          <footer className="blockquote-footer">Nabil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
