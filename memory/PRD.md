# Delta Moto — PRD

## Problem Statement
One-page marketing website for "Delta Moto," a Montreal-based motorcycle transport, detailing & storage service. Build closely follows the provided brand identity guide + reference mockup, elevated to an Awwwards-level experience.

## Type
Frontend-only marketing site (React). No backend / no auth. Contact form is client-side validation only.

## Architecture
- React (CRA + craco), Tailwind, framer-motion (scroll reveals, kinetic hero, parallax), lenis (smooth momentum scroll), embla-carousel-react (gallery), sonner (toasts), lucide-react (icons).
- Custom fonts: Oswald/Anton (display, italic uppercase gold-underline signature), Helvetica Neue LT (body, self-hosted via @font-face from provided .otf artifacts).
- Uploaded Delta Moto logo artwork used directly (white/gold on dark).

## Brand System (fixed)
bg #121212 · surface #1C1C1C · gold #C9A227 · blue #4A7FB5 · white #FFFFFF · body #C9C9C9 · muted #6E6E6E.

## Implemented (2026-06)
- Sticky glass nav, centered logo, smooth-scroll links (Home/Services/About/Contact) + mobile hamburger.
- Kinetic hero: parallax B&W motorcycle, masked line-by-line tagline reveal, logo overlay, CTA.
- "Transport / Detail / Store / Repeat" editorial marquee.
- "Our Mission" split section (gold-framed photo + gold-outline Learn More).
- "Your Experience" 3-step numbered grid (Transport/Detailing/Storage) with gold-framed photos.
- "The Delta Way" carousel: autoplay + arrows + dots.
- Contact: client-validated form (sonner success toast), phone/address/hours, embedded Google Map, IG/FB links, footer.
- Tested 100% frontend (iteration_1) — all flows pass, no bugs.

## Backlog / Remaining
- P1: Real photography swap (client to provide).
- P2: Pause carousel autoplay on tab-hidden/hover; aria-invalid on form errors.
- P2: Optional backend to persist/email contact submissions.
