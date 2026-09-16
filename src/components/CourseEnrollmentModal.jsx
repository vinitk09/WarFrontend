import { useEffect } from 'react'
import CourseEnrollmentForm from './CourseEnrollmentForm'

export default function CourseEnrollmentModal({
  isOpen,
  onClose,
  courseTitle = 'NDA Comprehensive Preparation Cohort',
  courseCode = 'NDA',
  batchInfo = 'NDA II 2026 Batch',
  price = '₹1,000 / 3 Months',
}) {
  // ESC key listener & body scroll lock
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
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* MODAL CARD */}
      <div className="relative w-full max-w-3xl z-10 my-6 animate-scaleUp max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
        <CourseEnrollmentForm
          courseTitle={courseTitle}
          courseCode={courseCode}
          batchInfo={batchInfo}
          price={price}
          className="w-full my-0 bg-white rounded-2xl border-2 border-gray-900 shadow-2xl overflow-hidden text-left"
          onClose={onClose}
        />
      </div>
    </div>
  )
}
