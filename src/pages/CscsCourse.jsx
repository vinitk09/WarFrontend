import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Dumbbell,
  Activity,
  Microscope,
  GraduationCap,
  Users,
  Video,
  FileText,
  Clock,
  Laptop,
  CheckSquare,
  BarChart3,
  HelpCircle,
  Phone,
  Shield,
  Layers,
  Flame,
  Target
} from 'lucide-react'
import CourseEnrollmentForm from '../components/CourseEnrollmentForm'

const examSections = [
  {
    title: 'Section 1: Scientific Foundations',
    questions: '95 Questions (80 Scored, 15 Non-Scored)',
    duration: '1.5 Hours',
    passingScore: 'Scaled Score of 75',
    color: '#e63946',
    topics: [
      {
        heading: 'Exercise Science (approx. 59 questions)',
        details: 'Muscle anatomy, sliding filament theory, fiber types (Type I, IIa, IIx), neuromuscular transmission, bioenergetics (ATP-PC, Glycolytic, Oxidative systems), endocrine responses to resistance exercise, and cardiovascular/respiratory adaptations.'
      },
      {
        heading: 'Sport Psychology (approx. 11 questions)',
        details: 'Arousal and anxiety control, motivational techniques, intrinsic vs extrinsic drive, mental imagery, self-efficacy, and motor skill learning stages.'
      },
      {
        heading: 'Sports Nutrition (approx. 25 questions)',
        details: 'Macronutrient requirements for power vs endurance athletes, hydration strategies, nutrient timing, body composition alteration, eating disorders, and evidence-based performance-enhancing substances and ergogenic aids.'
      }
    ]
  },
  {
    title: 'Section 2: Practical / Applied',
    questions: '125 Questions (110 Scored, 15 Non-Scored)',
    duration: '2.5 Hours',
    passingScore: 'Scaled Score of 75',
    color: '#1d3557',
    topics: [
      {
        heading: 'Exercise Technique (approx. 44 questions)',
        details: 'Includes 30–40 video-based questions testing candidate ability to identify correct biomechanical lifting technique and spot critical performance errors in Olympic lifts, power movements, spotting, plyometrics, speed, agility, and flexibility.'
      },
      {
        heading: 'Program Design (approx. 44 questions)',
        details: 'Needs analysis by sport, exercise selection order, training frequency, loading and repetitions based on training goals (strength, power, hypertrophy, muscular endurance), rest intervals, volume-load calculations, and periodization models (linear, undulating, block).'
      },
      {
        heading: 'Organization and Administration (approx. 15 questions)',
        details: 'Facility design, equipment layout, spacing criteria, staff-to-athlete ratios, policies and procedures, risk management, emergency action plans (EAP), and legal liability.'
      },
      {
        heading: 'Testing and Evaluation (approx. 22 questions)',
        details: 'Test selection criteria, test administration sequence, normative data analysis, validity and reliability, and interpreting test metrics to modify conditioning regimens.'
      }
    ]
  }
]

