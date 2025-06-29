const educationList = [
	{
		title: "SSC 10th Board",
		school: "Noble public school",
		period: "2017 - 2018",
		list: ["Persantage : 72%"],
	},
	{
		title: "HSC 12th Board",
		school: "Ashadeep IIT",
		period: "2018 - 2020",
		list: ["Persantage : 58%"],
	},
	{
		degree: "B.tech in Computer Science",
		school: "Atmiya University",
		period: "2020 - 2024",
		description: "Bachelor's Degree in Computer Science",
		list: [
			"Data Structures",
			"Algorithms",
			"Full stack Web Development",
		],
	},
];

const Education = () => (
	<section
		id="education"
		className="px-4 py-16 md:py-20 bg-gradient-to-tr overflow-hidden from-[#00000] w-full font-[santoshi] to-[#000000]"
	>
		<div className="container mx-auto max-w-6xl">
			<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[santoshi] mb-8 md:mb-12 text-primary text-center animate-fade-in-up">
				Education
			</h2>
			<div className="flex flex-col w-full gap-6 md:gap-8 animate-fade-in-up">
				{educationList.map((edu, i) => (
					<div 
						key={i} 
						className="flex flex-col md:flex-row gap-4 md:gap-6 w-full bg-background/80 border border-white/10 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
					>
						<div className="md:w-1/4 w-full">
							<span className="font-semibold font-[santoshi] text-primary text-base md:text-lg block text-left md:text-left">
								{edu.period}
							</span>
						</div>
						<div className="md:w-3/4 w-full space-y-3">
							<h3 className="text-lg md:text-xl font-bold font-[santoshi] text-white">
								{edu.degree || edu.title}
							</h3>
							{edu.description && (
								<p className="text-gray-500 text-sm md:text-base">
									{edu.description}
								</p>
							)}
							<span className="text-gray-400 font-bold text-base md:text-lg block">
								@ {edu.school}
							</span>
							<ul className="list-disc list-inside space-y-1">
								{edu.list.map((item, index) => (
									<li key={index} className="text-gray-400 text-sm md:text-base">
										{item}
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

export default Education;
