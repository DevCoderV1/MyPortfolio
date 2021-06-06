import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import image1 from "../images/image1.jpg";
import myself from "../images/myself.jpg";
import java from "../images/javascript.png";
import html from "../images/html.png";
import css from "../images/css.png";
import nodejs from "../images/nodejs.png";
import react from "../images/reactjs.png";
import express from "../images/expressjs.png";
import git from "../images/git.png";
import vs from "../images/visualcode.png";
import photoshop from "../images/photoshop.png";
import wordp from "../images/wordpress.png";
import Resume from "../documents/MyResume.pdf";
import project1 from "../images/project1.JPG";

const FrontPage = () => {
  const [isActive, SetActive] = useState(true);

  const skillfocus = () => {
    document.body.style.overflow = "visible";
    SetActive(!isActive);
  };
  const projectsfocus = () => {
    document.body.style.overflow = "visible";
    SetActive(!isActive);
  };

  const introFocus = () => {
    document.body.style.overflow = "visible";
    SetActive(!isActive);
  };

  const ToggleNav = () => {
    if (!isActive) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
    SetActive(!isActive);
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    SetActive(true);
  }, []);

  return (
    <div className="frontpage">
      <nav className={isActive ? "" : "nav_background"}>
        <div className="logo">
          <h1>MyPortfolio</h1>
        </div>
        <ul className={isActive ? "link_bar" : "link_bar_open"}>
          <Link
            onClick={projectsfocus}
            className="nav_btn"
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Project
          </Link>
          <Link
            onClick={skillfocus}
            className="nav_btn"
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Experiences
          </Link>
          <Link
            onClick={introFocus}
            className="nav_btn"
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
          <button>
            <a href={Resume} download="Resume">
              Resume
            </a>
          </button>
        </ul>
        <div onClick={ToggleNav} className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <div className="user_wrapper">
        <h1>Micky Huang</h1>
        <span>Front-End Web Developer</span>
        <div className="user_links">
          <div
            onClick={() => {
              window.open("https://github.com/DevCoderV1");
            }}
            className="link_icon"
          >
            <i className="fa fa-github"></i>
          </div>
          <div
            onClick={() => {
              window.open("https://www.linkedin.com/in/micky-huang-762b2018a/");
            }}
            className="link_icon"
          >
            <i className="fa fa-linkedin-square" />
          </div>
        </div>
      </div>

      <section className="user_projects_wrapper" id="project">
        <div className="user_projects_header">
          <h2>Projects</h2>
        </div>
        <div className="projects_list">
          <div className="projects">
            <img
              onClick={() => {
                window.open("https://type-challenge.netlify.app/");
              }}
              src={project1}
              alt="project1"
            />
          </div>
          <div className="projects">
            <img src={image1} alt="project1" />
          </div>
          <div className="projects">
            <img src={image1} alt="project1" />
          </div>
        </div>
      </section>
      <section className="user_experience_wrapper" id="skill">
        <div className="user_header">
          <h2>Expertise</h2>
        </div>
        <div className="user_skill">
          <div className="skills">
            <div className="skill_image">
              <img src={java} alt="javascript" />
            </div>
            <div className="skill_tag">
              <span>Javascipt</span>
            </div>
          </div>
          <div className="skills">
            <div className="skill_image">
              <img src={html} alt="javascript" />
            </div>
            <div className="skill_tag">
              <span>HTML</span>
            </div>
          </div>
          <div className="skills">
            <div className="skill_image">
              <img src={css} alt="javascript" />
            </div>
            <div className="skill_tag">
              <span>CSS</span>
            </div>
          </div>
          <div className="skills">
            <div className="skill_image">
              <img src={nodejs} alt="javascript" />
            </div>
            <div className="skill_tag">
              <span>Node JS</span>
            </div>
          </div>
          <div className="skills">
            <div className="skill_image">
              <img src={react} alt="javascript" />
            </div>
            <div className="skill_tag">
              <span>React JS</span>
            </div>
          </div>
          <div className="skills">
            <div className="skill_image">
              <img src={express} alt="javascript" />
            </div>
            <div className="skill_tag">
              <span>Express JS</span>
            </div>
          </div>
        </div>
        <div className="user_header">
          <h2>Extras</h2>
        </div>
        <div className="user_skill">
          <div className="skills">
            <div className="skill_image">
              <img src={git} alt="javascript" />
            </div>
            <div className="skill_tag">
              <span>Github</span>
            </div>
          </div>
          <div className="skills">
            <div className="skill_image">
              <img src={vs} alt="javascript" />
            </div>
            <div className="skill_tag">
              <span>Visual Studio</span>
            </div>
          </div>
          <div className="skills">
            <div className="skill_image">
              <img src={photoshop} alt="javascript" />
            </div>
            <div className="skill_tag">
              <span>Photoshop</span>
            </div>
          </div>
          <div className="skills">
            <div className="skill_image">
              <img src={wordp} alt="javascript" />
            </div>
            <div className="skill_tag">
              <span>WordPress</span>
            </div>
          </div>
        </div>
      </section>
      <section className="user_intro_wrapper" id="intro">
        <div className="user_intro_header">
          <h2>About Me</h2>
        </div>
        <div className="user_intro_container">
          <div className="user_image">
            <img src={myself} alt="me" />
          </div>
          <div className="user_summary">
            <p>
              Hi, my name is Micky, a front-end web developer with experience in
              web design and mobile responsive applications. I'm proficient in
              Javascript, HTML, CSS, Node JS, and React JS but I will keep
              studying and improve my skills. In my free time I like to hang
              out, play games, do body workouts and travel to places for trying
              out new delicious food.
            </p>
          </div>
          <div className="user_contact">
            <span>Contact me if you're interested for chat</span>
            <div className="contact_choice">
              <div className="email">
                <a
                  href="mailto:mickyhuang8388@gmail.com"
                  className="material-icons"
                >
                  &#xe0be;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>Copyright &#169; By Micky Huang 2020-Present MyPortfolio</footer>
    </div>
  );
};

export default FrontPage;
