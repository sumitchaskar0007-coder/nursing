import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const NoticeTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const notices = [
    { id: 1, text: 'Admissions Open for Academic Year 2026-27', link: '/admissions', urgent: true },
    { id: 2, text: 'Last Date for Application Submission: July 30, 2026', link: '/admissions', urgent: true },
    { id: 3, text: 'Campus Visit Available - Book Your Slot Now', link: '/contact', urgent: false },
    { id: 4, text: 'Download Prospectus 2026 - Available Now', link: '/admissions', urgent: false },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notices.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [notices.length])

  return (
    <div className="bg-accent text-white py-2 md:py-3 overflow-hidden">
      <div className="container-custom px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between space-x-2 sm:space-x-3 md:space-x-4">
          {/* Left side: Alert Icon and Notice Content */}
          <div className="flex items-center flex-1 space-x-2 sm:space-x-3 md:space-x-4">
            {/* Alert Icon */}
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            
            {/* Notice Content */}
            <div className="flex-1 relative h-6 sm:h-7 overflow-hidden min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="absolute inset-0 flex items-center"
                >
                  <Link
                    to={notices[currentIndex].link}
                    className="flex items-center space-x-1 sm:space-x-2 hover:underline w-full"
                  >
                    {/* Urgent Badge for Mobile */}
                    {notices[currentIndex].urgent && (
                      <span className="bg-white/20 text-white text-xs px-1.5 py-0.5 rounded font-semibold mr-1 sm:mr-2 flex-shrink-0">
                        Urgent
                      </span>
                    )}
                    
                    <span className="text-xs sm:text-sm font-medium truncate">
                      {notices[currentIndex].text}
                    </span>
                    
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 ml-1 sm:ml-2" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Dots Navigation - Right Corner */}
          <div className="hidden md:flex items-center space-x-1.5 flex-shrink-0 ml-4">
            {notices.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to notice ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Dots Navigation - Centered Below */}
        <div className="md:hidden flex justify-center items-center space-x-3 mt-2">
          <div className="flex space-x-1.5">
            {notices.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to notice ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Optional: Show current position on mobile */}
          <span className="text-white/70 text-xs">
            {currentIndex + 1}/{notices.length}
          </span>
        </div>
      </div>
    </div>
  )
}

export default NoticeTicker