const modules = [
  {
    num: '01',
    title: 'Exercise Physiology & Bioenergetic Pathways',
    desc: 'Master the sliding filament theory, motor unit recruitment patterns, ATP replenishment pathways, lactate threshold dynamics, and hormonal responses to acute resistance exercise.',
    tags: ['Muscle Physiology', 'Energy Systems', 'Hormonal Adaptations']
  },
  {
    num: '02',
    title: 'Anatomy, Kinesiology & Biomechanics of Resistance Exercise',
    desc: 'Understand levers (1st, 2nd, and 3rd class), torque, biomechanical vectors, anatomical planes of motion, momentum, resistance curves, and kinematic movement efficiency.',
    tags: ['Levers & Torque', 'Planes of Motion', 'Resistance Vectors']
  },
  {
    num: '03',
    title: 'Sports Nutrition, Energy Balance & Ergogenic Aids',
    desc: 'Comprehensive study of pre-, intra-, and post-workout nutrition, protein synthesis requirements, glycogen replenishment, hydration metrics, and WADA/NSCA-approved dietary supplements.',
    tags: ['Macronutrient Timing', 'Hydration Strategies', 'Ergogenic Aids']
  },
  {
    num: '04',
    title: 'Testing Protocols, Normative Benchmarks & Data Analytics',
    desc: 'Proper scientific ordering of physical tests (non-fatiguing → agility → maximum power → sprint → endurance), validity/reliability principles, and data analysis for athletic profiling.',
    tags: ['Testing Sequence', '1RM Testing', 'Normative Benchmarks']
  },
  {
    num: '05',
    title: 'Exercise Technique, Olympic Lifts & Video Analysis Lab',
    desc: 'Intensive video fault-finding workshops covering Snatch, Clean & Jerk, Deadlift, Back Squat, Bench Press, Plyometrics, Speed (Acceleration vs Max Velocity), and COD mechanics.',
    tags: ['Olympic Lifts', 'Video Fault Finding', 'Plyometrics & Speed']
  },
  {
    num: '06',
    title: 'Advanced Periodization & Annual Program Design (YTP)',
    desc: 'Constructing Year-Round Training Programs (YTP): General Preparatory Phase (GPP), Specific Preparatory Phase (SPP), Pre-Competition, Competition Tapering, and Transition/Active Rest.',
    tags: ['Macrocycles', 'Linear & Undulating', 'Tapering Strategies']
  }
]

const sixPillars = [
  {
    icon: <Video className="w-6 h-6 text-black" />,
    title: 'Daily Live Concept Masterclasses',
    desc: 'Live interactive classes breaking down all 24 chapters of the official Essentials of Strength Training & Conditioning (4th Edition) with real-world sports applications.'
  },
  {
    icon: <Laptop className="w-6 h-6 text-black" />,
    title: 'Video Question Technique Lab',
    desc: 'Exclusive sessions focused on the video-based questions in the Practical/Applied section, coaching you to spot exact lifting errors and joint misalignment.'
  },
  {
    icon: <FileText className="w-6 h-6 text-black" />,
    title: 'Formula Sheets & High-Yield eNotes',
    desc: 'Downloadable summary cheat sheets, formula guides (1RM calculations, work-to-rest ratios, volume-load), and high-yield notes ready for fast revision.'
  },
  {
    icon: <CheckSquare className="w-6 h-6 text-black" />,
    title: '1,000+ Practice Question Bank',
    desc: 'Domain-wise chapter quizzes and mock questions mirroring Pearson VUE difficulty with detailed explanations for correct and incorrect answer choices.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-black" />,
    title: 'Full-Length Timed Mock Simulations',
    desc: 'Realistic full-length exam simulations mimicking the actual 4-hour test with performance analytics, section breakdowns, and scaled score estimation.'
  },
  {
    icon: <Users className="w-6 h-6 text-black" />,
    title: '1-on-1 Mentorship with Monika Sharma',
    desc: 'Direct access to Monika Sharma (CSCS-USA) to review weak study areas, analyze mock exam scores, and prepare a personalized study schedule.'
  }
]

const targetAudience = [
  {
    title: 'Strength & Conditioning Coaches',
    desc: 'Looking to work with state, national, IPL, ISL, or Olympic athletes where NSCA CSCS is an internationally mandatory qualification.'
  },
  {
    title: 'Personal Trainers & Fitness Instructors',
    desc: 'Seeking to transition from commercial gym training into elite sports science, high-performance coaching, and higher-tier remuneration.'
  },
  {
    title: 'Sports Science & Physiotherapy Students',
    desc: 'Graduates in Kinesiology, Physical Education, Sports Science, or Physiotherapy wanting to add the world’s most respected credential to their CV.'
  },
  {
    title: 'Defence & Tactical Fitness Trainers',
    desc: 'Military instructors, police physical trainers, and sports academy directors building evidence-based tactical physical conditioning systems.'
  }
]

