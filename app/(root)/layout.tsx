import NavBar from '@/components/generic/navbar'

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex min-h-screen flex-col">
			<NavBar />
			<main className="flex-1">{children}</main>
		</div>
	)
}
