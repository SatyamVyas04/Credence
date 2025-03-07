import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex h-screen w-screen flex-col items-center justify-center">
			<Image
				src="/logo/logo-light.png"
				width={200}
				height={200}
				alt="Credence"
				className="rounded-xl"
			/>
			<h1>Credence</h1>
		</main>
	)
}
