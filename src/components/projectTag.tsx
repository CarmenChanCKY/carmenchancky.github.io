import React from "react"

interface ProjectTagProps {
  language: string
}

function ProjectTag({ language }: ProjectTagProps) {
  return (
    <div className="bg-project-detail-main text-personal-info-text text-[14px] px-2 py-[5px] mr-[10px] mt-2 hover:bg-project-detail-hover hover:transition-colors duration-300 cursor-default">
      #{language}
    </div>
  )
}

export default ProjectTag
