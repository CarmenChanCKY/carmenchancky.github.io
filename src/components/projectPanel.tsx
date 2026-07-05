import React from "react"
import ProjectThumbnail from "./projectThumbnail"
import projectData from "../projectDatabase.json"

function ProjectPanel() {
  return (
    <div className="h-full flex flex-col justify-center items-center xl:grid xl:grid-cols-2 xl:justify-items-center xl:content-center xl:items-center">
      {projectData.map((value) => (
        <ProjectThumbnail
          key={value.slug}
          img={value.thumbnail}
          title={value.title}
        />
      ))}
    </div>
  )
}

export default ProjectPanel
