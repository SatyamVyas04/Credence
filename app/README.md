# Credence App Directory Structure

## Overview

This directory contains the main application code for Credence project.

## Directory Structure

### `/page`

- Landing page component
- Entry point of the application
- Contains public-facing content

### `/layout`

- Main parent layout component
- Defines the overall structure and common elements
- Wraps all other components

### `/globals.css`

- Central stylesheet
- Contains brand color codes
- Defines Credence's design system variables

### `/design`

- Design assets and guidelines
- Typography specifications
- Font files
- Image assets
- Color palette documentation

### `/api`

- Backend API routes
- Server-side functionality
- API endpoint definitions

### `/auth`

- Authentication related pages
- Login and registration components
- Password reset functionality

### `/` (root)

- Protected pages
- Authentication required
- Secure routes
- Cannot be accessed without proper authorization

## Note

Ensure proper authentication is implemented before accessing root-level protected pages.