const faqs = [
  {
    q: 'What is the NSCA CSCS certification and why is it considered the Gold Standard?',
    a: 'The Certified Strength and Conditioning Specialist (CSCS) offered by the National Strength and Conditioning Association (NSCA) USA is globally recognized as the gold standard in athletic performance and sports science. It is accredited by the NCCA (National Commission for Certifying Agencies) and is a mandatory requirement for strength coaches in major international leagues (NFL, NBA, MLB, Premier League, IPL) and high-performance sports institutes worldwide.'
  },
  {
    q: 'What are the eligibility requirements to sit for the NSCA CSCS Exam?',
    a: 'To sit for the CSCS exam, candidates must hold at least a Bachelor’s degree (in any field, though exercise science, physical education, or physiotherapy is advantageous) OR be currently enrolled as a college senior at an accredited institution. Candidates must also hold a current CPR/AED certification.'
  },
  {
    q: 'What is the EAAM certification?',
    a: 'The Exercise & Athletic Association Membership (EAAM) certification is designed for fitness and sports coaches seeking evidence-based credentials in athletic movement, biomechanics, and foundational strength conditioning, serving as an ideal co-credential alongside the CSCS curriculum.'
  },
  {
    q: 'Where and how is the NSCA CSCS exam conducted in India?',
    a: 'The CSCS exam is a computer-based test conducted at authorized Pearson VUE testing centers across major cities in India (Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Kolkata, Pune, etc.). You can schedule your exam date at any time during your 120-day exam eligibility window after registering on the NSCA official website.'
  },
  {
    q: 'What is the passing score for the CSCS exam?',
    a: 'Both sections—Scientific Foundations and Practical/Applied—must be passed independently. The NSCA uses a scaled scoring system where 75 is the passing score (on a scale of 1 to 99). If a candidate passes one section but fails the other, they only need to retake the failed section within their eligibility window.'
  },
  {
    q: 'How does WAARR’s 3-Month Preparation Cohort work?',
    a: 'WAARR provides an intensive 3-month roadmap featuring live concept classes, chapter-by-chapter summaries, video fault-analysis workshops, 1,000+ practice questions, and timed mock exams. Every session is led by Monika Sharma (CSCS-USA), providing direct academic handholding until you clear your exam.'
  },
  {
    q: 'What if I miss a live class due to work or training?',
    a: 'All live lectures are recorded in high-definition and uploaded to your student portal within hours. You have unlimited replay access 24/7 on both desktop and mobile devices.'
  },
  {
    q: 'What is the course fee for WAARR’s CSCS / EAAM Preparation Program?',
    a: 'WAARR believes in making world-class coaching accessible to serious coaches and sports professionals across India. Our complete 3-month comprehensive cohort is available at an affordable introductory fee of just ₹1,000, with an additional 15% discount for orientation webinar attendees.'
  }
]

