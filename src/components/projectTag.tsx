import React from "react"

interface ProjectTagProps {
  language: string
}

function ProjectTag({ language }: ProjectTagProps) {
  return (
    <div className="text-sm bg-[#D0E8F2] rounded-sm px-1 font-mono">
      <span className="mr-0.5">#</span>
      {language}
    </div>
  )
}

export default ProjectTag
