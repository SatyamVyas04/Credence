'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getSession } from 'next-auth/react'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { ModeToggle } from '../ui/mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { logout } from '@/actions/auth'

// Define a type for the user that matches what comes from NextAuth session
interface UserProfile {
	id?: string
	name?: string | null
	email?: string | null
	image?: string | null
}

export default function NavBar() {
	const [user, setUser] = useState<UserProfile | null>(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		const fetchUser = async () => {
			const session = await getSession()
			setUser((session?.user as UserProfile) || null)
		}
		fetchUser()
	}, [])

	// Prevent hydration mismatch
	if (!mounted) return null

	return (
		<header className="bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur">
			<div className="mx-auto flex items-center justify-between p-4 xl:px-8">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/logo/logo-dark.png"
						height={80}
						width={140}
						alt="Credence"
						className="w-8 invert lg:w-12 dark:invert-0"
						priority
					/>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex md:items-center md:gap-4">
					<NavigationMenu>
						<NavigationMenuList className="flex gap-1">
							<NavigationMenuItem>
								<Link href="/home" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Home
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/development" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Development
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/dsa-cp" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										DSA / CP
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>

					<div className="flex items-center gap-2">
						<ModeToggle />

						{user ? (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" size="icon" className="rounded-full">
										<Avatar className="h-8 w-8 border">
											<AvatarImage
												src={user.image || undefined}
												alt={user.name || 'User'}
											/>
											<AvatarFallback>
												{user.name?.charAt(0) || 'U'}
											</AvatarFallback>
										</Avatar>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end" className="w-56">
									<div className="flex flex-col space-y-1 p-2">
										<p className="text-sm font-medium">{user.name || 'User'}</p>
										<p className="text-muted-foreground truncate text-xs">
											{user.email || ''}
										</p>
									</div>
									<DropdownMenuSeparator />
									<DropdownMenuItem asChild>
										<Link href="/profile" className="cursor-pointer">
											Profile
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem asChild>
										<Link href="/embeds" className="cursor-pointer">
											Embeds
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem asChild>
										<Link href="/share" className="cursor-pointer">
											Share
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem asChild>
										<Link href="/settings" className="cursor-pointer">
											Settings
										</Link>
									</DropdownMenuItem>
									<DropdownMenuSeparator />
									<Button
										onClick={() => {
											logout()
										}}
										variant="destructive"
										className="w-full"
									>
										Log out
									</Button>
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							<Button size="sm" asChild>
								<Link href="/api/auth/signin">Sign in</Link>
							</Button>
						)}
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className="flex items-center gap-2 md:hidden">
					<ModeToggle />
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline" size="icon" className="ml-1">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-64 sm:max-w-sm">
							<SheetHeader>
								<SheetTitle>
									<Image
										src="/logo/logo-dark.png"
										height={60}
										width={120}
										alt="Credence"
										className="mx-auto mt-8 w-32 invert dark:invert-0"
									/>
								</SheetTitle>
							</SheetHeader>
							<div className="flex flex-col gap-2 px-2 py-2">
								{user && (
									<div className="flex items-center gap-3 rounded-md border p-3">
										<Avatar className="h-10 w-10">
											<AvatarImage
												src={user.image || undefined}
												alt={user.name || 'User'}
											/>
											<AvatarFallback>
												{user.name?.charAt(0) || 'U'}
											</AvatarFallback>
										</Avatar>
										<div className="flex flex-col">
											<p className="text-sm font-medium">
												{user.name || 'User'}
											</p>
											<p className="text-muted-foreground truncate text-xs">
												{user.email || ''}
											</p>
										</div>
									</div>
								)}

								<Link href="/home">
									<Button variant="ghost" className="w-full justify-start">
										Home
									</Button>
								</Link>
								<Link href="/development">
									<Button variant="ghost" className="w-full justify-start">
										Development
									</Button>
								</Link>
								<Link href="/dsa-cp">
									<Button variant="ghost" className="w-full justify-start">
										DSA / CP
									</Button>
								</Link>

								{user ? (
									<>
										<div className="bg-border my-2 h-px" />
										<Link href="/profile">
											<Button variant="ghost" className="w-full justify-start">
												Profile
											</Button>
										</Link>
										<Link href="/embeds">
											<Button variant="ghost" className="w-full justify-start">
												Embeds
											</Button>
										</Link>
										<Link href="/share">
											<Button variant="ghost" className="w-full justify-start">
												Share
											</Button>
										</Link>
										<Link href="/settings">
											<Button variant="ghost" className="w-full justify-start">
												Settings
											</Button>
										</Link>
										<div className="bg-border my-2 h-px" />
										<Button
											variant="destructive"
											onClick={() => {
												logout()
											}}
										>
											Log out
										</Button>
									</>
								) : (
									<Link href="/api/auth/signin">
										<Button className="w-full">Sign in</Button>
									</Link>
								)}
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}
