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
		className="pb-20 bg-gradient-to-tr  overflow-x-hidden from-[#00000] w-full font-[santoshi] to-[#000000] "
	>
		<div className="container mx-auto max-w-full ">
			<h2 className="text-4xl md:text-5xl font-bold font-[santoshi] mb-10 text-primary  text-center animate-fade-in-up">
				Education
			</h2>
			<div className="flex flex-col w-full gap-8 animate-fade-in-up">
				{educationList.map((edu, i) => (
					<div key={i} className="flex flex-col md:flex-row justify-between items-stretch w-full bg-background/80 border border-white/10 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-[1.01]">
						<div className="md:w-1/4 w-full font-semibold font-[santoshi] text-primary text-lg text-left flex items-center justify-center md:justify-start  md:text-left mb-4 md:mb-0">
							{edu.period}
						</div>
						<div className="md:w-3/4 w-full flex flex-col justify-center">
							<h3 className="text-xl font-bold font-[santoshi] mb-1 . text-white">
								{edu.degree || edu.title}
							</h3>
							{edu.description && (
								<p className="text-gray-500 mb-3">
									{edu.description}
								</p>
							)}
							<span className="text-gray-400 font-bold text-xl block">
								@ {edu.school}
							</span>
							<ul className="list-disc list-inside mt-2">
								{edu.list.map((item, index) => (
									<li key={index} className="text-gray-400">
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
