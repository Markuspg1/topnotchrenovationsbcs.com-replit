# Overview

This is a home renovation business website for "Top Notch Renovations" serving the Bryan & College Station, Texas area. The application is a full-stack web platform built with React frontend and Express.js backend, designed to showcase renovation services, handle customer inquiries, manage consultation bookings, and provide cost estimates for potential clients.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using Wouter for routing instead of React Router
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form schemas
- **Styling**: Tailwind CSS with custom Texas-themed color palette (navy, orange, warm gray)
- **Build Tool**: Vite with custom configuration for development and production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API endpoints for contacts, consultations, and cost estimates
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot module replacement with Vite integration for seamless development experience

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development/testing scenarios
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple

## Authentication and Authorization
- **User System**: Basic user authentication with username/password
- **Session Storage**: PostgreSQL-backed sessions for persistent login state
- **Security**: Password hashing and secure session management
- **Authorization**: Role-based access patterns ready for admin functionality

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database toolkit with automatic TypeScript inference

### UI and Styling
- **Shadcn/ui**: Pre-built accessible React components
- **Radix UI**: Unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool with hot module replacement
- **TypeScript**: Static type checking across the entire stack
- **ESBuild**: Fast JavaScript bundler for production builds
- **TanStack Query**: Server state management and caching

### Business Logic Integration
- **Cost Estimation**: Built-in calculator for renovation project estimates
- **Contact Management**: Lead capture and inquiry handling system
- **Consultation Booking**: Appointment scheduling with status tracking
- **Project Showcase**: Portfolio display system with filtering capabilities

### Replit Integration
- **Development Environment**: Replit-specific plugins for cartographer and error modal
- **Runtime Configuration**: Environment variable management for database connections
- **Deployment**: Production-ready build process with static asset serving