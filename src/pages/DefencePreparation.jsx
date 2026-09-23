import {
  Shield,
  Brain,
  Users,
  MessageSquare,
  ArrowRight,
  ShieldAlert
} from 'lucide-react'
import rajatKumarImg from '../assets/RajatKumar.jpeg'

export default function DefencePreparation() {
  const googleFormUrl = 'https://forms.gle/XhFBUjSRyocVCNFn6'

  // Helper to extract first letter from officer name (skipping military ranks like Col, Lt Col)
  const getFirstLetter = (name) => {
    const cleaned = name
      .replace(/^(Lt\s*Col|Col|Brig|Maj|Capt|Lt|Wg\s*Cdr|Sqn\s*Ldr|Cdr)\.?\s+/i, '')
      .replace(/\(Retd\)/i, '')
      .trim()
    return (cleaned.charAt(0) || name.charAt(0)).toUpperCase()
  }

  // Veteran SSB Assessors Guidance Panel
  const ssbAssessors = [
    {
      name: 'Lt Col KVS (Retd)',
      role: 'Psychologist',
      wing: 'Psychology Wing',
      initial: 'K',
      image: null,
      icon: Brain,
      tenure: '2 Years at SSB',
      assessed: '2,700+ Candidates',
      bio: 'Lt Col KVS (Retd) brings two years of experience as a Psychologist at the Services Selection Board, having assessed approximately 2,700+ candidates. As part of WAARR’s SSB guidance team, he draws on this experience to help aspirants understand the psychological assessment process, develop self-awareness and identify areas for improvement.',
    },
    {
      name: 'Col Rajat Kumar (Retd)',
      role: 'Group Testing Officer',
      wing: 'GTO Ground Wing',
      initial: 'R',
      image: rajatKumarImg,
      icon: Users,
      tenure: '4 Years at SSB',
      assessed: '1,500+ Candidates',
      bio: 'Col Rajat Kumar (Retd) served for four years as a Group Testing Officer at the Services Selection Board, assessing more than 1,500 candidates. He subsequently served as an instructor responsible for training GTOs, bringing experience in both candidate assessment and assessor training. At WAARR, he draws on this background to guide aspirants in teamwork, practical leadership and effective participation in group tasks.',
    },
    {
      name: 'Col RD Bhatia (Retd)',
      role: 'Interviewing Officer',
      wing: 'Interview Wing',
      initial: 'R',
      image: null,
      icon: MessageSquare,
      tenure: '6+ Years at SSB',
      assessed: '3,500+ Candidates',
      bio: 'Col RD Bhatia (Retd) brings over six years of experience as an SSB Interviewing Officer, having assessed more than 3,500+ candidates. His extensive assessment experience strengthens WAARR’s interview guidance, helping aspirants reflect on their experiences, communicate with clarity and approach the personal interview with confidence and authenticity.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50/50 pt-28 pb-20">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
          <Shield className="w-3.5 h-3.5 text-red-500" />
          <span>SSB Guidance & Ex-Assessors Panel</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
          SSB Board Mentors & Defence Preparation
        </h1>
      </section>

      {/* SSB ASSESSORS GUIDANCE PANEL - WIDER CARDS WITHOUT GUIDANCE FOCUS BULLETS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
          {ssbAssessors.map((officer, index) => {
            const IconComp = officer.icon
            const firstLetter = officer.initial || getFirstLetter(officer.name)

            return (
              <div
                key={index}
                className="h-full bg-white rounded-3xl border border-gray-200 hover:border-black transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-8 sm:p-9 flex-1 flex flex-col">
                  {/* TOP WING BADGE */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-800">
                      {officer.wing}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* OFFICER PHOTO / INITIAL AVATAR */}
                  <div className="flex justify-center mb-7">
                    {officer.image ? (
                      <div className="relative">
                        <img
                          src={officer.image}
                          alt={officer.name}
                          className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl object-cover object-top border-2 border-gray-800 shadow-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-amber-400 text-[10px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full border border-gray-700 shadow-sm">
                          SSB Assessor
                        </span>
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-gray-900 via-neutral-800 to-black text-white flex flex-col items-center justify-center border-2 border-gray-800 shadow-lg group-hover:scale-105 transition-transform duration-300 select-none">
                          <span className="text-6xl sm:text-7xl font-black text-amber-400 font-serif tracking-tight drop-shadow-md">
                            {firstLetter}
                          </span>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-1">
                            {officer.role.split(' ')[0]}
                          </span>
                        </div>
                        <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-amber-400 text-[10px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full border border-gray-700 shadow-sm">
                          SSB Assessor
                        </span>
                      </div>
                    )}
                  </div>

                  {/* NAME & ROLE */}
                  <div className="text-center mb-5">
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mb-1.5 min-h-[32px] flex items-center justify-center">
                      {officer.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-extrabold text-red-600 uppercase tracking-wider">
                      {officer.role}
                    </p>
                  </div>

                  {/* KEY STATS PILLS */}
                  <div className="grid grid-cols-2 gap-2 bg-gray-50 border border-gray-200/80 rounded-2xl p-3.5 mb-6 text-center">
                    <div>
                      <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                        SSB Tenure
                      </span>
                      <span className="text-xs sm:text-sm font-black text-gray-900">
                        {officer.tenure}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                        Experience
                      </span>
                      <span className="text-xs sm:text-sm font-black text-gray-900">
                        {officer.assessed}
                      </span>
                    </div>
                  </div>

                  {/* DETAILED BIO */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1">
                    {officer.bio}
                  </p>
                </div>

                {/* CARD CTA -> LINK TO GOOGLE FORM */}
                <div className="p-8 sm:p-9 pt-0">
                  <a
                    href={googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-black text-white font-bold text-sm hover:bg-gray-800 transition-colors shadow-sm"
                  >
                    <span>Book 1-on-1 Guidance</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
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
            Get personalized academic guidance, rigorous test evaluation, and disciplined mentorship from ex-assessors to clear your defence examinations with confidence.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white font-bold text-sm rounded-xl hover:bg-gray-800 transition-all shadow-sm"
            >
              Book Ex-Assessor Session
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
