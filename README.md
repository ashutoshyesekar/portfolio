# Ashutosh Yesekar - Portfolio Website

A professional portfolio website for Ashutosh Yesekar, Senior DevOps Engineer with 5+ years of experience in cloud infrastructure, automation, and AI/ML operations.

## 🚀 Features

- **Modern Dark Theme**: Professional design with clean aesthetics
- **Responsive Design**: Optimized for desktop and mobile devices
- **Interactive Sections**: 
  - Hero section with professional introduction
  - About section with career overview
  - Skills showcase with animated progress bars
  - Experience timeline with detailed achievements
  - Education and languages
  - Contact form with validation
- **Resume Download**: Direct download functionality for PDF resume
- **Contact Form**: Functional contact form with backend storage

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and builds
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **TanStack Query** for state management
- **React Hook Form** with Zod validation
- **Wouter** for routing

### Backend
- **Node.js** with Express.js
- **TypeScript** with ES modules
- **Drizzle ORM** for database operations
- **PostgreSQL** for data storage
- **Zod** for request validation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ashutosh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file with your database configuration:
   ```bash
   DATABASE_URL=your_postgresql_connection_string
   ```

4. **Run database migrations** (if using PostgreSQL)
   ```bash
   npm run db:push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## 🏗 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage interface
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schemas and types
└── attached_assets/       # Static assets (resume, etc.)
```

## 🚀 Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Set to 'production' for production builds

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio

## 🎨 Customization

### Color Scheme
The color scheme can be customized in `client/src/index.css`:
- Primary colors for backgrounds
- Accent colors for highlights
- Text colors for readability

### Content Updates
- Update personal information in the component files under `client/src/components/`
- Replace the resume file in `attached_assets/`
- Modify experience, skills, and education data in respective components

## 📧 Contact Form

The contact form stores submissions in the database. Messages can be retrieved via the API endpoint `/api/contact/messages` for admin review.

## 🔒 Security Features

- Input validation using Zod schemas
- SQL injection prevention with Drizzle ORM
- CORS configuration for production
- Environment variable protection

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is for personal portfolio use. Feel free to use as a template for your own portfolio.

---

**Contact**: ashutoshyesekar@gmail.com | [LinkedIn](https://linkedin.com/in/ashutosh-yesekar)