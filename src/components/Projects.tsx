import React from "react";
import { FaGlobe, FaGithub } from "react-icons/fa";

const allProjects = [
	{
		name: "Modern Portfolio",
		desc: "A pixel-perfect, animated portfolio site built with React, Shadcn UI, and Tailwind.",
		demo: "https://janesmith.dev/portfolio",
		github: "https://github.com/janedoe/portfolio",
		img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=600&q=80&facepad=3",
		tech: ["React", "TypeScript", "Vite", "Tailwind", "shadcn"],
		type: "frontend",
	},
	{
		name: "Project Tracker",
		desc: "A fullstack Kanban board app leveraging Node.js, Express, and PostgreSQL.",
		demo: "https://janesmith.dev/project-tracker",
		github: "https://github.com/janedoe/project-tracker",
		img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=facearea&w=600&q=80&facepad=3",
		tech: ["React", "Node.js", "PostgreSQL"],
		type: "fullstack",
	},
	{
		name: "E-commerce Platform",
		desc: "Headless commerce app with advanced dashboard and real-time inventory.",
		demo: "https://janesmith.dev/ecommerce",
		github: "https://github.com/janedoe/ecommerce",
		img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=600&q=80&facepad=3",
		tech: ["Next.js", "MongoDB", "Tailwind"],
		type: "fullstack",
	},
	{
		name: "API Service",
		desc: "High performance REST API for analytics dashboards, written in Node.js.",
		demo: "https://api.om-butani.dev",
		github: "https://github.com/ombutani/api-service",
		img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=facearea&w=600&q=80&facepad=3",
		tech: ["Node.js", "Express", "TypeScript"],
		type: "backend",
	},
	{
		name: "Mobile App UI Design",
		desc: "Award-winning UI design for a fintech mobile app.",
		demo: "https://dribbble.com/ombutani",
		github: "https://weather.om-butani.dev",
		img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80&facepad=3",
		tech: ["Figma", "Sketch"],
		type: "designs",
	},
	{
		name: "Admin Dashboard",
		desc: "Responsive React dashboard with charting and data visualization.",
		demo: "https://admindash.om-butani.dev",
		github: "https://github.com/ombutani/admin-dashboard",
		img: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=facearea&w=600&q=80&facepad=3",
		tech: ["React", "Recharts", "Tailwind"],
		type: "frontend",
	},
	{
		name: "ML Model API",
		desc: "RESTful API serving trained ML models for real world applications.",
		demo: "https://behance.net/ombutani",
		github: "https://github.com/ombutani/ml-model-api",
		img: "https://images.unsplash.com/photo-1556740714-a8395b3bf30e?auto=format&fit=facearea&w=600&q=80&facepad=3",
		tech: ["Python", "Flask", "Docker"],
		type: "backend",
	},
	{
		name: "Web Landing Page Design",
		desc: "Design concept for a product landing page.",
		demo: "https://behance.net/ombutani",
		github: "https://github.com/ombutani/ml-model-api",
		img: "https://images.unsplash.com/photo-1465101178521-c1a9136a97b8?auto=format&fit=facearea&w=600&q=80&facepad=3",
		tech: ["Figma", "Illustrator"],
		type: "designs",
	},
	{
		name: "Weather App",
		desc: "Interactive weather application with real-time updates and animations.",
		demo: "https://weather.om-butani.dev",
		github: "https://github.com/ombutani/weather-app",
		img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=facearea&w=600&q=80&facepad=3",
		tech: ["React", "Weather API", "CSS3"],
		type: "frontend",
	},
	{
		name: "Authentication Service",
		desc: "Secure authentication microservice with JWT and OAuth2 support.",
		demo: "https://auth.om-butani.dev",
		github: "https://github.com/ombutani/auth-service",
		img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=facearea&w=600&q=80&facepad=3",
		tech: ["Node.js", "JWT", "MongoDB"],
		type: "backend",
	},
	{
		name: "Social Network App",
		desc: "Full-featured social networking platform with real-time chat.",
		demo: "https://social.om-butani.dev",
		github: "https://github.com/ombutani/social-network",
		img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=facearea&w=600&q=80&facepad=3",
		tech: ["Next.js", "Socket.io", "Redis"],
		type: "fullstack",
	},
	{
		name: "Travel App Design",
		desc: "Modern UI/UX design for a travel booking application.",
		demo: "https://dribbble.com/ombutani/travel-app",
		github: "https://weather.om-butani.dev",
		img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=facearea&w=600&q=80&facepad=3",
		tech: ["Figma", "Adobe XD"],
		type: "designs",
	}
];

