import Image from 'next/image';

const projectData = {
	"SCA Image Search (Cline Library)": {
		imageURL: "/project1.png",
		projectDesc: "Desc SCA Image Search",
		projectLink: "https://insight.library.nau.edu/",
	},
	"Robot Invasion": {
		imageURL: "/project2.png",
		projectDesc: "Desc Robot Invasion",
		projectLink: "https://github.com/MichaelVertin/TowerDefense",
	},
	"Optimized Word Search": {
		imageURL: "/project3.png",
		projectDesc: "Desc Word Search",
		projectLink: "https://github.com/MichaelVertin/High-Performance-Boggle-Search",
	},
	"Competitive Halma AI": {
		imageURL: "/project4.png",
		projectDesc: "Desc Halma",
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
