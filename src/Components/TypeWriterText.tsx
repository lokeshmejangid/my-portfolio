import React from 'react'
import Typewriter from 'typewriter-effect'

const TypeWriterText = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "I'm Freelancer",
          "I'm LOKESH JANGID",
          "I'm Frontend Developer Web and Mobile Application",
          "I'm React Js Developer",
          "I'm Android Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      />
  )
}

export default TypeWriterText