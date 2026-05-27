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
import landscape10 from '../assets/carousel-ref/Landscape_10.png'

const projectsData = {
  'pizza-hut-malaysia': {
    title: 'Pizza Hut',
    heroImage: landscape10,
    info: [
      { label: 'Industry', value: 'Omnichannel, B2C Commerce, QSR' },
      { label: 'Headquarters', value: 'Kuala Lumpur, MY' },
      { label: 'Timeline', value: '2025 - 2026' },
    ],
    liveLink: 'https://www.pizzahut.com.my/',
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        paragraphs: [
          'Pizza Hut Malaysia\'s digital ecosystem served customers across multiple ordering touchpoints including mobile applications, web platforms, kiosks, and in-store systems. While the ecosystem had evolved over time, the experience across platforms lacked consistency, clarity, and scalability.',
          'The project focused on reimagining the <span class="highlight">end-to-end omnichannel ordering journey</span> to create a more unified experience across touchpoints while improving usability, navigation clarity, interaction patterns, and customer flows throughout the ecosystem.',
          'Rather than treating every platform independently, the goal was to create <span class="highlight">one connected experience system</span> that felt cohesive across every customer interaction.',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phGlance,
      },
      {
        type: 'text',
        heading: 'The Challenge',
        paragraphs: [
          'Designing for Pizza Hut Malaysia required understanding how multiple systems, customer journeys, and operational workflows interacted within a large-scale ordering ecosystem.',
          'Customers navigated across mobile apps, kiosks, websites, and in-store experiences, but the ecosystem lacked consistency across navigation patterns, ordering flows, interaction behaviors, and visual hierarchy.',
          'The challenge was building a <span class="highlight">scalable experience system</span> that could feel unified across platforms while adapting naturally to different devices, environments, and user behaviors.',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phProblem,
      },
      {
        type: 'text',
        heading: 'Discovery & Collaboration',
        paragraphs: [
          'Working closely with the PHM design team and stakeholders helped uncover operational and customer-side complexities throughout the ecosystem. Conversations around customer behavior, ordering patterns, store operations, and platform limitations revealed how fragmented experiences created friction across touchpoints.',
          'The process involved understanding not only how users interacted digitally, but also how the broader operational ecosystem functioned behind the scenes.',
          'This <span class="highlight">collaborative understanding</span> played an important role in shaping more connected and scalable experience decisions across the project.',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phPitch,
      },
      {
        type: 'text',
        heading: 'Experience Strategy',
        paragraphs: [
          'The experience strategy focused on simplifying customer interactions while creating consistency across the omnichannel ecosystem. Instead of redesigning isolated screens, the approach centered around aligning navigation systems, interaction patterns, layouts, and customer flows across platforms.',
          'Mobile experiences became one of the primary customer touchpoints within the ecosystem, requiring interactions that felt intuitive, efficient, and scalable while still aligning with the broader platform experience.',
        ],
        bullets: [
          'Simplified ordering flows',
          'Better navigation clarity',
          'Consistent interaction behaviors',
          'Scalable UI systems',
          'Improved visual hierarchy',
          'Ecosystem-wide consistency',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phOptimised,
      },
      {
        type: 'text',
        heading: 'Mobile Experience',
        paragraphs: [
          'As part of the PHM design team, I actively <span class="highlight">led mobile experience explorations</span> across the ordering ecosystem. The focus was on crafting interactions that felt intuitive, accessible, visually cohesive, and scalable across evolving customer journeys.',
          'Special attention was given to ordering efficiency, interaction feedback, navigation clarity, and accessibility throughout the mobile experience. Since mobile acted as one of the most active customer touchpoints, the challenge was balancing speed, simplicity, and scalability within a larger omnichannel system.',
          'The process also involved close collaboration across web, kiosk, and tablet experiences to ensure the ecosystem behaved consistently across every platform.',
        ],
      },
      {
        type: 'images',
        layout: 'stacked',
        images: [phBuilt1, phBuilt2, phBuilt3],
      },
      {
        type: 'text',
        heading: 'Design System & Scalability',
        paragraphs: [
          'Maintaining consistency across multiple touchpoints required a scalable and systems-driven design approach. Working alongside the PHM design team, the ecosystem evolved around reusable patterns, unified interaction behaviors, scalable layouts, and shared visual principles across platforms.',
          'The design system approach helped create stronger consistency across the omnichannel ecosystem while improving flexibility for future expansion and evolving customer experiences.',
          'Beyond visual consistency, the system was designed to create <span class="highlight">familiarity, predictability, and smoother interactions</span> across every platform.',
        ],
      },
      {
        type: 'images',
        layout: 'full',
        big: phTargets,
      },
      {
        type: 'embed',
        embedType: 'figma',
        src: 'https://embed.figma.com/board/adLyswmnW2Qjv81zoCwAWz/Pizza-Hut-Presentation?node-id=0-1&embed-host=share',
      },
      {
        type: 'text',
        heading: 'Omnichannel Ecosystem',
        paragraphs: [
          'The project extended far beyond a single platform. Every touchpoint — from mobile ordering and kiosk interactions to tablet and web systems — needed to feel connected as part of one unified experience ecosystem.',
          'Design decisions across platforms were approached collaboratively to ensure users experienced familiarity throughout their journey regardless of device or environment.',
          'This ecosystem-first approach helped create smoother customer experiences while supporting scalability across Pizza Hut Malaysia\'s growing digital platforms.',
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
        videoId: 'Yinug9BxuZM',
      },
      {
        type: 'text',
        heading: 'Outcome',
        paragraphs: [
          'The redesigned ecosystem introduced a more <span class="highlight">modern, connected, and scalable ordering experience</span> across Pizza Hut Malaysia\'s digital platforms.',
          'By improving interaction consistency, navigation clarity, and usability across touchpoints, the experience became more cohesive throughout the ecosystem while creating a stronger foundation for future scalability.',
          'The project highlighted how <span class="highlight">collaborative systems thinking</span> and product design can create more unified experiences across large-scale omnichannel environments.',
        ],
      },
      {
        type: 'images',
        layout: 'stacked',
        images: [phShipped, phNext],
      },
      {
        type: 'text',
        heading: 'Reflection',
        paragraphs: [
          'This project deepened my understanding of designing within large-scale omnichannel ecosystems where collaboration, systems thinking, operational understanding, and cross-platform consistency become just as important as visual design itself.',
          'Working closely across multiple platforms and teams reinforced the importance of creating experiences that feel scalable, connected, and human across every interaction.',
          'It also strengthened my perspective on how modern product ecosystems require balancing usability, operational workflows, business needs, and scalable systems together — not separately.',
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
