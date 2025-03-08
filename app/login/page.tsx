import { LoginForm } from '@/components/forms/login-form'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
	return (
		<main className="grid lg:grid-cols-2">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex justify-center gap-2 md:justify-start">
					<Link
						href="/"
						className="font-playfair-display flex items-center gap-2 font-medium"
					>
						<div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
							<Image src="/icon-dark.png" alt="Icon" width={24} height={24} />
						</div>
						Credence
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs">
						<LoginForm />
					</div>
				</div>
			</div>
			<div className="bg-muted relative hidden lg:block">
				<Image
					src="/placeholder.svg"
					alt="Image"
					width={1000}
					height={1000}
					className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
				/>
			</div>
		</main>
	)
}
