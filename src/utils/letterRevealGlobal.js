import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SELECTORS = '.section-headline-text, .sw-headline, .sin-heading'

export function initLetterReveal() {
  const elements = document.querySelectorAll(SELECTORS)

  elements.forEach((el) => {
    if (el.dataset.letterReveal) return
    el.dataset.letterReveal = 'true'

    const hasBr = el.querySelector('br')
    const hasChildren = el.querySelector('img, svg, a')
    if (hasChildren) return

    const decodeHTML = (str) => { const t = document.createElement('textarea'); t.innerHTML = str; return t.value }
    const rawLines = hasBr ? el.innerHTML.split(/<br\s*\/?>/i) : [el.textContent]
    const lines = rawLines.map(l => decodeHTML(l))
    if (!lines.join('').trim()) return

    el.innerHTML = ''
    lines.forEach((line, li) => {
      const words = line.trim().split(' ')
      words.forEach((word, wi) => {
        const wordSpan = document.createElement('span')
        wordSpan.className = 'lr-word'
        word.split('').forEach((char) => {
          const letterSpan = document.createElement('span')
          letterSpan.className = 'lr-letter'
          letterSpan.textContent = char
          wordSpan.appendChild(letterSpan)
        })
        el.appendChild(wordSpan)
        if (wi < words.length - 1) {
          const space = document.createElement('span')
          space.className = 'lr-letter'
          space.innerHTML = '&nbsp;'
          el.appendChild(space)
        }
      })
      if (li < lines.length - 1) {
        el.appendChild(document.createElement('br'))
      }
    })

    const letters = el.querySelectorAll('.lr-letter')
    gsap.set(letters, { opacity: 0, filter: 'blur(8px)', y: 8 })

    gsap.to(letters, {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.03,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    })
  })
}
