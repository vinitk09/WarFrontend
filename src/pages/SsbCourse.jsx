import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './SsbCourse.css'
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
  UserCheck,
  Target,
  Brain,
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

// Mentor Assets
import madamImage from '../assets/madam.png'
import kalpanaMadam from '../assets/kalpana_madam.png'
import pulkitMadam from '../assets/pulkit_madam2.png'
import mansimranMadam from '../assets/mansimran_madam.png'
import nehaMadam from '../assets/nehamadam2.png'
import rajatKumarImg from '../assets/RajatKumar.jpeg'

const ssbMentors = [
  {
    name: 'Monika Sharma',
    subject: 'Director & Chief SSB Mentor',
    qualification: 'M.A. (English), M.Ed. • CSCS Coach',
    exp: '10+ Years Mentoring Defence Officers',
    strengths: 'Officer Like Qualities (OLQs), psychological resilience & leadership development.',
    quote: 'Guiding aspirants with clarity and building confident, dedicated defence officers.',
    image: madamImage,
    ctaLink: 'https://forms.gle/XhFBUjSRyocVCNFn6',
    ctaText: 'Book 1-on-1 Guidance',
  },
  {
    name: 'Neha Madam',
    subject: 'SSB Recommended Officer Mentor',
    qualification: 'B.Ed. & M.A. (Economics) • SSB Rec.',
    exp: '7+ Years Guiding Defence Aspirants',
    strengths: 'Screening (PPDT), TAT/WAT psychology analysis & personal interview strategy.',
    quote: 'Connecting real-world awareness with officer-like psychological clarity and calm.',
    image: nehaMadam,
    ctaLink: 'https://forms.gle/XhFBUjSRyocVCNFn6',
    ctaText: 'Book 1-on-1 Guidance',
  },
  {
    name: 'Pulkit Madam',
    subject: 'Communication & Lecturette Lead',
    qualification: 'B.Ed. & M.A. English (Linguistics)',
    exp: '9+ Years Guiding Defence Aspirants',
    strengths: 'Group Discussion, Lecturette confidence, fluent speech & narrative articulation.',
    quote: 'Building accuracy, command and officer-like authority in speech and communication.',
    image: pulkitMadam,
    ctaLink: 'https://forms.gle/XhFBUjSRyocVCNFn6',
    ctaText: 'Book 1-on-1 Guidance',
  },
  {
    name: 'Kalpana Madam',
    subject: 'Strategic Reasoning & OIR Specialist',
    qualification: 'B.E. Mechanical & M.E. Thermal',
    exp: '15+ Years Guiding Defence Aspirants',
    strengths: 'Verbal & Non-Verbal OIR tests mastery, spatial reasoning & speed decision-making.',
    quote: 'Making logical reasoning intuitive and lightning-fast under intense exam pressure.',
    image: kalpanaMadam,
    ctaLink: 'https://forms.gle/XhFBUjSRyocVCNFn6',
    ctaText: 'Book 1-on-1 Guidance',
  },
  {
    name: 'Lt Col KVS (Retd)',
    role: 'Psychologist',
    subject: 'SSB Psychologist (Psychology Wing)',
    wing: 'Psychology Wing',
    category: 'Defence Services',
    qualification: '2 Years at SSB • Ex-Psychologist',
    exp: 'Assessed 2,700+ SSB Candidates',
    strengths: 'Psychological assessment, TAT/WAT/SRT analysis, self-awareness & candidate diagnosis.',
    quote: 'Helping aspirants understand psychological assessment and develop genuine self-awareness.',
    image: null,
    initial: 'K',
    ctaLink: 'https://forms.gle/XhFBUjSRyocVCNFn6',
    ctaText: 'Book 1-on-1 Guidance',
  },
  {
    name: 'Col Rajat Kumar (Retd)',
    role: 'Group Testing Officer',
    subject: 'Group Testing Officer (GTO Wing)',
    wing: 'GTO Ground Wing',
    category: 'Defence Services',
    qualification: '4 Years at SSB • Ex-GTO Trainer',
    exp: 'Assessed 1,500+ SSB Candidates',
    strengths: 'Teamwork dynamics, practical leadership, obstacle tactics & proactive participation.',
    quote: 'Guiding aspirants in teamwork, practical leadership and confident participation in tasks.',
    image: rajatKumarImg,
    initial: 'R',
    ctaLink: 'https://forms.gle/XhFBUjSRyocVCNFn6',
    ctaText: 'Book 1-on-1 Guidance',
  },
  {
    name: 'Col RD Bhatia (Retd)',
    role: 'Interviewing Officer',
    subject: 'Interviewing Officer (Interview Wing)',
    wing: 'Interview Wing',
    category: 'Defence Services',
    qualification: '6+ Years at SSB • Ex-Interviewing Officer',
    exp: 'Assessed 3,500+ SSB Candidates',
    strengths: 'PIQ deconstruction, structured communication, interview authenticity & answer clarity.',
    quote: 'Helping aspirants communicate with clarity and approach interviews with true authenticity.',
    image: null,
    initial: 'R',
    ctaLink: 'https://forms.gle/XhFBUjSRyocVCNFn6',
    ctaText: 'Book 1-on-1 Guidance',
  },
]


