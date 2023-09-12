import React from 'react'
import { BsGithub, BsGlobe } from "react-icons/bs";
import Projects from '../data/Projects';

const Project = () => {
  return (
    <section className='py-10 px-4 border-b-2'>
      <div className="text-center flex flex-col gap-4 mb-14">
        <h3 className="uppercase text-sm tracking-wide text-red-600">
          visit my portfolio and keep your feedback
        </h3>
        <h1 className="text-3xl capitalize font-bold">my projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          Projects.map((project) => (
            <div  className="flex flex-col gap-4 bg-slate-100 p-4 rounded-lg group hover:bg-gradient-to-b hover:from-slate-200 dark:bg-slate-700 transition-colors duration-1000 dark:hover:bg-gradient-to-b dark:hover:from-slate-800">
              <div className="w-full h-60 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className='cursor-pointer group-hover:scale-110 object-cover transition-all duration-300'
                />
              </div>
              <div className="flex justify-between items-center ">
                <h2 className='uppercase text-red-500'>{project.name}</h2>
                <div className="inline-flex gap-2">
                  <a href={project.github} className='bg-slate-300 p-2 text-xl rounded-full hover:text-red-600 transition-colors duration-300 dark:bg-slate-600'>
                    <BsGithub />
                  </a>
                  <a href={project.demo} className='bg-slate-300 p-2 text-lg rounded-full hover:text-red-600 transition-colors duration-300 dark:bg-slate-600'>
                    <BsGlobe />
                  </a>
                </div>
              </div>
              <p>{project.description}</p>
            </div>

          ))
        }
      </div>
    </section>
  )
}

export default Project