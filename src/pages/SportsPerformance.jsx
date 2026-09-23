import { Link } from 'react-router-dom'
import { Activity, Dumbbell, Microscope, Gauge, Building2, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'

export default function SportsPerformance() {

  const serviceOfferings = [
    {
      title: 'Strength & Conditioning',
      icon: Dumbbell,
      desc: 'Periodized resistance training and endurance conditioning designed for athletic excellence and military standards.',
      highlights: ['Periodized strength cycles', 'Cardiovascular endurance', 'Injury risk mitigation'],
    },
    {
      title: 'Sports Science & Performance Testing',
      icon: Microscope,
      desc: 'Accurate physiological evaluations measuring aerobic capacity, power output, speed, and recovery benchmarks.',
      highlights: ['VO2 & lactate threshold testing', 'Force plate jump analytics', 'Speed & acceleration profiling'],
    },
    {
      title: 'Biomechanics & Movement Analysis',
      icon: Gauge,
      desc: 'Detailed kinematic assessments to refine lifting mechanics, sprint form, and overall movement efficiency.',
      highlights: ['Video fault identification', 'Gait & running analysis', 'Postural alignment checks'],
    },
    {
      title: 'Athlete Performance Programs',
      icon: Activity,
      desc: 'Customized training regimes tailored specifically for youth prospects, competitive athletes, and defence cadets.',
      highlights: ['Sport-specific development', 'Pre-season & in-season plans', 'Recovery & load monitoring'],
    },
    {
      title: 'Sports Academy Consulting',
      icon: Building2,
      desc: 'Expert advisory for institutions, schools, and defence academies to build high-performance training systems.',
      highlights: ['Training facility design', 'Equipment & floor planning', 'Performance curriculum development'],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50/50 pt-28 pb-20">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
          <Activity className="w-3.5 h-3.5 text-red-500" />
          <span>High Performance Pillar</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-5">
          Sports Performance & High-Performance Services
        </h1>

        <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Evidence-based strength and conditioning, physiological testing, and movement science to develop peak athletic potential and military readiness.
        </p>
      </section>

      {/* CORE OFFERINGS GRID */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceOfferings.map((item, index) => {
            const IconComp = item.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-black transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900 mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2.5">{item.title}</h2>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">{item.desc}</p>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-2">
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
            )
          })}

          {/* QUICK CREDENTIAL CARD */}
          <div className="bg-black text-white rounded-2xl p-7 flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-5">
                <ShieldCheck className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2.5">NSCA-CSCS Certified Leadership</h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Led by internationally certified strength coaches and exercise physiologists ensuring every protocol is backed by scientific rigor.
              </p>
            </div>
            <a
              href="https://forms.gle/XhFBUjSRyocVCNFn6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SIMPLE ACTION CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
            Ready to Elevate Your Physical Standards?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-6">
            Get in touch with our performance specialists to design your personalized conditioning or testing schedule.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://forms.gle/XhFBUjSRyocVCNFn6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white font-bold text-sm rounded-xl hover:bg-gray-800 transition-all shadow-sm cursor-pointer"
            >
              Inquire Now
            </a>
            <Link
              to="/"
              className="px-6 py-3 bg-gray-100 text-gray-800 font-bold text-sm rounded-xl hover:bg-gray-200 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