const ssbPillars = [
  {
    icon: <UserCheck size={28} />,
    title: 'Stage 1: Screening & OIR / PP&DT',
    desc: 'Master verbal and non-verbal reasoning tests (OIR 1 & 2), image perception, structured story writing, individual narration, and group consensus discussion for PPDT.',
  },
  {
    icon: <Brain size={28} />,
    title: 'Stage 2: Psychological Test Series',
    desc: 'In-depth case studies and practice for Thematic Apperception Test (TAT), Word Association Test (WAT), Situation Reaction Test (SRT), and Self Description (SDT).',
  },
  {
    icon: <Users size={28} />,
    title: 'Stage 3: GTO Tasks & Group Dynamics',
    desc: 'Strategic training for Group Planning Exercise (GPE), Group Discussions (GD), Lecturette speaking, and insight into outdoor task coordination (PGT, HGT, Command Task).',
  },
  {
    icon: <MessageSquare size={28} />,
    title: 'Stage 4: Personal Interview & PIQ',
    desc: 'Complete Personal Information Questionnaire (PIQ) scrutiny, cross-questioning simulations, body language coaching, and 1-on-1 personal mock interview sessions.',
  },
  {
    icon: <Target size={28} />,
    title: 'Stage 5: Conference Experience & Debrief',
    desc: 'Mock Board Conference simulations, personalized dossier feedback, individual strength mapping, and targeted weakness refinement by mentors.',
  },
  {
    icon: <Award size={28} />,
    title: '15 Officer Like Qualities (OLQs)',
    desc: 'Systematic development of initiative, effective intelligence, decision-making, emotional stability, integrity, and team coordination from day one.',
  },
]

const keyBenefits = [
  {
    icon: <Users size={22} />,
    title: 'Small Batch Size (12–15 Students)',
    desc: 'Strictly limited batch sizes to guarantee individual attention, customized feedback, and direct interaction with mentors.',
  },
  {
    icon: <UserCheck size={22} />,
    title: '1-on-1 Personal Mock Interview',
    desc: 'Individual mock interview sessions with detailed PIQ analysis and personalized debriefing to eliminate vulnerabilities.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Access to "Ranneeti" SSB Master Dossier',
    desc: 'Comprehensive all-in-one SSB guidebook containing real-life perception stories of recommended candidates, sample SRTs, and PIQ guidelines.',
  },
  {
    icon: <Volume2 size={22} />,
    title: 'Spoken English & Officer Communication',
    desc: 'Daily speech workshops, GD simulations, and lecturette sessions to instill fearless, structured public speaking.',
  },
  {
    icon: <Brain size={22} />,
    title: 'Psychological Dossier Assessment',
    desc: 'Full-length dossier evaluation (TAT, WAT, SRT, SDT) with one-on-one psychological debrief to align your responses with OLQs.',
  },
  {
    icon: <Shield size={22} />,
    title: 'All Officer Entries Covered',
    desc: 'Specialized preparation for NDA, CDS, AFCAT, TES 10+2, TGC, NCC Special Entry, B.Tech Cadet Entry, and Direct SSB entries.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Apply / Register',
    desc: 'Register on the WAARR portal with your SSB call letter details and entry stream.',
  },
  {
    step: '02',
    title: 'Batch Allocation',
    desc: 'Get assigned to an exclusive 12-15 student cohort matching your target SSB board date.',
  },
  {
    step: '03',
    title: '14-Day Intensive Training',
    desc: 'Attend daily live sessions across Screening, Psychology, GTO simulations, and Mock Interviews.',
  },
  {
    step: '04',
    title: '1-on-1 Debrief & Roadmap',
    desc: 'Receive your personalized psychological profile report and final conference readiness certificate.',
  },
]

