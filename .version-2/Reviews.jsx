import { useEffect, useRef } from 'react'
import reviewer1 from '../assets/reviewers/reviewer-1.avif'
import reviewer2 from '../assets/reviewers/reviewer-2.avif'
import reviewer3 from '../assets/reviewers/reviewer-3.avif'
import reviewer4 from '../assets/reviewers/reviewer-4.avif'
import reviewer5 from '../assets/reviewers/reviewer-5.avif'

const QuoteIcon = ({ isVideo }) => (
  <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.4 11H10.8V16.5H5.4V11ZM0 11H5.4V16.5H0V11ZM0 16.5H5.4V22H0V16.5ZM5.4 16.5H10.8V22H5.4V16.5ZM0 5.5H5.4V11H0V5.5ZM5.4 0H10.8V5.5H5.4V0ZM21.6 11H27V16.5H21.6V11ZM16.2 11H21.6V16.5H16.2V11ZM16.2 16.5H21.6V22H16.2V16.5ZM21.6 16.5H27V22H21.6V16.5ZM16.2 5.5H21.6V11H16.2V5.5ZM21.6 0H27V5.5H21.6V0Z"
      fill="currentColor"
    />
  </svg>
)

const reviews = [
  {
    type: 'text',
    quote: 'Miller was instrumental in helping us launch our startup. His ability to blend technical expertise with creative thinking gave our brand the edge we needed in a competitive market.',
    name: 'Colton Gray',
    role: 'Founder & CEO & Gexta',
    image: reviewer1,
  },
  {
    type: 'video',
    videoSrc: 'https://videos.pexels.com/video-files/8136210/8136210-hd_1080_1920_25fps.mp4',
    name: 'Mason Jack',
    role: 'Project Manager @Carter',
    image: reviewer2,
  },
  {
    type: 'text',
    quote: "Miller's creativity and attention to detail are unmatched. He turned our vision into a reality, delivering a project that exceeded all expectations. Truly a world-class designer.",
    name: 'Harper Jackson',
    role: 'Founder & CEO & Dcode agency',
    image: reviewer3,
  },
  {
    type: 'text',
    quote: 'I am working with Miller was a pleasure. Their team turned our vision into a digital masterpiece, with stunning design and seamless functionality. We couldn\'t be happier.',
    name: 'Avery Wyatt',
    role: 'Founder Grayson @agency',
    image: reviewer4,
  },
  {
    type: 'video',
    videoSrc: 'https://videos.pexels.com/video-files/7262655/7262655-uhd_1440_2560_25fps.mp4',
    name: 'Emily Davis',
    role: 'Founder @ Designnest',
    image: reviewer5,
  },
]

function ReviewCard({ review }) {
  const isVideo = review.type === 'video'

  return (
    <div className="review-card">
      {isVideo && (
        <video
          className="review-bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={review.videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="review-card-content">
        <div className="review-card-top">
          <div className={`review-card-icon ${isVideo ? 'video' : ''}`}>
            <QuoteIcon />
          </div>
          {!isVideo && review.quote && (
            <div className="review-text">
              <div className="text-lg_2 text-weight-semibold text-color-black-900">
                {review.quote}
              </div>
            </div>
          )}
        </div>
        <div className="review-card-bottom">
          <div className="reviewer-img">
            <img src={review.image} alt={review.name} className="image-100 reviewer-avatar" />
          </div>
          <div className="reviewer-info">
            <div className={`text-base text-weight-semibold ${isVideo ? 'text-color-white' : 'text-color-black-900'}`}>
              {review.name}
            </div>
            <div className={`text-xs ${isVideo ? 'text-color-white' : 'text-color-black-700'}`}>
              {review.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReviewsRow() {
  return (
    <div className="reviews-cards">
      {reviews.map((review, i) => (
        <ReviewCard key={i} review={review} />
      ))}
    </div>
  )
}

export default function Reviews() {
  const headlineRef = useRef(null)
  const introRef = useRef(null)
  const marqueeRef = useRef(null)

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
    if (introRef.current) observer.observe(introRef.current)
    if (marqueeRef.current) observer.observe(marqueeRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-reviews">
      <div className="reviews-container">
        <div className="reviews-content">
          <div className="reviews-top">
            <div ref={headlineRef} className="section-headline-text text-align-center animate-fade-in">
              Clients Reviews
            </div>
            <div ref={introRef} className="reviews-intro animate-fade-in">
              <div className="text-sm text-align-center text-color-black-800">
                Nothing speaks louder than the words of our clients. Their feedback reflects the trust, satisfaction, and results we've delivered through our work. From startups to established brands.
              </div>
            </div>
          </div>
          <div ref={marqueeRef} className="reviews-bottom animate-fade-in">
            <ReviewsRow />
            <ReviewsRow />
          </div>
        </div>
      </div>
    </section>
  )
}
