import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { X, ExternalLink, Sparkles } from 'lucide-react'
import admissionBanner from '../assets/admissionopenbanner.jpeg'
import officerMindsetBanner from '../assets/joinupcomingbanner.jpeg'
import ssbMockBanner from '../assets/ssbmockbanner.jpeg'

const GOOGLE_FORM_URL = 'https://forms.gle/XhFBUjSRyocVCNFn6'

const COURSE_PATHS = [
  '/nda',
  '/nda-course',
  '/courses/nda',
  '/cds',
  '/cds-course',
  '/courses/cds',
  '/ssb',
  '/ssb-course',
  '/courses/ssb',
  '/cscs',
  '/cscs-course',
  '/cscs-eaam',
  '/cscs-eaam-course',
  '/courses/cscs',
]

export default function PopupBanner() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentBanner, setCurrentBanner] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase()

    // 1. Check if user is visiting home for the first time this session
    if (currentPath === '/' || currentPath === '') {
      const hasShownHome = sessionStorage.getItem('waarr_home_banner_shown')
      if (!hasShownHome) {
        const timer = setTimeout(() => {
          setCurrentBanner({
            id: 'home-admission',
            image: admissionBanner,
            alt: 'WAARR Admissions Open - NDA, CDS, AFCAT, ACC, SCO, PC(SL), SSB',
            title: 'Admissions Open — NDA | CDS | AFCAT | SSB',
            badge: 'Limited Seats Available',
          })
          setIsOpen(true)
          sessionStorage.setItem('waarr_home_banner_shown', 'true')
        }, 600)
        return () => clearTimeout(timer)
      }
    }

    // 2. Check if user navigated to a Course page for the first time this session
    const isCoursePage = COURSE_PATHS.some((path) => currentPath.startsWith(path))
    if (isCoursePage) {
      const hasShownCourse = sessionStorage.getItem('waarr_course_banner_shown')
      if (!hasShownCourse) {
        const isSsb = currentPath.includes('ssb')
        const timer = setTimeout(() => {
          setCurrentBanner({
            id: isSsb ? 'course-ssb' : 'course-batch',
            image: isSsb ? ssbMockBanner : officerMindsetBanner,
            alt: isSsb
              ? 'WAARR SSB Mock Assessment'
              : 'From Aspirant to Officer Mindset - Join Upcoming Batch',
            title: isSsb
              ? 'SSB Mock Assessment — Know Where You Stand'
              : 'From Aspirant to Officer Mindset — Join Upcoming Batch',
            badge: isSsb ? 'Assessment Booking' : 'Upcoming Batch',
          })
          setIsOpen(true)
          sessionStorage.setItem('waarr_course_banner_shown', 'true')
        }, 500)
        return () => clearTimeout(timer)
      }
    }
  }, [location.pathname])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  if (!isOpen || !currentBanner) return null

  const handleBannerClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  const handleClose = (e) => {
    e.stopPropagation()
    setIsOpen(false)
  }

  return (
    <div
      className="popup-banner-backdrop"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={currentBanner.title}
    >
      <div
        className="popup-banner-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CROSS CLOSE BUTTON */}
        <button
          type="button"
          className="popup-banner-close-btn"
          onClick={handleClose}
          aria-label="Close Announcement"
          title="Close"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* TOP NOTICE BADGE */}
        <div className="popup-banner-top-bar">
          <div className="popup-badge">
            <Sparkles size={13} className="text-yellow-400" />
            <span>{currentBanner.badge}</span>
          </div>
        </div>

        {/* CLICKABLE BANNER IMAGE */}
        <div
          className="popup-banner-content"
          onClick={handleBannerClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleBannerClick()
            }
          }}
          title="Click to open Admission Form on Google Forms"
        >
          <img
            src={currentBanner.image}
            alt={currentBanner.alt}
            className="popup-banner-img"
          />
        </div>

        {/* BOTTOM ACTION BAR */}
        <div className="popup-banner-footer" onClick={handleBannerClick}>
          <div className="popup-footer-text">
            <strong>{currentBanner.title}</strong>
          </div>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="popup-cta-btn"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
          >
            <span>Fill Form</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
