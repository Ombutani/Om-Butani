import SocialLinks from "./SocialLinks";
import { Download } from "lucide-react";
import image from "../../public/image/om.jpg"
import pdf from "../../public/Om_resume.pdf";
const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen w-full  overflow-x-hidden pt-10">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <div className="w-full md:w-3/5 flex flex-col items-center md:items-start animate-fade-in-up">
            <div className="relative mb-8">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-violet-600 rounded-full blur opacity-20"></div>
              <img
                src={image}
                alt="Full Stack Developer"
                className="relative rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-primary/20"
              />
            </div>

            <h1 className="text-4xl md:text-6xl  font-[santoshi] mb-6 text-white leading-tight text-center md:text-left font-medium">
              Hi, I'm <span className="text-primary bg-clip-text  bg-gradient-to-r from-primary to-violet-600 text-transparent font-extrabold">Om Butani,</span>
              <br />
              <span className="font-[santoshi] text-3xl md:text-5xl text-gray-200 font-light">Full Stack Web Developer</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-3 max-w-2xl text-center font-medium md:text-left leading-relaxed">
              Passionate about building modern, performant, and delightful digital products for the web.
            </p>
  <p className="text-lg md:text-xl text-gray-300 mb-4 font-medium font-[santoshi] leading-relaxed text-center md:text-left">
      I am a passionate <span className="text-violet-400">Full Stack Web Developer</span> dedicated to building modern, performant, and delightful digital products.
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-4 font-[santoshi] text-center md:text-left">
            I specialize in <span className="text-primary">React</span>, <span className="text-violet-400">Angular</span>, and <span className="text-cyan-400">Node.js</span>. My journey has taken me from internships to full stack roles, collaborating with teams to deliver high-quality web experiences.
          </p>
          <p className="text-base md:text-lg text-gray-400 font-[santoshi] text-center md:text-left mb-8">
            Beyond coding, I love mentoring, optimizing performance, and exploring new technologies. Let's connect and create something amazing together!
          </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
              <a
                href="#projects"
                className="bg-gradient-to-r from-primary to-violet-600 text-zinc-950 px-6 py-3 rounded-lg  text-lg
                hover:translate-y-[-2px] transition-all duration-300 shadow-md shadow-primary/25 text-center font-bold font-[santoshi]"
              >
                My Projects
              </a>
              <a
                href={pdf}
                className="bg-transparent border-2 border-primary/50 text-primary px-6 py-3 rounded-lg hover:bg-primary/5 
                transition-all duration-300 flex items-center justify-center gap-3 text-md font-semibold font-[santoshi]"
                download
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Section */}
            <div className="md:w-2/5 flex justify-end mt-12 md:mt-0 animate-fade-in-up">
            <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-gray-800">
              <SocialLinks direction={window.innerWidth < 768 ? "row" : "col"} />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
