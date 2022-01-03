import { useState } from 'react'
const Project = ({
  _project_name,
  _project_link,
  _project_github,
  _project_image,
}) => {
  const [display, setdisplay] = useState(false)

  return (
    <div
      className="project"
      onMouseMove={() => setdisplay(true)}
      onMouseLeave={() => setdisplay(false)}
    >
      <img src={_project_image} alt="" />
      <div className={display ? 'show_project_btn' : 'hide_project_btn'}>
        <h1>{_project_name}</h1>
        <button
          onClick={() => {
            window.open(`${_project_github}`)
          }}
        >
          GitHub
        </button>
        <button
          onClick={() => {
            window.open(`${_project_link}`)
          }}
        >
          View Project
        </button>
      </div>
    </div>
  )
}

export default Project
