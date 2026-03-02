---
title: Radio Grand Ciel Podcast App
category: Mobile application
summary: A rescued and rebuilt podcast app delivered to production on iOS and Android with background listening, subscriptions, and push notifications.
techs: React Native, Expo, TypeScript, WordPress API
image: cover.png
status: published
publishedAt: 2025-01-03
externalUrl: https://play.google.com/store/apps/details?id=fr.radiograndciel.radiograndciel&hl=fr
---

This project started as a recovery mission. The original development had stalled in the middle of delivery, and I was asked to step in, stabilize the work, and finish the contract with a production-ready result.

The first phase was an audit of the inherited codebase: what could be trusted, what was fragile, and what would delay shipping if kept as-is. The conclusion was clear. Incremental patching would take longer and stay brittle, so I chose to rebuild most of the app while keeping the existing React Native + Expo direction.

During that rebuild, I simplified state handling and removed Zustand because it did not bring meaningful value for this product scope. The priority was straightforward behavior, maintainable flows, and fewer moving parts under deadline pressure.

At that stage, my mindset was simple: avoid clever architecture and focus on decisions that make the app easier to ship, debug, and operate.

## Rebuilding Under Delivery Pressure

The goal was clear: deliver a stable app that works for everyday listeners, not just for demo scenarios.

I implemented the full feature set, including:

- Podcast discovery and episode browsing
- In-app subscriptions to shows
- Audio player behavior and background listening
- Push notifications for new content

Beyond feature completion, the key challenge was reliability across real mobile usage patterns: app in background, interrupted sessions, returning to playback, and notification-driven re-entry. The work was less about flashy UI and more about predictable behavior over time.

## Architecture and Product Decisions

A major part of the rewrite was rebuilding the flow boundaries so each core capability had a clear responsibility: content retrieval, playback control, subscriptions, and notification handling.

That separation improved both delivery speed and debugging. When issues happened, it was easier to locate the failing area and patch without destabilizing unrelated features.

I also focused on keeping the user path simple. Listeners open the app, find a show quickly, continue playback without friction, and get notified when new episodes are available. For this product, that consistency mattered more than feature volume.

## WordPress API Reality

The backend API was built on WordPress. I am not a WordPress specialist, so part of the job was learning quickly while building against a live, evolving API surface.

Compared to strongly typed workflows, this was the hardest part of the project. WordPress APIs and plugin-driven behavior can shift in ways that are difficult to predict in advance, especially during active development on a live server.

To keep the mobile app robust, I handled integration defensively: validating responses, accounting for inconsistent payloads, and adapting client logic as backend behavior evolved. It was a constant tradeoff between moving fast and protecting app stability.

## Shipping to Stores

I managed publication for both iOS and Android and carried the project from incomplete handoff to production release. That included final technical preparation, release coordination, and the practical details needed to get both store deliveries across the finish line.

The final outcome was a working podcast app listeners could rely on for daily use, with stable playback, timely notifications, and a cleaner end-to-end experience than the inherited build.

More importantly, the project moved from uncertainty to operational continuity: a stalled contract became a shipped product.

## What I Learned

This project reinforced three lessons for me:

- In takeover projects, speed comes from simplifying architecture, not adding more tooling.
- Mobile media products win on consistency and reliability more than feature count.
- When backend contracts are unstable, defensive integration and clear client boundaries are the difference between "working in staging" and "working in production."

It also pushed me outside my comfort zone on the backend side. Working against a WordPress API under real delivery pressure was difficult, but it improved how I approach uncertainty in cross-stack projects.
