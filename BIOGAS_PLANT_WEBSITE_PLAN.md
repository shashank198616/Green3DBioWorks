# Biogas Plant Website - Planning Document

## Project Overview

**Project Name**: Biogas Plant Interactive Website  
**Business**: Compressed biogas plant in India generating and selling biogas to market  
**Timeline**: ASAP (2-4 weeks for MVP launch)  
**Primary Audiences**: Corporate buyers, investors, local communities, sustainability-focused organizations, general visitors

---

## Business Vision & Messaging

### Core Brand Identity

**Tagline**: "Decompose, Digest, Derive - Clean Energy from Waste"

**Triple-D Philosophy**:
- **Decompose**: Breaking down waste materials into component parts
- **Digest**: Converting waste through biogas production processes
- **Derive**: Extracting valuable energy and selling to market

### Key Business Goals

1. Generate leads and inquiries from corporate buyers needing energy solutions
2. Showcase the biogas production process and plant capabilities
3. Build credibility with investors and stakeholders
4. Demonstrate environmental impact and sustainability commitment
5. Provide interactive resources for community engagement

### Primary Value Propositions

- **Environmental**: Carbon reduction, waste management, sustainability
- **Economic**: Clean energy production and market sales
- **Technical**: Modern biogas production technology and efficiency
- **Social**: Local job creation and community development

---

## Target Audiences & Use Cases

### Corporate Buyers
- Looking for reliable energy suppliers
- Need: Plant capacity data, production reliability, pricing/contact info
- Engagement: Contact form, performance metrics, case studies

### Investors & Stakeholders
- Evaluating ROI and business viability
- Need: Plant specifications, financial metrics, team expertise
- Engagement: Downloads, detailed about page, interactive dashboard

### Local Communities
- Understanding environmental and social impact
- Need: Accessible explanations of process, community benefits
- Engagement: Visual process diagrams, FAQs, chatbot support

### Environmental Organizations & Regulators
- Verifying sustainability credentials and compliance
- Need: Certifications, environmental metrics, regulatory documentation
- Engagement: Resource downloads, technical specifications

---

## Site Architecture & Pages

### Core Pages (MVP)

1. **Home/Hero**
   - Eye-catching animated hero video showcasing the plant
   - Triple-D value proposition messaging
   - Call-to-action buttons (Contact, Learn More, Dashboard)

2. **How It Works (Triple-D Process)**
   - Animated/interactive breakdown of the three stages
   - Visual process diagrams with explanations
   - Technical specifications and efficiency metrics
   - Live production metrics dashboard integration

3. **About Us**
   - Company mission and values
   - Plant specifications and capacity (MW, daily output)
   - Team expertise and backgrounds
   - Environmental certifications and compliance

4. **Contact & Inquiries**
   - Contact form with inquiry categorization
   - Live chat / Chatbot for FAQs
   - Response time expectations
   - Multiple contact options (email, phone)

5. **Resources/Downloads**
   - Technical documentation
   - Environmental impact reports
   - Certifications and compliance documents
   - Whitepapers and case studies
   - Downloadable media (plant images, specs)

6. **Team**
   - Team member profiles
   - Expertise and credentials
   - Organizational structure

7. **Blog/News**
   - Industry updates and insights
   - Project milestones
   - Sustainability news
   - Plant performance highlights

---

## Interactive Features

### Must-Have (MVP)

- **Contact Form**: Multi-type inquiry (general, investment, partnership, support)
- **Live Chat / Chatbot**: FAQ automation, basic support, lead qualification
- **Performance Dashboard**: Real-time (or simulated) plant metrics
  - Daily biogas production
  - CO2 reduction metrics
  - Waste processed
  - Uptime/reliability stats

### Nice-to-Have (Phase 2)

- **Calculator**: Cost savings calculator for potential buyers
- **Appointment Booking**: Demo or meeting scheduling
- **Document Downloads**: Gated resources for lead capture
- **Multi-language Support**: Hindi + English

---

## Content Management System (CMS)

### Content Delivery Strategy

**JSON-Based Content Model**:
- All website content delivered via structured JSON files
- Enables non-technical content updates
- Single source of truth for all pages

