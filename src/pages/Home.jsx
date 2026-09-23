import { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import finalBg from '../assets/abhikro.jpeg'
import madamImage from '../assets/madam.png'
import nehaMadam from '../assets/nehamadam2.png'
import pulkitMadam from '../assets/pulkit_madam2.png'
import mansimranMadam from '../assets/mansimran_madam.png'
import kalpanaMadam from '../assets/kalpana_madam.png'

import ndaIcon from '../assets/ndapreparationicon.png'
import ssbIcon from '../assets/ssbprepartionicon.png'
import cdsIcon from '../assets/cdspreparation.png'
import sportsIcon from '../assets/Defenseentry.png'
import mentorshipIcon from '../assets/Mentorship&Guidance .png'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ArrowRight, CheckCircle2, Activity, Award, Shield, ChevronLeft, ChevronRight } from 'lucide-react'

// Register plugins once
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const serviceVerticalCards = [
  {
    id: 'sports-performance',
    title: 'Sports Performance & High-Performance Services',
    number: '01',
    badge: 'High Performance',
    icon: Activity,
    link: '/services/sports-performance',
    items: [
      { name: 'Strength & Conditioning', link: '/services/sports-performance' },
      { name: 'Sports Science & Performance Testing', link: '/services/sports-performance' },
      { name: 'Biomechanics', link: '/services/sports-performance' },
      { name: 'Athlete Performance Programs', link: '/services/sports-performance' },
      { name: 'Sports Academy Consulting', link: '/services/sports-performance' },
    ],
  },
  {
    id: 'professional-education',
    title: 'Professional Education & Certification',
    number: '02',
    badge: 'Accredited Credentials',
    icon: Award,
    link: '/services/professional-education',
    items: [
      { name: 'NSCA CSCS & EAAM Exam Preparation', link: '/cscs-course' },
      { name: 'Workshops & Continuing Education', link: '/services/professional-education' },
      { name: 'Coach Education', link: '/services/professional-education' },
      { name: 'Topic-wise Masterclasses', link: '/services/professional-education' },
    ],
  },
  {
    id: 'defence-preparation',
    title: 'SSB Board Mentors & Defence Preparation',
    number: '03',
    badge: 'Officer Selection',
    icon: Shield,
    link: '/services/defence-preparation',
    items: [
      { name: 'NDA Preparation', link: '/nda-course' },
      { name: 'CDS Preparation', link: '/cds-course' },
      { name: 'SSB Coaching', link: '/ssb-course' },
      { name: 'SSB Mock Assessment', link: '/services/defence-preparation' },
      { name: 'ACC / SCO / PC(SL) Preparation', link: '/services/defence-preparation' },
    ],
  },
]


const journeySteps = [
  {
    number: '01',
    title: 'Live Classes',
    text: 'Structured live teaching with strong concept clarity and exam focus.',
    side: 'left',
  },
  {
    number: '02',
    title: 'Syllabus Mapping',
    text: 'Weekly plans that align every topic with the official NDA roadmap.',
    side: 'right',
  },
  {
    number: '03',
    title: 'Daily Tests',
    text: 'Quick assessments designed to improve speed, accuracy, and consistency.',
    side: 'left',
  },
  {
    number: '04',
    title: 'Mock Tests',
    text: 'Full-length exams that build exam temperament and confidence.',
    side: 'right',
  },
  {
    number: '05',
    title: 'Revision',
    text: 'Targeted revision cycles to reinforce core concepts and memory.',
    side: 'left',
  },
  {
    number: '06',
    title: 'Progress Tracking',
    text: 'Regular performance review to identify strengths and weakness areas.',
    side: 'right',
  },
  {
    number: '07',
    title: 'Mentorship',
    text: 'Personal guidance from mentors who monitor growth and motivation.',
    side: 'left',
  },
  {
    number: '08',
    title: 'Parent Updates',
    text: 'Transparent communication to keep families aligned with progress.',
    side: 'right',
  },
  {
    number: '09',
    title: 'Doubt Support',
    text: 'Dedicated support to clear concepts quickly and avoid learning gaps.',
    side: 'left',
  },
  {
    number: '10',
    title: 'SSB Orientation',
    text: 'Early personality and confidence development for the complete officer path.',
    side: 'right',
  },
]

