import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import heroBg from '../assets/hero-bg-clouds.png'
import ProfileCard from './ProfileCard'
import portrait from '../assets/thomas-hero.png'
import { getResponse, FOLLOW_UP_RESPONSE } from '../data/chatResponses'

const pills = [
  { text: 'featured case studies', href: '#works', type: 'scroll', active: true },
  { text: 'design philosophy?', type: 'chat' },
  { text: 'tools & workflows?', type: 'chat' },
  { text: 'currently building?', type: 'chat' },
]

function DownArrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="leah-pill-svg">
      <path d="M8 3v10M4 9l4 4 4-4" />
    </svg>
  )
}

function ExternalArrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="leah-pill-svg">
      <path d="M4 12L12 4M5 4h7v7" />
    </svg>
  )
}

function Sparkle({ size = 15, style }) {
  return (
    <span className="leah-sparkle-abs" style={style}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0 L13.8 10.2 L24 12 L13.8 13.8 L12 24 L10.2 13.8 L0 12 L10.2 10.2 Z" />
      </svg>
    </span>
  )
}

export default function CleanHero() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const highlightBgRef = useRef(null)
  const dot1Ref = useRef(null)
  const dot2Ref = useRef(null)
  const serifLettersRef = useRef([])
  const pillsRef = useRef(null)
  const inputRef = useRef(null)
  const chatRef = useRef(null)
  const inputFieldRef = useRef(null)

  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [promptIndex, setPromptIndex] = useState(0)
  const [scrollClass, setScrollClass] = useState('scroll-in')
  const [chatPlaceholder, setChatPlaceholder] = useState("let's connect over products & ideas…")

  const prompts = [
    'ask Atharva about products, systems, storytelling…',
    'ask about projects, workflows, or creative process…',
    'curious about design, AI workflows, or storytelling?',
    'ask Atharva anything about design & digital experiences…',
  ]

  useEffect(() => {
    if (showChat) return
    const interval = setInterval(() => {
      setScrollClass('scroll-out')
      setTimeout(() => {
        setPromptIndex(prev => (prev + 1) % prompts.length)
        setScrollClass('scroll-in')
      }, 400)
    }, 5000)
    return () => clearInterval(interval)
  }, [showChat])

  const addSerifRef = (el) => {
    if (el && !serifLettersRef.current.includes(el)) serifLettersRef.current.push(el)
  }

  useEffect(() => {
    if (showChat) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showChat])

  const sendMessage = (text) => {
    if (!text.trim()) return

    setShowChat(true)
    setMessages(prev => [...prev, { type: 'user', text: text.trim() }])
    setInputValue('')
    setIsTyping(true)

    const response = getResponse(text)
    if (!response) return

    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { type: 'bot', text: response }])
      setChatPlaceholder("let's connect over products & ideas…")
    }, 1200)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    if (messages.length >= 2 && chatPlaceholder.includes('LinkedIn')) {
      setMessages(prev => [...prev, { type: 'user', text: inputValue.trim() }])
      setInputValue('')
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "Thanks! I'll reach out to you soon. In the meantime, feel free to explore my work below! 👇"
        }])
        setChatPlaceholder("let's connect over products & ideas…")
      }, 1000)
      return
    }

    sendMessage(inputValue)
  }

  const handlePillClick = (pill) => {
    if (pill.type === 'chat') {
      sendMessage(pill.text)
    }
  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages, isTyping])

  useEffect(() => {
    serifLettersRef.current = serifLettersRef.current.filter(Boolean)

    const ctx = gsap.context(() => {
      const headingEl = headingRef.current
      const textEl = headingEl.querySelector('.leah-hero-text')

      const walker = document.createTreeWalker(textEl, NodeFilter.SHOW_TEXT)
      const textNodes = []
      let node
      while ((node = walker.nextNode())) {
        if (node.textContent.trim()) textNodes.push(node)
      }

      const wordSpans = []
      textNodes.forEach(tn => {
        const words = tn.textContent.split(/(\s+)/)
        const parent = tn.parentNode
        const frag = document.createDocumentFragment()
        words.forEach(w => {
          if (!w) return
          if (/^\s+$/.test(w)) {
            frag.appendChild(document.createTextNode(w))
          } else {
            const span = document.createElement('span')
            span.className = 'leah-reveal-word'
            span.textContent = w
            frag.appendChild(span)
            wordSpans.push(span)
          }
        })
        parent.replaceChild(frag, tn)
      })

      gsap.set(headingEl, { opacity: 1 })
      gsap.set(wordSpans, { opacity: 0, filter: 'blur(8px)', y: 8 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to(wordSpans, {
        opacity: 1, filter: 'blur(0px)', y: 0,
        duration: 1.4, stagger: 0.07,
      }, 0.4)

      tl.fromTo(highlightBgRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.8, ease: 'power2.inOut' },
        1.6
      )

      tl.fromTo([dot1Ref.current, dot2Ref.current],
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.15 },
        2.2
      )

      tl.to(serifLettersRef.current, {
        opacity: 1, duration: 0.6, stagger: 0.06,
      }, 1.8)

      const pillEls = pillsRef.current?.querySelectorAll('.leah-pill')
      if (pillEls) {
        tl.fromTo(pillEls,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          2.8
        )
      }

      tl.fromTo(inputRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.7 },
        3.4
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const serifText = 'AI workflows,'
  const serifLetters = serifText.split('').map((char, i) => (
    <span key={i} ref={addSerifRef} className="leah-serif-letter" style={{ opacity: 0, whiteSpace: char === ' ' ? 'pre' : undefined }}>
      {char}
    </span>
  ))

  return (
    <section className="leah-hero" ref={sectionRef}>
      <div className="leah-hero-bg-wrap">
        <img src={heroBg} alt="" className="leah-hero-bg" />
      </div>

      <div className="leah-hero-inner">
        <div className={`leah-hero-heading ${showChat ? 'leah-chat-active' : ''}`} ref={headingRef} style={{ opacity: 0 }}>
          <div className="leah-hero-text">
            <span className="leah-text-sans">I'm </span>
            <span className="leah-name-box">
              <span className="leah-name-bg" ref={highlightBgRef} />
              <span className="leah-name-dot leah-name-dot-tl" ref={dot1Ref} />
              <span className="leah-name-dot leah-name-dot-br" ref={dot2Ref} />
              <span className="leah-name-text">Atharva Keshattiwar</span>
            </span><span className="leah-text-sans">, a Product Designer blending </span>
            <span className="leah-text-serif">storytelling, systems, </span>
            <span className="leah-text-serif" style={{ whiteSpace: 'nowrap' }}>{serifLetters}</span>
            <span className="leah-text-sans"> and </span>
            <span className="leah-text-serif">visual craft</span>
            <span className="leah-text-sans"> into digital experiences.</span>
          </div>
        </div>

        {/* Chat messages */}
        {showChat && (
          <div className="leah-chat" ref={chatRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`leah-chat-msg leah-chat-${msg.type}`}>
                {msg.type === 'bot' && (
                  <div className="leah-chat-avatar">
                    <img src={portrait} alt="" />
                    <span className="leah-chat-dot" />
                  </div>
                )}
                <div className={`leah-chat-bubble leah-chat-bubble-${msg.type}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="leah-chat-msg leah-chat-bot">
                <div className="leah-chat-avatar">
                  <img src={portrait} alt="" />
                  <span className="leah-chat-dot" />
                </div>
                <div className="leah-chat-bubble leah-chat-bubble-bot leah-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Pills */}
        {!showChat && (
          <div className="leah-pills" ref={pillsRef}>
            <div className="leah-pills-row">
              {pills.map((pill, i) => (
                <PillButton key={i} {...pill} onClick={() => handlePillClick(pill)} />
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="leah-input-wrap" ref={inputRef} style={{ opacity: 0 }}>
          <span className="leah-input-prefix">›_</span>
          <div className="leah-input-field">
            <input
              ref={inputFieldRef}
              type="text"
              className="leah-input"
              placeholder={showChat ? chatPlaceholder : ''}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {!showChat && !inputValue && (
              <span className={`leah-input-scroll ${scrollClass}`} key={promptIndex}>
                {prompts[promptIndex]}
              </span>
            )}
          </div>
        </form>

        {showChat && (
          <button className="leah-chat-close" onClick={() => { setShowChat(false); setMessages([]); setChatPlaceholder("let's connect over products & ideas…"); }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>


    </section>
  )
}

function ScrollIndicator() {
  const ref = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      ref.current.classList.toggle('hidden', window.scrollY > 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="leah-scroll-indicator" ref={ref}>
      <span className="leah-scroll-label">Scroll Down</span>
      <div className="leah-scroll-arrow">
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 1 L8 17" />
          <path d="M2 11 L8 17 L14 11" />
        </svg>
      </div>
    </div>
  )
}

function PillButton({ text, href, type, active, external, onClick }) {
  const className = `leah-pill ${active ? 'leah-pill-active' : ''}`
  const content = (
    <>
      {active && (
        <>
          <Sparkle size={15} style={{ top: '-9px', right: '6px' }} />
          <Sparkle size={9} style={{ top: '3px', right: '-7px' }} />
          <Sparkle size={15} style={{ bottom: '-9px', left: '6px' }} />
          <Sparkle size={9} style={{ bottom: '3px', left: '-7px' }} />
        </>
      )}
      <span>{text}</span>
      {type === 'scroll' && <DownArrow />}
      {type === 'external' && <ExternalArrow />}
    </>
  )

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>
  }
  if (type === 'scroll') {
    return (
      <button className={className} onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}>
        {content}
      </button>
    )
  }
  if (type === 'chat') {
    return <button className={className} onClick={onClick}>{content}</button>
  }
  if (href) {
    return <Link to={href} className={className}>{content}</Link>
  }
  return <button className={className} onClick={onClick}>{content}</button>
}
