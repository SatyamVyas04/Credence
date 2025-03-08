'use client'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
	IconBrandGithub,
	IconBrandGoogle,
	IconBrandTwitter,
	IconBrandFacebook,
} from '@tabler/icons-react'
import { login } from '@/actions/auth'

export function LoginForm({
	className,
	...props
}: React.ComponentProps<'form'>) {
	return (
		<form className={cn('flex flex-col gap-6', className)} {...props}>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-2xl font-bold">Login to your account</h1>
				<p className="text-muted-foreground text-sm text-balance">
					Choose a provider to login to your account
				</p>
			</div>
			<div className="grid gap-6">
				<Button
					variant="outline"
					className="w-full"
					onClick={() => {
						login('github')
					}}
				>
					<IconBrandGithub className="mr-2 h-5 w-5" />
					Login with GitHub
				</Button>
				<Button
					variant="outline"
					className="w-full"
					onClick={() => {
						login('google')
					}}
				>
					<IconBrandGoogle className="mr-2 h-5 w-5" />
					Login with Google
				</Button>
				<Button
					variant="outline"
					className="w-full"
					onClick={() => {
						login('twitter')
					}}
				>
					<IconBrandTwitter className="mr-2 h-5 w-5" />
					Login with Twitter
				</Button>
				<Button
					variant="outline"
					className="w-full"
					onClick={() => {
						login('facebook')
					}}
				>
					<IconBrandFacebook className="mr-2 h-5 w-5" />
					Login with Facebook
				</Button>
			</div>
		</form>
	)
}
