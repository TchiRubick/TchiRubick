---
title: Revly Insight App
category: Website
summary: A restaurant performance analysis app with a guided calculator, dynamic benchmarking, automated lead capture, and internal alerts.
techs: Nextjs, Typescript, Hono, Zod, Vercel, Slack API, HubSpot API, TailwindCSS
image: cover.png
status: published
publishedAt: 2025-07-15
externalUrl: https://insights.gorevly.com/food-delivery-app-health-calculator
---

Revly Insight was designed as a structured lead-intelligence system for restaurant operators. Many owners can provide revenue, discount spend, ad spend, and food cost, but they lack a fast way to translate those inputs into a clear operational signal. The objective was to give them a credible first answer while simultaneously creating a qualified, structured intake flow for the internal team.

I led the architecture and delivered the full product end to end: UX flow, calculation engine, API layer, dynamic benchmarking logic, HubSpot synchronization, Slack notifications, SEO optimization, and deployment.

## From Raw Inputs to Directional Intelligence

The calculator intentionally limits friction. It asks for the minimum set of data most operators can provide quickly: contact details, revenue, cuisine, number of brands and locations, discount spend, ad spend, and food cost percentage.

Behind the interface, inputs are validated with Zod and processed through a deterministic scoring layer enriched with dynamic benchmarks derived from Revly’s internal performance dataset. Benchmark comparisons adapt based on relevant segmentation factors such as operator profile and context.

The output is directional rather than exhaustive. It surfaces risk signals, highlights priority actions, and positions performance relative to comparable competitors and local market context. The goal is not to replace consulting analysis, but to provide a structured first diagnostic that naturally leads into deeper strategy discussions.

## Architecture Overview

The flow follows a predictable, controlled path:

Form → Zod Validation → Calculation & Benchmark Engine → Result Rendering → HubSpot Sync → Slack Alert

API routes are handled using Hono for a lightweight and explicit routing layer. This allowed clean separation between validation, business logic, and integration concerns while keeping the codebase small and maintainable.

## Product Value + Operational Routing

The calculator doubles as a real intake system.

Once a submission is completed:

- The lead is synced to HubSpot with structured metadata.
- A Slack alert is dispatched with contextual performance signals.
- The team gains immediate visibility for follow-up.

This removes manual qualification steps and ensures every submission follows the same deterministic pipeline from input to internal action.

## SEO and Performance

The application leverages Next.js for strong SEO performance, enabling search visibility for food delivery performance-related queries. Pages are optimized for indexability and load performance, contributing to a 90+ Lighthouse performance score.

## Deployment and Delivery

The project was designed to be lean and efficient. It was shipped in under a week using Vercel’s native environment management and deployment workflow. Environment-based configuration was sufficient for integration management without adding unnecessary operational complexity.

The implementation prioritizes:

- Strict input validation
- Predictable scoring logic
- Deterministic output generation
- Clean integration boundaries

The result is a fast, reliable calculator that operates as both a user-facing insight tool and an internal qualification engine.

## Example Scenario (Anonymized)

A representative case: a single-brand, two-location operator in the UAE enters monthly revenue near AED 100k, moderate discount spend, low ad spend, and mid-range food cost. The system evaluates performance against dynamic benchmarks, highlights risk indicators, proposes prioritized next actions, and positions the operator against comparable competitors before inviting a deeper strategic review.
