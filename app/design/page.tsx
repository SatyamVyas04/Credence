'use client'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode.toggle'
import React, { JSX } from 'react'

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
		vars: ['--chart-1', '--chart-2', '--chart-3', '--chart-4', '--chart-5'],
	},
]

const typographyElements = [
	{ tag: 'h1', label: 'Heading 1', sample: 'Welcome to Credence' },
	{ tag: 'h2', label: 'Heading 2', sample: 'Subheading Example' },
	{ tag: 'h3', label: 'Heading 3', sample: 'Section Title' },
	{ tag: 'h4', label: 'Heading 4', sample: 'Minor Heading' },
	{
		tag: 'p',
		label: 'Paragraph',
		sample: 'This is a paragraph to test text styling and spacing.',
	},
	{
		tag: 'blockquote',
		label: 'Blockquote',
		sample: 'This is a blockquote element to showcase quoted text.',
	},
	{ tag: 'code', label: 'Inline Code', sample: 'const x = 10;' },
]

const ColorPalette = () => (
	<section>
		<h2>Color Palette</h2>
		<div className="grid grid-cols-1 gap-4 overflow-clip md:grid-cols-2">
			{colorCategories.map((category) => (
				<div
					key={category.name}
					className="border-border rounded-lg border p-4"
				>
					<h3>{category.name}</h3>
					<div>
						{category.vars.map((varName) => (
							<div key={varName} className="flex items-center gap-3 py-1">
								<div
									className="border-border h-8 w-8 rounded-md border"
									style={{ backgroundColor: `var(${varName})` }}
								/>
								<span className="font-mono text-sm">{varName}</span>
								<div
									className="ml-auto h-8 w-24 rounded border px-3 py-1 text-sm"
									style={{ backgroundColor: `var(${varName})` }}
								></div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	</section>
)

const Typography = () => (
	<section>
		<h2>Typography</h2>
		<div className="bg-card text-card-foreground rounded-lg border">
			{typographyElements.map(({ tag, label, sample }) => {
				const Tag = tag as keyof JSX.IntrinsicElements
				return (
					<div key={label} className="px-4">
						<div className="flex items-center gap-4">
							<span className="text-muted-foreground w-24 font-mono text-sm">
								{label}
							</span>
							<Tag>{sample}</Tag>
						</div>
						<hr className="border-border" />
					</div>
				)
			})}
		</div>

		<div>
			<h1>Sample Heading 1</h1>
			<h2>Sample Heading 2</h2>
			<p>
				This is another paragraph under the headings to test text styling and
				spacing.
			</p>
		</div>
	</section>
)

const ComponentExamples = () => (
	<section>
		<h2>Component Examples</h2>
		<div className="border-border bg-card rounded-lg border p-4">
			<h3>Buttons</h3>
			<div className="flex flex-wrap gap-2">
				<Button variant="default">Primary Button</Button>
				<Button variant="secondary">Secondary Button</Button>
				<Button variant="outline">Outline Button</Button>
				<Button variant="destructive">Destructive Button</Button>
				<Button variant="link">Link Button</Button>
				<Button variant="ghost">Ghost Button</Button>
				<Button size="icon" className="p-1">
					<img src="/icon-dark.png" alt="icon" className="rounded-[4px]" />
				</Button>
			</div>
		</div>
	</section>
)

const DesignBoard = () => (
	<div className="bg-background text-foreground min-h-screen">
		<div className="mx-auto max-w-6xl">
			<div className="flex items-center justify-between">
				<h1>Design System</h1>
				<ModeToggle />
			</div>
			<ColorPalette />
			<Typography />
			<ComponentExamples />
		</div>
	</div>
)

export default DesignBoard
