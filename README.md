# Biogas Plant Website

Interactive website for a biogas plant in India. Built with Next.js, React, and Tailwind CSS.

**Tagline**: "Decompose, Digest, Derive - Clean Energy from Waste"

## Project Structure

```
biogas-website/
├── src/
│   ├── app/              # Next.js app router
│   │   ├── api/          # API routes
│   │   ├── layout.tsx    # Root layout with header/footer
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── Hero.tsx
│   │   ├── TripleProcess.tsx
│   │   ├── MetricsDashboard.tsx
│   │   └── ContactForm.tsx
│   ├── types/            # TypeScript type definitions
│   ├── styles/           # Global styles
│   └── lib/              # Utilities and helpers
├── public/
│   └── content.json      # Content management (JSON-driven CMS)
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Features

### Frontend
- **Next.js 14+** with TypeScript
- **React 18** with functional components
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** + **Zod** for form validation
- **Recharts** for data visualization

### Content Management
- **JSON-based CMS** - Content delivered via `/public/content.json`
- **Zero database dependency** for static content
- **Easy updates** - Edit JSON, redeploy or use API endpoint

### Interactive Features
- **Live Metrics Dashboard** - Real-time plant performance data
- **Contact Forms** - Lead capture and inquiry management
- **Responsive Design** - Mobile-first, works on all devices
- **Animations** - Smooth transitions and visual feedback

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd biogas-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Visit `http://localhost:3000`

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks
- `npm test` - Run tests
- `npm run format` - Format code with Prettier

## Content Management

### Updating Website Content

All website content is stored in `/public/content.json`. To update content:

1. **Edit the JSON file**
   ```bash
   vim public/content.json
   ```

2. **Update specific sections:**
   - `siteMeta` - Site configuration and metadata
   - `pages.home` - Homepage content (hero, features, metrics, CTA)
   - `pages.howItWorks` - Triple-D process explanation
   - `pages.about` - Company information
   - `pages.contact` - Contact page content
   - `pages.resources` - Downloadable resources
   - `pages.blog` - Blog posts
   - `pages.team` - Team member information

3. **No rebuild required** - Changes appear on next page refresh (with caching)

### Structure Example

```json
{
  "siteMeta": {
    "siteName": "Biogas Plant",
    "siteTitle": "Biogas Plant - Clean Energy Solutions",
    "contactEmail": "info@biogasplant.com"
  },
  "pages": {
    "home": {
      "hero": { /* hero section */ },
      "features": [ /* feature cards */ ],
      "metrics": [ /* key metrics */ ]
    }
  }
}
```

## Building & Deployment

### Production Build

```bash
npm run build
```

This creates an optimized build in `.next/` directory.

### Deployment Options

#### Option 1: Vercel (Recommended for Next.js)

1. **Push code to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Import your Git repository
   - Vercel automatically detects Next.js
   - Set environment variables in project settings
   - Deploy!

3. **Auto-deployments**
   - Vercel redeploys on every push to main

#### Option 2: AWS EC2

1. **SSH into EC2 instance**
   ```bash
   ssh -i your-key.pem ec2-user@your-instance-ip
   ```

2. **Install Node.js and dependencies**
   ```bash
   curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
   sudo yum install -y nodejs git
   ```

3. **Clone and build**
   ```bash
   git clone <repository-url>
   cd biogas-website
   npm install
   npm run build
   ```

4. **Start with PM2 (process manager)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "biogas" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx reverse proxy**
   ```nginx
   server {
     listen 80;
     server_name your-domain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

6. **SSL with Let's Encrypt**
   ```bash
   sudo yum install -y certbot python-certbot-nginx
   sudo certbot certonly --standalone -d your-domain.com
   ```

#### Option 3: Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY .next ./
   COPY public ./public
   CMD ["npm", "start"]
   ```

2. **Build and run**
   ```bash
   docker build -t biogas-website .
   docker run -p 3000:3000 biogas-website
   ```

## API Endpoints

### Contact Form
- **POST** `/api/contact`
- Request: `{ name, email, phone, company, inquiryType, message, consentGiven }`
- Response: `{ success, submissionId, message }`

### Live Metrics
- **GET** `/api/metrics`
- Response: `{ success, data: PlantMetrics }`
- Cache: 60 seconds on edge

## Performance Optimization

- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic per-route splitting
- **Lazy Loading** - Components load on demand
- **Caching Strategy** - Content cached for 24 hours, metrics for 60 seconds
- **CSS-in-JS** - Tailwind CSS for minimal CSS output
- **Compression** - Gzip compression enabled

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility

- **WCAG 2.1 AA** compliance
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast ratios > 7:1

## Future Enhancements

- [ ] Backend for Frontend (C# ASP.NET Core)
- [ ] Real-time sensor integration
- [ ] User authentication
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Admin dashboard for content management
- [ ] Chatbot implementation
- [ ] Appointment booking system

## Environment Setup

### For BFF Integration (When Ready)

```typescript
// Will connect to C# backend
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchContent() {
  return fetch(`${API_BASE}/api/content`, {
    headers: { 'X-API-Key': process.env.API_SECRET_KEY },
  });
}
```

## Monitoring & Analytics

- Setup Sentry for error tracking
- Enable Vercel Analytics for performance
- Configure CloudWatch for production monitoring
- Track key metrics: page views, contact form submissions, dashboard users

## Support & Maintenance

- **Bug Reports**: Create GitHub issue
- **Feature Requests**: Discuss in issues/discussions
- **Security Issues**: Email security@biogasplant.com

## License

Proprietary - All rights reserved

## Contact

For questions or support:
- Email: info@biogasplant.com
- Phone: +91 XXXXXXXXXX
- Website: https://biogasplant.com

---

**Last Updated**: May 2024  
**Version**: 1.0.0
