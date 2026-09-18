import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ProjectThumbnail from "./projectThumbnail"
import projectData from "../projectDatabase.json"

const THUMBNAIL_CLASS =
  "w-full object-cover object-top rounded-t-md border-b border-b-project-thumbnail-division-line aspect-video"

function getThumbnailElement(thumbnail: string): React.ReactElement {
  switch (thumbnail) {
    case "images/blog_homePage.png":
      return (
        <StaticImage
          src="../images/blog_homePage.png"
          alt="Thumbnail"
          className={THUMBNAIL_CLASS}
        />
      )
    case "images/battleship_homePage.JPG":
      return (
        <StaticImage
          src="../images/battleship_homePage.JPG"
          alt="Thumbnail"
          className={THUMBNAIL_CLASS}
        />
      )
    case "images/leetcode_homePage.png":
      return (
        <StaticImage
          src="../images/leetcode_homePage.png"
          alt="Thumbnail"
          className={THUMBNAIL_CLASS}
        />
      )
    case "images/sorting_index.JPG":
      return (
        <StaticImage
          src="../images/sorting_index.JPG"
          alt="Thumbnail"
          className={THUMBNAIL_CLASS}
        />
      )
    case "images/shopping_cart_homePage.JPG":
      return (
        <StaticImage
          src="../images/shopping_cart_homePage.JPG"
          alt="Thumbnail"
          className={THUMBNAIL_CLASS}
        />
      )
    case "images/rate_limiter_gateway.png":
      return (
        <StaticImage
          src="../images/rate_limiter_gateway.png"
          alt="Thumbnail"
          className={THUMBNAIL_CLASS}
        />
      )
    default:
      return <div className={THUMBNAIL_CLASS} />
  }
}

function ProjectPanel() {
  return (
    <section className="min-h-screen grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] justify-center py-7 px-5 sm:px-8 gap-x-6 gap-y-10">
      {projectData.map((data, index) => (
        <ProjectThumbnail
          key={index}
          {...data}
          thumbnailElement={getThumbnailElement(data.thumbnail)}
        />
      ))}
    </section>
  )
}

export default ProjectPanel
