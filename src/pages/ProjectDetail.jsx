import { useParams, Navigate } from 'react-router-dom'
import CaseStudyHero from '../components/CaseStudyHero'
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
      />
      <Footer />
    </>
  )
}
