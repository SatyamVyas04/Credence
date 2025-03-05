# Prisma Schema Documentation

This document provides an overview of the Prisma schema configuration for our project.

## Schema Location

`/prisma/schema.prisma`

## Overview

The schema.prisma file defines our database structure and models using Prisma Schema Language (PSL).

## Database Connection

```prisma
datasource db {
  provider = "postgresql" // or "mysql", "sqlite", etc.
  url      = env("DATABASE_URL")
}
```

## Generator Configuration

```prisma
generator client {
  provider = "prisma-client-js"
}
```

## Models

The schema contains the following data models:

- Define your models here
- Include field descriptions
- Document relationships

## Usage

1. Update models as needed
2. Run `npx prisma generate` to update the Prisma Client
3. Run `npx prisma db push` to sync with database
4. Run `npx prisma studio` to view/edit data
5. Install prisma globally to remove the `npx` prefix

## Best Practices

- Keep models normalized
- Use meaningful field names
- Document relationships clearly
- Include field constraints

## Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
