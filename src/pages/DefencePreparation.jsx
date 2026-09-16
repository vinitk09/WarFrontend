import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Compass, Award, UserCheck, CheckCircle2, ArrowRight, ShieldAlert } from 'lucide-react'
import ConsultationModal from '../components/ConsultationModal'

export default function DefencePreparation() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const defencePrograms = [
    {
      title: 'NDA Preparation',
      icon: Shield,
      badge: '10+2 Entry',
      desc: 'Complete Mathematics & GAT curriculum, integrated with daily testing and foundational officer personality orientation.',
      highlights: ['Full NDA syllabus coverage', 'Daily & weekly mock tests', 'Personalized mentor tracking'],
      linkTo: '/nda-course',
      linkText: 'Explore NDA Course',
      isModal: false,
    },
    {
      title: 'CDS Preparation',
      icon: Compass,
      badge: 'Graduate Entry',
      desc: 'Targeted preparation for IMA, INA, AFA, and OTA covering Elementary Mathematics, English, and General Knowledge.',
      highlights: ['Concept clarity & shortcuts', 'Current affairs & defence awareness', 'Previous years question analysis'],
      linkTo: '/cds-course',
      linkText: 'Explore CDS Course',
      isModal: false,
    },
    {
      title: 'SSB Coaching & Mentorship',
      icon: Award,
      badge: 'Interview Board',
      desc: 'Holistic 5-day SSB preparation covering Stage 1 Screening, Psychological Tests (TAT/WAT/SRT/SD), GTO Ground, and Personal Interview.',
      highlights: ['OLQ personality development', 'Outdoor obstacle orientation', 'Group discussion & lecturette practice'],
      linkTo: '/ssb-course',
      linkText: 'Explore SSB Training',
      isModal: false,
    },
    {
      title: 'SSB Mock Assessment & In-Service Prep',
      icon: UserCheck,
      badge: 'Specialized Guidance',
      desc: 'Rigorous 1-on-1 mock interviews with ex-assessors, comprehensive dossier vetting, and guidance for serving personnel (ACC, SCO, PC-SL).',
      highlights: ['1-on-1 detailed interview feedback', 'Psychology dossier evaluation', 'ACC / SCO / PC(SL) tailored roadmap'],
      linkText: 'Book Mock Assessment',
      isModal: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50/50 pt-28 pb-20">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
          <Shield className="w-3.5 h-3.5 text-red-500" />
          <span>Officer Selection Pillar</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-5">
          Defence Preparation Programs
        </h1>

        <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Integrated written coaching, Officer-Like Qualities (OLQ) development, SSB mock assessments, and in-service commission roadmaps.
        </p>
      </section>

      {/* DEFENCE PROGRAMS GRID */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {defencePrograms.map((item, index) => {
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

                {item.isModal ? (
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-black text-white font-bold text-sm hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.linkTo}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-black text-white font-bold text-sm hover:bg-gray-800 transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* SIMPLE ACTION CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-red-600 mb-4">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
            Start Your Journey Toward the Uniform
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-6">
            Get personalized academic guidance, rigorous test evaluation, and disciplined mentorship to clear your defence examinations with confidence.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-black text-white font-bold text-sm rounded-xl hover:bg-gray-800 transition-all shadow-sm cursor-pointer"
            >
              Join Next Batch
            </button>
            <Link
              to="/ssb-course"
              className="px-6 py-3 bg-gray-100 text-gray-800 font-bold text-sm rounded-xl hover:bg-gray-200 transition-all"
            >
              Explore SSB Mentorship
            </Link>
          </div>
        </div>
      </section>

      {/* DEFENCE CONSULTATION / INQUIRY MODAL */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book Defence Assessment & Batch Enrollment"
        subtitle="Connect with our ex-defence officers and faculty for 1-on-1 interview feedback or next batch seat booking."
        defaultService="SSB 1-on-1 Mock Interview"
        serviceOptions={[
          'SSB 1-on-1 Mock Interview',
          'Psychology Dossier Assessment',
          'ACC / SCO / PC(SL) In-Service Guidance',
          'NDA Written + SSB Batch Admission',
          'CDS Written + SSB Batch Admission',
        ]}
      />
    </div>
  )
}
