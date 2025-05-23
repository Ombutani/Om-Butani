// Experience data
const experiences = [
    {
        title: "Intern Web Developer",
        company: "DK Infoway",
        period: "Jan-2024 - June-2024",
        achievements: [
            "Worked on a team to develop a web application using React and Node.js",
            "Improved application performance by 40% through code optimization",
            "Mentored junior developers and conducted code reviews"
        ]
    },
    {
        title: "Full Stack Developer",
        company: "Aeybit",
        period: "2025 - Present",
        achievements: [
            "Developed and maintained multiple client websites using Angular",
            "Make a website for a client using Angular and angular material",
            "Collaborated with design team to implement responsive UI/UX"
        ]
    },
];


const ExperienceSection = () => (
   <section className="flex flex-col items-center py-12 sm:py-16 md:py-24 px-4 relative h-full max-w-full font-[santoshi]" id="experience">
    {/* Enhanced background effects - made responsive */}
    <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
      <div className="w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-br from-violet-300/30 via-blue-300/30 to-cyan-200/30 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse absolute left-[-10%] sm:left-[-15%] md:left-[-20%] top-[-5%] sm:top-[-8%] md:top-[-10%]" />
      <div className="w-[150px] sm:w-[200px] md:w-[300px] h-[150px] sm:h-[200px] md:h-[300px] bg-gradient-to-tl from-pink-300/30 via-purple-300/30 to-indigo-200/30 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] animate-pulse absolute right-[-5%] sm:right-[-8%] md:right-[-10%] bottom-[-5%] sm:bottom-[-8%] md:bottom-[-10%]" />
    </div>

    <div className="z-1 relative w-full  sm:max-w-2xl md:max-w-4xl lg:max-w-5xl .">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center font-[santoshi] tracking-tight text-white animate-fade-in">
        My Journey<span className="text-primary ml-2">So Far</span>
      </h2>

      <div className="space-y-8 sm:space-y-10 md:space-y-12 relative animate-fade-in">
        {/* Timeline line - visible only on medium and larger screens */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 to-primary/20 hidden md:block" />

        {experiences.map((experience, index) => (
          <div key={index} className="group  relative md:ml-24 glass-card shadow-glass border border-white/10">
            {/* Timeline dot - visible only on medium and larger screens */}
            <div className="hidden md:block absolute left-[-4.5rem] top-0 w-4 h-4 rounded-full bg-primary transform transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg" />
            
            <div className="rounded-xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-100/50 transform transition-all duration-300 hover:shadow-2xl bg-black">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl sm:text-2xl font-bold font-[santoshi] text-primary">{experience.title}</h3>
                <p className="text-primary font-semibold font-[santoshi] px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                  {experience.period}
                </p>
              </div>
              <p className="text-primary/80 font-medium font-[santoshi] text-base sm:text-lg mb-4">{experience.company}</p>
              <ul className="space-y-2 sm:space-y-3">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span className="text-gray-500 text-sm sm:text-base">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);



export default ExperienceSection;
