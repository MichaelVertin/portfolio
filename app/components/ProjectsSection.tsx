import Image from 'next/image';

const projectData = {
	"SCA Image Search (Cline Library)": {
		imageURL: "/project1.png",
		projectDesc: "Web-based AI image search application developed to search through images Northern Arizona University's Special Collection and Archives. Uses feature extaaction and inner product similarity to compare 100,000+ visual documents. Deployed containerized backend and frontend services via Docker Compose and AWS EC2.",
		projectLink: "https://insight.library.nau.edu/",
	},
	"Robot Invasion": {
		imageURL: "/project2.png",
		projectDesc: "Real-time tower defense game with dynamic wave difficuly. Each turret has unique abilities, damaging the machines before they can invade the base.",
		projectLink: "https://github.com/MichaelVertin/TowerDefense",
	},
	"Optimized Word Search": {
		imageURL: "/project3.png",
		projectDesc: "Word search project developed a class competition. Increased performance by 550%-1300% using: controlled traversal order to support pruning duplicate entries, probabilistic analysis to safely skip expensive costs, and targetted optimization for setups with specific configurations.",
		projectLink: "https://github.com/MichaelVertin/High-Performance-Boggle-Search",
	},
	"Competitive Halma AI": {
		imageURL: "/project4.png",
		projectDesc: "Automated Halma game player developed for a class competition. Implemented self-adjusting depth control to maximize the alloted time. Improved alpha-beta algorithm performance by shallow-sorting recursion order to decrease pruning conditions faster.",
		projectLink: "https://github.com/MichaelVertin/Halma-Competition",
	}
};

export default function ProjectsSection() {
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
					Featured Projects
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{Object.entries(projectData).map(([projectName, data]) => (
						<div
							key={projectName}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
						>
							<div className="aspect-video bg-gray-100 relative">
								<Image
									src={data.imageURL}
									alt={projectName}
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
									{projectName}
								</h3>
								<p className="text-sm sm:text-base text-gray-600 mb-4">
									{data.projectDesc}
								</p>
								<div className="flex gap-2">
									<a
										href={data.projectLink}
										target="_blank"
										className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
									>
										View Project →
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
