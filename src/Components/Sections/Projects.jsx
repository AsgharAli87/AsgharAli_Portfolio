import React from 'react'
import { RevealOnScroll } from '../RevealOnScroll'

const Projects = () => {
  return (
    <section id='projects'
    className='min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black'
    >
      <RevealOnScroll>
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center' >
          Featured Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6' >

          <div className='p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
            <h3  className='text-xl font-bold mb-2'>Weather App</h3>
            <p className='text-gray-400 mb-4'>Scalable Weather App with realtime Weather monitring.</p>
            <div className="flex flex-wrap gap-2">
              {["Flutter","Dart", "APIs", "Open Weather"].map((tech,key) => (
              <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                    {tech}
              </span>
            ))}
            </div>
            <div className='flex justify-between items-center'>
                  <a href="https://github.com/AsgharAli87/Weather_App.git" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                    {" "}
                    View Project →
                     {" "}
                  </a>
                </div>
          </div>
          <div className='p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
            <h3  className='text-xl font-bold mb-2'>Travel Landing Page</h3>
            <p className='text-gray-400 mb-4'>Designed and developed a responsive travel booking landing page with a clean layout and user-friendly interface..</p>
            <div className="flex flex-wrap gap-2">
              {["HTML","CSS"].map((tech,key) => (
              <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                    {tech}
              </span>
            ))}
            </div>
            <div className='flex justify-between items-center'>
                  <a href="https://github.com/AsgharAli87/KarachiTraveler.git" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                    {" "}
                    View Project →
                     {" "}
                  </a>
                </div>
          </div>
          <div className='p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
            <h3  className='text-xl font-bold mb-2'>Doctor Appointment</h3>
            <p className='text-gray-400 mb-4'>Built a doctor appointment booking interface with easy scheduling and responsive design for smooth user experience.</p>
            <div className="flex flex-wrap gap-2">
              {["React + Vite", "TailwindCss"].map((tech,key) => (
              <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                    {tech}
              </span>
            ))}
            </div>
            <div className='flex justify-between items-center'>
                  <a href="https://github.com/AsgharAli87/DoctorAppointment.git" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                    {" "}
                    View Project →
                     {" "}
                  </a>
                </div>
          </div>
          <div className='p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
            <h3  className='text-xl font-bold mb-2'>Travel Landng Page</h3>
            <p className='text-gray-400 mb-4'>Explore the world's best destinations, enjoy unbeatable prices, and book your perfect getaway instantly.</p>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript"].map((tech,key) => (
              <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                    {tech}
              </span>
            ))}
            </div>
            <div className='flex justify-between items-center'>
                  <a href="https://github.com/AsgharAli87/Travel" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                    {" "}
                    View Project →
                     {" "}
                  </a>
                </div>
          </div>

        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}

export default Projects
