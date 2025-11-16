# GitHub Pages Deployment Configuration

## Critical Settings - DO NOT MODIFY

This document outlines critical deployment settings for the Cognaterra website that **must not be changed** by automated tools or AI assistants.

### Deployment Workflow (`.github/workflows/deploy.yml`)

**PROTECTED SETTINGS:**

1. **Branch Configuration:**
   - Deployment branch: `main`
   - Do not change the branch trigger or add additional branches

2. **Build Output Directory:**
   - Path: `./dist`
   - This is the Vite build output directory and must remain unchanged

3. **Node Version:**
   - Version: `20`
   - Keep consistent with project requirements

4. **GitHub Actions Versions:**
   - `actions/checkout@v4`
   - `actions/setup-node@v4`
   - `actions/upload-pages-artifact@v3`
   - `actions/deploy-pages@v4`
   - Only update if security patches are required

5. **Workflow Permissions:**
   ```yaml
   permissions:
     contents: read
     pages: write
     id-token: write
   ```
   These are required for GitHub Pages deployment and must not be modified

### Custom Domain Configuration

- **Domain:** cognaterra.co.uk
- Configured in GitHub repository settings
- DNS settings are managed externally
- Do not add or modify CNAME files in the repository

### Vite Configuration (`vite.config.ts`)

**PROTECTED SETTINGS:**
- `base: '/'` - Required for custom domain routing
- Do not change the base path

### Why These Settings Matter

- The workflow is specifically configured for GitHub Pages with a custom domain
- Changes to these settings will break the deployment pipeline
- The site will stop updating when commits are pushed to main
- Domain routing may break if base path is modified

### Making Changes

If changes to the deployment configuration are needed:
1. Consult with the repository owner (@chrisbrayne)
2. Test changes in a separate branch first
3. Verify the custom domain continues to work
4. Document any changes made

---

**Last Updated:** 2025-11-16
**Maintainer:** @chrisbrayne
