import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Michael Vertin - Software Engineer',
	description:
		'I’m a software engineer with experience in computer science and mathematics. My focus is on programming clean, reliable software that connects abstract theory with practical applications. I enjoy applying concepts like graph theory, set theory, and logical reasoning to build efficient systems and accurate representations of real-world processes. ',
	keywords: [
		'Software Engineer',
		'Python',
		'C / C++ / C#',
		'Java',
		'Javascript',
		'Typescript',
		'HTML / CSS',
		'Flask',
		'React',
		'Node.js',
		'Angular',
		'JUnit',
		'Javalin',
		'TCP / UDP',
		'SQL',
		'REST API',
		'Git',
		'Docker',
		'AWS EC2',
		'OOP',
		'Linux',
		'Debugging',
		'Optimization',
		'Code Architecture',
		'Critical Thinking',
	],
	authors: [{ name: 'Michael Vertin' }],
	creator: 'Michael Vertin',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
