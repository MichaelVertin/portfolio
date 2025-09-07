'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
				{/* Profile Image */}
				<Image
					src="/portrait.jpg"
					alt="Profile Picture"
					width={120}
					height={120}
					className="rounded-full border-4 border-gray-50 shadow-lg"
				/>

				{/* Text Content */}
				<div className="text-center sm:text-left">
					<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
						Michael Vertin
					</h1>
					<p className="text-lg sm:text-xl text-gray-600 mb-4">
						Software Engineer
					</p>
				</div>
				<p className="text-gray-600 max-w-2xl text-sm sm:text-base">
					I am a software engineer with a foundation in computer science and
					mathematics, focused on building efficient and reliable systems. I
					enjoy applying mathematical concepts such as probability,
					algorithms, and data structures to design solutions that are both
					theoretically sound and practically effective. In several projects
					and competitions, I leveraged concepts like probability, number
					theory, and time complexity to create efficient solutions, using
					analytical reasoning to go beyond standard approaches.
				</p>
			</div>
		</section>
	);
}
