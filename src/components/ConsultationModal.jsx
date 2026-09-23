import { useEffect } from 'react'
import { X, Sparkles, ShieldCheck, ArrowRight, ExternalLink, MessageSquare } from 'lucide-react'

export default function ConsultationModal({
  isOpen,
  onClose,
  title = 'Book Consultation & Assessment',
  subtitle = 'Connect with our faculty and advisors to discuss your preparation or training roadmap.',
}) {
  const googleFormUrl = 'https://forms.gle/XhFBUjSRyocVCNFn6'

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
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* MODAL CARD */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-2 border-gray-900 overflow-hidden z-10 my-8 animate-scaleUp text-center">
        {/* HEADER */}
        <div className="bg-black text-white px-6 sm:px-8 py-6 flex items-start justify-between gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-2">
              <Sparkles size={13} />
              <span>Official Registration</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-md leading-relaxed">
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
        <div className="p-8 sm:p-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mb-5 shadow-sm">
            <ShieldCheck size={36} className="text-black" />
          </div>

          <h4 className="text-2xl font-black text-gray-900 mb-2">
            Fill the Official Admission Form
          </h4>
          <p className="text-sm text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
            Please submit your details on our official Google Form to register for the upcoming batch.
          </p>

          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-black text-white font-bold text-sm hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl group cursor-pointer"
          >
            <span>Open Google Registration Form</span>
            <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <div className="mt-6 flex items-center justify-center gap-4 text-xs font-semibold text-gray-500">
            <a
              href="https://wa.me/917259346805"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-700 hover:text-black font-bold hover:underline"
            >
              <MessageSquare size={14} />
              <span>Or WhatsApp: +91 7259346805</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
