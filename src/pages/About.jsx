import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <header className="about-header">
          <h1 className="about-title">About Me</h1>
          <div className="title-underline"></div>
        </header>

        <section className="about-section intro">
          <p className="lead-text">
            I'm David Hays, a full-stack software engineer who builds systems because I don't like chaos.
          </p>
        </section>

        <section className="about-section">
          <div className="section-content">
            <p>
              I specialize in <span className="highlight">Ruby on Rails</span> and <span className="highlight">React</span>. 
              Over the last several years, I've focused on turning messy, human problems into clean, reliable workflows. 
              Payment infrastructure, real-time dashboards, AI integrations, complex relational data models — I care about 
              building things that stay stable under pressure.
            </p>
            <p className="emphasis">
              At the core, I'm fascinated by how systems shape behavior.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-icon">🎲</div>
          <div className="section-content">
            <p>
              That's why I've spent seven years building <strong>Scyria</strong>, a tabletop RPG designed to fix 
              frustrations I had with existing games. It's part game design, part behavioral engineering, and part 
              stubborn persistence. When something feels structurally wrong, I can't ignore it. I want to understand 
              it and rebuild it properly.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-icon">💼</div>
          <div className="section-content">
            <p>
              Before software, I ran a water park. I started in maintenance and within a year was managing the entire 
              operation. That experience shaped how I think about leadership. <em>Effort beats talent when talent doesn't care.</em> 
              Ownership matters. The person willing to solve the unglamorous problems becomes indispensable.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-icon">🚪</div>
          <div className="section-content">
            <p>
              I also spent three years in door-to-door sales. It builds resilience fast. You learn to read people, 
              handle rejection, and stay steady when things don't go your way.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-icon">🌍</div>
          <div className="section-content">
            <p>
              I served a two-year mission in Kenya, where resources were limited and adaptability wasn't optional. 
              That experience grounded me. It strengthened my empathy and taught me to solve problems with what's 
              available, not what's ideal.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-icon">✍️</div>
          <div className="section-content">
            <p>
              Outside of work, I write and build worlds. I drafted a 600-page Star Wars origin trilogy to challenge 
              myself creatively. I play blues guitar and enjoy improvisation, but I appreciate structure underneath it. 
              Even the best solos follow a framework.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-icon">👨‍👩‍👧‍👦</div>
          <div className="section-content">
            <p>
              I'm married with two kids. Fatherhood sharpened my patience and long-term thinking. It reinforced the 
              value of consistency and example over talk.
            </p>
          </div>
        </section>

        <section className="about-section closing">
          <div className="section-content">
            <p>
              Across everything I've done, the pattern is simple. I invest deeply. I care about craftsmanship. 
              I build systems that hold up over time.
            </p>
            <p className="final-statement">
              If I join your team, I won't just ship features. I'll think about architecture, tradeoffs, user 
              experience, and sustainability. Clean systems create better outcomes, and better outcomes compound.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
