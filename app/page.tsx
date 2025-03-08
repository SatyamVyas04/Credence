import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center">
			<Image
				src="/logo/logo-light.png"
				width={200}
				height={200}
				alt="Credence"
				className="rounded-xl"
			/>
			<h1 className="mt-4 text-4xl font-bold">Credence</h1>
			<p className="mt-4 max-w-2xl text-center">
				Empowering engineers with a complete picture of their coding journey,
				bridging the gap between competitive programming and software
				development.
			</p>
			<p className="mt-2 max-w-2xl text-center">
				Credence is designed to be the <strong>single source of truth</strong>{' '}
				for engineers looking to track their{' '}
				<strong>
					DSA progress, development contributions, and overall technical growth
				</strong>
				. By integrating data from{' '}
				<strong>multiple coding platforms and GitHub</strong>, it provides
				actionable insights that help users become better programmers and
				software engineers.
			</p>
			<div className="mt-6 flex space-x-4">
				<Link href="/login">
					<Button>Login</Button>
				</Link>
				<Link href="/design">
					<Button variant="secondary">Check our Design</Button>
				</Link>
			</div>
		</main>
	)
}
