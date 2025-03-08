'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import {
	H1,
	H2,
	H3,
	H4,
	P,
	Lead,
	Large,
	Small,
	Muted,
	InlineCode,
	MultilineCode,
	List,
	Quote,
} from '@/components/ui/typography'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CopyIcon, CheckIcon } from 'lucide-react'

const colorCategories = [
	{ name: 'Primary', vars: ['--primary', '--primary-foreground'] },
	{ name: 'Secondary', vars: ['--secondary', '--secondary-foreground'] },
	{ name: 'Background', vars: ['--background', '--foreground'] },
	{ name: 'Card', vars: ['--card', '--card-foreground'] },
	{ name: 'Popover', vars: ['--popover', '--popover-foreground'] },
	{ name: 'Muted', vars: ['--muted', '--muted-foreground'] },
	{ name: 'Accent', vars: ['--accent', '--accent-foreground'] },
	{ name: 'Destructive', vars: ['--destructive', '--destructive-foreground'] },
	{ name: 'Border/Input/Ring', vars: ['--border', '--input', '--ring'] },
	{
		name: 'Chart Colors',
		vars: [
			'--chart-1',
			'--chart-2',
			'--chart-3',
			'--chart-4',
			'--chart-5',
			'--chart-6',
			'--chart-7',
			'--chart-8',
			'--chart-9',
			'--chart-10',
			'--chart-11',
		],
	},
]

const typographyElements = [
	{ Component: H1, label: 'Heading 1', sample: 'Welcome to Credence' },
	{ Component: H2, label: 'Heading 2', sample: 'Subheading Example' },
	{ Component: H3, label: 'Heading 3', sample: 'Section Title' },
	{ Component: H4, label: 'Heading 4', sample: 'Minor Heading' },
	{
		Component: Lead,
		label: 'Lead',
		sample:
			'This is a lead paragraph that introduces a section with larger, muted text.',
	},
	{
		Component: P,
		label: 'Paragraph',
		sample:
			'This is a standard paragraph to test text styling and spacing. It has proper leading and margin-top when not the first child.',
	},
	{ Component: Large, label: 'Large', sample: 'Large emphasized text' },
	{ Component: Small, label: 'Small', sample: 'Small text with medium weight' },
	{
		Component: Muted,
		label: 'Muted',
		sample: 'Muted text for secondary information',
	},
	{ Component: InlineCode, label: 'Inline Code', sample: 'const x = 10;' },
	{
		Component: MultilineCode,
		label: 'Multiline Code',
		sample: 'function example() {\n  return true;\n}',
	},
	{
		Component: Quote,
		label: 'Quote',
		sample: 'This is a blockquote element to showcase quoted text.',
	},
]

const listExample = (
	<List>
		<li>First item in list</li>
		<li>Second item in list</li>
		<li>Third item with nested content</li>
	</List>
)

const ColorItem = ({ varName }: { varName: string }) => {
	const [copied, setCopied] = useState(false)

	const copyToClipboard = () => {
		navigator.clipboard.writeText(`var(${varName})`)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div key={varName} className="group flex items-center gap-3 py-2">
			<div
				className="border-border h-10 w-10 rounded-md border shadow-sm transition-transform group-hover:scale-110"
				style={{ backgroundColor: `var(${varName})` }}
			/>
			<span className="font-mono text-sm">{varName}</span>
			<div
				className="ml-auto flex h-10 w-24 items-center justify-center rounded border shadow-sm transition-all hover:shadow-md"
				style={{
					backgroundColor: `var(${varName})`,
					color: varName.includes('foreground')
						? `var(${varName.replace('foreground', '')})`
						: 'inherit',
				}}
			></div>
			<Button
				size="icon"
				variant="ghost"
				className="ml-2"
				onClick={copyToClipboard}
			>
				{copied ? (
					<CheckIcon size={16} className="text-green-500" />
				) : (
					<CopyIcon size={16} />
				)}
			</Button>
		</div>
	)
}

