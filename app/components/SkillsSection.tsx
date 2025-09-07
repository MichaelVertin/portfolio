export default function SkillsSection() {
	// const skills = ['Software Engineer', 'Python', 'C / C++ / C#', 'Java', 'Javascript', 'Typescript', 'HTML / CSS', 'Flask', 'React', 'Node.js', 'Angular', 'JUnit', 'Javalin', 'TCP / UDP', 'SQL', 'REST API', 'Git', 'Docker', 'AWS EC2', 'OOP', 'Linux', 'Debugging', 'Optimization', 'Code Architecture', 'Critical Thinking'];
	const skills = ['Software Engineer', 'Python', 'C / C++ / C#', 'Java', 'Javascript / Typescript', 'HTML / CSS', 'Flask', 'React', 'Node.js', 'Angular', 'TCP / UDP', 'SQL', 'APIs', 'Git', 'Docker', 'AWS EC2', 'Linux', 'Debugging', 'OOP', 'Optimization', 'Critical Thinking'];
	return (
		<section className="bg-gray-50 py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Skills & Technologies</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
					{skills.map((skill) => (
						<div key={skill} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow text-sm sm:text-base">
							{skill}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
