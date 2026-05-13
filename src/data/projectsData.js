import heroImg1 from '../assets/works/designova.avif'
import heroImg2 from '../assets/works/brandflux.avif'
import heroImg3 from '../assets/works/creativox.avif'
import heroImg4 from '../assets/works/webion.avif'
import heroImg5 from '../assets/works/monvera.avif'
import heroImg6 from '../assets/works/graphora.png'

import phHero from '../assets/case-studies/pizza-hut/01-hero-cover.png'
import phGlance from '../assets/case-studies/pizza-hut/02-at-a-glance.png'
import phProblem from '../assets/case-studies/pizza-hut/03-problem-funnel.png'
import phPitch from '../assets/case-studies/pizza-hut/04-pitch-screens.png'
import phOptimised from '../assets/case-studies/pizza-hut/05-optimised-for.png'
import phTargets from '../assets/case-studies/pizza-hut/06-targets.png'
import phBuilt1 from '../assets/case-studies/pizza-hut/07-what-we-built-1.png'
import phBuilt2 from '../assets/case-studies/pizza-hut/08-what-we-built-2.png'
import phBuilt3 from '../assets/case-studies/pizza-hut/09-what-we-built-3.png'
import phExecution from '../assets/case-studies/pizza-hut/10-execution.png'
import phShipped from '../assets/case-studies/pizza-hut/11-shipped.png'
import phNext from '../assets/case-studies/pizza-hut/12-whats-next.png'
import phLearnings from '../assets/case-studies/pizza-hut/13-learnings.png'
import phAvatar from '../assets/case-studies/pizza-hut/testimonial-avatar.jpeg'