const ColorPalette = () => (
	<section className="my-4">
		<div className="mb-6 flex items-center justify-between">
			<H2 className="mb-0">Color Palette</H2>
			<div className="text-muted-foreground text-sm">
				Click any color to copy its CSS variable
			</div>
		</div>
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
			{colorCategories.map((category) => (
				<Card key={category.name}>
					<CardHeader className="pb-2">
						<CardTitle>{category.name}</CardTitle>
						<CardDescription>
							{category.vars.length}{' '}
							{category.vars.length === 1 ? 'variable' : 'variables'}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-1">
							{category.vars.map((varName) => (
								<ColorItem key={varName} varName={varName} />
							))}
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	</section>
)

const Typography = () => {
	return (
		<section className="my-4">
			<H2 className="mb-6">Typography</H2>
			<Card>
				<CardContent className="p-0">
					{typographyElements.map(({ Component, label, sample }) => (
						<div
							key={label}
							className="border-border hover:bg-accent/5 border-b px-6 py-4 last:border-0"
						>
							<div className="flex flex-col gap-2">
								<div className="flex items-start gap-4 py-2">
									<div className="text-muted-foreground w-32 shrink-0 font-mono text-sm">
										{label}
									</div>
									<div className="flex-1">
										<Component>{sample}</Component>
									</div>
								</div>
							</div>
						</div>
					))}

					{/* List example (separate because it needs children as li elements) */}
					<div className="hover:bg-accent/5 px-6 py-4">
						<div className="flex flex-col gap-2">
							<div className="flex items-start gap-4 py-2">
								<span className="text-muted-foreground w-32 shrink-0 pt-2 font-mono text-sm">
									List
								</span>
								<div className="flex-1">{listExample}</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>
	)
}

type ButtonVariant =
	| 'default'
	| 'secondary'
	| 'outline'
	| 'destructive'
	| 'ghost'
	| 'link'

const buttonVariants: { name: ButtonVariant; label: string }[] = [
	{ name: 'default', label: 'Primary' },
	{ name: 'secondary', label: 'Secondary' },
	{ name: 'outline', label: 'Outline' },
	{ name: 'destructive', label: 'Destructive' },
	{ name: 'ghost', label: 'Ghost' },
	{ name: 'link', label: 'Link' },
]

const ComponentExamples = () => {
	return (
		<section className="my-4">
			<H2 className="mb-6">Component Examples</H2>

			<Tabs defaultValue="buttons" className="w-full">
				<TabsList className="mb-4">
					<TabsTrigger value="buttons">Buttons</TabsTrigger>
					<TabsTrigger value="inputs">Inputs</TabsTrigger>
					<TabsTrigger value="cards">Cards</TabsTrigger>
				</TabsList>

				<TabsContent value="buttons" className="space-y-6">
					<Card>
						<CardHeader>
							<CardTitle>Button Variants</CardTitle>
							<CardDescription>
								Different visual styles for the Button component
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-3">
								{buttonVariants.map((variant) => (
									<Button key={variant.name} variant={variant.name}>
										{variant.label}
									</Button>
								))}
								<Button size="icon">
									<CopyIcon size={16} />
								</Button>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Button Sizes</CardTitle>
							<CardDescription>
								Size variations for the default button
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap items-center gap-3">
								<Button size="lg">Large</Button>
								<Button>Default</Button>
								<Button size="sm">Small</Button>
								<Button size="icon">
									<CopyIcon size={16} />
								</Button>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Button States</CardTitle>
							<CardDescription>Interactive states for buttons</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-3">
								<Button>Default</Button>
								<Button disabled>Disabled</Button>
								<Button variant="outline" className="border-dashed">
									Custom
								</Button>
								<Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
									Gradient
								</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="inputs" className="space-y-6">
					<Card>
						<CardHeader>
							<CardTitle>Input Fields</CardTitle>
							<CardDescription>Text input variations</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="Enter your name" />
							</div>

							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" placeholder="Enter your email" />
							</div>

							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor="disabled">Disabled</Label>
								<Input id="disabled" disabled placeholder="Disabled input" />
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="cards" className="space-y-6">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<Card>
							<CardHeader>
								<CardTitle>Card Title</CardTitle>
								<CardDescription>Card description goes here</CardDescription>
							</CardHeader>
							<CardContent>
								<P>
									This is an example card with a title, description, and
									content.
								</P>
							</CardContent>
						</Card>

						<Card className="border-primary/20 shadow-primary/10 shadow-md">
							<CardHeader className="bg-primary/5 border-primary/10 border-b">
								<CardTitle>Featured Card</CardTitle>
								<CardDescription>With custom styling</CardDescription>
							</CardHeader>
							<CardContent className="pt-4">
								<P>Custom styled card with border and shadow effects.</P>
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</section>
	)
}

const DesignBoard = () => {
	return (
		<article className="bg-background text-foreground min-h-screen">
			<header className="border-border bg-background/95 sticky top-0 z-10 border-b backdrop-blur">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
					<div className="flex items-center gap-2">
						<H2 className="m-0">Credence</H2>
					</div>
					<ModeToggle />
				</div>
			</header>

			<main className="mx-auto max-w-6xl px-4 py-6">
				<div className="mb-6 border-b pb-4">
					<H1>Design System</H1>
					<Lead>
						A comprehensive guide to Credence visual language and UI components
					</Lead>
				</div>

				<Tabs defaultValue="colors" className="w-full">
					<TabsList>
						<TabsTrigger value="colors">Colors</TabsTrigger>
						<TabsTrigger value="typography">Typography</TabsTrigger>
						<TabsTrigger value="components">Components</TabsTrigger>
					</TabsList>

					<TabsContent value="colors">
						<ColorPalette />
					</TabsContent>

					<TabsContent value="typography">
						<Typography />
					</TabsContent>

					<TabsContent value="components">
						<ComponentExamples />
					</TabsContent>
				</Tabs>
			</main>

			<footer className="border-border bg-muted/20 border-t py-8">
				<div className="mx-auto max-w-6xl px-4">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<div>
							<P className="text-muted-foreground m-0 text-sm">
								© 2025 Credence
							</P>
						</div>
						<div className="flex gap-4">
							<Button variant="outline" size="sm">
								Documentation
							</Button>
							<Button variant="outline" size="sm">
								GitHub
							</Button>
						</div>
					</div>
				</div>
			</footer>
		</article>
	)
}

export default DesignBoard
