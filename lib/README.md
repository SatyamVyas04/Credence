# Library Directory Structure

This directory contains essential utility files for authentication, middleware, and database operations.

## Files

### `auth.ts`

Contains NextAuth.js configuration and setup for authentication. This file manages:

- Authentication providers
- Session handling
- Authentication callbacks

### `middleware.ts`

Handles Next.js middleware functionality:

- Route protection
- Authentication checks
- Request/response modifications

### `db.ts`

Exports a global Prisma client instance:

- Database connection management
- Prevents multiple client instances
- Provides type-safe database access
