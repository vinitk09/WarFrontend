import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './NdaCourse.css'
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
  Calendar,
  Layers,
  GraduationCap
} from 'lucide-react'

// Assets
import kalpanaMadam from '../assets/kalpana_madam.png'
import pulkitMadam from '../assets/pulkit_madam2.png'
import mansimranMadam from '../assets/mansimran_madam.png'
import nehaMadam from '../assets/nehamadam2.png'

const faculty = [
  {
    name: 'Kalpana Madam',
    subject: 'Mathematics Expert',
    qualification: 'B.E. Mechanical & M.E. Thermal',
    exp: '15+ Years',
    strengths: 'Concept clarity and shortcut methods, NDA/CDS exams. Develop genuine love and speed for Mathematics.',
    quote: 'Making Mathematics logical, simple and scoring for every serious aspirant.',
    image: kalpanaMadam,
  },
  {
    name: 'Pulkit Madam',
    subject: 'English & Communication',
    qualification: 'B.Ed. and M.A. English (With Linguistics)',
    exp: '9+ Years',
    strengths: 'Grammar, vocabulary, comprehension and exam-oriented communication skills.',
    quote: 'Building accuracy, confidence and command over English.',
    image: pulkitMadam,
  },
  {
    name: 'Mansimran Madam',
    subject: 'GAT - Science',
    qualification: 'B.Ed. and M.Sc. (Chemistry)',
    exp: '8+ Years',
    strengths: 'Chemistry, Physics, Biology, engaging conceptual explanation and MCQ practice.',
    quote: 'Making science fun, understandable and directly related to daily life examples.',
    image: mansimranMadam,
  },
  {
    name: 'Neha Madam',
    subject: 'GAT - Humanities & CA',
    qualification: 'B.Ed. and M.A. (Economics)',
    exp: '7+ Years',
    strengths: 'History, Geography, Polity, Eco, Defence awareness & Current Affairs (CA). SSB - Recommended.',
    quote: 'Help students connect facts, CA and make learning interesting.',
    image: nehaMadam,
  },
]

const appFeatures = [
  {
    icon: <Sparkles className="feat-icon" />,
    title: 'Timely Notifications',
    desc: 'Real-time updates regarding NDA exam dates, admit cards, live batch alerts, and official announcements directly on your dashboard.',
  },
  {
    icon: <Video className="feat-icon" />,
    title: 'Daily Video Lectures',
    desc: 'Missed a live concept? Replay, pause, and master topics at your pace with unlimited access to archived and subject-wise categorized lectures.',
  },
  {
    icon: <Laptop className="feat-icon" />,
    title: 'Live Interactive Streaming',
    desc: 'Daily live classes with two-way teacher interaction, instant doubts clearing, shortcuts, FAQs, and real-time concept clarity.',
  },
  {
    icon: <FileText className="feat-icon" />,
    title: 'eDocs & Chapter eNotes',
    desc: 'Instant PDF lecture notes, handwritten formula cheat sheets, and high-yield summary documents ready for download after every class.',
  },
  {
    icon: <CheckSquare className="feat-icon" />,
    title: 'Regular Assignments & Review',
    desc: 'Structured daily homework assignments evaluated with feedback to ensure conceptual reinforcement and consistency.',
  },
  {
    icon: <BarChart3 className="feat-icon" />,
    title: 'All-India Mock Tests & Analytics',
    desc: 'Exam-pattern full-length tests and chapter quizzes with All India Rank (AIR) tracking, percentile breakdown, and detailed error analysis.',
  },
  {
    icon: <Users className="feat-icon" />,
    title: 'Attendance & Progress Monitor',
    desc: 'Scrutinized digital activity and attendance tracking to ensure high discipline and transparent weekly reports for parents.',
  },
  {
    icon: <BookOpen className="feat-icon" />,
    title: 'Digital Reference eBooks',
    desc: 'Comprehensive NDA eBooks formulated by our expert faculty covering Math, English, Physics, Chemistry, Biology, and Current Affairs.',
  },
  {
    icon: <HelpCircle className="feat-icon" />,
    title: '24/7 Dedicated Help Desk',
    desc: 'Direct query raising portal ensuring student doubts and academic queries receive rapid, step-by-step explanations from subject experts.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Visit Portal / App',
    desc: 'Access the WAARR Digital Learning Portal or download the WAARR Student App.',
  },
  {
    step: '02',
    title: 'Register Profile',
    desc: 'Click “New Student Registration” and input your academic and contact details.',
  },
  {
    step: '03',
    title: 'Select NDA 2026 Batch',
    desc: 'Navigate to Courses & choose the NDA 2026 Comprehensive Online Batch.',
  },
  {
    step: '04',
    title: 'Secure Enrollment',
    desc: 'Complete payment securely to unlock instant access to live classes, study materials, and tests.',
  },
]

