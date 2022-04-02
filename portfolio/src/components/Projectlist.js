import Project from './Project'
import project1 from '../images/project1.JPG'
import project2 from '../images/Project2.JPG'
import project3 from '../images/Project3.JPG'
import './ProjectList.css'

const Projectlist = () => {
  //Array Of Projects
  const Projects = [
    {
      _project_id: 1,
      _project_name: 'Typing Challenge',
      _project_image: project1,
      _project_github: 'https://github.com/DevCoderV1/TypingChallenge',
      _project_link: 'https://type-challenge.netlify.app/',
    },
    {
      _project_id: 2,
      _project_name: 'Typhoon Link',
      _project_image: project2,
      _project_github: 'https://github.com/DevCoderV1/Typhoon-Link',
      _project_link: 'https://typhoonlink.netlify.app/',
    },
    {
      _project_id: 3,
      _project_name: 'Password Generator',
      _project_image: project3,
      _project_github: 'https://github.com/DevCoderV1/Password_Generator',
      _project_link: 'https://passwordv1.netlify.app/',
    },
  ]

  return (
    <div className="projectlist_wrapper">
      <div className="project_header">
        <h1>Projects</h1>
      </div>
      <div className="project_container">
        {Projects.map((project_item) => (
          <Project key={project_item._project_id} {...project_item} />
        ))}
      </div>
    </div>
  )
}
export default Projectlist
