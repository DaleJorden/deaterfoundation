# Eleventy + Decap CMS + Netlify Setup

This project is a modern static site built with Eleventy, Decap CMS, and ready for Netlify deployment.

## Technologies Used

- **Eleventy v1.0.2** - Fast static site generator
- **Decap CMS v3.x** - Git-based content management system (formerly Netlify CMS)
- **Tailwind CSS v3** - Utility-first CSS framework
- **Alpine.js v3** - Lightweight JavaScript framework
- **PostCSS** - CSS processing
- **BrowserSync** - Live reload development server

## Project Setup

This project was initialized from the [neat-starter](https://github.com/surjithctly/neat-starter) template and customized with:

- Updated site metadata placeholder values
- Fixed Tailwind config to avoid node_modules scanning (performance improvement)
- Configured for Netlify deployment with Git Gateway backend

## Local Development

### Prerequisites

- Node.js 18+ (even-numbered releases recommended)
- npm

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project (first time only):**
   ```bash
   npm run build
   ```

3. **Start development server:**
   ```bash
   npm run start
   ```

4. **Access the site:**
   - Main site: http://localhost:8081
   - CMS Admin: http://localhost:8081/admin
   - BrowserSync UI: http://localhost:3001

### Development Features

- Auto-reload on file changes
- Hot CSS updates via Tailwind watch
- Live browser sync across devices
- No authentication required for local CMS access (uses `local_backend: true`)

## Project Structure

```
.
├── src/
│   ├── admin/
│   │   ├── config.yml          # Decap CMS configuration
│   │   └── index.html          # CMS interface
│   ├── posts/                  # Blog post markdown files
│   ├── _data/
│   │   ├── settings.yaml       # Site metadata
│   │   ├── navigation.yaml     # Main navigation
│   │   └── quicklinks.yaml     # Quick links
│   ├── _includes/              # Nunjucks templates & layouts
│   ├── static/
│   │   ├── css/                # Tailwind CSS source
│   │   └── img/                # Images
│   ├── blog/                   # Blog listing page
│   └── index.html              # Homepage
├── _site/                      # Build output (gitignored)
├── .eleventy.js                # Eleventy configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── netlify.toml                # Netlify deploy settings
```

## Decap CMS Configuration

### Current Collections

1. **Blog Posts** (`src/posts/`)
   - Title
   - Description
   - Author
   - Publish Date
   - Body (Markdown)
   - Tags (multiple selection)

2. **Settings** (editable via CMS)
   - Navigation items
   - Quick links
   - Meta settings (site name, author, URL)

### CMS Configuration File

Location: `src/admin/config.yml`

Key settings:
- **Backend:** `git-gateway` (for Netlify deployment)
- **Branch:** `master`
- **Media folder:** `src/static/img`
- **Local backend:** Enabled for development

### Adding New Content Types

To add a new collection (e.g., "Projects" or "Team Members"):

1. Edit `src/admin/config.yml`
2. Add a new collection under `collections:`
   ```yaml
   - label: "Projects"
     name: "projects"
     folder: "src/projects"
     create: true
     fields:
       - { label: "Title", name: "title", widget: "string" }
       - { label: "Description", name: "description", widget: "text" }
       - { label: "Image", name: "image", widget: "image" }
       - { label: "Body", name: "body", widget: "markdown" }
   ```
3. Create the folder: `mkdir -p src/projects`
4. Add Eleventy template to display the collection

## Customization

### Updating Site Metadata

Edit `src/_data/settings.yaml`:
```yaml
name: Your Site Name
author: Your Name
url: "https://your-domain.com"
```

### Styling with Tailwind

- Main CSS entry: `src/static/css/tailwind.css`
- Customize theme: `tailwind.config.js`
- Tailwind classes available in all templates
- Typography plugin included for markdown content

### Templates

- Uses Nunjucks (`.njk`) and Liquid (`.md`) templating
- Layouts in `src/_includes/`
- Global data in `src/_data/`

## Deployment to Netlify

### Prerequisites

1. GitHub account
2. Netlify account
3. Code pushed to GitHub repository

### Deployment Steps

1. **Create GitHub repository:**
   ```bash
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin master
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings (should auto-detect from `netlify.toml`):
     - Build command: `npm run build`
     - Publish directory: `_site`
   - Click "Deploy site"

3. **Enable Netlify Identity:**
   - Go to Site settings → Identity
   - Click "Enable Identity"
   - Under Registration preferences, choose "Invite only" (recommended)
   - Go to Services → Git Gateway
   - Click "Enable Git Gateway"

4. **Configure Identity Widget:**
   - Already configured in `src/admin/index.html`
   - Uses Netlify Identity for authentication

5. **Invite Users:**
   - Go to Identity tab
   - Click "Invite users"
   - Send invite to your email
   - Complete registration via email link

6. **Access CMS:**
   - Visit `https://your-site.netlify.app/admin`
   - Log in with Netlify Identity
   - Start managing content!

### Post-Deployment Configuration

**Update Settings in CMS:**
1. Go to `/admin`
2. Navigate to "Settings" → "Meta Settings"
3. Update site name, author, and production URL

**Update Email Templates (Important):**
- Go to Netlify dashboard → Identity → Emails
- Change confirmation/recovery URLs from `{{ .SiteURL }}/#...` to `{{ .SiteURL }}/admin/#...`

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

# Debug mode
npm run debug
```

## Important Notes

### Git Gateway vs GitHub Backend

The CMS is configured to use `git-gateway` which:
- Works with Netlify Identity
- No GitHub OAuth app setup required
- Handles commits via Netlify API
- Perfect for teams with non-technical editors

To switch to direct GitHub authentication:
1. Edit `src/admin/config.yml`
2. Change backend:
   ```yaml
   backend:
     name: github
     repo: yourusername/your-repo
     branch: master
   ```
3. Set up GitHub OAuth application

### Content Storage

- All content is stored in Git
- CMS creates commits on every save
- Version control for content built-in
- Can edit content files directly or via CMS

### Media Uploads

- Media uploaded via CMS goes to `src/static/img/`
- Accessible at `/static/img/filename.jpg`
- Committed to Git (consider Git LFS for many large files)

### Local CMS Access

For local development, the CMS works without authentication thanks to `local_backend: true`.

To use the local backend with the proxy server:
```bash
npx netlify-cms-proxy-server
```

## Troubleshooting

### Build fails with Tailwind warnings
- Fixed: Tailwind config now uses specific paths instead of `./**/*.html`

### CMS shows "Error loading config"
- Check `src/admin/config.yml` syntax
- Ensure proper YAML indentation
- Verify media_folder and public_folder paths

### CMS login fails on Netlify
- Verify Identity is enabled
- Check Git Gateway is enabled
- Ensure user is invited and registered

### Images not showing after CMS upload
- Check `public_folder` matches `media_folder` structure
- Verify Eleventy passthrough copy includes image folder

## Next Steps

1. **Customize Design:**
   - Update Tailwind theme in `tailwind.config.js`
   - Modify templates in `src/_includes/`
   - Add custom components

2. **Add Content Types:**
   - Projects/Portfolio
   - Team members
   - Services
   - Testimonials

3. **Enhance Features:**
   - Add contact form (Netlify Forms)
   - Implement search
   - Add RSS feed
   - Set up sitemap

4. **Performance:**
   - Optimize images (consider @11ty/eleventy-img plugin)
   - Add cache headers
   - Implement lazy loading

5. **SEO:**
   - Add meta tags
   - Implement structured data
   - Configure social sharing cards

## Resources

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Alpine.js Documentation](https://alpinejs.dev/)

## License

This project template is based on neat-starter by Surjith S M.

---

**Created with Claude Code**
Generated on 2025-11-01