const keyHighlights = [
  'Well-researched study materials updated to latest UPSC NDA pattern',
  'Engaging daily live sessions & recorded video lectures',
  'Individual guidance by dedicated subject teachers',
  'Interactive doubt-clearing sessions after every class',
  'Extensive question bank with 10+ years Previous Years Questions (PYQs)',
  'Time-saving and convenient access anywhere across India',
  'Full-length mock tests with national percentile and error analysis',
  'Integrated SSB personality and OLQ orientation from Day 1',
  'Handholding till exam day with regular revision marathons',
]

const faqs = [
  {
    q: 'Which online coaching is best for NDA 2026 preparation?',
    a: 'WAARR Defence Academy stands out as the premier online NDA coaching in India due to its dedicated defence-only focus, top-tier faculty with 15+ years of experience, integrated SSB orientation from Day 1, and unmatched personalized mentorship at an affordable fee.',
  },
  {
    q: 'Can I crack the NDA written exam preparing purely online from home?',
    a: 'Yes, absolutely! With WAARR’s structured daily live classes, scientific revision architecture, daily DPPs, mock tests, and 24/7 doubt resolution, thousands of aspirants prepare successfully from the comfort of their homes with disciplined routines.',
  },
  {
    q: 'Is WAARR Digital platform good for NDA mathematics and GAT?',
    a: 'WAARR Digital is tailored exclusively for defence exams. The mathematics curriculum is led by Kalpana Madam (15+ yrs exp), focusing on concept clarity and rapid short-trick methods, while GAT is comprehensively taught by subject specialists for Science, English, and Humanities.',
  },
  {
    q: 'How can I enroll in WAARR’s NDA Online Course?',
    a: 'You can register directly on our website through the "Enroll Now" button or contact our support team at +91 7259346805. Once registered, your live batch credentials and study portal access are activated immediately.',
  },
  {
    q: 'Is SSB interview training included in the NDA Online Course?',
    a: 'Yes! Unlike other coaching institutes that only teach written syllabus, WAARR integrates SSB guidance (WAT, TAT, Lecturette, Group Discussion, and Officer-Like Qualities cultivation) right from Day 1 of the NDA batch.',
  },
  {
    q: 'What is the fee for the WAARR NDA Online Course?',
    a: 'WAARR is committed to making officer-grade coaching accessible to every deserving aspirant across India. Our complete 3-Month NDA batch is available at an economical fee of just ₹1000, with additional discounts for webinar attendees.',
  },
  {
    q: 'How does WAARR handle student doubt clearing?',
    a: 'Students can ask doubts live during classes, participate in dedicated daily doubt clearing sessions, or submit queries via our 24/7 student help desk to receive prompt video/text explanations.',
  },
  {
    q: 'Do parents receive updates on the student’s performance?',
    a: 'Yes, WAARR provides structured weekly attendance and test score reports to parents, maintaining complete transparency and mutual accountability throughout the preparation journey.',
  },
]

