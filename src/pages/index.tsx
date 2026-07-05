import React from "react"
import PersonalInfoPanel from "../components/personalInfoPanel"
import ProjectPanel from "../components/projectPanel"

function MainPage() {
  return (
    <div className="flex flex-col xl:flex-row h-screen min-h-screen">
      <div className="bg-personal-info-bg xl:w-1/4 lg:w-1/3">
        <PersonalInfoPanel />
      </div>
      <div className="bg-project-bg xl:w-3/4 lg:w-2/3">
        <ProjectPanel />
      </div>
    </div>
  )
}

export default MainPage

export function Head() {
  return <title>Carmen Chan</title>
}