const faqs = [
  {
    q: 'Can SSB Interview preparation be done effectively in an online mode?',
    a: 'Yes, absolutely! The SSB Interview evaluates psychological thought patterns, decision-making, perception, communication, and Officer Like Qualities (OLQs). WAARR’s 14-Day Online Program provides live interactive PP&DT narration, daily TAT/WAT analysis, GPE simulations, and 1-on-1 mock interviews that mirror the actual SSB experience.',
  },
  {
    q: 'How many students are there in one SSB online batch?',
    a: 'WAARR strictly maintains small batches limited to 12–15 students. This ensures every student speaks daily in Group Discussions, receives individual feedback on PP&DT stories, and gets 1-on-1 mock interview time.',
  },
  {
    q: 'Does the program cover all 5 days of the SSB interview procedure?',
    a: 'Yes. The 14-Day curriculum comprehensively covers Day 1 Screening (OIR & PP&DT), Day 2 Psychological Tests (TAT, WAT, SRT, SDT), Day 3 & 4 GTO Tasks (GD, GPE, Lecturette, and outdoor concept guidance), and Day 5 Board Conference.',
  },
  {
    q: 'Will I get a personal 1-on-1 mock interview with feedback?',
    a: 'Yes! Every enrolled student receives full-fledged 1-on-1 personal mock interview sessions based on their individual PIQ form, followed by an in-depth debrief highlighting strengths and areas for improvement.',
  },
  {
    q: 'What entries does this SSB Online Course cater to?',
    a: 'Our course is tailored for all officer-cadre entries across the Indian Army, Navy, and Air Force—including NDA, CDS, AFCAT, 10+2 TES, 10+2 Navy B.Tech, TGC, SSC Tech, NCC Special Entry, and ACC.',
  },
  {
    q: 'What is the "Ranneeti" SSB Master Dossier?',
    a: '“Ranneeti” is WAARR’s signature SSB preparation manual. It includes actual psychological test dossiers of recommended candidates, sample story frameworks for TAT/PP&DT, hundreds of solved SRTs, and crucial PIQ filling tips.',
  },
  {
    q: 'How can I enroll in the 14-Day SSB Online Program?',
    a: 'You can submit your admission inquiry directly using the enrollment form on this page or connect with our SSB mentorship team via WhatsApp / Phone at +91 7259346805.',
  },
  {
    q: 'How can I enroll in the upcoming SSB batch?',
    a: 'You can click the "Enroll in SSB Batch" button on this page or contact our mentorship team directly on WhatsApp / Phone at +91 7259346805.',
  },
]

