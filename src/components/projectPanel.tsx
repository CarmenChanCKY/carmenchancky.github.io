import React from "react"
import ProjectThumbnail from "./projectThumbnail"
import projectData from "../projectDatabase.json"

function ProjectPanel() {
  return (
    <section className="min-h-screen grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] justify-center py-7 px-5 sm:px-8 gap-x-6 gap-y-10">
      {projectData.map((data, index) => (
        <ProjectThumbnail key={index} {...data} />
      ))}
    </section>
  )
}

export default ProjectPanel