export default function NdaCourse() {
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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="nda-page">
      {/* HERO SECTION */}
      <section className="nda-hero" data-aos="fade-in">
        <div className="nda-hero-glow"></div>
        <div className="nda-container">
          <div className="nda-breadcrumbs" data-aos="fade-down" data-aos-delay="100">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/#system">Courses</Link>
            <span className="sep">/</span>
            <span className="cur">NDA Online Course</span>
          </div>

          <div className="nda-hero-badge" data-aos="zoom-in" data-aos-delay="200">
            <Sparkles size={16} />
            <span>UPSC NDA 2026 BATCH • ADMISSIONS OPEN</span>
          </div>

          <h1 className="nda-hero-title" data-aos="fade-up" data-aos-delay="300">
            Best NDA Online Coaching <br />
            <span className="text-crimson">Classes in India 2026</span>
          </h1>

          <p className="nda-hero-sub" data-aos="fade-up" data-aos-delay="400">
            Prepare for your defence dream with WAARR’s premier NDA online coaching. Get access to comprehensive live classes, well-researched study material, individual teacher guidance, and integrated SSB orientation.
          </p>

          <div className="nda-hero-cta-box" data-aos="fade-up" data-aos-delay="500">
            <a
              href="#enroll-form"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-hero-primary"
            >
              Enroll in NDA 2026 Batch <ArrowRight size={18} />
            </a>
            <a href="tel:+917259346805" className="btn-hero-secondary">
              <Phone size={18} /> Speak to Counsellor: +91 7259346805
            </a>
          </div>

          {/* QUICK STATS PILLS */}
          <div className="nda-quick-stats" data-aos="fade-up" data-aos-delay="600">
            <div className="qstat-item">
              <Clock size={20} />
              <div>
                <strong>3 Months</strong>
                <span>Target: 13 Sept 2026</span>
              </div>
            </div>
            <div className="qstat-item">
              <Video size={20} />
              <div>
                <strong>Daily Live</strong>
                <span>Classes + Recorded</span>
              </div>
            </div>
            <div className="qstat-item">
              <Shield size={20} />
              <div>
                <strong>Written + SSB</strong>
                <span>Integrated from Day 1</span>
              </div>
            </div>
            <div className="qstat-item">
              <GraduationCap size={20} />
              <div>
                <strong>Special Fee</strong>
                <span>Just ₹1000 Full Course</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW INTRO */}
      <section className="nda-overview-section">
        <div className="nda-container">
          <div className="overview-card" data-aos="fade-up">
            <div className="overview-content">
              <div className="sec-pill">WHY WAARR NDA PREPARATION</div>
              <h2>Prepare Online for NDA 2026 with India’s Top Defence Mentors</h2>
              <p>
                WAARR provides an all-inclusive, value-added e-learning ecosystem crafted specifically for defence aspirants. We offer well-researched study materials, updated exam content, individual guidance by dedicated faculty, and real-time performance analytics.
              </p>
              <p>
                Unlike generic coaching platforms that mix multiple competitive exams, WAARR strictly deals with the defence segment. Every lecture, quiz, and test is calibrated precisely to the difficulty level of the UPSC NDA examination.
              </p>

              <div className="overview-points-grid">
                <div className="op-item">
                  <CheckCircle2 size={20} className="check-crimson" />
                  <span>Mathematics Concept Clarity & Speed Tricks</span>
                </div>
                <div className="op-item">
                  <CheckCircle2 size={20} className="check-crimson" />
                  <span>General Ability Test (GAT) Complete Syllabus</span>
                </div>
                <div className="op-item">
                  <CheckCircle2 size={20} className="check-crimson" />
                  <span>Officer Like Qualities (OLQ) Development</span>
                </div>
                <div className="op-item">
                  <CheckCircle2 size={20} className="check-crimson" />
                  <span>Weekly Assessments & Parent Progress Updates</span>
                </div>
              </div>
            </div>

            <div className="overview-highlight-box" data-aos="zoom-in" data-aos-delay="200">
              <div className="oh-inner">
                <Shield size={44} className="oh-shield" />
                <h3>One Goal. One Path. Your Success.</h3>
                <p>
                  “Preparation cannot be limited to books alone. At WAARR, we build your academic foundation and military officer mindset together.”
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

      {/* DIGITAL PLATFORM FEATURES */}
      <section className="nda-features-section">
        <div className="nda-container">
          <div className="sec-header-center" data-aos="fade-up">
            <div className="sec-pill">DIGITAL LEARNING PLATFORM</div>
            <h2>Everything You Need for NDA Online Preparation</h2>
            <p>
              Our technically advanced and highly interactive platform covers all aspects of NDA written preparation and SSB orientation.
            </p>
          </div>

          <div className="nda-features-grid">
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

      {/* HOW TO ENROLL STEPS */}
      <section className="nda-steps-section">
        <div className="nda-container">
          <div className="sec-header-center" data-aos="fade-up">
            <div className="sec-pill">SIMPLE ENROLLMENT</div>
            <h2>How to Enroll in the Best NDA Online Course</h2>
            <p>Get started with your officer journey in 4 easy steps.</p>
          </div>

          <div className="nda-steps-grid">
            {steps.map((item, index) => (
              <div
                className="step-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="step-num">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="steps-cta-wrap" data-aos="zoom-in">
            <Link to="/#pricing" className="btn-hero-primary">
              Register Now & Begin Learning <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* KEY COURSE FEATURES LIST & BENEFITS */}
      <section className="nda-benefits-section">
        <div className="nda-container">
          <div className="benefits-grid">
            <div className="benefits-card-left" data-aos="fade-right">
              <div className="sec-pill">COURSE HIGHLIGHTS</div>
              <h2>Features of NDA Online Course 2026</h2>
              <p>
                Below are the signature pillars that guarantee maximum retention, high scoring in written exam, and SSB confidence:
              </p>

              <div className="highlights-list">
                {keyHighlights.map((text, i) => (
                  <div className="hl-item" key={i}>
                    <CheckCircle2 size={20} className="hl-check" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="benefits-card-right" data-aos="fade-left">
              <div className="why-waarr-card">
                <h3>Why WAARR Outperforms Other Portals</h3>
                <div className="why-item">
                  <div className="why-icon"><Layers size={20} /></div>
                  <div>
                    <strong>100% Dedicated Defence Focus</strong>
                    <p>Unlike other generic apps that dilute quality, we strictly specialize in defence entrance examinations.</p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon"><BookOpen size={20} /></div>
                  <div>
                    <strong>Exam-Oriented R&D Study Materials</strong>
                    <p>Exclusive subject eBooks and practice modules prepared by veteran educators with 10+ years of solved PYQs.</p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon"><Laptop size={20} /></div>
                  <div>
                    <strong>Optimized Low Data Consumption</strong>
                    <p>Our digital platform runs smoothly even in low-bandwidth rural locations, ensuring uninterrupted study.</p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon"><Users size={20} /></div>
                  <div>
                    <strong>Continuous Parent Collaboration</strong>
                    <p>Regular performance dashboards and personalized mentor feedback keep parents updated at every milestone.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERT FACULTY SLIDER (SAME AS HOMEPAGE) */}
      <section className="faculty-section section" id="faculty" data-aos="fade-up">
        <div className="faculty-container">
          <div className="section-heading">
            <div className="sec-pill" style={{ marginBottom: '8px' }}>STAR FACULTY</div>
            <h2>Learn From Renowned Defence Educators</h2>
            <p className="faculty-subtitle">
              Subject experts with a proven track record of guiding students to NDA & CDS success.
            </p>
          </div>

          <div className="faculty-slider-wrapper">
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

          <div className="faculty-dots">
            {faculty.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentFaculty ? 'active' : ''}`}
                onClick={() => setCurrentFaculty(index)}
              />
            ))}
          </div>

          <div className="faculty-cta-wrapper" style={{ textAlign: 'center', marginTop: '40px' }}>
            <a
              href="#enroll-form"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="nav-btn"
              style={{ padding: '15px 40px', fontSize: '1.1rem' }}
            >
              Enroll in NDA Batch
            </a>
          </div>
        </div>
      </section>

      {/* PRICING / FEE SECTION */}
      <section className="nda-fee-section" data-aos="fade-up">
        <div className="nda-container">
          <div className="fee-box">
            <div className="fee-left">
              <div className="sec-pill" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}>AFFORDABLE EXCELLENCE</div>
              <h2>NDA 2026 Online Batch Fee Structure</h2>
              <p className="fee-sub">
                Your defence dream deserves commitment, not expensive coaching. Prepare with live classes, study materials, and mock tests for 3 months at just <strong>₹1000</strong>.
              </p>

              <div className="webinar-deal">
                <h4>🎯 Special Webinar Discount:</h4>
                <p>Students who attend our orientation webinar will be eligible for an additional <strong>15% DISCOUNT</strong>.</p>
                <p className="deal-contact">For webinar link and registration, contact us on WhatsApp: <strong>+91 7259346805</strong></p>
              </div>
            </div>

            <div className="fee-right">
              <div className="package-card" data-aos="zoom-in" data-aos-delay="200">
                <div className="package-badge">ALL-INCLUSIVE</div>
                <div className="pkg-price">
                  <span className="currency">₹</span>
                  <span className="amount">1,000</span>
                  <span className="duration">/ 3 Months</span>
                </div>
                <ul className="pkg-features">
                  <li><CheckCircle2 size={18} /> Complete NDA written coverage (Math + GAT)</li>
                  <li><CheckCircle2 size={18} /> Integrated SSB interview guidance from Day 1</li>
                  <li><CheckCircle2 size={18} /> Daily live classes & recorded video access</li>
                  <li><CheckCircle2 size={18} /> 1-on-1 mentorship & weekly performance reviews</li>
                  <li><CheckCircle2 size={18} /> Mock tests with All India Rank (AIR) display</li>
                  <li><CheckCircle2 size={18} /> 24/7 dedicated doubt resolution desk</li>
                  <li><CheckCircle2 size={18} /> Final War Room revision marathon</li>
                </ul>
                <a href="#enroll-form" className="btn-pkg-enroll">
                  Enroll in NDA Batch Now <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>

          <CourseEnrollmentForm
            courseTitle="NDA 2026 Comprehensive Online Batch"
            courseCode="NDA"
            batchInfo="NDA 2026 Batch"
            price="₹1,000 / 3 Months"
          />
        </div>
      </section>

      {/* FAQS ACCORDION */}
      <section className="nda-faq-section" data-aos="fade-up">
        <div className="nda-container">
          <div className="sec-header-center">
            <div className="sec-pill">HAVE QUESTIONS?</div>
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>Everything you need to know about WAARR's NDA Online Coaching Course.</p>
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

      {/* FINAL CALL TO ACTION */}
      <section className="nda-cta-banner" data-aos="fade-up">
        <div className="nda-container">
          <div className="cta-banner-box">
            <div className="cta-banner-text">
              <span className="cta-badge">ADMISSION OPEN • NDA 2026</span>
              <h2>Gear Up Your NDA Preparation with WAARR Defence Academy</h2>
              <p>Join thousands of defence aspirants marching towards their officer dream. Limited seats available per batch for personalized mentoring.</p>
            </div>
            <div className="cta-banner-buttons">
              <a
                href="#enroll-form"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-cta-white"
              >
                Join Batch Today <ArrowRight size={18} />
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
