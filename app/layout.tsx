import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { SessionProvider } from 'next-auth/react'
import './globals.css'
import { auth } from '@/lib/auth'

export const metadata: Metadata = {
	title: 'Credence',
	description:
		'Empowering engineers with a complete picture of their coding journey, bridging the gap between competitive programming and software development.',
	icons: {
		icon: [
			{
				url: '/icon-light.png',
				href: '/icon-light.png',
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: '/icon-dark.png',
				href: '/icon-dark.png',
			},
		],
	},
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await auth()

	return (
		<SessionProvider session={session}>
			<html lang="en" suppressHydrationWarning>
				<body className="font-satoshi flex min-h-screen items-center justify-center">
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</SessionProvider>
	)
}
