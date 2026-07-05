import React from "react"

interface ProjectThumbnailProps {
  img: string
  title: string
}

function ProjectThumbnail({ img, title }: ProjectThumbnailProps) {
  return (
    <div className="bg-project-thumbnail-container-bg rounded-[20px] shadow-[rgba(0,0,0,0.15)_0px_5px_15px] hover:shadow-[rgba(0,0,0,0.35)_0px_5px_15px] hover:transition-shadow duration-300 w-[80vw] my-[30px] xl:w-[32vw] lg:w-[45vw] lg:my-[25px] md:w-[70vw] md:my-[30px]">
      <img
        src={img}
        alt="Thumbnail"
        className="w-full object-cover rounded-t-[20px] border-b border-project-thumbnail-division-line"
      />
      <p className="text-black text-[18px] ml-5 mt-[10px] pb-[10px] xl:text-[20px] lg:text-[20px] md:text-[22px]">
        {title}
      </p>
    </div>
  )
}

export default ProjectThumbnail
