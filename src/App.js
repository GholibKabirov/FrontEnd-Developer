import React from "react";
import "./App.css";
import Gholib from "./Component/gholib5.jpg";
import Menu from "../../my-app/src/Component/Heder/Menu/Menu";

function App() {
  return (
    <>
      <Menu />

      <section id="welcome-section" class="welcome-section">
        <img className="Gholib" src={Gholib} alt="aa" />
        <p>Kabirzoda Gholib FrontEnd Developer</p>
      </section>

      <section id="projects" class="projects-section">
        <h2 class="projects-section-header">These are some of my projects</h2>

        <div class="projects-grid">
          <a
            href="https://gholib-first-mini-project.netlify.app/"
            target="_blank"
            className="project project-tile"
          >
            <img
              class="project-image"
              src="https://assets.skyfilabs.com/images/blog/cse-mini-projects.webp"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Mini Project
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://gholib-landing-page.netlify.app/"
            target="_blank"
            class="project project-tile"
          >
            <img
              class="project-image"
              src="https://www.pngmagic.com/product_images/landing-page-banner-background-sm.jpg"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Landing Page
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://golib-dashboard.netlify.app/"
            target="_blank"
            class="project project-tile"
          >
            <img
              class="project-image"
              src="https://thumbs.dreamstime.com/b/landing-page-template-computer-dashboard-illustration-concept-modern-design-web-website-mobile-vector-eps-154856094.jpg"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Dashboard LogIn
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
         
        </div>
      </section>

      <section id="contact" class="contact-section">
        <div class="contact-section-header">
          <h2>Let's work together...</h2>
          
        </div>
        <div class="contact-links">
          <a
            href="https://www.instagram.com/kabirovss_/"
            target="_blank"
            class="btn contact-details"
          >
            <i class="fab fa-facebook-square"></i> Instagram
          </a>
          <a
            id="profile-link"
            href="https://github.com/GholibKabirov"
            target="_blank"
            class="btn contact-details"
          >
            <i class="fab fa-github"></i> GitHub
          </a>

          <a
            href="https://myaccount.google.com/?utm_source=chrome-profile-chooser&pli=1"
            class="btn contact-details"
          >
            <i class="fas fa-at"></i> Email
          </a>
        </div>
      </section>

      <footer>
        <p>&copy; Copyright Golib </p>
      </footer>
    </>
  );
}

export default App;