**Content Structure**:
```json
{
  "pages": {
    "home": {
      "hero": { "title": "...", "subtitle": "...", "cta": "..." },
      "features": [ ... ],
      "metrics": { ... }
    },
    "howItWorks": {
      "decompose": { ... },
      "digest": { ... },
      "derive": { ... }
    },
    "about": { ... },
    "team": [ ... ],
    "contact": { ... },
    "resources": [ ... ],
    "blog": [ ... ]
  },
  "metadata": {
    "siteTitle": "Biogas Plant - Clean Energy Solutions",
    "siteDescription": "...",
    "socialLinks": { ... }
  }
}
```

### CMS Access & Permissions

- **Admin Portal**: Separate login-protected interface
- **Role-Based Access**: Editor, reviewer, publisher roles
- **Content Versioning**: Track changes and rollback capability
- **Approval Workflow**: Draft → Review → Publish

---

## Technical Architecture

### Frontend Layer
- **Framework**: Next.js 14+ with TypeScript
- **UI Components**: React with Tailwind CSS
- **State Management**: React Context or Zustand
- **Animations**: Framer Motion for hero animations and transitions
- **Forms**: React Hook Form + validation
- **Charts/Metrics**: Recharts or Chart.js for dashboards

### Backend for Frontend (BFF) Layer
- **Platform**: C# ASP.NET Core
- **Architecture**: Lean controller + mapping layer
- **Responsibilities**:
  - Request/response transformation
  - Content aggregation
  - Session management
  - Route coordination

### Caching Strategy
- **Technology**: Redis (or Azure Cache for Redis)
- **Cache Targets**:
  - JSON content (24-hour TTL)
  - API responses (15-minute TTL)
  - User sessions
  - Dashboard metrics (5-minute refresh)
- **Invalidation**: Manual + time-based + event-based triggers

### API & Orchestration Layer
- **Technology**: RESTful API (can evolve to GraphQL)
- **Responsibilities**:
  - Content delivery
  - Contact form handling
  - Chatbot orchestration
  - Metrics aggregation
  - File serving (downloads)
  - Third-party integrations (email, SMS)

### Data Layer

**DocumentDB (NoSQL)**:
- Content documents (JSON data)
- Chatbot logs and conversations
- Metrics and analytics data
- User activity logs

**Aurora DB (SQL/PostgreSQL)**:
- Contact form submissions
- User accounts and authentication
- Inquiry management and tracking
- Team member information
- Resource metadata

### Deployment & Infrastructure
- **Hosting**: AWS (EC2 for app servers + managed databases)
  - OR: Kubernetes cluster for scalability
- **CDN**: CloudFront for static assets and images
- **SSL/TLS**: AWS Certificate Manager
- **Monitoring**: CloudWatch + custom dashboards
- **CI/CD**: GitHub Actions or AWS CodePipeline

---

## Design System

### Visual Aesthetic

**Overall Style**: Modern, minimalist, green-focused  
**Tone**: Professional yet approachable, trustworthy, innovative

### Color Palette

**Primary Colors**:
- Deep Earthy Green: #047857 (trust, sustainability, expertise)
- Vibrant Energy Green: #10b981 (growth, energy, action)

**Neutrals**:
- Off-white: #f9fafb (clean, spacious backgrounds)
- Dark Charcoal: #1f2937 (strong text, authority)

**Supporting Colors**:
- Warm Earth Tone: #b45309 (accent highlights)
- Success Green: #059669 (confirmations, achievements)
- Alert Amber: #d97706 (warnings, notifications)

### Typography

- **Headings**: Inter, 22px (h1), 18px (h2), 16px (h3) - Weight 500
- **Body Text**: Inter, 16px - Weight 400, line-height 1.6
- **Data/Metrics**: Monospace (Monaco, Courier) for technical information

### Design Principles

1. **Minimalist & Spacious**: Generous whitespace, uncluttered layouts
2. **Flat Design**: No shadows, subtle 0.5px borders for dividers
3. **Accessibility First**: WCAG 2.1 AA compliance
4. **Performance**: Optimize for mobile-first, fast load times
5. **Responsive**: Works seamlessly on desktop, tablet, mobile

