# Portfolio Website - Senior DevOps Engineer

## Overview

This is a professional portfolio website for Ashutosh Yesekar, a Senior DevOps Engineer. The application is built as a full-stack web application featuring a modern React frontend with a Node.js/Express backend. It showcases professional experience, skills, and provides a contact form for potential employers or clients.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage
- **API Design**: RESTful endpoints with JSON responses

### Data Storage
- **Primary Database**: PostgreSQL (configured for Neon Database)
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple
- **Development Fallback**: In-memory storage implementation for development

## Key Components

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Contact Messages Table**: Stores form submissions (id, name, email, subject, message, createdAt)

### API Endpoints
- `POST /api/contact` - Submit contact form messages
- `GET /api/contact/messages` - Retrieve all contact messages (admin functionality)
- `GET /api/resume/download` - Download resume file

### Frontend Pages
- **Home Page**: Complete portfolio with sections for hero, about, skills, experience, education, and contact
- **404 Page**: User-friendly error page for undefined routes

### UI Components
- Complete shadcn/ui component library
- Custom portfolio components (Navigation, Hero, About, Skills, Experience, Education, Contact, Footer)
- Dark theme design with custom color palette
- Responsive design for mobile and desktop

## Data Flow

1. **Contact Form Submission**: User fills out contact form → React Hook Form validates → API request to `/api/contact` → Data stored in PostgreSQL → Success/error response
2. **Portfolio Display**: Static content rendered on client-side with smooth scrolling navigation
3. **Resume Download**: Click download button → API request to `/api/resume/download` → File served from server

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React icons
- **Fonts**: Google Fonts (Inter)

### Development Tools
- **Replit Integration**: Configured for Replit hosting and development
- **Hot Reload**: Vite HMR for development
- **TypeScript**: Full type safety across frontend and backend

## Deployment Strategy

### Development Environment
- Uses Vite development server with Express backend
- Hot module replacement enabled
- In-memory storage fallback when database not available

### Production Build
- Frontend: Vite builds optimized React bundle
- Backend: esbuild bundles Express server
- Static files served from Express server
- PostgreSQL database required

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Ports**: Application runs on port 5000, exposed as port 80
- **Deployment**: Autoscale deployment target
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

## Changelog

```
Changelog:
- June 23, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```