import React from "react"
import PersonalInfoPanel from "../components/personalInfoPanel"
import ProjectPanel from "../components/projectPanel"

function MainPage() {
  return (
    <main className="flex flex-col lg:flex-row short-screen:flex-col min-h-screen">
      <div className="bg-personal-info h-auto lg:w-1/4 lg:sticky lg:top-0 lg:self-start lg:h-screen short-screen:w-full short-screen:h-auto short-screen:relative">
        <PersonalInfoPanel />
      </div>
      <div className="bg-project lg:w-3/4 lg:h-screen lg:overflow-y-auto short-screen:w-full short-screen:h-auto short-screen:overflow-visible">
        <ProjectPanel />
      </div>
    </main>
  )
}

export default MainPage

export function Head() {
  return <title>Carmen Chan</title>
}
