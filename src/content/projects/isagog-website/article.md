---
title: Isagog Website
category: Showcase website
summary: A brand showcase website with an MDX-powered blog pipeline for publishing and managing editorial content.
techs: Next.js, TypeScript, MDX, Content Architecture, TailwindCSS
image: cover.png
status: published
publishedAt: 2025-07-20
externalUrl: https://isagog.com/
---

Isagog needed to modernize an outdated website without losing clarity or brand consistency. The goal was straightforward: deliver a faster, cleaner platform that looks premium, supports bilingual content, and stays easy to maintain over time.

I rebuilt the website with Next.js and deployed it to Isagog's personal VPS at [isagog.com](https://isagog.com). The work covered both the public showcase experience and the editorial workflow behind it.

## Starting Point And Constraints

The client was highly detail-oriented. The Figma design was treated as a strict contract, not a loose reference. Every layout choice, animation timing, spacing decision, and responsive behavior had to match what was approved in design reviews.

This was not just a visual migration. It was also a structural migration from a legacy website to a modern Next.js stack with a future-proof content model.

## What I Implemented

### 1) Full Frontend Integration From Figma

I handled the full implementation of the design system directly from Figma:

- Pixel-accurate page structure across breakpoints
- Closely inspected transitions and light animations
- Consistent typography and spacing behavior from desktop to mobile

The main challenge here was preserving visual precision while keeping the frontend maintainable.

### 2) Bilingual Website (Italian + English)

The website supports both Italian and English content. This was integrated as part of the core architecture, so users can navigate the site naturally in either language without breaking page structure or SEO consistency.

### 3) MDX Blog Architecture

The blog is powered by MDX so content can be written as files and rendered dynamically by the application.

At a practical level, the system provides:

- Article-level metadata for indexing and previews
- Dynamic listing pages that automatically aggregate published articles
- Dynamic article routes where readers can open each post and read full content

This keeps publishing simple for content updates while preserving structure and scalability.

### 4) SEO And Social Metadata

The SEO layer was implemented comprehensively, including:

- Page metadata
- Open Graph tags
- Twitter/social sharing metadata
- Search-friendly indexing structure

The objective was to make the website discoverable and correctly represented across search engines and social platforms.

### 5) CI/CD To Isagog Personal VPS

Deployment is automated through GitHub Actions and targets Isagog's personal VPS. The pipeline handles build and release steps so updates can be shipped reliably without manual deployment routines.

## Outcome

The new website is live and stable at [https://isagog.com](https://isagog.com). It replaced the old platform with a modern, bilingual, SEO-ready implementation and a practical MDX editorial workflow.

From a delivery perspective, this project demonstrates precise frontend execution under strict design requirements, combined with production-grade deployment and content architecture.
