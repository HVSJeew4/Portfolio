# Subhash Jeewantha Portfolio + Engineering Blog

Modern dark-theme portfolio and markdown-based developer blog for an Associate Software Engineer specializing in Microsoft Power Platform.

## Tech Stack

- React + Vite
- React Router
- Tailwind CSS
- Framer Motion
- react-markdown
- gray-matter

## Features

- Portfolio homepage with projects, skills, experience, and contact sections
- Markdown-powered blog with clean URLs at `/blog/:slug`
- Blog archive with latest-first sorting and tag filtering
- Reading-time estimates and portfolio CTAs inside each article
- Homepage "Latest Articles" section tied directly to blog content

## Project Structure

```text
src/
  blog/
    posts/
    BlogList.jsx
    BlogPost.jsx
    blogUtils.js
  components/
  pages/
  sections/
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Adding New Blog Posts

Create a new markdown file in `src/blog/posts` with frontmatter like this:

```md
---
title: "How I Built a Vehicle Maintenance System Without IoT"
date: "2026-04-01"
tags: ["Power Apps", "System Design"]
excerpt: "A practical approach to building scalable maintenance tracking systems without IoT devices."
---

# Content starts here
```
