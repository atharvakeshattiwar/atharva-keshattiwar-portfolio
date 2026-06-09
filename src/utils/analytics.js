export function trackEvent(eventName, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

export function trackResumeClick() {
  trackEvent('resume_click', { link_location: 'navbar' })
}

export function trackProjectClick(projectName) {
  trackEvent('project_click', { project_name: projectName })
}

export function trackContactSubmit() {
  trackEvent('contact_submit')
}

export function trackEmailClick() {
  trackEvent('email_click')
}

export function trackSocialClick(platform) {
  trackEvent('social_click', { platform })
}

export function trackCtaClick(label) {
  trackEvent('cta_click', { button_label: label })
}

export function trackVideoPlay(videoName) {
  trackEvent('video_play', { video_name: videoName })
}

export function trackScrollDepth(page, depth) {
  trackEvent('scroll_depth', { page, depth_percent: depth })
}
