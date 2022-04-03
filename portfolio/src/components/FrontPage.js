import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import Projectlist from './Projectlist'
import myself from '../images/myself.jpg'
import java from '../images/javascript.png'
import nodejs from '../images/nodejs.png'
import html from '../images/html.png'
import css from '../images/css.png'
import react from '../images/reactjs.png'
import Resume from '../documents/MyResume.pdf'

const year = new Date()
const thisyear = year.getFullYear()

const FrontPage = () => {
  const [isActive, SetActive] = useState(true)

  const linkfocus = () => {
    document.body.style.overflow = 'visible'
    SetActive(!isActive)
  }
  const skillfocus = () => {
    document.body.style.overflow = 'visible'
    SetActive(!isActive)
  }
  const projectsfocus = () => {
    document.body.style.overflow = 'visible'
    SetActive(!isActive)
  }
  const introFocus = () => {
    document.body.style.overflow = 'visible'
    SetActive(!isActive)
  }
  const ToggleNav = () => {
    if (!isActive) {
      document.body.style.overflow = 'visible'
    } else {
      document.body.style.overflow = 'hidden'
    }
    SetActive(!isActive)
  }

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0)
    }
    SetActive(true)
  }, [])

  return (
    <div className="frontpage">
      <nav className={isActive ? '' : 'nav_background'}>
        <div className="logo">
          <h1>MyPortfolio</h1>
        </div>
        <ul className={isActive ? 'link_bar' : 'link_bar_open'}>
          <Link
            onClick={linkfocus}
            className="nav_btn"
            activeClass="active"
            to="link"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Links
          </Link>
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
            Projects
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
            Expertise
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
            Contact Me
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
      <div className="user_wrapper" id="link">
        <h1>Micky Huang</h1>
        <span>Front-End Web Developer</span>
        <div className="user_links">
          <div
            onClick={() => {
              window.open('https://github.com/DevCoderV1')
            }}
            className="link_icon"
          >
            <i className="fa fa-github"></i>
          </div>
          <div
            onClick={() => {
              window.open('https://www.linkedin.com/in/micky-huang-762b2018a/')
            }}
            className="link_icon"
          >
            <i className="fa fa-linkedin-square" />
          </div>
        </div>
      </div>
      <section className="user_projects_wrapper" id="project">
        <Projectlist />
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
              <span>HTML5</span>
            </div>
          </div>
          <div className="skills">
            <div className="skill_image">
              <img src={css} alt="javascript" />
            </div>
            <div className="skill_tag">
              <span>CSS3</span>
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
              Hi, my name is Micky, a front-end web developer with experiences
              in web design and mobile responsive website. I'm proficient in
              programming language to create a website. I'm passionate to work
              in this field and hope to share my creations.
            </p>
          </div>
          <div className="user_contact">
            <span>Contact me if you're interested for a chat</span>
            <div className="contact_choice">
              <button
                onClick={() => {
                  window.open('mailto:mickyhuang8388@gmail.com')
                }}
              >
                Email Me
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        Copyright &#169; By Micky Huang 2020 - {thisyear} MyPortfolio
      </footer>
    </div>
  )
}

export default FrontPage
