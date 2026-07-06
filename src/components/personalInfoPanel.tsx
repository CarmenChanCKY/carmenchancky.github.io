import React from "react"
import ProjectCopyright from "./projectCopyright"

function EnvelopeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      className="w-7 hover:fill-personal-info-text-hover"
    >
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      fill="currentColor"
      className="w-7 hover:fill-personal-info-text-hover"
    >
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-2.3-3-3.3-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.7-15.5 1.6-15.5 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
    </svg>
  )
}

function PersonalInfoPanel() {
  return (
    <section className="short-screen:h-auto h-auto lg:h-screen text-personal-info-text grid lg:grid-rows-[2fr_2fr_1fr] items-center justify-items-center pt-4 lg:pt-2 pb-4 px-3 max-lg:gap-y-3">
      <div className="self-end">
        <img
          src="images/profile_pic.JPG"
          alt="Profile Picture"
          className="size-48 lg:size-56 xl:size-62.5 rounded-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col items-center gap-6 lg:gap-12">
        <div>
          <h1 className="font-bold text-2xl">
            Carmen Chan
          </h1>
          <div className="flex flex-row justify-center mt-2 gap-x-14 lg:gap-x-8">
            <a href="mailto:kychan100798@gmail.com">
              <EnvelopeIcon />
            </a>
            <a href="https://github.com/CarmenChanCKY" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
          </div>
        </div>
        <div className="text-center text-base lg:max-xl:text-sm *:mb-2">
          <p>HTML | CSS | SCSS | JavaScript | TypeScript | Vue | Angular | React </p>
          <p>PHP | Couchbase | SQL | Node.js | Laravel </p>
          <p>Flutter | Java</p>
        </div>
      </div>
      <div className="text-gray-400 lg:max-xl:text-xs text-sm self-end">
        <ProjectCopyright />
      </div>
    </section>
  )
}

export default PersonalInfoPanel
