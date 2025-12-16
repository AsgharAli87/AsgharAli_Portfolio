import { RevealOnScroll } from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-950 to-black
"
    >
      
      <RevealOnScroll>
        <div className="text-center z-10 px-4 ">
          <h1 className="text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-400 leading-right bg-clip-text text-transparent">
            Hi,I’m Asghar Ali
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mxauto">
            I’m a Front-End developer who loves crafting clean, scalable Mobile
            and Web Application. My goal is to build solutions that
            offer both exceptional performance and a delightful user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition  relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Project
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 py-3 px-6 rounded font-medium hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10 "
            >
              Contact Me
            </a>
          </div> 
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
