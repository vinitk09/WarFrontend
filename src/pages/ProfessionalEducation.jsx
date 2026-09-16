import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Award, BookOpen, GraduationCap, Video, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'
import ConsultationModal from '../components/ConsultationModal'

export default function ProfessionalEducation() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const educationPrograms = [
    {
      title: 'NSCA CSCS & EAAM Exam Preparation',
      icon: Award,
      badge: 'Premier Flagship',
      desc: 'Complete curriculum covering exercise science, program design, and video-based practical technique for global certification.',
      highlights: ['Scientific foundation modules', 'Applied periodization training', 'Dedicated mock exam test series'],
      hasLink: true,
      linkTo: '/cscs-course',
      linkText: 'View Course Details',
    },
    {
      title: 'Workshops & Continuing Education',
      icon: BookOpen,
      badge: 'Hands-on',
      desc: 'Intensive weekend and short-duration practical workshops focusing on Olympic lifting mechanics, power development, and speed drills.',
      highlights: ['Olympic weightlifting labs', 'Biomechanics flaw correction', 'Earn CEU credit points'],
      hasLink: false,
    },
    {
      title: 'Coach & Instructor Education',
      icon: GraduationCap,
      badge: 'Skill Building',
      desc: 'Structured pedagogy designed for strength coaches, gym instructors, and defence physical training instructors (PTIs).',
      highlights: ['Athlete communication strategies', 'Safe coaching progressions', 'Program monitoring frameworks'],
      hasLink: false,
    },
    {
      title: 'Topic-wise Masterclasses',
      icon: Video,
      badge: 'Specialized',
      desc: 'Deep-dive virtual and in-person masterclasses covering specific areas like bioenergetics, nutrition for athletes, and recovery science.',
      highlights: ['Sports nutrition guidelines', 'Load-monitoring metrics', 'Interactive Q&A case studies'],
      hasLink: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50/50 pt-28 pb-20">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
          <Award className="w-3.5 h-3.5 text-yellow-400" />
          <span>Accredited Credentials Pillar</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-5">
          Professional Education & Certification
        </h1>

        <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Internationally recognized certification prep, coach education workshops, and scientific masterclasses for fitness professionals and practitioners.
        </p>
      </section>

      {/* PROGRAMS GRID */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationPrograms.map((item, index) => {
            const IconComp = item.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-black transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      {item.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-2.5">{item.title}</h2>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">{item.desc}</p>

                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <ul className="space-y-2">
                      {item.highlights.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-black flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {item.hasLink ? (
                  <Link
                    to={item.linkTo}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-black text-white font-bold text-sm hover:bg-gray-800 transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gray-100 text-gray-900 font-bold text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <span>Inquire for Schedule</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* SIMPLE ACTION CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-800 mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
            Accelerate Your Strength & Conditioning Career
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-6">
            Join the elite circle of certified professionals with WAARR’s proven structured guidance and study architecture.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/cscs-course"
              className="px-6 py-3 bg-black text-white font-bold text-sm rounded-xl hover:bg-gray-800 transition-all shadow-sm"
            >
              Explore CSCS Course
            </Link>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-gray-100 text-gray-800 font-bold text-sm rounded-xl hover:bg-gray-200 transition-all cursor-pointer"
            >
              Contact Advisors
            </button>
          </div>
        </div>
      </section>

      {/* INQUIRY MODAL */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Professional Education Inquiry"
        subtitle="Connect with our academic team for upcoming workshop dates, CSCS preparation batches, and masterclass schedules."
        defaultService="Workshops & Continuing Education"
        serviceOptions={[
          'NSCA CSCS & EAAM Exam Preparation',
          'Workshops & Continuing Education',
          'Coach & Instructor Education',
          'Topic-wise Masterclasses',
        ]}
      />
    </div>
  )
}
