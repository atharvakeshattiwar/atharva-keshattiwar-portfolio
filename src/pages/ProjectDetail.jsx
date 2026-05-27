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
      {project.sections && (() => {
        const elements = []
        const sections = project.sections
        let i = 0
        let pairIndex = 0
        while (i < sections.length) {
          const section = sections[i]
          const next = sections[i + 1]

          if (section.type === 'text' && next && next.type === 'images') {
            const isReversed = pairIndex % 2 === 1
            const imageData = next.images || (next.big ? [next.big] : [])
            const hasMultipleImages = next.layout === 'stacked' && next.images && next.images.length > 1
            const pairedImage = hasMultipleImages ? next.images[0] : null
            const remainingImages = hasMultipleImages ? next.images.slice(1) : []

            elements.push(
              <section key={i} className={`cs-paired-section ${isReversed ? 'cs-paired-reversed' : ''}`}>
                <div className="cs-paired-wrapper">
                  <div className="cs-paired-text">
                    <CaseStudyOverview
                      heading={section.heading}
                      paragraphs={section.paragraphs}
                      bullets={section.bullets}
                      afterBullets={section.afterBullets}
                      inline
                    />
                  </div>
                  <div className="cs-paired-image">
                    {hasMultipleImages ? (
                      <div className="cs-images-inner">
                        <div className="cs-image-full">
                          <img src={pairedImage} alt="" />
                        </div>
                      </div>
                    ) : (
                      <CaseStudyImages
                        bigImage={next.big}
                        smallImages={next.small}
                        layout={next.layout}
                        images={next.images}
                        inline
                      />
                    )}
                  </div>
                </div>
                {remainingImages.length > 0 && (
                  <div className="cs-paired-remaining">
                    {remainingImages.map((src, ri) => (
                      <div key={ri} className="cs-image-full">
                        <img src={src} alt="" />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )
            pairIndex++
            i += 2
          } else if (section.type === 'text') {
            elements.push(
              <CaseStudyOverview
                key={i}
                heading={section.heading}
                paragraphs={section.paragraphs}
                bullets={section.bullets}
                afterBullets={section.afterBullets}
              />
            )
            i++
          } else if (section.type === 'images') {
            elements.push(
              <CaseStudyImages
                key={i}
                bigImage={section.big}
                smallImages={section.small}
                layout={section.layout}
                images={section.images}
              />
            )
            i++
          } else if (section.type === 'embed') {
            elements.push(
              <CaseStudyEmbed
                key={i}
                embedType={section.embedType}
                videoId={section.videoId}
                src={section.src}
              />
            )
            i++
          } else if (section.type === 'testimonial') {
            elements.push(
              <CaseStudyTestimonial
                key={i}
                quote={section.quote}
                author={section.author}
                role={section.role}
                avatar={section.avatar}
              />
            )
            i++
          } else if (section.type === 'sidebyside') {
            elements.push(
              <CaseStudyProblemSolution key={i} blocks={section.blocks} />
            )
            i++
          } else {
            i++
          }
        }
        return elements
      })()}
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
