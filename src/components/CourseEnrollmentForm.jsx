import { useState } from 'react'
import { CheckCircle2, ShieldCheck, ArrowRight, Phone, Mail, Sparkles, X } from 'lucide-react'

export default function CourseEnrollmentForm({
  courseTitle = 'Defence Preparation Program',
  courseCode = 'NDA',
  batchInfo = 'Upcoming 2026 Batch',
  price = '₹1,000',
  className = 'w-full my-12 bg-white rounded-2xl border-2 border-gray-900 shadow-2xl overflow-hidden text-left',
  onClose,
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    targetExam: batchInfo,
    background: '',
    stateCity: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <div id="enroll-form" className={className}>
      <div className="bg-black text-white px-6 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-2">
            <Sparkles size={13} />
            <span>Admission Open • {batchInfo}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            Enroll in {courseTitle}
          </h3>
          <p className="text-sm text-gray-300 mt-1">
            Complete the form below to secure your seat and receive syllabus brochure on WhatsApp.
          </p>
        </div>
        <div className="flex items-center justify-between sm:justify-end gap-4 sm:border-l sm:border-gray-800 sm:pl-6 text-right">
          <div>
            <span className="text-xs text-gray-400 block uppercase font-bold tracking-wider">Fee Structure</span>
            <span className="text-2xl font-black text-white">{price}</span>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {submitted ? (
          <div className="py-10 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
              <ShieldCheck size={36} />
            </div>
            <h4 className="text-2xl font-black text-gray-900 mb-2">
              Registration Received Successfully!
            </h4>
            <p className="text-gray-600 max-w-md mx-auto mb-6 text-sm leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Our faculty team for <strong>{courseTitle}</strong> will contact you via WhatsApp at <strong>{formData.phone}</strong> with the orientation link and class schedule.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-xs font-bold">
              <span>Direct WhatsApp Desk: +91 7259346805</span>
            </div>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="mt-5 px-6 py-2.5 rounded-xl bg-black text-white text-xs font-bold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Singh"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm text-gray-900 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  WhatsApp / Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm text-gray-900 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="aspirant@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm text-gray-900 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Target Exam / Batch
                </label>
                <input
                  type="text"
                  value={formData.targetExam}
                  onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm text-gray-900 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Current Background / Qualification
                </label>
                <select
                  value={formData.background}
                  onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm text-gray-900 transition-all"
                >
                  <option value="">Select background...</option>
                  <option value="11th / 12th Student">11th / 12th Student</option>
                  <option value="College Graduate / Final Year">College Graduate / Final Year</option>
                  <option value="Working Professional / Trainer">Working Professional / Trainer</option>
                  <option value="Serving Soldier / Personnel">Serving Soldier / Personnel</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  State / City
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pune, Maharashtra"
                  value={formData.stateCity}
                  onChange={(e) => setFormData({ ...formData, stateCity: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm text-gray-900 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Any Questions or Specific Target (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Let us know if you need special doubt support, SSB guidance, or scholarship info..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm text-gray-900 transition-all"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                <span>100% Confidential. Instant response within 24 hours.</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-black hover:bg-gray-800 text-white text-sm font-black rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Submitting...' : `Submit Application`}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
