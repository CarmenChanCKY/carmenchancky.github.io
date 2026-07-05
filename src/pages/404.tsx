import React from "react"
import { Link } from "gatsby"

function NotFoundPage() {
  return (
    <div className="h-full w-full bg-project-thumbnail-container-bg flex flex-col justify-center items-center">
      <div className="text-[28px] py-[25px]">404 Not Found</div>
      <div className="text-[20px]">
        <Link to="/">Back</Link>
      </div>
    </div>
  )
}

export default NotFoundPage
