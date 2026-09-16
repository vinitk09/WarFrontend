import { Link } from 'react-router-dom'
import footerLogo from '../assets/waarrimg.png'

export default function Footer() {
  return (
    <footer className="footer-v2">
      <div className="footer-v2-container">
        <div className="footer-v2-main">
          <div className="footer-v2-brand">
            <div className="footer-v2-logo-box">
              <Link to="/">
                <img src={footerLogo} alt="WAARR Logo" />
              </Link>
            </div>
            <h4 className="footer-v2-slogan">Discipline, Courage, Success</h4>
            <p className="footer-v2-desc">
              WAARR is a premier officer preparation system dedicated to shaping the next generation of leaders for the Indian Armed Forces.
            </p>
          </div>

          <div className="footer-v2-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/#system">Program</Link></li>
              <li><Link to="/#faculty">Faculty</Link></li>
              <li><Link to="/#pricing">Contact us</Link></li>
            </ul>
          </div>

          <div className="footer-v2-links">
            <h3>Courses & Services</h3>
            <ul>
              <li><Link to="/nda-course">NDA Preparation</Link></li>
              <li><Link to="/cds-course">CDS Preparation</Link></li>
              <li><Link to="/ssb-course">SSB Interview Training</Link></li>
              <li><Link to="/cscs-course">CSCS / EAAM Exam Prep</Link></li>
              <li><Link to="/services/sports-performance">Sports Performance</Link></li>
              <li><Link to="/services/professional-education">Professional Education</Link></li>
              <li><Link to="/services/defence-preparation">Defence Preparation</Link></li>
            </ul>
          </div>

          <div className="footer-v2-links">
            <h3>Explore Our Products</h3>
            <ul>
              <li><Link to="/#system">Officer Prep System</Link></li>
              <li><Link to="/#system">Integrated SSB Guidance</Link></li>
              <li><Link to="/#system">Scientific Revision Plan</Link></li>
              <li><Link to="/#system">Performance Analytics</Link></li>
              <li><Link to="/#pricing">Mock Simulation Tests</Link></li>
            </ul>
          </div>

          <div className="footer-v2-contact">
            <h3>Contact us</h3>
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </span>
              <p>+91 7259346805 | +91 7259346805</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ background: '#222', borderRadius: '4px', padding: '2px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
              <p>Email: info@waarr.com</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <p>Head office: Jamshedpur, Jharkhand, India - 831001</p>
            </div>
          </div>
        </div>

        <div className="footer-v2-bottom">
          <p>© 2026 WAARR Services, All Rights Reserved</p>
          <p>Designed and Developed by <a href="https://venturingdigitally.com/" target="_blank" rel="noreferrer">Venturing Digitally Pvt Ltd.</a></p>
        </div>
      </div>
    </footer>
  )
}