const faculty = [
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

const ssbFeatures = [
  {
    title: 'WAT Orientation',
    desc: 'Word Association Test practice to develop structured and positive thought patterns under time pressure.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    title: 'TAT Orientation',
    desc: 'Thematic Apperception Test guidance to build positive, structured and officer-like narrative thinking.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    title: 'Self-Awareness Exercises',
    desc: 'Regular exercises to help students understand their strengths, weaknesses and areas of personality growth.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    title: 'Group Discussion Practice',
    desc: 'Structured group discussions to develop the ability to express, listen, lead and collaborate confidently.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Lecturette Confidence',
    desc: 'Practice sessions to build the ability to speak on any topic clearly, confidently and with structure.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: 'Officer-Like Qualities',
    desc: 'Systematic development of discipline, initiative, decisiveness, integrity and team spirit from day one.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
]

export default function Home() {
  const [activeZone, setActiveZone] = useState(0)
  const [currentFaculty, setCurrentFaculty] = useState(0)
  const journeySectionRef = useRef(null)
  const planeRef = useRef(null)
  const planeIconRef = useRef(null)
  const cardRefs = useRef([])
  const trainingMapRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFaculty((prev) => (prev + 1) % faculty.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextFaculty = () => {
    setCurrentFaculty((prev) => (prev + 1) % faculty.length)
  }

  const prevFaculty = () => {
    setCurrentFaculty((prev) => (prev - 1 + faculty.length) % faculty.length)
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Cards reveal animation
      cardRefs.current.forEach((card) => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          },
        )
      })

      // Airplane animation
      if (journeySectionRef.current && planeRef.current) {
        gsap.to(planeRef.current, {
          motionPath: {
            path: '#journeyPath',
            align: '#journeyPath',
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
          ease: 'none',
          scrollTrigger: {
            trigger: journeySectionRef.current,
            start: 'top 20%',
            end: 'bottom 80%',
            scrub: 1,
            onUpdate: (self) => {
              // Rotate plane based on scroll direction
              if (planeIconRef.current) {
                gsap.to(planeIconRef.current, {
                  rotation: self.direction === 1 ? 0 : 180,
                  duration: 0.3,
                  overwrite: 'auto',
                })
              }
            },
          },
        })
      }
    })

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 250)

    return () => {
      clearTimeout(refreshTimer)
      ctx.revert()
    }
  }, [])

  useEffect(() => {
    const trainingZones = 10

    const updateTrainingZone = () => {
      if (!trainingMapRef.current) return

      const rect = trainingMapRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const progress = Math.min(
        1,
        Math.max(0, (viewportHeight - rect.top) / (rect.height + viewportHeight * 0.6)),
      )
      const nextStep = Math.min(trainingZones - 1, Math.floor(progress * trainingZones))

      setActiveZone((prev) => {
        if (prev !== nextStep) return nextStep
        return prev
      })
    }

    window.addEventListener('scroll', updateTrainingZone, { passive: true })
    window.addEventListener('resize', updateTrainingZone)
    updateTrainingZone()

    return () => {
      window.removeEventListener('scroll', updateTrainingZone)
      window.removeEventListener('resize', updateTrainingZone)
    }
  }, [])

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-container" id="home">
        <img src={finalBg} alt="Hero Banner" className="hero-main-img" />
        <a href="#services" className="hero-btn-overlay"></a>
        <div className="hero-quote-left">
          <p className="quote-text">
            “GIVE ME A MAN OR A WOMAN WITH COMMON SENSE AND WHO IS NOT AN IDIOT AND I ASSURE YOU CAN MAKE A LEADER OUT OF HIM OR HER.”
          </p>
          <p className="quote-author">-SAM MANEKSHAW</p>
        </div>
        <div className="hero-bottom-badge">NDA/CDS</div>
      </section>

      {/* ABOUT SECTION (PRESERVED ON HOMEPAGE) */}
      <section className="about-section" id="about">
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
            <span className="about-eyebrow">ABOUT WAARR</span>
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
              <div className="about-action-btn-wrap" style={{ marginTop: '10px' }}>
                <Link
                  to="/about"
                  className="nav-btn"
                  style={{ fontSize: '0.9rem', padding: '10px 22px' }}
                >
                  Explore About WAARR
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - 3 CARDS ONLY */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Header */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="h-px w-14 bg-black/40"></span>
            <span className="text-xs font-black tracking-[0.2em] text-black uppercase">OUR SERVICES</span>
            <span className="h-px w-14 bg-black/40"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Complete Preparation. Complete Transformation.
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
            End-to-end guidance for defence aspirants through structured learning,<br className="hidden sm:inline" />
            personal mentoring, and continuous support.
          </p>

          {/* 3 CARDS ONLY */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16 text-left">
            {serviceVerticalCards.map((card) => {
              const IconComp = card.icon
              return (
                <article
                  key={card.id}
                  className="group relative flex flex-col bg-white rounded-2xl border-2 border-gray-200 hover:border-black p-7 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900 group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-inner">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-gray-300 group-hover:text-gray-900 transition-colors">
                      {card.number}
                    </span>
                  </div>

                  <span className="text-xs font-bold tracking-wider uppercase text-gray-500 mb-2">
                    {card.badge}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight mb-6">
                    {card.title}
                  </h3>

                  <div className="h-px w-full bg-gray-100 mb-6"></div>

                  <ul className="space-y-3.5 mb-8 flex-1">
                    {card.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.link}
                          className="flex items-start gap-3 group/item text-gray-700 hover:text-black transition-colors"
                        >
                          <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                          <span className="text-sm sm:text-base font-semibold leading-snug">
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={card.link}
                    className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-black text-white text-sm font-bold hover:bg-gray-800 transition-all shadow-sm"
                  >
                    <span>Explore Programs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              )
            })}
          </div>

        </div>
      </section>

      {/* READY CTA SECTION */}
      <section className="ready-cta-section section">
        <div className="ready-cta-box">
          <p className="section-tag">READY FOR NDA 2026</p>
          <h2>Begin your preparation with clarity, discipline, and purpose.</h2>
          <a
            href="https://forms.gle/XhFBUjSRyocVCNFn6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Join the Batch
          </a>
        </div>
      </section>

      {/* PREPARATION JOURNEY */}
      <section className="journey-section section" id="system" ref={journeySectionRef}>
        <div className="journey-header">
          <p className="section-tag">WAARR PREPARATION JOURNEY</p>
          <h2>
            A Complete Preparation System -<br />
            Beyond Quality Content
          </h2>
          <p className="journey-subtitle">
            Quality teaching is only the beginning. WAARR gives every student a
            complete ecosystem for consistent progress.
          </p>
        </div>
        <div className="journey-layout">
          <div className="journey-track">
            <svg className="journey-svg" viewBox="0 0 240 1400" preserveAspectRatio="none">
              <path
                id="journeyPath"
                d="M120 0 C 140 80, 140 140, 120 220 S 100 360, 120 460 S 140 600, 120 700 S 100 840, 120 940 S 140 1080, 120 1180 S 100 1320, 120 1400"
              />
            </svg>
            <div className="journey-plane" ref={planeRef}>
              <span className="plane-icon-inner" ref={planeIconRef}>✈</span>
            </div>
          </div>
          <div className="journey-steps">
            {journeySteps.map((step, index) => (
              <article
                className={`journey-card ${step.side}`}
                key={step.number}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
              >
                <div className="journey-card-icon">{step.number}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING SECTION */}
      <section className="training-section" ref={trainingMapRef}>
        <div className="training-container">
          <div className="training-header">
            <p className="section-tag">WHAT DOES THIS NDA BATCH DO DIFFERENTLY?</p>
            <h2>This batch is designed for serious aspirants...</h2>
          </div>
          <div className="training-grid">
            {[
              {
                title: 'Officer-Oriented Preparation',
                description:
                  'The aim is not only written exam success, but development of officer-like mindset and personality from day one.',
              },
              {
                title: 'Written + SSB Integrated Approach',
                description:
                  'Written preparation and SSB orientation run together from the beginning - not after the written result.',
              },
              {
                title: 'Personalised Monitoring',
                description:
                  'Every student is tracked individually - not treated as just another roll number in a large batch.',
              },
              {
                title: 'Weekly Performance Review',
                description:
                  'Progress is reviewed every week to identify weak areas, improve study habits and correct mistakes early.',
              },
              {
                title: 'Revision Architecture',
                description:
                  'The course includes a planned revision cycle - structured and scientific - instead of last-minute cramming.',
              },
              {
                title: 'Mock Test & Error Analysis',
                description:
                  'Students are trained not only to attempt mock tests, but to analyse mistakes and build accuracy systematically.',
              },
              {
                title: 'Parent Visibility',
                description:
                  'Parents stay informed and involved through regular, structured performance updates at every stage.',
              },
              {
                title: 'Handholding Till Exam Day',
                description:
                  'Students are guided till the final stage with academic, psychological and motivational support throughout.',
              },
            ].map((step, index) => (
              <div className="training-card" key={index}>
                <div className="training-card-num">{String(index + 1).padStart(2, '0')}</div>
                <div className="training-card-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSB GATE SECTION */}
      <section className="ssb-gate-section">
        <div className="section">
          <div className="ssb-gate-header">
            <h2>Written Exam Is Only the First Gate</h2>
            <p className="ssb-highlight">
              NDA selection requires academic ability, personality, confidence, communication and leadership potential - not marks alone.
            </p>
            <p className="ssb-description">
              The Service Selection Board does not only test knowledge. It assesses the candidate's personality, decision-making, confidence, social adaptability, communication, emotional stability and leadership potential. These qualities cannot be developed in a few days after the written exam. They must be nurtured gradually. That is why WAARR integrates SSB orientation from the very beginning of the NDA preparation journey.
            </p>
          </div>

          <div className="ssb-features-grid">
            {ssbFeatures.map((feature, idx) => (
              <div key={idx} className="ssb-feature-card">
                <div className="ssb-feature-icon">{feature.icon}</div>
                <div className="ssb-feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="ssb-gate-footer">
            <div className="ssb-footer-inner">
              <span className="check-icon">✓</span>
              <p>
                Written preparation opens the gate. <strong>Personality development helps you walk through it.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACULTY SECTION */}
      <section className="faculty-section section" id="faculty">
        <div className="faculty-container">
          <div className="section-heading">
            <h2>Our Faculty</h2>
            <p className="faculty-subtitle">
              Guided by experienced subject experts committed to concept clarity, regular practice and measurable student improvement.
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
            <Link to="/nda-course" className="nav-btn" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
              Explore NDA Course
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
