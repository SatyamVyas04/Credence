# Components Directory Structure

This directory contains reusable components organized into four main categories:

## `/ui`

Shadcn component implementations and customizations.

- Button
- Card
- Dialog
- etc.

## `/sections`

Large page-specific components and layouts.

Naming convention:

```
page-[pagename]-[component].tsx
```

Example:

- page-dashboard-leetcode-card.tsx
- page-profile-stats.tsx

## `/generic`

Common components used across multiple pages:

- Header
- Footer
- Navigation
- Layout wrappers
- etc.

## `/forms`

Form components and related utilities.

- Input
- Select
- FormWrapper
- etc.

## Usage

Import components using:

```tsx
// UI components
import { Button } from '@/components/ui/button'

// Section components
import { DashboardLeetcodeCard } from '@/components/sections/page-dashboard-leetcode-card'

// Generic components
import { Header } from '@/components/generic/header'

// Form components
import { Input } from '@/components/forms/input'
```
