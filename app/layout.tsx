import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="font-lato">
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
	)
}
