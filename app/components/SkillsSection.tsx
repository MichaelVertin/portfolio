export default function SkillsSection() {
	const skills = [
		'Software Engineer', 'Python', 'C / C++ / C#', 'Java', 'Javascript / Typescript',
		'HTML / CSS', 'Flask', 'React', 'Node.js', 'Angular',
		'TCP / UDP', 'SQL', 'APIs', 'Git', 'Docker',
		'AWS EC2', 'Linux', 'Debugging', 'OOP', 'Optimization',
		'Critical Thinking'
	];

	// Split into 6 roughly even rows
	const rows = [];
	const perRow = Math.ceil(skills.length / 6);
	for (let i = 0; i < skills.length; i += perRow) {
		rows.push(skills.slice(i, i + perRow));
	}

	return (
		<section className="bg-gray-50 py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
					Skills & Technologies
				</h2>
				<div className="space-y-3 sm:space-y-4">
					{rows.map((row, idx) => (
						<div key={idx} className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 text-sm sm:text-base text-gray-700">
							{row.map((skill) => (
								<span key={skill}>{skill}</span>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
