import { useState, useEffect } from 'react'
import { X, Sparkles, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react'

export default function ConsultationModal({
  isOpen,
  onClose,
  title = 'Book Sports Performance Consultation',
  subtitle = 'Connect with our CSCS-certified coaching team for strength, conditioning, and testing assessment.',
  defaultService = 'Strength & Conditioning',
  serviceOptions = [
    'Strength & Conditioning',
    'Sports Science & Performance Testing',
    'Biomechanics & Movement Analysis',
    'Athlete Performance Programs',
    'Sports Academy Consulting',
  ],
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: defaultService,
    background: 'Defence Aspirant',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Keep defaultService in sync
  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }))
    }
  }, [defaultService])

  // Handle ESC key to close & scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
      setIsSubmitted(false)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* MODAL CARD */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border-2 border-gray-900 overflow-hidden z-10 my-8 animate-scaleUp">
        {/* HEADER */}
        <div className="bg-black text-white px-6 sm:px-8 py-6 flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-2">
              <Sparkles size={13} />
              <span>1-on-1 Consultation Desk</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-lg leading-relaxed">
              {subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                <ShieldCheck size={36} />
              </div>
              <h4 className="text-2xl font-black text-gray-900 mb-2">
                Consultation Request Booked!
              </h4>
              <p className="text-gray-600 max-w-md mx-auto mb-6 text-sm leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Our lead CSCS performance coach will contact you at <strong>{formData.phone}</strong> via WhatsApp with available time slots.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/917259346805?text=Hello%20WAARR,%20I%20have%20booked%20a%20consultation%20for%20${encodeURIComponent(formData.service)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black text-white text-xs font-bold hover:bg-gray-800 transition-colors"
                >
                  <MessageSquare size={14} />
                  <span>Chat on WhatsApp Directly</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-800 text-xs font-bold hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Singh"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm text-gray-900 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    WhatsApp / Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm text-gray-900 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm text-gray-900 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm text-gray-900 transition-all bg-white"
                  >
                    {serviceOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Current Profile / Background
                </label>
                <select
                  value={formData.background}
                  onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm text-gray-900 transition-all bg-white"
                >
                  <option value="Defence Aspirant (NDA / CDS / SSB)">Defence Aspirant (NDA / CDS / SSB)</option>
                  <option value="Competitive Athlete / Sports Player">Competitive Athlete / Sports Player</option>
                  <option value="Fitness Trainer / Strength Coach">Fitness Trainer / Strength Coach</option>
                  <option value="School / College / Academy Administrator">School / College / Academy Administrator</option>
                  <option value="Parent of Aspirant">Parent of Aspirant</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Specific Goals or Questions (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your current fitness level, target exams, or specific performance goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm text-gray-900 transition-all"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-black text-white font-bold text-sm hover:bg-gray-800 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Scheduling Consultation...</span>
                  ) : (
                    <>
                      <span>Confirm & Book Consultation</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
