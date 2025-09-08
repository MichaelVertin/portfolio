'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			{/* Top Row: Image (1/3) + Name/Title (2/3) */}
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
				{/* Profile Image (1/3 width, centered vertically + horizontally) */}
				<div className="flex justify-center items-center">
					<Image
						src="/portrait.jpg"
						alt="Profile Picture"
						width={160}
						height={160}
						className="rounded-full border-4 border-gray-50 shadow-lg"
					/>
				</div>

				{/* Name/Title (2/3 width, centered vertically + horizontally) */}
				<div className="sm:col-span-2 flex flex-col justify-center items-center text-center">
					<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
						Michael Vertin
					</h1>
					<p className="text-lg sm:text-xl text-gray-600 mb-4">
						Software Engineer
					</p>
				</div>
			</div>

			{/* Summary (Full width, centered) */}
			<div className="mt-6 sm:mt-8 text-center">
				<p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
					I am a software engineer with a foundation in computer science and
					mathematics, focused on building efficient and reliable systems. I
					enjoy applying mathematical concepts such as probability, algorithms,
					and data structures to design solutions that are theoretically
					sound and practically effective. In several projects and competitions,
					I leverage concepts like probability, number theory, and time
					complexity to create efficient solutions using analytical reasoning
					to go beyond standard approaches.
				</p>
			</div>
		</section>
	);
}
