# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages as a static website.

## Prerequisites

1. GitHub account
2. Git installed on your computer

## Step-by-Step Setup

### 1. Create GitHub Repository

1. Go to GitHub and create a new repository
2. Name it `ashutosh-portfolio` (or any name you prefer)
3. Make sure it's public (required for free GitHub Pages)
4. Don't initialize with README (we'll push existing code)

### 2. Prepare Your Local Repository

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio commit"

# Add GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ashutosh-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. Make sure your repository is public (required for free GitHub Pages)
6. The workflow will automatically trigger on your next push

**Important**: If the build fails initially, go to the "Actions" tab in your repository to see detailed error logs.

### 4. Update Repository Name (if needed)

If your repository name is different from `portfolio`, update the base path:

1. Open `vite.config.static.ts`
2. Change the `base` property to match your repository name:
   ```typescript
   base: "/your-repository-name/"
   ```

### 5. Custom Domain (Optional)

If you have a custom domain:

1. Update the CNAME line in `.github/workflows/deploy.yml`:
   ```yaml
   cname: your-domain.com
   ```
2. In your domain provider's DNS settings, create a CNAME record pointing to `YOUR_USERNAME.github.io`

## What Happens During Deployment

1. GitHub Actions automatically builds the static version
2. Contact form uses `mailto:` links instead of API calls
3. Resume download works directly from the static files
4. All interactive features work without a backend

## Accessing Your Site

Once deployed, your portfolio will be available at:
- `https://YOUR_USERNAME.github.io/portfolio/`
- Or your custom domain if configured

## Updating Your Portfolio

To update your portfolio:

1. Make changes to your code
2. Commit and push to the main branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. GitHub Actions will automatically rebuild and deploy

## Key Differences from Full-Stack Version

- **Contact Form**: Opens email client instead of storing in database
- **Resume Download**: Direct download from static files
- **No Backend**: Pure frontend React application
- **Fast Loading**: Optimized static files served via CDN

## Troubleshooting

### Build Fails
- Check the Actions tab in your GitHub repository for error details
- Ensure all dependencies are in `package-static.json`
- Verify the repository is public (private repos need GitHub Pro for Pages)
- Check that the workflow has proper permissions in repository settings

### 404 Errors
- Verify the repository name in `vite.config.static.ts` base path
- Check that GitHub Pages is enabled in repository settings

### Styling Issues
- Clear browser cache
- Check console for any missing asset errors

### Contact Form Not Working
- Ensure user has email client configured
- Test the `mailto:` links manually

## File Structure for Static Deployment

```
dist/                          # Built static files
├── index.html                 # Main HTML file
├── assets/                    # CSS, JS, and other assets
│   ├── index-[hash].css
│   └── index-[hash].js
└── Ashutosh_Yesekar_Latest.pdf # Resume file
```

## Performance Benefits

- **Fast Loading**: Static files served from GitHub's CDN
- **SEO Friendly**: Server-side rendered HTML
- **No Server Costs**: Completely free hosting
- **High Availability**: GitHub's robust infrastructure

Your portfolio will be live and accessible to potential employers worldwide!