# Hooks Directory Structure

This directory contains custom React hooks used throughout the application.

## Purpose

Custom hooks allow you to extract component logic into reusable functions. This directory serves as a central location for all custom hooks in our Next.js application.

## Usage

To use a hook from this directory:

```javascript
import useCustomHook from '@/hooks/useCustomHook'

function MyComponent() {
	const result = useCustomHook()
	// ...
}
```

## Best Practices

- Prefix all hook files with 'use'
- Each hook should have a single responsibility
- Include TypeScript types where applicable
- Add comments explaining complex logic
- Keep hooks pure and side-effect free when possible

## Structure

```
hooks/
├── useAuth.ts
├── useForm.ts
├── useAPI.ts
└── ... other hooks
```