### Visual Components

- **Cards**: White background, 0.5px borders, 12px border-radius
- **Buttons**: Outline style by default, solid CTA buttons
- **Forms**: Clean input styles, clear labels and error states
- **Navigation**: Sticky header, minimal, left-aligned menu
- **Imagery**: Real photography of plant + nature landscapes + custom infographics

---

## Content & Messaging Framework

### Homepage

**Hero Section**:
- Video background or animated hero
- Headline: "Decompose, Digest, Derive - Clean Energy from Waste"
- Subheading: "Sustainable biogas production transforming waste into power"
- CTAs: "Explore Our Plant" | "Contact Us" | "View Dashboard"

**Featured Metrics**:
- Daily biogas production (MW/MMBtu)
- CO2 reduction (tons/year)
- Waste processed (tons/month)
- Operational uptime (%)

**Value Proposition Section**:
- Three columns: Environmental Impact | Economic Benefits | Technical Excellence
- Icons + brief descriptions
- Link to detailed sections

### How It Works (Triple-D)

**Section 1: Decompose**
- Visual: Diagram of waste input
- Explanation: How organic waste is broken down
- Key metrics: Input capacity, waste types processed

**Section 2: Digest**
- Visual: Process diagram of anaerobic digestion
- Explanation: Biological conversion process
- Key metrics: Retention time, optimal conditions

**Section 3: Derive**
- Visual: Energy output diagram
- Explanation: Biogas extraction and market sale
- Key metrics: Production efficiency, output capacity, sales channels

### About Section

- **Company Story**: Mission and vision
- **Plant Specifications**: Capacity, location, technology
- **Environmental Certifications**: ISO, compliance, awards
- **Business Model**: How we operate and generate revenue

### Team Section

- Professional bios of key team members
- Expertise areas and backgrounds
- Photos and credentials

### Contact Section

- **Contact Form**:
  - Name, email, phone
  - Inquiry type: General | Investment | Partnership | Support
  - Message
  - Consent checkbox (data privacy)

- **Live Chat**:
  - FAQ answering
  - Basic support
  - Lead qualification
  - Off-hours: contact form fallback

- **Contact Info**:
  - Email address
  - Phone number
  - Physical address
  - Response time SLA

### Resources/Downloads

- Category: Technical Docs | Reports | Certifications | Media Kit
- Gated content (optional): Lead capture form before download
- Descriptions and metadata

---

## Interactive Features Specifications

### Live Dashboard

**Data Points**:
- Real-time biogas production (MW/MMBtu)
- Daily production trend (7-day chart)
- CO2 reduction (cumulative tons)
- Waste processed (current month)
- System uptime/reliability (%)
- Temperature and pressure gauges
- Feedstock level indicator

**Refresh Rate**: 5-minute intervals  
**Data Source**: Integration with plant sensors/IoT or mock data initially  
**Visualization**: Gauges, line charts, progress bars  
**Mobile**: Full responsive, touch-friendly

### Chatbot

**Platform Options**:
- Custom chatbot (JavaScript-based)
- Rasa + FastAPI backend
- Commercial service (Drift, Intercom)

**Capabilities**:
- FAQ automation (process explanation, contact options)
- Lead qualification (company size, energy needs, timeline)
- Basic support (hours of operation, response times)
- Escalation to human support with contact form

**Training Data**:
- Common questions about biogas process
- Plant capabilities and specifications
- Investment and partnership inquiries
- Technical support questions

### Contact Form

**Fields**:
- Name (required)
- Email (required)
- Phone (optional)
- Company (optional)
- Inquiry Type (dropdown)
- Message (required)
- Data consent checkbox

**Validation**: Real-time, client + server-side  
**Submission**: Send to email + store in database  
**Confirmation**: Immediate thank-you message + follow-up email

---

## Performance & SEO Requirements

### Performance Targets

- **Lighthouse Score**: 90+ (mobile & desktop)
- **Page Load Time**: < 2.5 seconds (3G)
- **Time to Interactive**: < 3.5 seconds
- **Cumulative Layout Shift**: < 0.1

### SEO Strategy

- **Meta Tags**: Optimized titles, descriptions, canonical URLs
- **Structured Data**: Schema.org for Organization, LocalBusiness, NewsArticle
- **Sitemap & Robots.txt**: Proper crawlability
- **Mobile Optimization**: Mobile-first indexing ready
- **Performance**: Core Web Vitals optimized
- **Backlinks**: Initial outreach to sustainability/energy publications

### Accessibility

- **WCAG 2.1 AA Compliance**: All pages and features
- **Alt Text**: All images with descriptive alternatives
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: 7:1 ratio for critical content
- **Screen Reader**: Proper ARIA labels and semantic HTML

---

## Deployment & Hosting

### Hosting Infrastructure

**Option 1: AWS (Recommended for scalability)**
- **Frontend**: S3 + CloudFront (static assets)
- **Next.js App**: EC2 (Elastic) or ECS (Fargate)
- **C# BFF**: EC2 (Elastic) or App Service
- **Databases**: RDS Aurora (PostgreSQL) + DocumentDB (MongoDB)
- **Caching**: ElastiCache (Redis)
- **DNS**: Route 53
- **Monitoring**: CloudWatch

**Option 2: Kubernetes**
- Containerized Next.js, C# BFF, and services
- Managed K8s (EKS, AKS, or GKE)
- Persistent volumes for databases

### Domain & SSL

- **Domain**: Register domain with Route 53 or external registrar
- **SSL/TLS**: AWS Certificate Manager (free)
- **Auto-renewal**: Handled by ACM

### CI/CD Pipeline

- **Repository**: GitHub
- **Build**: GitHub Actions or AWS CodeBuild
- **Tests**: Unit, integration, E2E (Playwright)
- **Deployment**: Automated on main branch (staging) + manual approval (production)
- **Rollback**: One-click capability

### Monitoring & Alerting

- **Uptime Monitoring**: AWS CloudWatch + external service (UptimeRobot)
- **Error Tracking**: Sentry or similar
- **Performance Monitoring**: New Relic or DataDog
- **Custom Dashboards**: Key metrics and KPIs
- **Alerts**: Slack/email for critical issues

---

## Development Phases

### Phase 1: MVP (Weeks 1-2)
- Core pages (Home, How It Works, About, Contact)
- Contact form + email integration
- Basic dashboard (mock data)
- Content CMS setup (JSON-based)
- Deployment setup

### Phase 2: Enhanced (Week 3-4)
- Chatbot integration
- Live metrics integration (if sensor data available)
- Resource downloads
- Team page
- Blog setup
- SEO optimization

### Phase 3: Post-Launch (Ongoing)
- Analytics and monitoring
- A/B testing
- User feedback integration
- Feature enhancements
- Content updates

---

## Success Metrics & KPIs

### Business Metrics

- **Lead Generation**: Inquiries per week (target: 5-10)
- **Conversion**: Inquiry → Meeting rate (target: 30%)
- **Engagement**: Avg time on site (target: 2+ minutes)
- **Contact Form Submissions**: Weekly tracking
- **Chatbot Usage**: Chat initiations and resolution rate

### Technical Metrics

- **Page Load Time**: < 2.5s target
- **Uptime**: 99.5% availability
- **Error Rate**: < 0.1% of transactions
- **API Response Time**: < 200ms (p95)

### User Metrics

- **Mobile Traffic**: % of total (target: 50%+)
- **Return Visitors**: Repeat visitor rate
- **Dashboard Usage**: Daily active users
- **Form Completion Rate**: % submitted of started
- **Chatbot Satisfaction**: User ratings (target: 4+/5)

---

## Next Steps

1. **Review & Approve Plan**: Confirm all decisions above
2. **Begin Developer Phase**: Code generation and component building
3. **Content Preparation**: Gather text, images, and data for website
4. **Testing Setup**: Prepare test environment and test cases
5. **Deployment Preparation**: Set up hosting and CI/CD

---

## Document Version

- **Version**: 1.0 - Planning Phase Complete
- **Date**: May 13, 2026
- **Status**: Ready for Developer Agent Phase
- **Next Review**: After Developer Phase completion