const types = [
	{ key: "frontend", label: "Frontend Projects" },
	{ key: "backend", label: "Backend Projects" },
	{ key: "designs", label: "Designs" },
	{ key: "fullstack", label: "Fullstack Projects" },
];

const Projects = () => {
	const [activeTab, setActiveTab] = React.useState(types[0].key);

	return (
		<section
			id="projects"
			className="pb-20  overflow-x-hidden bg-black text-center font-[santoshi]  "
		>
			<div className="container mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-bold mb-10 text-center font-[santoshi]  tracking-tight text-white animate-fade-in">
					My<span className="text-primary ml-2"> Projects</span>
				</h2>=
				<div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-10">
					{types.map((t) => (
						<button
							key={t.key}
							onClick={() => setActiveTab(t.key)}
							className={`relative font-semibold font-[santoshi] px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-md transition-all duration-300 mb-4 sm:mb-10 bg-background/90 text-primary group overflow-hidden ${
								activeTab === t.key ? 'bg-primary text-zinc-950 shadow-lg' : ''
							}`}
							style={{ minWidth: '140px', maxWidth: '180px', width: 'calc(50% - 0.5rem)' }}
						>
							<span className="z-10 relative transition-colors duration-300">{t.label}</span>
							<span
								className={`absolute left-0 top-0 h-full w-full bg-primary/20 rounded-full transition-all duration-500 ease-in-out pointer-events-none ${
									activeTab === t.key ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
								}`}
							/>
							{activeTab === t.key && (
								<span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-2/3 h-1 bg-white/80 opacity-60 transition-all duration-500" />
							)}
						</button>
					))}
				</div>

				<div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						{allProjects
							.filter((p) => p.type === activeTab)
							.map((p, idx) => (
								<div
									key={p.name}
									style={{ animationDelay: `${idx * 90}ms` }}
									className="card-gradient  shadflex flex-col hover:scale-[1.03] transition-transform duration-300 overflow-hidden border border-white/10 bg-background/70 rounded-2xl group animate-fade-in-up opacity-0 animate-fade-in-up-forwards"
								>
									<div className="relative">
										<img
											src={p.img}
											alt={p.name}
											className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
										/>
										<div className="absolute top-2 right-2 flex gap-2 z-10">
											{p.demo && (
												<a
													href={p.demo}
													target="_blank"
													rel="noopener"
													className="bg-white/90 hover:bg-primary/90 text-black hover:text-white rounded-full p-2 shadow transition-colors"
													title="Live Demo"
												>
													<FaGlobe className="w-5 h-5" />
												</a>
											)}
											{p.github && (
												<a
													href={p.github}
													target="_blank"
													rel="noopener"
													className="bg-white/90 hover:bg-primary/90 text-zinc-950 hover:text-white rounded-full p-2 shadow transition-colors"
													title="GitHub"
												>
													<FaGithub className="w-5 h-5" />
												</a>
											)}
										</div>
									</div>
									<div className="p-4 sm:p-6 flex flex-col flex-grow">
										<h3 className="text-lg sm:text-xl font-bold font-[santoshi] text-primary mb-2 group-hover:underline transition-colors">
											{p.name}
										</h3>
										<p className="mb-4 text-gray-300 min-h-[80px] sm:min-h-[56px]">
											{p.desc}
										</p>
										<div className="flex flex-wrap gap-2 mb-4">
											{p.tech.map((t) => (
												<span
													className="bg-primary/10 font-[santoshi] text-primary text-xs px-2 py-1 rounded-md"
													key={t}
												>
													{t}
												</span>
											))}
										</div>
									</div>
								</div>
							))}
						{allProjects.filter((p) => p.type === activeTab).length === 0 && (
							<div className="text-lg text-gray-500 text-center col-span-1 sm:col-span-2 lg:col-span-3 py-10 animate-fade-in-up opacity-0 animate-fade-in-up-forwards">
								No projects in this category yet.
							</div>
						)}
					</div>
				</div>

			</div>
		</section>
	);
};

export default Projects;

