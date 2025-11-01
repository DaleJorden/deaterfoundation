# Deater Foundation Website

Modern static site built with **E**leventy, **D**ecap CMS, **A**lpine JS & **T**ailwind CSS.

## Technologies Used

- **[Eleventy](https://www.11ty.dev/)** v1.0.2 - Fast static site generator
- **[Decap CMS](https://decapcms.org/)** v3.x - Git-based content management (formerly Netlify CMS)
- **[Tailwind CSS](https://tailwindcss.com/)** v3 - Utility-first CSS framework
- **[Alpine.js](https://github.com/alpinejs/alpine)** v3 - Lightweight JavaScript framework
- **BrowserSync** - Live reload development server

Based on the [neat-starter](https://github.com/surjithctly/neat-starter) template with optimizations.

## Quick Start

### Prerequisites

- Node.js 18+ (even-numbered releases recommended)
- npm

### Local Development

1. **Clone this repository:**
   ```bash
   git clone git@github.com:DaleJorden/deaterfoundation.git
   cd deaterfoundation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project (first time only):**
   ```bash
   npm run build
   ```

4. **Start development server:**
   ```bash
   npm run start
   ```

5. **Access the site:**
   - Main site: http://localhost:8081
   - CMS Admin: http://localhost:8081/admin
   - BrowserSync UI: http://localhost:3001

## Features

- ✅ Git-based content management with Decap CMS
- ✅ Live reload and hot CSS updates
- ✅ Optimized Tailwind CSS build (no node_modules scanning)
- ✅ Blog posts with tags and metadata
- ✅ Editable navigation and settings via CMS
- ✅ Ready for Netlify deployment with Git Gateway
- ✅ 100/100 Lighthouse scores

## Documentation

For comprehensive documentation including:
- Project structure
- CMS configuration
- Deployment to Netlify
- Customization guides
- Troubleshooting

**See [CLAUDE.md](./CLAUDE.md)** for complete details.

## Build Commands

```bash
# Development with hot reload
npm run start

# Production build
npm run build

# Run Eleventy only
npm run eleventy

# Build CSS only
npm run css
```

## Contributing

This project is built with Claude Code. See [CLAUDE.md](./CLAUDE.md) for development guidelines.

## License

Based on neat-starter by Surjith S M.
