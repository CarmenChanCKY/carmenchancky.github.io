import React from "react"
import ProjectTag from "./projectTag"

interface ProjectThumbnailProps {
  title: string
  thumbnailElement: React.ReactNode
  languages: string[]
  content: string
  github: string
  demo?: string
  blog?: string
  description?: string
}

function ProjectThumbnail({
  title,
  thumbnailElement,
  languages,
  content,
  github,
  demo,
  blog,
  description,
}: ProjectThumbnailProps) {
  return (
    <div className="bg-project-thumbnail-container rounded-md w-full border border-project-thumbnail-division-line">
      {thumbnailElement}

      <div className="px-3 py-3">
        <p className="text-black font-bold text-lg lg:text-xl mb-1">{title}</p>

        <div className="flex flex-wrap gap-y-2 gap-x-2 mb-2">
          {languages.map((language, index) => {
            return <ProjectTag key={index} language={language}></ProjectTag>
          })}
        </div>

        <p className="mb-1">{content}</p>

        {description !== undefined &&
        description !== null &&
        description !== "" ? (
          <p className="text-sm text-slate-500 mb-1">{description}</p>
        ) : (
          ""
        )}

        <div className="text-right">
          <a
            className="rounded-sm px-2 py-1 bg-[#8534F3] font-mono text-white"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          {blog !== undefined && blog !== null && blog !== "" ? (
            <a
              className="rounded-sm px-2 py-1 ml-3 bg-rose-300 font-mono text-white"
              href={blog}
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          ) : (
            ""
          )}
          {demo !== undefined && demo !== null && demo !== "" ? (
            <a
              className="rounded-sm px-2 py-1 ml-3 bg-sky-500 font-mono text-white"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectThumbnail
