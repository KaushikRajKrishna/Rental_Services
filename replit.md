# Suraj Bikes - Darjeeling Bike Rental Platform

## Overview

A full-stack bike and scooty rental platform for Suraj Bike and Scooty Rental in Darjeeling, India. The application allows customers to browse available vehicles, view rental requirements, and submit booking inquiries. Built with a React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: GSAP with ScrollTrigger for scroll-based animations
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite

The frontend follows a page-based architecture with reusable sections and UI components:
- Pages: Home, Fleet, Rental Info, Contact, 404
- Sections: Hero with image carousel, Fleet grid, Rental Info, Contact form
- Custom hooks for data fetching (`use-bikes.ts`, `use-inquiries.ts`)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM
- **Validation**: Zod schemas shared between frontend and backend
- **API Pattern**: RESTful endpoints defined in shared routes file

The server uses a storage abstraction layer (`IStorage` interface) for database operations, making it easier to test or swap implementations.

### Data Layer
- **Database**: PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Drizzle Kit (`drizzle-kit push`)

Database tables:
- `bikes`: Vehicle inventory (name, type, price, image, description, availability)
- `inquiries`: Customer booking requests (contact info, optional bike reference, message)

### Shared Code
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Drizzle table definitions and Zod validation schemas
- `routes.ts`: API endpoint definitions with type-safe request/response schemas

### Build System
- Development: Vite dev server with HMR, proxied through Express
- Production: Vite builds static assets, esbuild bundles server code
- Output: `dist/public` for client, `dist/index.cjs` for server

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage (available but not currently used for sessions)

### UI Component Libraries
- **shadcn/ui**: Radix-based component library with Tailwind styling
- **Radix UI**: Headless UI primitives (dialogs, menus, forms, etc.)
- **Lucide React**: Icon library
- **react-icons**: Additional icons (social media)

### Animation
- **GSAP**: Professional animation library
- **@gsap/react**: React integration hooks

### Form Handling
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Zod integration for validation

### Data Fetching
- **@tanstack/react-query**: Server state management and caching

### Development Tools
- **Vite**: Build tool and dev server
- **Drizzle Kit**: Database migration tool
- **TypeScript**: Type checking across the stack