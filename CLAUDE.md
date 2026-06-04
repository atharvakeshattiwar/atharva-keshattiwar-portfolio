# Portfolio Website — Build Guide

## Stack
- React 19 + Vite 8 + Tailwind CSS 4 + GSAP
- react-router-dom v7 for routing
- All custom CSS in `src/index.css` (~5000 lines)
- No CMS — content lives in `src/data/projectsData.js`

## Design Tokens (CSS Variables)

```css
/* Fonts */
--font-inter: 'Inter', sans-serif;
--font-aspekta: 'Aspekta', Arial, sans-serif;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

/* Colors */
--color-primary-black: #000;
--color-primary-white: #fff;
--color-primary-bg: #f6f6f6;
--color-black-900: #0c0407;
--color-black-800: #333;
--color-black-700: #4c4c4c;
--color-black-600: #666;
--color-black-500: grey;

/* Layout */
--global-wrapper: 77.5rem;     /* 1240px max-width */
--global-padding: 1.25rem;     /* 20px */
--global-margin: 9.375rem;     /* 150px section gap */
```

## Responsive Breakpoints

Every section MUST include styles for all 4 breakpoints in a single pass:

| Breakpoint | Media Query | Wrapper | Padding | Notes |
|---|---|---|---|---|
| Desktop | default | 77.5rem (1240px) | 20px | Base styles |
| Large Desktop | min-width: 1280px | — | — | Title font-size bumps |
| Tablet | max-width: 991px | 100% | 16px | Nav collapses to hamburger |
| Mobile Landscape | max-width: 767px | 100% | 12px | Grids become 2-col, smaller gaps |
| Mobile Portrait | max-width: 479px | 100% | 8px | Stacked layouts, tighter spacing |

## Typography

| Element | Font | Size | Weight | Line-Height | Letter-Spacing | Color |
|---|---|---|---|---|---|---|
| Hero title | Aspekta | 244px (desktop) | 600 | 0.9em | -14.64px | #000 |
| Section headline | Inter | 48px | 600 | 56px | -1.44px | #0c0407 |
| Body text | Inter | 14px | 400 | 20px | -0.14px | #333 |
| Info label | Inter | 14px | 400 | 20px | -0.14px | #0c0407 |
| Info value | Inter | 16px | 500 | 28px | -0.16px | #0c0407 |
| HR line | — | 1px height | — | — | — | #d3d3d3 bg |

## Section Building Pattern

Every section follows this structure:
```
section.{prefix}-section
  div.{prefix}-wrapper          (max-width: var(--global-wrapper), margin: 0 auto, padding: 0 var(--global-padding))
    div.{prefix}-content        (inner flex/grid container)
```

## Case Study Page Layout

Page structure top to bottom:
1. **CaseStudyHero** — title (hero-headline-text centered) + hr line + 4 info columns + full-width hero image
2. **Rich text block 1** — "Overview" heading (h3, 48px/600) + paragraphs (14px/400). Max-width: 50% desktop, 100% mobile
3. **Image block** — full-width big image + side-by-side dual images (flex, gap: 20px)
4. **Rich text block 2** — "Problems" + "Solutions" headings with paragraphs
5. **Image block** — same pattern as #3
6. **Footer**

### Case Study CSS Values

**Project main wrapper:**
- max-width: 1240px, padding: 0 20px, margin: 0 auto

**Rich text blocks:**
- Desktop: max-width: 50%, margin-bottom: 80px, padding-right: 56px
- Mobile: max-width: 100%, margin-bottom: 40px, padding-right: 0

**Image blocks:**
- Desktop: display: flex, gap: 20px, margin-bottom: 60px
- Mobile: gap: 8px, margin-bottom: 40px

**Big image:** width: 100%, border-radius: 0

**Multi-image row:** display: flex, gap: 20px (desktop), 8px (mobile)

## Project Data Structure

All project content lives in `src/data/projectsData.js`:
```js
{
  'slug': {
    title: 'Project Name',
    heroImage: importedImage,
    info: [
      { label: 'Project Name', value: '...' },
      { label: 'Industry', value: '...' },
      { label: 'Headquarters', value: '...' },
      { label: 'Timeline', value: '...' },
    ],
    overview: { heading: '...', paragraphs: ['...'] },
    images: { big: img, small: [img1, img2] },
    problemSolution: [
      { heading: '...', paragraphs: ['...'] },
      { heading: '...', paragraphs: ['...'] },
    ],
  }
}
```

## Animation Pattern

All animated elements use:
```css
.animate-fade-in {
  opacity: 0;
  transform: translateY(1.5rem);
  transition: opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```
Triggered via IntersectionObserver or staggered setTimeout on mount.

## Key Files

| File | Purpose |
|---|---|
| `src/App.jsx` | Routes: /, /about-me, /projects, /contact, /project/:slug |
| `src/index.css` | All styles (~5000 lines), organized by section with responsive blocks at bottom |
| `src/data/projectsData.js` | Case study content for all projects |
| `src/pages/ProjectDetail.jsx` | Dynamic project page, reads slug from URL |
| `src/components/CaseStudyHero.jsx` | Hero section for case study pages |
| `src/components/Navbar.jsx` | Global nav |
| `src/components/Footer.jsx` | Global footer |

## Rules

1. **Responsive-first:** Never write desktop-only CSS. Write base + all 3 media queries together.
2. **Verify visually:** Take screenshots at all 4 viewports and compare before done.
4. **Section-by-section:** Build one section at a time. Confirm with user before moving to next.
5. **No flex margin collapse traps:** Flex containers don't collapse margins — never double up margin-bottom on parent + last child.
6. **CSS location:** Add responsive rules inside the existing media query blocks at lines ~3648 (991px), ~4012 (767px), ~4498 (479px). Don't create new media query blocks.
