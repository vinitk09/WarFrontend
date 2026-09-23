import { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, Award, Shield, Compass, Dumbbell, Activity } from 'lucide-react'
import logo from '../assets/waarrimg.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const servicesDropdownRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const isCoursesActive = [
    '/nda-course',
    '/cds-course',
    '/ssb-course',
    '/cscs-course',
    '/cscs',
    '/cscs-eaam',
    '/cscs-eaam-course',
    '/courses/cscs'
  ].includes(location.pathname)

  const isServicesActive = location.pathname.startsWith('/services/')

  const scrollToFacultySection = () => {
    const el = document.getElementById('faculty')
    if (el) {
      const navOffset = 90
      const elementPos = el.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: Math.max(0, elementPos - navOffset),
        behavior: 'smooth'
      })
      return true
    }
    return false
  }

  const handleFacultyClick = (e) => {
    e.preventDefault()
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
    setIsMobileDropdownOpen(false)
    setIsServicesDropdownOpen(false)
    setIsMobileServicesDropdownOpen(false)

    // Check if faculty section exists on current page
    const currentFacultyEl = document.getElementById('faculty')
    if (currentFacultyEl) {
      scrollToFacultySection()
      window.history.pushState(null, '', `${location.pathname}#faculty`)
      return
    }

    // Otherwise navigate to home and scroll with staggered delays to ensure layout is ready
    navigate('/#faculty')
    const attempts = [100, 250, 450, 700, 1100]
    attempts.forEach((delay) => {
      setTimeout(scrollToFacultySection, delay)
    })
  }

  const handleLinkClick = (targetHash) => {
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
    setIsMobileDropdownOpen(false)
    setIsServicesDropdownOpen(false)
    setIsMobileServicesDropdownOpen(false)
    if (location.pathname === '/' && targetHash) {
      const el = document.querySelector(targetHash)
      if (el) {
        const navOffset = 90
        const elementPos = el.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: Math.max(0, elementPos - navOffset),
          behavior: 'smooth'
        })
      }
    }
  }

  // Close desktop dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="top-nav">
      <div className="nav-brand">
        <Link to="/" onClick={() => handleLinkClick('#home')}>
          <img src={logo} alt="WAR Academy logo" className="nav-logo" />
        </Link>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className={isMenuOpen ? 'active' : ''}>
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' && (!location.hash || location.hash === '#home') ? 'active-nav-link' : ''}`}
          onClick={() => handleLinkClick('#home')}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={`nav-link ${location.pathname === '/about' ? 'active-nav-link' : ''}`}
          onClick={() => {
            setIsMenuOpen(false)
            setIsDropdownOpen(false)
          }}
        >
          About
        </Link>

        {/* COURSES DROPDOWN */}
        <div
          className="nav-dropdown"
          ref={dropdownRef}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            type="button"
            className={`nav-dropdown-toggle ${isCoursesActive ? 'active-nav-link' : ''} ${isDropdownOpen || isMobileDropdownOpen ? 'dropdown-active' : ''}`}
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen)
              setIsMobileDropdownOpen(!isMobileDropdownOpen)
            }}
            aria-expanded={isDropdownOpen}
          >
            <span>Courses</span>
            <ChevronDown size={16} className={`dropdown-chevron ${(isDropdownOpen || isMobileDropdownOpen) ? 'rotate' : ''}`} />
          </button>

          {/* Desktop & Mobile Dropdown Menu */}
          <div className={`nav-dropdown-menu ${(isDropdownOpen || isMobileDropdownOpen) ? 'show' : ''}`}>
            <Link
              to="/nda-course"
              className={`dropdown-item ${location.pathname === '/nda-course' ? 'active-item' : ''}`}
              onClick={() => {
                setIsMenuOpen(false)
                setIsDropdownOpen(false)
                setIsMobileDropdownOpen(false)
              }}
            >
              <div className="dropdown-item-icon">
                <Shield size={18} />
              </div>
              <div className="dropdown-item-text">
                <strong>NDA</strong>
                <span>National Defence Academy</span>
              </div>
            </Link>

            <Link
              to="/cds-course"
              className={`dropdown-item ${location.pathname === '/cds-course' ? 'active-item' : ''}`}
              onClick={() => {
                setIsMenuOpen(false)
                setIsDropdownOpen(false)
                setIsMobileDropdownOpen(false)
              }}
            >
              <div className="dropdown-item-icon">
                <Compass size={18} />
              </div>
              <div className="dropdown-item-text">
                <strong>CDS</strong>
                <span>Combined Defence Services</span>
              </div>
            </Link>

            <Link
              to="/ssb-course"
              className={`dropdown-item ${location.pathname === '/ssb-course' ? 'active-item' : ''}`}
              onClick={() => {
                setIsMenuOpen(false)
                setIsDropdownOpen(false)
                setIsMobileDropdownOpen(false)
              }}
            >
              <div className="dropdown-item-icon">
                <Award size={18} />
              </div>
              <div className="dropdown-item-text">
                <strong>SSB</strong>
                <span>SSB Interview Training</span>
              </div>
            </Link>

            <Link
              to="/cscs-course"
              className={`dropdown-item ${['/cscs-course', '/cscs', '/cscs-eaam', '/cscs-eaam-course', '/courses/cscs'].includes(location.pathname) ? 'active-item' : ''}`}
              onClick={() => {
                setIsMenuOpen(false)
                setIsDropdownOpen(false)
                setIsMobileDropdownOpen(false)
              }}
            >
              <div className="dropdown-item-icon">
                <Dumbbell size={18} />
              </div>
              <div className="dropdown-item-text">
                <strong>CSCS / EAAM</strong>
                <span>Strength & Conditioning Prep</span>
              </div>
            </Link>
          </div>
        </div>

        {/* SERVICES DROPDOWN */}
        <div
          className="nav-dropdown"
          ref={servicesDropdownRef}
          onMouseEnter={() => setIsServicesDropdownOpen(true)}
          onMouseLeave={() => setIsServicesDropdownOpen(false)}
        >
          <button
            type="button"
            className={`nav-dropdown-toggle ${isServicesActive ? 'active-nav-link' : ''} ${isServicesDropdownOpen || isMobileServicesDropdownOpen ? 'dropdown-active' : ''}`}
            onClick={() => {
              setIsServicesDropdownOpen(!isServicesDropdownOpen)
              setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen)
            }}
            aria-expanded={isServicesDropdownOpen}
          >
            <span>Services</span>
            <ChevronDown size={16} className={`dropdown-chevron ${(isServicesDropdownOpen || isMobileServicesDropdownOpen) ? 'rotate' : ''}`} />
          </button>

          {/* Desktop & Mobile Dropdown Menu */}
          <div className={`nav-dropdown-menu services-menu ${(isServicesDropdownOpen || isMobileServicesDropdownOpen) ? 'show' : ''}`}>
            <Link
              to="/services/sports-performance"
              className={`dropdown-item ${location.pathname === '/services/sports-performance' ? 'active-item' : ''}`}
              onClick={() => {
                setIsMenuOpen(false)
                setIsServicesDropdownOpen(false)
                setIsMobileServicesDropdownOpen(false)
              }}
            >
              <div className="dropdown-item-icon">
                <Activity size={18} />
              </div>
              <div className="dropdown-item-text">
                <strong>Sports Performance</strong>
                <span>Strength & Conditioning, Sports Science & Biomechanics</span>
              </div>
            </Link>

            <Link
              to="/services/professional-education"
              className={`dropdown-item ${location.pathname === '/services/professional-education' ? 'active-item' : ''}`}
              onClick={() => {
                setIsMenuOpen(false)
                setIsServicesDropdownOpen(false)
                setIsMobileServicesDropdownOpen(false)
              }}
            >
              <div className="dropdown-item-icon">
                <Award size={18} />
              </div>
              <div className="dropdown-item-text">
                <strong>Professional Education</strong>
                <span>NSCA CSCS, Coach Education & Masterclasses</span>
              </div>
            </Link>

            <Link
              to="/services/defence-preparation"
              className={`dropdown-item ${location.pathname === '/services/defence-preparation' ? 'active-item' : ''}`}
              onClick={() => {
                setIsMenuOpen(false)
                setIsServicesDropdownOpen(false)
                setIsMobileServicesDropdownOpen(false)
              }}
            >
              <div className="dropdown-item-icon">
                <Shield size={18} />
              </div>
              <div className="dropdown-item-text">
                <strong>SSB Board Mentors & Defence Preparation</strong>
                <span>NDA, CDS, SSB & In-Service (ACC/SCO/PCSL)</span>
              </div>
            </Link>
          </div>
        </div>

        <a
          href="/#faculty"
          className={`nav-link ${(location.pathname === '/' && location.hash === '#faculty') || location.hash === '#faculty' ? 'active-nav-link' : ''}`}
          onClick={handleFacultyClick}
        >
          Faculty
        </a>

        <a
          className="nav-btn mobile-only"
          href="https://forms.gle/XhFBUjSRyocVCNFn6"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick()}
        >
          Enroll Now
        </a>
      </nav>

      <a
        className="nav-btn desktop-only"
        href="https://forms.gle/XhFBUjSRyocVCNFn6"
        target="_blank"
        rel="noopener noreferrer"
      >
        Enroll Now
      </a>
    </header>
  )
}
