import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
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

  const handleLinkClick = (targetHash) => {
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
    setIsMobileDropdownOpen(false)
    setIsServicesDropdownOpen(false)
    setIsMobileServicesDropdownOpen(false)
    if (location.pathname === '/' && targetHash) {
      const el = document.querySelector(targetHash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
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
          className={location.pathname === '/' && !location.hash ? 'nav-link active-nav-link' : 'nav-link'}
          onClick={() => handleLinkClick('#home')}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={location.pathname === '/about' ? 'nav-link active-nav-link' : 'nav-link'}
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
            className={`nav-dropdown-toggle ${isDropdownOpen || isMobileDropdownOpen ? 'dropdown-active' : ''}`}
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
              className="dropdown-item"
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
              className="dropdown-item"
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
              className="dropdown-item"
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
              className="dropdown-item"
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
            className={`nav-dropdown-toggle ${isServicesDropdownOpen || isMobileServicesDropdownOpen ? 'dropdown-active' : ''}`}
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
              className="dropdown-item"
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
              className="dropdown-item"
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
              className="dropdown-item"
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
                <strong>Defence Preparation</strong>
                <span>NDA, CDS, SSB & In-Service (ACC/SCO/PCSL)</span>
              </div>
            </Link>
          </div>
        </div>

        <Link
          to="/#system"
          className="nav-link"
          onClick={() => handleLinkClick('#system')}
        >
          Program
        </Link>

        <Link
          to="/#faculty"
          className="nav-link"
          onClick={() => handleLinkClick('#faculty')}
        >
          Faculty
        </Link>

        <Link
          className="nav-btn mobile-only"
          to="/#pricing"
          onClick={() => handleLinkClick('#pricing')}
        >
          Enroll Now
        </Link>
      </nav>

      <Link
        className="nav-btn desktop-only"
        to="/#pricing"
        onClick={() => handleLinkClick('#pricing')}
      >
        Enroll Now
      </Link>
    </header>
  )
}
