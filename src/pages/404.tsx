import React from "react"
import { Link } from "gatsby"

function NotFoundPage() {
  return (
    <div className="h-screen w-screen bg-project-thumbnail-container flex flex-col justify-center items-center">
      <div className="text-[1.75rem] py-6.25">404 Not Found</div>
      <div className="text-red">
        <Link to="/">Back</Link>
      </div>
    </div>
  )
}

export default NotFoundPage