export default function SsbCourse() {
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
      setCurrentFaculty((prev) => (prev + 1) % ssbMentors.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  const nextFaculty = () => {
    setCurrentFaculty((prev) => (prev + 1) % ssbMentors.length)
  }

  const prevFaculty = () => {
    setCurrentFaculty((prev) => (prev - 1 + ssbMentors.length) % ssbMentors.length)
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="ssb-page">
      {/* HERO SECTION */}
      <section className="ssb-hero" data-aos="fade-in">
        <div className="ssb-hero-glow"></div>
        <div className="ssb-container">
          <div className="ssb-breadcrumbs" data-aos="fade-down" data-aos-delay="100">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/#system">Courses</Link>
            <span className="sep">/</span>
            <span className="cur">SSB Online Course</span>
          </div>

          <div className="ssb-hero-badge" data-aos="zoom-in" data-aos-delay="200">
            <Sparkles size={16} />
            <span>14-DAY SSB ONLINE GUIDANCE PROGRAM • ADMISSIONS OPEN</span>
          </div>

          <h1 className="ssb-hero-title" data-aos="fade-up" data-aos-delay="300">
            Best SSB Online Coaching <br />
            <span className="text-highlight-ssb">In India 2026</span>
          </h1>

          <p className="ssb-hero-sub" data-aos="fade-up" data-aos-delay="400">
            Transform your personality, develop the 15 Officer Like Qualities (OLQs), and crack the 5-day SSB interview under India’s elite panel of experienced mentors. Complete online guidance for Screening, Psychology, GTO, and Personal Interview in small batches.
          </p>

          <div className="ssb-hero-cta-box" data-aos="fade-up" data-aos-delay="500">
            <a
              href="https://forms.gle/XhFBUjSRyocVCNFn6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary"
            >
              Enroll in 14-Day SSB Batch <ArrowRight size={18} />
            </a>
            <a href="tel:+917259346805" className="btn-hero-secondary">
              <Phone size={18} /> Speak to SSB Mentor: +91 7259346805
            </a>
          </div>

          {/* QUICK STATS PILLS */}
          <div className="ssb-quick-stats" data-aos="fade-up" data-aos-delay="600">
            <div className="qstat-item">
              <Clock size={20} />
              <div>
                <strong>14-Day Program</strong>
                <span>Intensive Daily Sessions</span>
              </div>
            </div>
            <div className="qstat-item">
              <Users size={20} />
              <div>
                <strong>12-15 Students</strong>
                <span>Small Focused Batches</span>
              </div>
            </div>
            <div className="qstat-item">
              <UserCheck size={20} />
              <div>
                <strong>1-on-1 Mock Interview</strong>
                <span>Detailed PIQ Scrutiny</span>
              </div>
            </div>
            <div className="qstat-item">
              <GraduationCap size={20} />
              <div>
                <strong>Mentorship Focus</strong>
                <span>Personalized 1-on-1 Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW INTRO */}
      <section className="ssb-overview-section">
        <div className="ssb-container">
          <div className="overview-card" data-aos="fade-up">
            <div className="overview-content">
              <div className="sec-pill">WHY WAARR SSB PREPARATION</div>
              <h2>Quality SSB Guidance and Right Mentorship From Home</h2>
              <p>
                Relocating to distant cities for offline SSB coaching often puts an unnecessary financial burden on defence families. WAARR has designed a premier <strong>14-Day SSB Online Guidance Program</strong> to bring India’s most rigorous, interactive, and personalized mentorship directly to your home.
              </p>
              <p>
                Be it <strong>NDA, CDS, AFCAT, 10+2 TES, TGC, or Navy Cadet Entry</strong>, our holistic training cultivates emotional intelligence, perceptual clarity, quick decision-making, and officer-like conduct.
              </p>

              <div className="overview-points-grid">
                <div className="op-item">
                  <CheckCircle2 size={20} className="check-dark" />
                  <span>Small Batches (12-15 Students) for Maximum Interaction</span>
                </div>
                <div className="op-item">
                  <CheckCircle2 size={20} className="check-dark" />
                  <span>Daily PP&DT Story Writing, Narration & Group Discussion</span>
                </div>
                <div className="op-item">
                  <CheckCircle2 size={20} className="check-dark" />
                  <span>Psychological Dossier Assessment & 1-on-1 Feedback</span>
                </div>
                <div className="op-item">
                  <CheckCircle2 size={20} className="check-dark" />
                  <span>Personal Interview Mock Sessions with PIQ Form Analysis</span>
                </div>
              </div>
            </div>

            <div className="overview-highlight-box" data-aos="zoom-in" data-aos-delay="200">
              <div className="oh-inner">
                <Shield size={44} className="oh-shield" />
                <h3>Record SSB Recommendations</h3>
                <p>
                  “The Service Selection Board does not look for memorized answers—it searches for authentic character, initiative, integrity, and team leadership. We groom the officer within you.”
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

      {/* 5 STAGES OF SSB INTERVIEW PILLARS */}
      <section className="ssb-pillars-section">
        <div className="ssb-container">
          <div className="sec-header-center" data-aos="fade-up">
            <div className="sec-pill">COMPREHENSIVE CURRICULUM</div>
            <h2>The 5 Stages of SSB Interview Mastery</h2>
            <p>
              Our 14-day syllabus covers every single test across the 5-day SSB board selection with daily practical sessions.
            </p>
          </div>

          <div className="ssb-pillars-grid">
            {ssbPillars.map((pillar, idx) => (
              <div
                className="pillar-card"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 150}
              >
                <div className="pillar-icon-box">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY BENEFITS / USPs */}
      <section className="ssb-benefits-section">
        <div className="ssb-container">
          <div className="sec-header-center" data-aos="fade-up">
            <div className="sec-pill">FLAGSHIP BENEFITS</div>
            <h2>Why Choose WAARR's 14-Day SSB Online Program?</h2>
            <p>
              Unique advantages designed to give you the competitive edge in the SSB board conference.
            </p>
          </div>

          <div className="ssb-benefits-grid">
            {keyBenefits.map((item, idx) => (
              <div
                className="benefit-card"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 150}
              >
                <div className="benefit-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO ENROLL STEPS */}
      <section className="ssb-steps-section">
        <div className="ssb-container">
          <div className="sec-header-center" data-aos="fade-up">
            <div className="sec-pill">FAST REGISTRATION</div>
            <h2>How to Join the 14-Day SSB Online Guidance Batch</h2>
            <p>Simple 4-step pathway to start your SSB personality transformation.</p>
          </div>

          <div className="ssb-steps-grid">
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
            <a
              href="https://forms.gle/XhFBUjSRyocVCNFn6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary"
            >
              Register for Next SSB Batch <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* EXPERT MENTORS SLIDER (SAME AS HOMEPAGE) */}
      <section className="faculty-section section" id="faculty" data-aos="fade-up">
        <div className="faculty-container">
          <div className="section-heading">
            <div className="sec-pill" style={{ marginBottom: '8px' }}>ELITE MENTORS PANEL</div>
            <h2>Learn From India’s Distinguished SSB Mentors</h2>
            <p className="faculty-subtitle">
              Veteran educators and recommended mentors providing authentic insights into the mind of the SSB assessor.
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
              {ssbMentors.map((member, index) => (
                <article
                  className={`faculty-slide-card ${index === currentFaculty ? 'active' : ''}`}
                  key={index}
                  style={{ transform: `translateX(-${currentFaculty * 100}%)` }}
                >
                  <div className="faculty-card-inner">
                    <div className="faculty-image-box">
                      {member.image ? (
                        <img src={member.image} alt={member.name} />
                      ) : (
                        <div className="faculty-initial-avatar">
                          <span className="avatar-crest">🛡️</span>
                          <span className="avatar-letter">{member.initial || member.name[0]}</span>
                          <span className="avatar-badge">{member.wing || 'SSB Assessor'}</span>
                        </div>
                      )}
                    </div>
                    <div className="faculty-info">
                      {member.category && (
                        <span className="faculty-category-pill">
                          {member.category} • {member.wing || 'SSB Mentor'}
                        </span>
                      )}
                      <h3>{member.name}</h3>
                      <p className="faculty-subject">
                        Role: <strong>{member.subject}</strong>
                      </p>
                      <p className="faculty-detail">Qualification / Tenure: {member.qualification}</p>
                      <p className="faculty-detail">Experience: {member.exp}</p>
                      <div className="faculty-separator"></div>
                      <div className="faculty-strengths">
                        <strong>Key Strengths / Experience:</strong>
                        <p>{member.strengths}</p>
                      </div>
                      <p className="faculty-quote">"{member.quote}"</p>
                      {member.ctaLink && (
                        <div className="faculty-cta-wrapper">
                          <a
                            href={member.ctaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-hero-primary"
                            style={{ display: 'inline-flex', padding: '10px 24px', fontSize: '0.9rem' }}
                          >
                            {member.ctaText || 'Book 1-on-1 Guidance'} &rarr;
                          </a>
                        </div>
                      )}
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
              {ssbMentors.map((_, index) => (
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
              Enroll in SSB Program
            </a>
          </div>
        </div>
      </section>

      {/* FEE & REGISTRATION */}
      {/* REGISTRATION & ADMISSION */}
      <section className="ssb-fee-section" data-aos="fade-up">
        <div className="ssb-container">
          <div className="fee-box">
            <div className="fee-left">
              <div className="sec-pill" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}>OFFICER SELECTION BOARD</div>
              <h2>14-Day SSB Online Mentorship Cohort Admission</h2>
              <p className="fee-sub">
                Comprehensive 5-day SSB interview roadmap, 1-on-1 personal mock interview, psychological dossier review, and GTO ground orientation.
              </p>

              <div className="webinar-deal">
                <h4>🎯 SSB Admissions Desk:</h4>
                <p>Ready to begin your SSB preparation or have questions regarding upcoming batch dates? Speak with our team.</p>
                <p className="deal-contact">WhatsApp / Call: <strong>+91 7259346805</strong></p>
              </div>
            </div>

            <div className="fee-right">
              <div className="package-card" data-aos="zoom-in" data-aos-delay="200">
                <div className="package-badge">14-DAY BATCH</div>
                <ul className="pkg-features" style={{ marginTop: '1.2rem' }}>
                  <li><CheckCircle2 size={18} /> Small Batch Size (12–15 Students only)</li>
                  <li><CheckCircle2 size={18} /> Complete 5-Day SSB Procedure Covered</li>
                  <li><CheckCircle2 size={18} /> 1-on-1 Personal Mock Interview & Debrief</li>
                  <li><CheckCircle2 size={18} /> Daily PP&DT Narration & GD Practice</li>
                  <li><CheckCircle2 size={18} /> Full Dossier Psychology Evaluation (TAT, WAT, SRT)</li>
                  <li><CheckCircle2 size={18} /> Access to "Ranneeti" Master Dossier Guidebook</li>
                  <li><CheckCircle2 size={18} /> Spoken English & Lecturette Confidence Coaching</li>
                </ul>
                <a
                  href="https://forms.gle/XhFBUjSRyocVCNFn6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pkg-enroll"
                >
                  Enroll in 14-Day SSB Batch <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>

          <CourseEnrollmentForm
            courseTitle="14-Day Rigorous SSB Guidance Program"
            courseCode="SSB"
            batchInfo="Upcoming 14-Day Batch"
          />
        </div>
      </section>

      {/* FAQS ACCORDION */}
      <section className="ssb-faq-section" data-aos="fade-up">
        <div className="ssb-container">
          <div className="sec-header-center">
            <div className="sec-pill">HAVE QUESTIONS?</div>
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>Everything you need to know about WAARR's 14-Day SSB Online Guidance Program.</p>
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
      <section className="ssb-cta-banner" data-aos="fade-up">
        <div className="ssb-container">
          <div className="cta-banner-box">
            <div className="cta-banner-text">
              <span className="cta-badge">ADMISSIONS OPEN • 14-DAY SSB BATCH</span>
              <h2>Wear the Plus Sign with Pride: Crack Your SSB Interview</h2>
              <p>Join India’s most trusted online officer training platform. Limited 12–15 seats per batch to maintain individual mentorship quality.</p>
            </div>
            <div className="cta-banner-buttons">
              <a
                href="https://forms.gle/XhFBUjSRyocVCNFn6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-white"
              >
                Join SSB Batch Today <ArrowRight size={18} />
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
