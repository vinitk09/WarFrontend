import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './AboutUs.css'
import madamImage from '../assets/madam.png'
import kalpanaMadam from '../assets/kalpana_madam.png'
import pulkitMadam from '../assets/pulkit_madam2.png'
import mansimranMadam from '../assets/mansimran_madam.png'
import nehaMadam from '../assets/nehamadam2.png'
import { 
  Shield, 
  Target, 
  Award, 
  Users, 
  BookOpen, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  HeartHandshake
} from 'lucide-react'
import CourseEnrollmentModal from '../components/CourseEnrollmentModal'

const mentors = [
  {
    name: 'Kalpana Madam',
    subject: 'Mathematics',
    qualification: 'B.E. Mechanical & M.E. Thermal',
    exp: '15+ Years',
    strengths: 'Concept clarity and shortcut methods, NDA/CDS exams. Develop genuine love for Mathematics.',
    quote: 'Making Mathematics logical, simple and scoring for every serious aspirant.',
    image: kalpanaMadam,
  },
  {
    name: 'Pulkit Madam',
    subject: 'English',
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

const pillars = [
  {
    icon: <Shield className="pillar-icon" />,
    title: 'Officer-Oriented Focus',
    desc: 'Preparation goes beyond passing a test. We systematically nurture the 15 Officer Like Qualities (OLQs), leadership traits, and situational decision-making from day one.',
  },
  {
    icon: <Target className="pillar-icon" />,
    title: 'Written + SSB Integrated Curriculum',
    desc: 'Written preparation and SSB orientation run concurrently. Candidates master academic subjects while building positive psychology (TAT/WAT) and public speaking skills.',
  },
  {
    icon: <BookOpen className="pillar-icon" />,
    title: 'Scientific Revision Architecture',
    desc: 'Spaced repetition, daily micro-tests, and deep error analysis replace last-minute cramming, ensuring permanent memory retention and pinpoint accuracy.',
  },
  {
    icon: <Users className="pillar-icon" />,
    title: 'Personal Mentorship & Small Batches',
    desc: 'Every aspirant is tracked individually with personalized weak-area diagnosis, customized study plans, and 1-on-1 doubt resolution.',
  },
  {
    icon: <HeartHandshake className="pillar-icon" />,
    title: 'Parent Visibility & Accountability',
    desc: 'Structured weekly performance updates and milestone reports keep parents informed and active partners in the aspirant’s transformation journey.',
  },
  {
    icon: <Compass className="pillar-icon" />,
    title: 'Physical & Mental Conditioning',
    desc: 'Under certified fitness mentorship (CSCS-USA), students receive guidance on physical stamina, agility, and mental resilience needed for military academies.',
  },
]

const values = [
  {
    title: 'Discipline',
    desc: 'The bedrock of armed forces life. We instill unwavering punctuality, consistency, and habit systems.',
  },
  {
    title: 'Clarity',
    desc: 'No vague shortcuts. Every topic is mapped to the NDA/CDS blueprint with crystalline fundamental depth.',
  },
  {
    title: 'Courage',
    desc: 'Fostering moral and physical courage to overcome failures, conquer stage fright, and lead from the front.',
  },
  {
    title: 'Integrity',
    desc: 'Uncompromising dedication to truth, sportsmanship, and ethics in academics and personal character.',
  },
]

export default function AboutUs() {
  const [currentFaculty, setCurrentFaculty] = useState(0)
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false)

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
      setCurrentFaculty((prev) => (prev + 1) % mentors.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero" data-aos="fade-in">
        <div className="about-hero-backdrop"></div>
        <div className="about-hero-container">
          <div className="about-breadcrumbs" data-aos="fade-down" data-aos-delay="100">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="current-page">About Us</span>
          </div>

          <div className="about-hero-badge" data-aos="zoom-in" data-aos-delay="200">
            <Sparkles size={16} />
            <span>ABOUT WAARR ACADEMY</span>
          </div>

          <h1 className="about-hero-title" data-aos="fade-up" data-aos-delay="300">
            Empowering The Future <br />
            <span className="text-highlight">Leaders of the Armed Forces</span>
          </h1>

          <p className="about-hero-subtitle" data-aos="fade-up" data-aos-delay="400">
            WAARR is not merely a coaching institute—it is a comprehensive officer preparation ecosystem designed to shape young aspirants into disciplined, confident, and mission-driven officers for the Indian Army, Navy, and Air Force.
          </p>

          <div className="about-stats-grid" data-aos="fade-up" data-aos-delay="500">
            <div className="stat-card">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Leadership</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Expert Faculty Years</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">10-Step</span>
              <span className="stat-label">Officer Journey Map</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">OLQ & Exam Synergy</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - DIRECTOR'S MESSAGE (SAME AS HOMEPAGE) */}
      <section className="about-section" id="about" style={{ padding: '60px 0', backgroundColor: '#fcfcfd' }} data-aos="fade-up">
        <div className="about-card">
          <div className="about-image-wrapper">
            <img src={madamImage} alt="Director" className="about-img" />
            <div className="about-quote-overlay">
              <div className="quote-icon"></div>
              <div className="quote-lines">
                <p>Guiding aspirants with clarity.</p>
                <p>Building officers with confidence.</p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="about-eyebrow">DIRECTOR’S MESSAGE</span>
            <h2 className="about-title">Message From The Director</h2>

            <h3 className="about-greeting">DEAR NDA ASPIRANTS</h3>

            <div className="about-paragraphs">
              <p>
                WAARR has a clear mission - to guide young aspirants not merely to clear written examinations, but to develop the mindset, discipline, confidence and personality required to become officers in the Indian Armed Forces.
              </p>
              <p>
                For NDA aspirants, preparation cannot be limited to books and question papers. The journey requires academic clarity, physical discipline, mental resilience, self-awareness, communication skills and working on OLQs.
              </p>
              <p>
                At WAARR, our aim is to help each aspirant through this journey with structured teaching, scientific revision, individual mentoring, regular testing, parent updates and SSB-oriented personality development right from the beginning.
              </p>
              <p>
                As you begin your NDA 2026 journey, remember that this preparation is not only about clearing a written examination - it is about becoming worthy of a responsibility much larger than yourself.
              </p>
              <p>
                WAARR will stand with you through this journey - as a guide, mentor and accountability partner - so that you progress with clarity, confidence and purpose.
              </p>
              <p>Your journey towards becoming an officer starts today.</p>
            </div>

            <div className="about-footer">
              <div className="director-info">
                <h4 className="director-name">Monika Sharma</h4>
                <p className="director-title">Director, WAARR, M.A. (English), M.Ed.</p>
                <p className="director-qual">CSCS-USA (Strength and Conditioning Coach)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="about-mission-section">
        <div className="about-container">
          <div className="mission-grid">
            <div className="mission-card" data-aos="fade-right">
              <div className="mission-icon-box">
                <Target size={32} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide India’s most effective, structured, and affordable officer preparation ecosystem—democratizing access to high-caliber mentorship, scientific learning methods, and holistic personality development for every deserving defence aspirant.
              </p>
              <ul className="mission-points">
                <li><CheckCircle2 size={18} /> Transparent, concept-driven live teaching</li>
                <li><CheckCircle2 size={18} /> Integrated SSB personality orientation from day one</li>
                <li><CheckCircle2 size={18} /> Unmatched parent-mentor collaboration</li>
              </ul>
            </div>

            <div className="mission-card highlight" data-aos="fade-left">
              <div className="mission-icon-box">
                <Award size={32} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and transformative defence preparatory institution in India, producing officers who exemplify supreme courage, impeccable integrity, intellectual acumen, and self-sacrificing devotion to the nation.
              </p>
              <ul className="mission-points">
                <li><CheckCircle2 size={18} /> Empowering youth from all backgrounds into military leadership</li>
                <li><CheckCircle2 size={18} /> Instilling lifelong habits of discipline and excellence</li>
                <li><CheckCircle2 size={18} /> Nurturing leaders worthy of the Indian Armed Forces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE 6 PILLARS OF WAARR */}
      <section className="about-pillars-section">
        <div className="about-container">
          <div className="section-center-heading" data-aos="fade-up">
            <div className="section-pill">OUR METHODOLOGY</div>
            <h2 className="section-title">What Makes WAARR Different?</h2>
            <p className="section-subtitle">
              We have eliminated the gaps found in conventional coaching to build an all-inclusive officer development system.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <div
                className="pillar-card"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 120}
              >
                <div className="pillar-icon-wrapper">{pillar.icon}</div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="about-values-section">
        <div className="about-container">
          <div className="section-center-heading" data-aos="fade-up">
            <div className="section-pill">OUR ETHOS</div>
            <h2 className="section-title">The Core Values That Drive Us</h2>
            <p className="section-subtitle">
              These four pillars shape the daily culture and character training of every student at WAARR.
            </p>
          </div>

          <div className="values-grid">
            {values.map((val, idx) => (
              <div
                className="value-card"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 120}
              >
                <div className="value-number">0{idx + 1}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT FACULTY SLIDER (SAME AS HOMEPAGE) */}
      <section className="faculty-section section" id="faculty" data-aos="fade-up">
        <div className="faculty-container">
          <div className="section-heading">
            <div className="sec-pill" style={{ marginBottom: '8px' }}>EXPERIENCED EDUCATORS</div>
            <h2>Meet Our Distinguished Faculty</h2>
            <p className="faculty-subtitle">
              Learn from passionate educators with decades of combined experience in cracking NDA, CDS, and SSB benchmarks.
            </p>
          </div>

          <div className="faculty-slider-wrapper">
            <div className="faculty-slider">
              {mentors.map((member, index) => (
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
            {mentors.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentFaculty ? 'active' : ''}`}
                onClick={() => setCurrentFaculty(index)}
              />
            ))}
          </div>

          <div className="faculty-cta-wrapper" style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              type="button"
              onClick={() => setIsEnrollModalOpen(true)}
              className="nav-btn cursor-pointer"
              style={{ padding: '15px 40px', fontSize: '1.1rem' }}
            >
              Enroll in WAARR Programs
            </button>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta-section" data-aos="fade-up">
        <div className="about-container">
          <div className="about-cta-card">
            <div className="about-cta-content">
              <span className="cta-eyebrow">YOUR OFFICER CAREER STARTS HERE</span>
              <h2>Ready to Wear the Uniform with Pride?</h2>
              <p>
                Join our comprehensive 3-Month NDA 2026 Batch with daily live classes, 1-on-1 mentorship, and integrated SSB orientation.
              </p>
              <div className="cta-actions">
                <button
                  type="button"
                  onClick={() => setIsEnrollModalOpen(true)}
                  className="btn-cta-primary cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Enroll in NDA Batch</span>
                  <ArrowRight size={18} />
                </button>
                <Link to="/" className="btn-cta-secondary">
                  Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENROLLMENT MODAL */}
      <CourseEnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseTitle="NDA Comprehensive Preparation Cohort"
        courseCode="NDA"
        batchInfo="3-Month NDA 2026 Batch"
        price="₹1,000 / 3 Months"
      />
    </div>
  )
}
