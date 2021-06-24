import Project from "./Project";
import "./ProjectList.css";
import project1 from "../images/project1.jpg";
import project2 from "../images/Project2.JPG";

const Projectlist = () => {
  const Projects = [
    {
      _project_id: 1,
      _project_name: "Typing Challenge",
      _project_image: project1,
      _project_github: "",
      _project_link: "https://type-challenge.netlify.app/",
    },
    {
      _project_id: 2,
      _project_name: "Typhoon Link",
      _project_image: project2,
      _project_github: "",
      _project_link: "https://typhoonlink.netlify.app/",
    },
  ];

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
  );
};
export default Projectlist;
