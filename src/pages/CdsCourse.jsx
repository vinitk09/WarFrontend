import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './CdsCourse.css'
import CourseEnrollmentForm from '../components/CourseEnrollmentForm'
import {
  Shield,
  BookOpen,
  Award,
  Users,
  Video,
  FileText,
  CheckCircle2,
  HelpCircle,
  Phone,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Clock,
  Laptop,
  CheckSquare,
  BarChart3,
  Compass,
  Layers,
  GraduationCap,
  Volume2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

// Faculty Assets
import kalpanaMadam from '../assets/kalpana_madam.png'
import pulkitMadam from '../assets/pulkit_madam2.png'
import mansimranMadam from '../assets/mansimran_madam.png'
import nehaMadam from '../assets/nehamadam2.png'

const faculty = [
  {
    name: 'Kalpana Madam',
    subject: 'Elementary Mathematics',
    qualification: 'B.E. Mechanical & M.E. Thermal',
    exp: '15+ Years',
    strengths: 'Logical shortcuts for Arithmetic, Algebra, Geometry & Trigonometry. Concept clarity and speed calculation for CDS exam.',
    quote: 'Making Mathematics logical, simple and scoring for every serious aspirant.',
    image: kalpanaMadam,
  },
  {
    name: 'Pulkit Madam',
    subject: 'English & Communication',
    qualification: 'B.Ed. and M.A. English (With Linguistics)',
    exp: '9+ Years',
    strengths: 'Mastering grammar rules, reading comprehension, error spotting, and officer-level communication skills.',
    quote: 'Building accuracy, confidence and command over English.',
    image: pulkitMadam,
  },
  {
    name: 'Mansimran Madam',
    subject: 'General Science',
    qualification: 'B.Ed. and M.Sc. (Chemistry)',
    exp: '8+ Years',
    strengths: 'Concept-oriented coverage of Physics, Chemistry & Biology with engaging explanations and MCQ practice.',
    quote: 'Making science intuitive, understandable and directly scoring in the CDS exam.',
    image: mansimranMadam,
  },
  {
    name: 'Neha Madam',
    subject: 'Humanities & Current Affairs',
    qualification: 'B.Ed. and M.A. (Economics)',
    exp: '7+ Years',
    strengths: 'In-depth analysis of Polity, History, Geography, Economics & Current Affairs. SSB Recommended.',
    quote: 'Connecting concepts with current events to ensure effortless retention and analytical depth.',
    image: nehaMadam,
  },
]

const appFeatures = [
  {
    icon: <Sparkles className="feat-icon" />,
    title: 'Instant Notifications',
    desc: 'Timely updates regarding UPSC CDS notifications, exam schedules, admit cards, live batch announcements, and key defence alerts.',
  },
  {
    icon: <Video className="feat-icon" />,
    title: 'Daily Video Lectures',
    desc: 'Pause, rewind, and re-watch lectures at your convenience. Gain uninterrupted access to new and archived subject-wise lectures anytime.',
  },
  {
    icon: <Laptop className="feat-icon" />,
    title: 'Interactive Live Streaming',
    desc: 'Real-time daily live classes on new concepts with two-way doubt clearing, shortcut tricks, and exam-oriented problem-solving.',
  },
  {
    icon: <FileText className="feat-icon" />,
    title: 'eDoc & Chapter eNotes',
    desc: 'Download high-quality lecture summary PDFs, previous years solved papers, and formula revision sheets after every class.',
  },
  {
    icon: <CheckSquare className="feat-icon" />,
    title: 'Daily Assignments & Review',
    desc: 'Regular assignment uploads with faculty evaluation to instill consistency and identify weak conceptual areas early.',
  },
  {
    icon: <BarChart3 className="feat-icon" />,
    title: 'All-India Mock Tests & AIR',
    desc: 'Standard exam-pattern full-length tests and topic tests. Receive detailed scorecard analytics and All India Ranking (AIR).',
  },
  {
    icon: <Users className="feat-icon" />,
    title: 'Attendance & Progress Tracker',
    desc: 'Transparent digital presence tracking and weekly milestone reviews shared with aspirants and parents.',
  },
  {
    icon: <BookOpen className="feat-icon" />,
    title: 'R&D Reference eBooks',
    desc: 'Exclusive CDS eBooks formulated by our expert educators covering Elementary Math, English, and General Knowledge.',
  },
  {
    icon: <HelpCircle className="feat-icon" />,
    title: '24/7 Dedicated Help Desk',
    desc: 'Submit academic and technical doubts anytime to receive prompt, step-by-step guidance from subject faculty.',
  },
]


const valueAddedFeatures = [
  {
    icon: <Award size={22} />,
    title: 'Integrated SSB Interview Preparation',
    desc: 'Complete guidance for Screening (PPDT), Psychology (TAT, WAT, SRT), GTO tasks, and Personal Interview from Day 1.',
  },
  {
    icon: <Volume2 size={22} />,
    title: 'Spoken English & Communication Skills',
    desc: 'Focused personality and English communication workshops to build officer-like fluency for SSB interviews.',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Free All-India Test Series with AIR',
    desc: 'Exam-exact mock tests with simulated time pressure and ranking to measure your national competitiveness.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Curated eBooks & Comprehensive Notes',
    desc: 'Exhaustive chapter-wise question banks including 10+ years of solved CDS Previous Years Questions (PYQs).',
  },
  {
    icon: <Laptop size={22} />,
    title: 'Cross-Device Synchronized Dashboard',
    desc: 'Seamless study experience across Mobile, Tablet, Laptop, and Desktop with low data bandwidth consumption.',
  },
  {
    icon: <Shield size={22} />,
    title: '100% Dedicated Defence Focus',
    desc: 'Zero clutter. Unlike other generic portals that dilute content across SSC or Banking, we are 100% defence-focused.',
  },
]

const faqs = [
  {
    q: 'Which online coaching is best for CDS 2026 exam preparation?',
    a: 'WAARR Defence Academy is the premier choice for CDS online coaching in India, offering specialized defence-only curriculum, experienced faculty with 15+ years of expertise, integrated SSB training from Day 1, and affordable fees.',
  },
  {
    q: 'Does WAARR cover preparation for IMA, INA, AFA, and OTA?',
    a: 'Yes! WAARR provides complete coverage for all CDS branches: English and General Knowledge for OTA aspirants, plus comprehensive Elementary Mathematics for IMA, INA, and AFA candidates.',
  },
  {
    q: 'Can I prepare for CDS written exam while studying or working from home?',
    a: 'Absolutely. WAARR’s daily live sessions, archived recorded lectures, downloadable eNotes, and 24/7 doubt portal allow aspirants to study flexibly without disrupting their college or work schedule.',
  },
  {
    q: 'How does WAARR assist with CDS Elementary Mathematics?',
    a: 'Led by Kalpana Madam (15+ yrs exp), our mathematics program simplifies complex geometry, trigonometry, algebra, and arithmetic through concept clarity, systematic derivation, and speed-enhancing shortcuts.',
  },
  {
    q: 'Is SSB Interview training included in the CDS Online Course?',
    a: 'Yes! WAARR believes that officer preparation is an integrated process. SSB personality development, WAT/TAT exercises, lecturette practice, and GD sessions run concurrently with written exam preparation.',
  },
  {
    q: 'What is the admission and enrollment process for the WAARR CDS Online Course?',
    a: 'You can submit your details using the enrollment form on this page or reach out to our admission counseling desk on WhatsApp or call at +91 7259346805 for batch onboarding and guidance.',
  },
  {
    q: 'Can I access the classes on slow internet connections?',
    a: 'Yes, the WAARR digital platform is specifically optimized for low data consumption and delivers smooth video streaming even on 3G / low-bandwidth mobile connections.',
  },
  {
    q: 'How can I clear my doubts during preparation?',
    a: 'You can ask doubts live during classes, participate in post-class doubt sessions, or submit queries on our 24/7 help desk to receive prompt solutions from subject educators.',
  },
]

export default function CdsCourse() {
  const [openFaq, setOpenFaq] = useState(0)
  const [currentFaculty, setCurrentFaculty] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: 'ease-out-cubic',
    })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFaculty((prev) => (prev + 1) % faculty.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  const nextFaculty = () => {
    setCurrentFaculty((prev) => (prev + 1) % faculty.length)
  }

  const prevFaculty = () => {
    setCurrentFaculty((prev) => (prev - 1 + faculty.length) % faculty.length)
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="cds-page">
      {/* HERO SECTION */}
      <section className="cds-hero" data-aos="fade-in">
        <div className="cds-hero-glow"></div>
        <div className="cds-container">
          <div className="cds-breadcrumbs" data-aos="fade-down" data-aos-delay="100">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/#system">Courses</Link>
            <span className="sep">/</span>
            <span className="cur">CDS Online Course</span>
          </div>

          <div className="cds-hero-badge" data-aos="zoom-in" data-aos-delay="200">
            <Sparkles size={16} />
            <span>UPSC CDS 2026 BATCH • ADMISSIONS OPEN</span>
          </div>

          <h1 className="cds-hero-title" data-aos="fade-up" data-aos-delay="300">
            Best CDS Online Coaching <br />
            <span className="text-highlight-cds">Classes in India 2026</span>
          </h1>

          <p className="cds-hero-sub" data-aos="fade-up" data-aos-delay="400">
            Master the extensive CDS syllabus with WAARR’s result-driven online course. Complete preparation for IMA, OTA, INA, and AFA with live interactive classes, R&D study material, and integrated SSB interview guidance.
          </p>

          <div className="cds-hero-cta-box" data-aos="fade-up" data-aos-delay="500">
            <a
              href="https://forms.gle/XhFBUjSRyocVCNFn6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary"
            >
              Enroll in CDS 2026 Batch <ArrowRight size={18} />
            </a>
            <a href="tel:+917259346805" className="btn-hero-secondary">
              <Phone size={18} /> Speak to Counsellor: +91 7259346805
            </a>
          </div>

          {/* QUICK STATS PILLS */}
          <div className="cds-quick-stats" data-aos="fade-up" data-aos-delay="600">
            <div className="qstat-item">
              <Compass size={20} />
              <div>
                <strong>IMA • OTA • INA • AFA</strong>
                <span>All Branches Covered</span>
              </div>
            </div>
            <div className="qstat-item">
              <Video size={20} />
              <div>
                <strong>Daily Live Classes</strong>
                <span>With Unlimited Replays</span>
              </div>
            </div>
            <div className="qstat-item">
              <Shield size={20} />
              <div>
                <strong>Written + SSB</strong>
                <span>Integrated Training</span>
              </div>
            </div>
            <div className="qstat-item">
              <GraduationCap size={20} />
              <div>
                <strong>Admission Status</strong>
                <span>New Batch Open</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW INTRO */}
      <section className="cds-overview-section">
        <div className="cds-container">
          <div className="overview-card" data-aos="fade-up">
            <div className="overview-content">
              <div className="sec-pill">WHY WAARR CDS PREPARATION</div>
              <h2>Upgrade Your Capabilities with India’s Top CDS Mentors</h2>
              <p>
                Equipping yourself for the tremendous, bulky syllabus of the Combined Defence Services (CDS) examination requires structured strategy, short-trick approaches, and continuous mentorship. WAARR provides an all-inclusive, value-added e-learning portal based precisely on the latest UPSC CDS exam pattern.
              </p>
              <p>
                Focus on productivity and efficiency while saving time, effort, and money with India's most relevant and reliable defence learning platform.
              </p>

              <div className="overview-points-grid">
                <div className="op-item">
                  <CheckCircle2 size={20} className="check-dark" />
                  <span>Elementary Mathematics (Arithmetic, Algebra, Geometry, Trig)</span>
                </div>
                <div className="op-item">
                  <CheckCircle2 size={20} className="check-dark" />
                  <span>English Grammar, Vocabulary, Comprehension & Error Spotting</span>
                </div>
                <div className="op-item">
                  <CheckCircle2 size={20} className="check-dark" />
                  <span>General Knowledge (Polity, History, Geography, Science & CA)</span>
                </div>
                <div className="op-item">
                  <CheckCircle2 size={20} className="check-dark" />
                  <span>Officer Like Qualities (OLQ) & SSB Psychology Orientation</span>
                </div>
              </div>
            </div>

            <div className="overview-highlight-box" data-aos="zoom-in" data-aos-delay="200">
              <div className="oh-inner">
                <Shield size={44} className="oh-shield" />
                <h3>First Effective, Then Efficient</h3>
                <p>
                  “CDS preparation is about conceptual depth and strategic accuracy. At WAARR, we prepare you to conquer both the written exam and the SSB board with absolute confidence.”
                </p>
                <div className="oh-footer">
                  <strong>Monika Sharma</strong>
                  <span>Director, WAARR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE ADDED & USP FEATURES */}
      <section className="cds-usp-section">
        <div className="cds-container">
          <div className="sec-header-center" data-aos="fade-up">
            <div className="sec-pill">SIGNATURE ADVANTAGES</div>
            <h2>Value-Added Features of WAARR CDS Course</h2>
            <p>
              Discover why WAARR is India’s most preferred online preparation destination for CDS aspirants.
            </p>
          </div>

          <div className="cds-usp-grid">
            {valueAddedFeatures.map((item, idx) => (
              <div
                className="usp-card"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 120}
              >
                <div className="usp-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL PLATFORM MODULES */}
      <section className="cds-features-section">
        <div className="cds-container">
          <div className="sec-header-center" data-aos="fade-up">
            <div className="sec-pill">DIGITAL LEARNING PLATFORM</div>
            <h2>Everything You Need for CDS Complete Preparation</h2>
            <p>
              Our technically advanced, interactive portal covers every aspect of the CDS written exam and SSB interview.
            </p>
          </div>

          <div className="cds-features-grid">
            {appFeatures.map((feat, idx) => (
              <div
                className="feat-card"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 120}
              >
                <div className="feat-icon-box">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* EXPERT FACULTY SLIDER (SAME AS HOMEPAGE) */}
      <section className="faculty-section section" id="faculty" data-aos="fade-up">
        <div className="faculty-container">
          <div className="section-heading">
            <div className="sec-pill" style={{ marginBottom: '8px' }}>EXPERT FACULTY PANEL</div>
            <h2>Learn From Seasoned CDS Subject Specialists</h2>
            <p className="faculty-subtitle">
              Subject experts committed to concept clarity, short-trick techniques, and measurable results.
            </p>
          </div>

          <div className="faculty-slider-wrapper">
            <button
              type="button"
              className="faculty-nav-btn faculty-prev-btn"
              onClick={prevFaculty}
              aria-label="Previous faculty member"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              className="faculty-nav-btn faculty-next-btn"
              onClick={nextFaculty}
              aria-label="Next faculty member"
            >
              <ChevronRight size={24} />
            </button>

            <div className="faculty-slider">
              {faculty.map((member, index) => (
                <article
                  className={`faculty-slide-card ${index === currentFaculty ? 'active' : ''}`}
                  key={index}
                  style={{ transform: `translateX(-${currentFaculty * 100}%)` }}
                >
                  <div className="faculty-card-inner">
                    <div className="faculty-image-box">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="faculty-info">
                      <h3>{member.name}</h3>
                      <p className="faculty-subject">
                        Subject Expert: <strong>{member.subject}</strong>
                      </p>
                      <p className="faculty-detail">Qualification: {member.qualification}</p>
                      <p className="faculty-detail">Experience: {member.exp}</p>
                      <div className="faculty-separator"></div>
                      <div className="faculty-strengths">
                        <strong>Key Strengths:</strong>
                        <p>{member.strengths}</p>
                      </div>
                      <p className="faculty-quote">"{member.quote}"</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="faculty-controls-row">
            <button
              type="button"
              className="faculty-arrow-pill"
              onClick={prevFaculty}
              aria-label="Previous faculty member"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="faculty-dots">
              {faculty.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentFaculty ? 'active' : ''}`}
                  onClick={() => setCurrentFaculty(index)}
                />
              ))}
            </div>

            <button
              type="button"
              className="faculty-arrow-pill"
              onClick={nextFaculty}
              aria-label="Next faculty member"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="faculty-cta-wrapper" style={{ textAlign: 'center', marginTop: '40px' }}>
            <a
              href="https://forms.gle/XhFBUjSRyocVCNFn6"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn"
              style={{ padding: '15px 40px', fontSize: '1.1rem' }}
            >
              Enroll in CDS Batch
            </a>
          </div>
        </div>
      </section>

      {/* ADMISSION & REGISTRATION */}
      <section className="cds-fee-section" data-aos="fade-up">
        <div className="cds-container">
          <div className="fee-box">
            <div className="fee-left">
              <div className="sec-pill" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}>OFFICER CADRE PREPARATION</div>
              <h2>CDS 2026 Online Batch Registration</h2>
              <p className="fee-sub">
                Targeted preparation for IMA, INA, AFA, and OTA covering Elementary Mathematics, English, and General Knowledge with integrated SSB interview guidance.
              </p>

              <div className="webinar-deal">
                <h4>🎯 Academic Counseling Desk:</h4>
                <p>Have questions regarding eligibility, exam syllabus, or study schedules? Connect directly with our defence advisors.</p>
                <p className="deal-contact">WhatsApp / Call: <strong>+91 7259346805</strong></p>
              </div>
            </div>

            <div className="fee-right">
              <div className="package-card" data-aos="zoom-in" data-aos-delay="200">
                <div className="package-badge">ALL-INCLUSIVE CURRICULUM</div>
                <ul className="pkg-features" style={{ marginTop: '1.2rem' }}>
                  <li><CheckCircle2 size={18} /> Complete CDS Syllabus (Math + English + GK)</li>
                  <li><CheckCircle2 size={18} /> Integrated SSB Interview Preparation</li>
                  <li><CheckCircle2 size={18} /> Daily Live Classes & Unlimited Recorded Replays</li>
                  <li><CheckCircle2 size={18} /> Full-Length All-India Mock Tests with AIR</li>
                  <li><CheckCircle2 size={18} /> 24/7 Dedicated Faculty Doubt Desk</li>
                  <li><CheckCircle2 size={18} /> Downloadable PDF Notes & Formula Books</li>
                  <li><CheckCircle2 size={18} /> Final War Room Revision Phase</li>
                </ul>
                <a
                  href="https://forms.gle/XhFBUjSRyocVCNFn6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pkg-enroll"
                >
                  Enroll in CDS Batch Now <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>

          <CourseEnrollmentForm
            courseTitle="CDS 2026 Comprehensive Online Course"
            courseCode="CDS"
            batchInfo="CDS 2026 Batch"
          />
        </div>
      </section>

      {/* FAQS ACCORDION */}
      <section className="cds-faq-section" data-aos="fade-up">
        <div className="cds-container">
          <div className="sec-header-center">
            <div className="sec-pill">HAVE QUESTIONS?</div>
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>Everything you need to know about WAARR's CDS Online Coaching Course.</p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => (
              <div
                className={`faq-item ${openFaq === idx ? 'faq-active' : ''}`}
                key={idx}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <ChevronDown size={20} className={`faq-arrow ${openFaq === idx ? 'open' : ''}`} />
                </div>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="cds-cta-banner" data-aos="fade-up">
        <div className="cds-container">
          <div className="cta-banner-box">
            <div className="cta-banner-text">
              <span className="cta-badge">ADMISSIONS OPEN • CDS 2026</span>
              <h2>Gear Up Your CDS Preparation with WAARR Defence Academy</h2>
              <p>Join thousands of defence aspirants marching towards their commission in the Indian Armed Forces. Secure your seat today.</p>
            </div>
            <div className="cta-banner-buttons">
              <a
                href="https://forms.gle/XhFBUjSRyocVCNFn6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-white"
              >
                Join CDS Batch Today <ArrowRight size={18} />
              </a>
              <Link to="/about" className="btn-cta-outline">
                About WAARR Academy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
