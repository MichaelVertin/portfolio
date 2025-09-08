export default function SkillsSection() {
	const skills = [
		'Python', 'C', 'C++', 'C#', 'Java', 
		'Javascript', 'Typescript', 'HTML', 'CSS', 'Flask', 
		'React', 'Node.js', 'Angular', 'TCP', 'UDP', 
		'SQL', 'APIs', 'Git', 'Docker', 'AWS EC2', 
		'Linux', 'OOP', 'Debugging', 'Optimization', 'Critical Thinking', 'Teamwork', 
		'Movitated', 'focused'
	];

	// Put skills into a 6-row grid
	return (
		<section className="bg-gray-50 py-12 sm:py-20 max-w-2xl">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
					Skills & Technologies
				</h2>
		
				{/* Equal-width columns, left-aligned text */}
				<div className="grid grid-cols-5 gap-x-8 gap-y-4 text-sm sm:text-base text-gray-700">
					{skills.map((skill) => (
						<div key={skill} className="text-left">
							{skill}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
