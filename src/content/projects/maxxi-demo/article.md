---
title: MAXXI Demo - AI Story Explanation
category: AI experience
summary: An interactive museum demo where visitors ask questions and get contextual AI explanations tied to artworks and exhibition narratives.
techs: Next.js, TypeScript, OpenAI API, Prompt Engineering, TailwindCSS
image: cover.png
status: draft
publishedAt: 2026-01-05
---

MAXXI Demo was built as a narrative layer for museum visitors. The goal was to make exhibitions easier to explore through natural language while preserving curatorial intent.

Instead of reading static labels only, visitors could ask free-form questions about artworks, authors, and historical context, then receive concise, guided explanations adapted to the conversation.

## Product Direction

The product focused on one core behavior: fast understanding without losing depth.

That meant:

- Turning long art descriptions into conversational answers
- Keeping explanations grounded in curated exhibition context
- Structuring responses so they remain readable on mobile screens during a visit

## Implementation

I designed the interaction flow end to end: user prompt intake, context retrieval, prompt orchestration, answer rendering, and fallback handling.

A major part of the implementation was response control. Museum content can be dense and nuanced, so the assistant had to stay informative but not verbose, and accurate without sounding robotic.

## Delivery Outcome

The result was a lightweight AI experience that made stories behind artworks easier to access for a wider audience. It worked as a bridge between expert curation and visitor curiosity.
