import { useEffect, useRef } from 'react'
import blog1 from '../assets/blogs/blog-1.avif'
import blog2 from '../assets/blogs/blog-2.avif'
import blog3 from '../assets/blogs/blog-3.avif'

const blogs = [
  {
    image: blog1,
    date: 'November 18, 2025',
    readTime: '14 min read',
    title: 'Creative Cloud: Tools for Designers and Developers',
    excerpt: 'Your go-to space for actionable insights on design trends, development practices, and creative',
    href: '/blog/creative-cloud-tools-for-designers-and-developers',
  },
  {
    image: blog2,
    date: 'November 18, 2025',
    readTime: '14 min read',
    title: 'Design and Code: A Fusion of Creativity',
    excerpt: 'Your go-to space for actionable insights on design trends, development practices, and creative',
    href: '/blog/design-and-code-a-fusion-of-creativity',
  },
  {
    image: blog3,
    date: 'November 18, 2025',
    readTime: '14 min read',
    title: 'The Creative Code: Bridging Art and Tech',
    excerpt: 'Your go-to space for actionable insights on design trends, development practices, and creative',
    href: '/blog/the-creative-code-bridging-art-and-tech',
  },
]

function BlogCard({ blog }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="blogs-item">
      <a ref={cardRef} href={blog.href} className="blog-card animate-fade-in">
        <div className="blog-card-top">
          <img src={blog.image} alt={blog.title} className="image-100" loading="lazy" />
        </div>
        <div className="blog-card-bottom">
          <div className="blog-card-info">
            <div className="text-xs text-color-black-900">{blog.date}</div>
            <div className="blog-card-line" />
            <div className="text-xs text-color-black-900">{blog.readTime}</div>
          </div>
          <div className="text-lg text-weight-semibold text-color-black-900">
            {blog.title}
          </div>
          <div className="text-sm text-color-black-600">
            {blog.excerpt}
          </div>
        </div>
      </a>
    </div>
  )
}

export default function Blogs() {
  const headlineRef = useRef(null)
  const subtextRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )
    if (headlineRef.current) observer.observe(headlineRef.current)
    if (subtextRef.current) observer.observe(subtextRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-blogs-h">
      <div className="blogs-h-wrapper">
        <div className="blogs-s-content">
          <div className="blogs-h-top">
            <div ref={headlineRef} className="section-headline-text text-align-center animate-fade-in">
              Blog &amp; Articles
            </div>
            <div ref={subtextRef} className="text-sm text-align-center text-color-black-800 animate-fade-in">
              Our clients' voices are the true measure of our success. Their reviews highlight the trust, collaboration, and results we've built together. From creative concepts to final delivery.
            </div>
          </div>
          <div className="blogs-h-bottom">
            <div className="blogs-list">
              {blogs.map((blog) => (
                <BlogCard key={blog.title} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
