import { useRef, useState, useEffect } from 'react'
import image1 from '../images/image1.jpg'
import myself from '../images/myself.jpg'
import java from '../images/javascript.png'
import html from '../images/html.png'
import css from '../images/css.png'
import nodejs from '../images/nodejs.png'
import react from '../images/reactjs.png'
import express from '../images/expressjs.png'
import git from '../images/git.png'
import vs from '../images/visualcode.png'
import photoshop from '../images/photoshop.png'
import wordp from '../images/wordpress.png'
import myresume from '../documents/resume.pdf'



const FrontPage = () => {

    const [isActive, SetActive] = useState(true)
    const projectsRef = useRef();
    const skillRef = useRef();
    const introRef = useRef();

    const skillfocus = () => {
        skillRef.current.scrollIntoView();
        document.body.style.overflow = "visible"
        SetActive(!isActive)

    }
    const projectsfocus = () => {
        projectsRef.current.scrollIntoView()
        document.body.style.overflow = "visible"
        SetActive(!isActive)
    }

    const introFocus = () => {
        introRef.current.scrollIntoView();
        document.body.style.overflow = "visible"
        SetActive(!isActive)
    }

    const ToggleNav = () => {
        if (!isActive) {
            document.body.style.overflow = "visible"
        } else {
            document.body.style.overflow = "hidden"
        }
        SetActive(!isActive)

    }


    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
        SetActive(true)

    }, [])

    return (
        <div className="frontpage">
            <div className="frontpage_wrapper">
                <nav>
                    <div className="logo">
                        <h1 onClick={(e) => window.location.reload()}>MyPortfolio</h1>
                    </div>
                    <ul className={isActive ? 'link_bar' : 'link_bar_open'}>
                        <li onClick={projectsfocus}>Projects</li>
                        <li onClick={skillfocus}>Experiences</li>
                        <li onClick={introFocus}>Contact</li>
                        <button><a href={myresume} download="resume">Resume</a></button>
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
                        <div onClick={() => {
                            window.open("https://github.com/DevCoderV1");
                        }} className="link_icon">
                            <i className="fa fa-github"></i>
                        </div>
                        <div onClick={() => {
                            window.open("https://www.linkedin.com/in/micky-huang-762b2018a/");
                        }} className="link_icon">
                            <i className="fa fa-linkedin-square" />
                        </div>
                    </div>
                </div>
            </div>
            <section ref={projectsRef} className="user_projects_wrapper">
                <div className="user_projects_header">
                    <h2>Projects</h2>
                </div>
                <div className="projects_list">
                    <div className="projects">
                        <img src={image1} alt="project1" />
                    </div>

                </div>
            </section>
            <section ref={skillRef} className="user_experience_wrapper">
                <div>
                    <h2>Expertise</h2>
                </div>
                <div className="user_skill">
                    <div className="skills">
                        <img src={java} alt="javascript" />
                        <span>1-2 Years</span>
                    </div>
                    <div className="skills">
                        <img src={html} alt="html" />
                        <span>2-3 Years</span>
                    </div>
                    <div className="skills">
                        <img src={css} alt="css" />
                        <span>2-3 Years</span>
                    </div>
                    <div className="skills">
                        <img src={nodejs} alt="nodejs" />
                        <span>2-3 Years</span>
                    </div>
                    <div className="skills">
                        <img src={react} alt="reactjs" />
                        <span>2 Years</span>
                    </div>
                    <div className="skills">
                        <img src={express} alt="expressjs" />
                        <span>1-2 Years</span>
                    </div>
                </div>
                <div>
                    <h2>Extras</h2>
                </div>
                <div className="user_skill">
                    <div className="skills">
                        <img src={vs} alt="visualcode" />
                    </div>
                    <div className="skills">
                        <img src={git} alt="github" />
                    </div>
                    <div className="skills">
                        <img src={photoshop} alt="photoshop" />
                    </div>
                    <div className="skills">
                        <img src={wordp} alt="wordpress" />
                    </div>
                </div>
            </section>
            <section ref={introRef} className="user_intro_wrapper">
                <div className="user_intro_header">
                    <h2>About Me</h2>
                </div>
                <div className="user_intro_container">
                    <div className="user_image">
                        <img src={myself} alt="me" />
                    </div>
                    <div className="user_summary">
                        <p>Hi, my name is Micky, a front-end web developer with experience of web design and mobile responsive application. I'm proficent on Javascript, HTML, CSS, Node JS and React JS but I will continue to improve myself to be a better programmer. In my free time I like to hangout, play games, do body workout and travel to places for trying out new delicious food.</p>
                    </div>
                    <div className="user_contact">
                        <span>Contact me if you're interested for a chat at:</span>
                        <div className="contact_choice">
                            <div class="phone"><a href="mailto:+9294618388" className="fa">&#xf095;</a></div>
                            <div class="email"><a href="mailto:mickyhuang8388@gmail.com" className="material-icons">&#xe0be;</a></div>
                        </div>
                    </div>
                </div>

            </section>
            <footer>Copyright &#169; By Micky Huang 2020-Present MyPortfolio</footer>
        </div >
    )
}

export default FrontPage;