export default function CscsCourse() {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  return (
    <div className="pt-16 sm:pt-20 bg-white text-gray-900 font-sans">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-black tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles size={14} />
            <span>GLOBAL GOLD STANDARD IN HIGH-PERFORMANCE COACHING</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            NSCA CSCS & EAAM<br className="hidden sm:inline" /> Exam Preparation Program
          </h1>

          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Crack the world’s premier Strength & Conditioning credential on your first attempt. Master exercise science, video-based technique analysis, periodized program design, and 1,000+ mock questions with guided mentorship from <strong>Monika Sharma (CSCS-USA)</strong>.
          </p>


          {/* KEY STATS BAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-800/80 text-left">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-3xl font-black text-white block">94%</span>
              <span className="text-xs text-gray-400 font-medium">First-Attempt Pass Rate</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-3xl font-black text-white block">120+</span>
              <span className="text-xs text-gray-400 font-medium">Hours Live Concept Classes</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-3xl font-black text-white block">1,000+</span>
              <span className="text-xs text-gray-400 font-medium">Practice MCQs with Rationales</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-3xl font-black text-white block">₹1,000</span>
              <span className="text-xs text-gray-400 font-medium">Complete 3-Month Fee</span>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW / WHY CSCS */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-4">
              WHY THIS CREDENTIAL MATTERS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
              The Gold Standard For High-Performance Sports Coaching
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Since 1985, the National Strength and Conditioning Association (NSCA) has awarded the <strong>Certified Strength and Conditioning Specialist (CSCS)</strong> credential to individuals who demonstrate the knowledge and ability to design and implement scientifically sound training programs for athletes.
              </p>
              <p>
                In today’s competitive sports ecosystem, international sporting bodies, IPL franchises, BCCI state associations, national academies, and military tactical units require strength coaches to be CSCS certified. It is not a basic gym trainer course—it is a rigorous, NCCA-accredited examination in applied exercise science, biomechanics, and periodization.
              </p>
              <p>
                WAARR’s <strong>NSCA CSCS & EAAM Exam Preparation Cohort</strong> bridges the gap between complex textbook theory and high-scoring exam execution, ensuring you master both the Scientific Foundations and Practical/Applied testing domains with absolute certainty.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
              <Target className="text-red-600 w-5 h-5" />
              <span>Career Opportunities for CSCS Holders</span>
            </h3>
            <ul className="space-y-4">
              {[
                'Head Strength & Conditioning Coach (Cricket, Football, Athletics)',
                'High-Performance Sports Science Director & Academy Consultant',
                'Collegiate Athletic Programs (NCAA / SAI Centers)',
                'Tactical Strength & Conditioning Facilitator (Armed Forces / Police)',
                'Rehabilitation & Return-to-Play Specialist in Sports Clinics',
                'International Coaching Assignments (UK, USA, UAE, Australia)'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EXAM BLUEPRINT & STRUCTURE */}
      <section id="exam-blueprint" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black text-black tracking-widest uppercase">TEST SPECIFICATION</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-1 mb-4">
              NSCA CSCS Examination Blueprint
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              The exam consists of two independently scored sections administered via computer at Pearson VUE testing centers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {examSections.map((sec, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-100">
                    <h3 className="text-2xl font-black text-gray-900">{sec.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 p-4 rounded-xl">
                    <div>
                      <span className="text-xs text-gray-500 font-bold block uppercase">Questions</span>
                      <span className="text-sm font-extrabold text-gray-900">{sec.questions}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-bold block uppercase">Time Allowed</span>
                      <span className="text-sm font-extrabold text-gray-900">{sec.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {sec.topics.map((top, tIdx) => (
                      <div key={tIdx} className="border-l-2 border-black pl-4">
                        <h4 className="text-base font-bold text-gray-900 mb-1">{top.heading}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{top.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-500">
                  <span>Passing Standard: {sec.passingScore}</span>
                  <span className="text-green-700">Covered 100% in WAARR Cohort</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-PILLAR PREPARATION SYSTEM */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-900 text-xs font-bold uppercase tracking-wider mb-3">
            PEDAGOGICAL EXCELLENCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            WAARR’s 6-Pillar CSCS Preparation System
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Built from scratch to demystify complex exercise physiology, kinematic calculations, and video fault analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sixPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl border border-gray-200 hover:border-black transition-all bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED SYLLABUS MODULES */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black text-yellow-400 tracking-widest uppercase">COMPLETE SYLLABUS COVERAGE</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1 mb-4">
              Chapter-by-Chapter Curriculum Architecture
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Aligned with the 4th Edition of the Essentials of Strength Training and Conditioning textbook.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((mod) => (
              <div
                key={mod.num}
                className="p-7 rounded-2xl bg-gray-800/80 border border-gray-700 hover:border-white transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-black text-yellow-400 tracking-widest block mb-2">MODULE {mod.num}</span>
                  <h3 className="text-xl font-bold text-white mb-3">{mod.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{mod.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700">
                  {mod.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-semibold px-2.5 py-1 rounded bg-gray-700 text-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD ATTEND */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-black tracking-widest uppercase">TARGET AUDIENCE</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-1 mb-4">
            Who Is This Program Designed For?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Whether you are preparing for international credentials or looking to upgrade your coaching pedagogy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {targetAudience.map((aud, idx) => (
            <div key={idx} className="p-7 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-white transition-all shadow-sm">
              <h3 className="text-lg font-black text-gray-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-black" />
                <span>{aud.title}</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{aud.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* FEE STRUCTURE & BATCH ENROLLMENT SECTION */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black text-white rounded-3xl p-8 sm:p-12 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest block mb-2">AFFORDABLE EXCELLENCE</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                3-Month CSCS / EAAM Cohort Investment
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                International coaching programs for CSCS typically cost upwards of ₹35,000 to ₹50,000. WAARR breaks all financial barriers by offering complete live instruction, study packs, and mock exams for 3 months at just <strong>₹1,000</strong>.
              </p>
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <h4 className="text-yellow-400 font-bold text-sm mb-1">🎯 Special Orientation Webinar Offer:</h4>
                <p className="text-xs sm:text-sm text-gray-200">
                  Attend our upcoming online orientation webinar to receive an additional <strong>15% DISCOUNT</strong> and free sample chapter summaries.
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  WhatsApp Support Desk: <strong>+91 7259346805</strong>
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white text-gray-900 p-8 rounded-2xl shadow-lg text-center flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">ALL-INCLUSIVE ADMISSION</span>
                <div className="flex items-baseline justify-center gap-1 my-3">
                  <span className="text-2xl font-bold">₹</span>
                  <span className="text-5xl font-black">1,000</span>
                  <span className="text-gray-500 font-semibold text-sm">/ 3 Months</span>
                </div>
                <ul className="text-left space-y-2.5 my-6 text-xs sm:text-sm font-semibold text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600" /> Complete NSCA Scientific Foundations</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600" /> Complete Practical/Applied Video Lab</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600" /> 1,000+ Exam-Pattern Practice Questions</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600" /> 1-on-1 Mentorship by Monika Sharma</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600" /> High-Yield Formula Cheat Sheets</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600" /> 24/7 Academic Doubt Resolution</li>
                </ul>
              </div>
              <a
                href="#enroll-form"
                className="w-full py-3.5 px-6 rounded-xl bg-black text-white font-bold text-sm hover:bg-gray-800 transition-colors shadow-md block text-center"
              >
                Enroll in CSCS Batch Now
              </a>
            </div>
          </div>
        </div>

        {/* EMBEDDED INTERACTIVE ENROLLMENT FORM */}
        <CourseEnrollmentForm
          courseTitle="NSCA CSCS & EAAM Exam Preparation Cohort"
          courseCode="CSCS"
          batchInfo="2026 Batch"
          price="₹1,000 / 3 Months"
        />
      </section>

      {/* FAQS ACCORDION */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">HAVE QUESTIONS?</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-1 mb-4">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-gray-600 text-base">
              Everything you need to know about the NSCA CSCS exam, Pearson VUE booking, and WAARR's preparation cohort.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                onClick={() => toggleFaq(idx)}
                className="border border-gray-200 rounded-2xl p-6 cursor-pointer bg-white transition-all hover:border-black shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">{faq.q}</h3>
                  <ChevronDown
                    size={20}
                    className={`transition-transform flex-shrink-0 text-gray-500 ${openFaq === idx ? 'rotate-180 text-black' : ''}`}
                  />
                </div>
                {openFaq === idx && (
                  <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed pt-4 border-t border-gray-100">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-black tracking-widest uppercase text-yellow-400 mb-2 block">
            ADMISSIONS OPEN • 2026 COHORT
          </span>
          <h2 className="text-2xl sm:text-4xl font-black mb-4">
            Become a Globally Certified Strength & Conditioning Specialist
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Take the definitive step towards coaching elite athletes and elevating your sports performance career.
          </p>
          <a
            href="#enroll-form"
            className="px-8 py-4 rounded-xl bg-white text-black font-extrabold text-sm sm:text-base hover:bg-gray-200 transition-all inline-flex items-center gap-2"
          >
            <span>Register for CSCS Cohort</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  )
}
