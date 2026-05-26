# NYC Checker Flag Grill — Website Redesign Demo

Modern, mobile-first redesign demo for **NYC Checker Flag Grill** (Maspeth, Queens). Built with React, Vite, and Tailwind CSS.

**Live site:** [https://astridbonoan.github.io/checkerflaggrill.io/](https://astridbonoan.github.io/checkerflaggrill.io/)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages (Deploy from branch)

This repo uses **GitHub Actions** to build the site and push static files to the **`gh-pages`** branch.

After the first successful workflow run, enable Pages in the repo:

1. **Settings → Pages**
2. **Build and deployment → Source:** Deploy from a branch
3. **Branch:** `gh-pages` / **Folder:** `/ (root)`
4. Save

Pushes to `main` automatically rebuild and redeploy.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
