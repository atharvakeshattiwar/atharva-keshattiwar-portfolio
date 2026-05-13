import { useParams, Navigate } from 'react-router-dom'
import CaseStudyHero from '../components/CaseStudyHero'
import CaseStudyOverview from '../components/CaseStudyOverview'
import CaseStudyImages from '../components/CaseStudyImages'
import CaseStudyEmbed from '../components/CaseStudyEmbed'
import CaseStudyTestimonial from '../components/CaseStudyTestimonial'
import CaseStudyProblemSolution from '../components/CaseStudyProblemSolution'
import NextProject from '../components/NextProject'
import Footer from '../components/Footer'
import projectsData from '../data/projectsData'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectsData[slug]

  if (!project) return <Navigate to="/projects" replace />

  return (
    <>
      <CaseStudyHero
        title={project.title}
        info={project.info}
        heroImage={project.heroImage}
        subtitle={project.subtitle}
        services={project.services}
        liveLink={project.liveLink}
      />
      {project.sections && project.sections.map((section, i) => {
        if (section.type === 'text') {
          return (
            <CaseStudyOverview
              key={i}
              heading={section.heading}
              paragraphs={section.paragraphs}
              bullets={section.bullets}
              afterBullets={section.afterBullets}
            />
          )
        }
        if (section.type === 'images') {
          return (
            <CaseStudyImages
              key={i}
              bigImage={section.big}
              smallImages={section.small}
              layout={section.layout}
            />
          )
        }
        if (section.type === 'embed') {
          return (
            <CaseStudyEmbed
              key={i}
              embedType={section.embedType}
              videoId={section.videoId}
              src={section.src}
            />
          )
        }
        if (section.type === 'testimonial') {
          return (
            <CaseStudyTestimonial
              key={i}
              quote={section.quote}
              author={section.author}
              role={section.role}
              avatar={section.avatar}
            />
          )
        }
        if (section.type === 'sidebyside') {
          return (
            <CaseStudyProblemSolution key={i} blocks={section.blocks} />
          )
        }
        return null
      })}
      {/* Legacy support for projects using old data shape */}
      {!project.sections && project.overview && (
        <CaseStudyOverview
          heading={project.overview.heading}
          paragraphs={project.overview.paragraphs}
        />
      )}
      {!project.sections && project.images && (
        <CaseStudyImages
          bigImage={project.images.big}
          smallImages={project.images.small}
        />
      )}
      {project.nextProject && (
        <NextProject
          title={project.nextProject.title}
          slug={project.nextProject.slug}
        />
      )}
      <Footer />
    </>
  )
}
