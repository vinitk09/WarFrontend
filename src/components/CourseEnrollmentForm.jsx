import { CheckCircle2, ShieldCheck, ArrowRight, ExternalLink, Sparkles } from 'lucide-react'

export default function CourseEnrollmentForm({
  courseTitle = 'Defence Preparation Program',
  courseCode = 'NDA',
  batchInfo = 'Upcoming 2026 Batch',
  className = 'w-full my-12 bg-white rounded-3xl border-2 border-gray-900 shadow-2xl overflow-hidden text-left',
  onClose,
}) {
  const googleFormUrl = 'https://forms.gle/XhFBUjSRyocVCNFn6'

  return (
    <div id="enroll-form" className={className}>
      <div className="bg-black text-white px-6 sm:px-10 py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-2">
            <Sparkles size={13} />
            <span>Admission Open • {batchInfo}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Enroll in {courseTitle}
          </h3>
          <p className="text-sm text-gray-300 mt-1 max-w-xl">
            Complete our official admission form on Google Forms to secure your seat.
          </p>
        </div>
        <div className="flex items-center sm:border-l sm:border-gray-800 sm:pl-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-extrabold uppercase tracking-wider border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Registration Open
          </span>
        </div>
      </div>

      <div className="p-8 sm:p-12 bg-gradient-to-b from-white to-gray-50 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-6 shadow-md">
          <ShieldCheck size={36} className="text-amber-400" />
        </div>

        <h4 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-3">
          Official Batch Registration Form
        </h4>

        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
          Please fill out the official WAARR registration form on Google Forms to secure your admission.
        </p>

        <a
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-black text-white font-bold text-base hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl group cursor-pointer"
        >
          <span>Fill Admission Form on Google Forms</span>
          <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-200 w-full max-w-2xl text-left">
          <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700">
            <CheckCircle2 size={18} className="text-black flex-shrink-0" />
            <span>Fast 1-Minute Form</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700">
            <CheckCircle2 size={18} className="text-black flex-shrink-0" />
            <span>Direct Batch Admission</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700">
            <CheckCircle2 size={18} className="text-black flex-shrink-0" />
            <span>Official WAARR Enrollment</span>
          </div>
        </div>
      </div>
    </div>
  )
}
