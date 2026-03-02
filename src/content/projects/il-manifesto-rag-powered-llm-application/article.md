---
title: Il Manifesto RAG-powered LLM application
category: Web application
summary: An AI-first newsroom platform combining a configurable RAG chatbot, article intelligence layers, and semantic search with Weaviate and SPARQL.
techs: Next.js, TypeScript, Weaviate, SPARQL, shadcn/ui, Hono, Playwright, Docker, GitHub Actions, Clerk, i18n, TailwindCSS
image: cover.png
status: published
publishedAt: 2025-06-01
---

This project was built for a newspaper context, with one core objective: make large editorial archives explorable through AI without losing journalistic depth.

It was also my first deep experience designing an AI product structure end to end. I worked alongside very senior engineers with strong AI backgrounds, and the collaboration pushed the technical bar of the project from the beginning.

## Conversational Layer: RAG + Editorial Discovery

The main experience is a chatbot inspired by ChatGPT patterns, but adapted for news exploration. Users can ask open questions and receive contextual answers enriched with related articles, not just plain text responses.

The assistant behavior is configurable, including:

- Temperature
- Number of returned articles
- Response structure and handling logic
- Error handling across model and retrieval paths

RAG orchestration was exposed through an API layer, while retrieval components were integrated into the Next.js application.

## Article Intelligence Experience

Clicking into an article opens a richer AI-generated analysis flow, not only the raw text.

Each article view includes:

- An AI-generated breakdown
- Entity separation (for example people, groups, events)
- A location mapping module with markers and AI-written place descriptions (MeMa)
- The full original article for source-level reading

The goal was to let users move from quick synthesis to full verification in one continuous experience.

## Search Engine Layer

A dedicated search section complements chat exploration. Users can query directly and get article results in a familiar search-engine format, with highlights and contextual relevance cues.

This part combines:

- Weaviate for semantic/vector retrieval
- SPARQL for structured querying paths

Together, they provide both semantic flexibility and structured precision depending on the query type.

## Access Control and Product Constraints

Authentication used Clerk (free tier), but access rules were implemented with custom restrictions rather than relying only on built-in defaults.

I added domain-based filtering plus a whitelist strategy for specific email addresses to control who could use the platform during rollout phases.

## Infrastructure, QA, and Delivery

Infrastructure and automation were built around Docker (Compose) and GitHub Actions, with test and deployment workflows executed through a personal runner setup.

Playwright covered full application flows end to end, including chat, article exploration, and search interactions, to reduce regressions in a multi-feature AI product.

## What This Project Changed for Me

This was the first project where I had to think beyond "call an LLM and show an answer." I had to design behavior under uncertainty: variable model responses, retrieval misses, and UX expectations shaped by ChatGPT-level products.

The biggest learning was balancing flexibility and control. In AI products, quality comes from the surrounding system design: retrieval strategy, response constraints, failure handling, and how users can verify outputs against source material.
