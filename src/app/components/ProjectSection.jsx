import React from 'react'
import ProjectCard from './ProjectCard'

const Projects=[
    {id:1,
        title:"My PortFolio",
        description:"My Portfolio made using Next.js and Tailwind CSS",
        giturl:'https://github.com/Mastermind730/MyPortfolio'
    },
    {id:2,
        title:"Image Editor",
        description:"An Image editing website made using Python Flask and Open CV",
        giturl:"https://github.com/Mastermind730/ImageEditor"
    }, {id:3,
        title:"ThinkBot",
        description:"A clone of Jarvis made using Python and its awesome libraries",
        giturl:"https://github.com/Mastermind730/ThinkBot"
    },
    {id:4,
        title:"Steganography",
        description:"A project using Python OpenCV that encrypts an message in a image using Steganography techniques and also decrypts the same and displays it",
        giturl:"https://github.com/Mastermind730/Steganography"
    }
];


const ProjectSection = () => {
  return (
    <section id="projects">

        <h1 className='text-center m-8 lg:text-7xl md:text-5xl sm:text-3xl '>My Projects</h1>
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
    {Projects.map((item, id) => (
    <ProjectCard
        key={id}  // Don't forget to add a unique key for each item in the array
        title={item.title}
        description={item.description}
        gitUrl={item.giturl}
    />
))}

    </div>
    </section>
    
  )
}

export default ProjectSection