const projectsData = {
  'pizza-hut-malaysia': {
    title: 'Pizza Hut',
    heroImage: phHero,
    info: [
      { label: 'Project Name', value: 'Pizza Hut Malaysia' },
      { label: 'Industry', value: 'Omnichannel, B2C Commerce, QSR' },
      { label: 'Headquarters', value: 'Kuala Lumpur, MY' },
      { label: 'Timeline', value: '2025 - 2026' },
    ],
    subtitle: 'Led end-to-end omnichannel transformation for Pizza Hut Malaysia — won a $5M, 5-year engagement, then designed a unified ordering system targeting an 85% top-of-funnel drop-off across web, app, and kiosk for ~4.9M customers.',
    services: 'Product Strategy, Research, UX Architecture, Lead Design, Stakeholder Management, Design QA',
    liveLink: 'https://pizza-hut-uat.fynd.io/',
    sections: [
      {
        type: 'embed',
        embedType: 'youtube',
        videoId: 'Yinug9BxuZM',
      },
      {
        type: 'text',
        heading: 'At a Glance',
        paragraphs: [
          '<strong>Outcome:</strong> Won a $5M engagement (3+2 years) to rebuild Pizza Hut Malaysia\'s digital ordering across channels.',
          '<strong>Scale:</strong> ~4.9M customers (client base).',
          '<strong>Platforms:</strong> Mobile app, Web, Self-checkout/Kiosk, backed by Fynd Commerce OMS (which I own as design lead).',
          '<strong>Timeline:</strong> Pitch (May 2025) → Build (from Jul 2025) → Phase 1 ship Apr 2026.',
          '<strong>My role:</strong> Design Lead + Design SPOC + primary client presenter. I owned product strategy, research, UX architecture, and end-to-end UI flows; we executed with engineering through dev reviews and QC.',
          '<strong>Team:</strong> I led 2 designers (Mobile + Web & Tablet) + partnered tightly with Engineering + Product + Client stakeholders.',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phGlance,
      },
      {
        type: 'text',
        heading: 'Problem',
        paragraphs: [
          'PHM\'s owned channels had demand, but the ordering <strong>funnel leaked</strong> before users could reliably see the right menu and pricing for their location.',
          '<strong>Macro channel problem (where orders come from):</strong> Order volume was heavily split across Offline takeaway (38%) and Food Aggregators (36%), while owned <strong>digital lagged (App 17%, Website 2%)</strong>. That\'s a margin + loyalty + data ceiling unless owned conversion improves. Owned channels had meaningful AOV headroom (e.g., Website AOV ~RM 40.99, App AOV ~RM 35.84, BYOD ~RM 58.69) — the problem wasn\'t value; it was funnel leakage.',
          '<strong>Funnel reality (where users drop):</strong> Web conversion lagged massively vs app: Web user <strong>CR ~5.3% vs iOS ~32.5% and Android ~33.9%</strong>. The single biggest leak was localisation on web: 101,294 sessions → 79% engaged → <strong>only 15% "localise success" → 11% add-to-cart → 8% checkout → 5% purchase</strong>. That means <strong>~85% of users failed before we could even show accurate menu/pricing</strong> (the point where QSR ordering becomes "real"). Checkout also underperformed on web: <strong>63%</strong> completion vs App <strong>~80%</strong>.',
          '<strong>User pain (qual + quantified):</strong> From review analysis + UX findings, the most recurring problem clusters were:',
        ],
        bullets: [
          'App crashes & technical bugs (16.3%) including checkout/payment instability.',
          'Location & address issues (12.4%) (GPS overrides, pin loops, "area not covered" shown late).',
          'Payment & pricing issues (8.5%).',
          'Delivery service issues (11.1%) and order-management gaps (7.2%).',
        ],
        afterBullets: '<strong>Product constraint that made this harder:</strong> <strong>~70%</strong> of transactions were <strong>combos</strong>, so we couldn\'t "simplify" by removing complexity — we had to make complex ordering feel effortless and resilient to stock/pricing changes.',
      },
      {
        type: 'images',
        layout: 'full',
        big: phProblem,
      },
      {
        type: 'text',
        heading: 'Pitch that won the deal',
        paragraphs: [
          'Before opening Figma, I audited PHM\'s existing app and 3 competing QSR platforms in the region. Every single one had the same failure: localisation was treated as a screen, not a system state. That audit became the design thesis — fix localisation as infrastructure, not as UI.',
          'We had 2 days to make the pitch real. I led a 3-person design sprint across onboarding, localisation, browsing, combos, and checkout — producing <strong>150+ screen states</strong> across mobile and desktop, and presented it on-site in Malaysia.',
          'What mattered: we didn\'t sell screens — we sold a working omnichannel system:',
        ],
        bullets: [
          'Localisation and checkout conversion',
          'Mix & Match (Combo Builder)',
          'Kiosk / Self-checkout',
          'App + Web omnichannel parity',
          'Loyalty / Value Meals',
          'AI-assisted checkout (later phase)',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phPitch,
      },
      {
        type: 'text',
        heading: 'What I optimised for',
        paragraphs: [
          'Users don\'t think in "modules." They think: <em>"Show me what I can order, at my location, right now — fast."</em> So my core bet was:',
        ],
        bullets: [
          'Make localisation invisible when possible.',
          'Make it reversible when needed.',
          'Never allow it to corrupt cart validity, pricing integrity, or store serviceability. <em>That single bet shaped architecture, UI, and dev rules.</em>',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phOptimised,
      },
      {
        type: 'text',
        heading: 'Targets (pre-launch)',
        paragraphs: [
          'These were defined before launch to keep the team honest and instrumentation-ready.',
        ],
        bullets: [
          '<strong>North-star:</strong> Increase purchase conversion on owned channels by fixing early trust + friction.',
          '<strong>Localisation:</strong> Web "localise success": <strong>15% → ≥80%</strong> (Equivalent to >80% reduction in localisation drop-off). App: <strong>65% → ≥80%</strong>. Address/GPS failure events: <strong>-50%</strong>.',
          '<strong>Add-to-cart:</strong> Web ATC rate: <strong>11% → ≥18%</strong>. Combo completion: <strong>≥95%</strong> once a user starts a combo flow (no dead ends).',
          '<strong>Checkout:</strong> Web checkout completion: <strong>63% → ≥75%</strong>. Reduce "session expired" occurrences: <strong>-50%</strong>.',
          '<strong>Retention drivers:</strong> Increase reorder conversion: <strong>+20%</strong>. Increase rewards engagement: <strong>+25%</strong>.',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phTargets,
      },
      {
        type: 'text',
        heading: 'What we built and why it worked',
        paragraphs: [
          '<strong>1) Auto-localisation that doesn\'t feel like a gate</strong><br/>The original experience forced users to "set context" before they could meaningfully browse, and it failed often. I redesigned localisation as a system, not a screen:',
        ],
        bullets: [
          '<strong>Mode-scoped contexts:</strong> separate state for Delivery vs Pickup with Delivery as default, so switching modes doesn\'t destroy intent or data.',
          '<strong>Auto-assign store</strong> when location is available; confirm when needed; never silently override manual choice; Reassign only on meaningful change or invalid selection.',
          '<strong>Cart revalidation:</strong> When location/store changes, items may become unavailable or prices can update; user gets an explicit "what changed" moment instead of silent corruption.',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phBuilt1,
      },
      {
        type: 'text',
        heading: '',
        paragraphs: [
          '<strong>2) Mix & Match combo engine that enforces validity</strong><br/>Because combos drove ~70% of transactions, the combo flow had to be conversion-grade and ops-grade. I shipped a combo builder that is:',
        ],
        bullets: [
          'Stateful and step-based (clear progress; users always know "where am I?").',
          'Resilient to inventory + pricing realities (Out-of-stock items are visibly sold out + not selectable).',
          'Designed for swapping, not restarting.',
          'Dynamic pricing updates live and reflects natively in cart.',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phBuilt2,
      },
      {
        type: 'text',
        heading: '',
        paragraphs: [
          '<strong>3) Checkout + reliability improvements tied to measurable drop-offs</strong><br/>The funnel showed web checkout completion at 63% vs app ~80%, so I treated checkout as a reliability program, not just UI polish.',
        ],
        bullets: [
          'Reduced ambiguity in delivery/pickup context at checkout (so users don\'t discover serviceability late).',
          'Designed failure-aware states (clear recovery when payment/session fails).',
          'Closed the loop with OMS constraints (store hours, serviceability, order lifecycle) so the UI matches operational truth.',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phBuilt3,
      },
      {
        type: 'embed',
        embedType: 'figma',
        src: 'https://embed.figma.com/board/adLyswmnW2Qjv81zoCwAWz/Pizza-Hut-Presentation?node-id=0-1&embed-host=share',
      },
      {
        type: 'text',
        heading: 'How we executed',
        paragraphs: [
          'I ran the project with a "decisions stay traceable" discipline:',
        ],
        bullets: [
          'I facilitated and presented client workshops as the SPOC.',
          'We documented workshop outcomes directly inside Figma, then replayed deltas in the next cycle.',
          'I converted decisions into dev notes with edge cases so implementation matched intent.',
        ],
      },
      {
        type: 'text',
        heading: '',
        paragraphs: [
          '<strong>AI-accelerated delivery:</strong>',
        ],
        bullets: [
          'Synthesised research + requirements into <strong>structured decision docs</strong>.',
          'Used <strong>AI-assisted prototyping workflows</strong> to validate end-to-end journeys early.',
          'Partnered with engineering using <strong>AI-assisted dev/QC loops (Cursor AI)</strong> to catch UI/UX regressions faster.',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phExecution,
      },
      {
        type: 'embed',
        embedType: 'youtube',
        videoId: 'xt9L204p9Ig',
      },
      {
        type: 'text',
        heading: 'What we shipped',
        paragraphs: [],
        bullets: [
          'Localisation system (delivery + pickup contexts, address, store selection, validation).',
          'Menu discovery + customisation foundations.',
          'Mix & Match combo builder with validity + OOS + dynamic price behaviour.',
          'Cart + checkout flows aligned with OMS constraints.',
          'Self-checkout/kiosk journey foundations.',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phShipped,
      },
      {
        type: 'text',
        heading: 'What\'s next',
        paragraphs: [],
        bullets: [
          'Roadmap items are quarterly rollouts (e.g., loyalty revamp, coupon redemption, vouchers, etc.). I explicitly scoped these for next phases to protect the Apr 2026 ship date and avoid destabilising localisation + checkout.',
          'Phase 1 estimated to be launched May 2026. Post-launch metric tracking is instrumented — conversion results against targets to be updated.',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phNext,
      },
      {
        type: 'text',
        heading: 'Learnings',
        paragraphs: [],
        bullets: [
          'If I were starting over, I\'d instrument localisation <strong>failure events in the prototype phase</strong> itself — we caught several edge cases late in QC that earlier telemetry would have surfaced in weeks, not days before launch.',
          'I\'d lock the <strong>prototype-approval step as a formal client sign-off</strong> gate earlier in the process. We used prototypes to validate direction internally, but getting explicit client sign-off on the prototype before Figma work began would have eliminated 2 rounds of late-stage structural feedback on flows we\'d already detailed.',
          'Combo complexity was flagged in our research but I underestimated how much it would affect checkout reliability. I\'d make the <strong>combo-to-checkout flow a dedicated QA stream</strong> from sprint 1 — not something we stress-tested fully until the final phase.',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phLearnings,
      },
      {
        type: 'testimonial',
        quote: 'This work became the foundation for Pizza Hut Malaysia\'s omnichannel transformation program — uniting app, web, and self-checkout into one consistent ordering system.',
        author: 'Izuan Izham',
        role: 'Digital Head, Pizza Hut Malaysia',
        avatar: phAvatar,
      },
    ],
    nextProject: { title: 'Novus Design System', slug: 'novus-design-system' },
  },
  'novus-design-system': {
    title: 'Novus Design System',
    heroImage: heroImg2,
    info: [
      { label: 'Project Name', value: 'Novus Design System' },
      { label: 'Industry', value: 'Design Infrastructure' },
      { label: 'Headquarters', value: 'Remote' },
      { label: 'Timeline', value: '6 Months' },
    ],
    overview: {
      heading: 'Overview',
      paragraphs: [
        'Built a comprehensive design system from the ground up to unify product experiences across multiple platforms, establishing consistent patterns, tokens, and component libraries.',
        'Novus was designed to scale across teams and products, reducing design-to-development handoff friction and enabling faster iteration cycles through reusable, well-documented components.',
      ],
    },
    images: {
      big: heroImg3,
      small: [heroImg1, heroImg4],
    },
    problemSolution: [
      {
        heading: 'Problems',
        paragraphs: [
          'Teams across the organization were building inconsistently, with no shared component library or design tokens, leading to visual fragmentation and duplicated effort.',
          'Design-to-development handoffs were slow and error-prone, with engineers constantly second-guessing spacing, typography, and interaction patterns.',
        ],
      },
      {
        heading: 'Solutions',
        paragraphs: [
          'Created a token-based design system with a comprehensive component library covering typography, color, spacing, and interactive patterns — all documented and versioned.',
          'Established a contribution workflow and governance model that enabled multiple teams to adopt and extend the system while maintaining consistency.',
        ],
      },
    ],
    images2: {
      big: heroImg5,
      small: [heroImg2, heroImg6],
    },
    nextProject: { title: 'SwapEasy', slug: 'swapeasy' },
  },
  'swapeasy': {
    title: 'SwapEasy',
    heroImage: heroImg3,
    info: [
      { label: 'Project Name', value: 'SwapEasy' },
      { label: 'Industry', value: 'B2B SaaS & Recommerce' },
      { label: 'Headquarters', value: 'Mumbai, IN' },
      { label: 'Timeline', value: '5 Months' },
    ],
    overview: {
      heading: 'Overview',
      paragraphs: [
        'Designed the core product experience for SwapEasy, a B2B SaaS platform enabling businesses to manage, price, and resell pre-owned inventory at scale.',
        'The focus was on creating intuitive workflows for bulk device processing, automated grading, and marketplace integration — turning a complex enterprise operation into a streamlined, user-friendly experience.',
      ],
    },
    images: {
      big: heroImg4,
      small: [heroImg2, heroImg5],
    },
    problemSolution: [
      {
        heading: 'Problems',
        paragraphs: [
          'The existing recommerce workflow was manual and fragmented — operators had to juggle spreadsheets, separate grading tools, and disconnected marketplaces to process pre-owned devices.',
          'Lack of standardized grading criteria and pricing models led to inconsistent valuations, eroding trust with both sellers and buyers.',
        ],
      },
      {
        heading: 'Solutions',
        paragraphs: [
          'Built an integrated dashboard that unified device intake, automated grading, dynamic pricing, and multi-marketplace listing into a single streamlined workflow.',
          'Introduced standardized grading templates with visual guides and automated price recommendations based on condition, market demand, and historical data.',
        ],
      },
    ],
    images2: {
      big: heroImg1,
      small: [heroImg3, heroImg5],
    },
    nextProject: { title: 'Dr. Pashu', slug: 'dr-pashu' },
  },
  'dr-pashu': {
    title: 'Dr. Pashu',
    heroImage: heroImg4,
    info: [
      { label: 'Project Name', value: 'Dr. Pashu' },
      { label: 'Industry', value: 'HealthTech & SaaS' },
      { label: 'Headquarters', value: 'Pune, IN' },
      { label: 'Timeline', value: '3 Months' },
    ],
    overview: {
      heading: 'Overview',
      paragraphs: [
        'Designed the end-to-end consultation platform for Dr. Pashu, a veterinary healthtech startup connecting pet owners with certified veterinarians through video and chat consultations.',
        'The project focused on simplifying appointment booking, building trust through transparent doctor profiles, and creating a seamless consultation experience across web and mobile.',
      ],
    },
    images: {
      big: heroImg1,
      small: [heroImg3, heroImg6],
    },
    problemSolution: [
      {
        heading: 'Problems',
        paragraphs: [
          'Pet owners in tier-2 and tier-3 cities had limited access to qualified veterinarians, often relying on unverified advice or traveling long distances for basic consultations.',
          'Existing telehealth platforms were designed for human healthcare and lacked workflows tailored to veterinary consultations, pet profiles, and follow-up care.',
        ],
      },
      {
        heading: 'Solutions',
        paragraphs: [
          'Designed a purpose-built consultation flow with pet profiles, symptom selectors, and photo/video upload — enabling vets to diagnose remotely with rich context.',
          'Created a trust-building experience with verified doctor profiles, transparent pricing, ratings, and post-consultation care plans with medication reminders.',
        ],
      },
    ],
    images2: {
      big: heroImg2,
      small: [heroImg6, heroImg4],
    },
    nextProject: { title: 'Pizza Hut', slug: 'pizza-hut-malaysia' },
  },
}

export default projectsData
