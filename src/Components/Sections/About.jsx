import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const About = () => {
  const FrontendSkills = [
    "Flutter",
    "Dart",
    "Mobile App Dev",
    "Android Dev",
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCss",
    "React JS",
  ];
  const BackendSkills = ["SQL","Firebase","MongoDB"];
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black
">
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            I'm a passionate developer with expertise in building scalable mobile and web applications. I thrive on creating innovative solutions that are both user-friendly and performance-driven. With a strong focus on clean architecture and modern technologies, I aim to turn ideas into impactful digital experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {FrontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {BackendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong> B.S. in Software Engineering </strong> - Sindh
                Madressatul Islam University (SMIU) (2022-2026)
              </li>
              <li>
                Relevant Coursework: Data Structures, Web Development, Mobile App Development...
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className='lassName="font-semibold'>
                   While I haven’t had professional experience yet, I’ve been consistently improving my skills by building small projects
                </h4>
                <p>
                 * Weather App By using OpenWeather API
                </p>
              </div>
              <div>
                <h4 className='lassName="font-semibold'>
                  Landing Pages
                </h4>
                <p>
                 By usinh HTML, CSS, JavaScript, Tailwind css
                </p>
              </div>
              <div>
                <h4 className='lassName="font-semibold'>
                  React + Vite
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
