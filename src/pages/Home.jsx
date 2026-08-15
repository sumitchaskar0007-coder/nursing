import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import NoticeTicker from '../components/NoticeTicker'
import { Users, Hospital, Award, Briefcase, Star, Quote, Clock, UsersRound, ArrowRight, Download, X, Calendar, CheckCircle } from 'lucide-react'
import { useState, useEffect, useCallback, useMemo } from 'react'

const Home = () => {
  const [showImagePopup, setShowImagePopup] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)

  // Images with descriptions for the popup gallery
  const galleryImages = useMemo(() => [
    {
      id: 1,
      src: "/assets/images/nursing-campus.png",
      alt: "Jadhavar Institute Campus Front View",
      description: "Modern campus infrastructure with state-of-the-art facilities for nursing education",
      category: "Campus"
    },
    {
      id: 2,
      src: "/assets/images/nursing-lab.png",
      alt: "Nursing Simulation Lab",
      description: "Advanced nursing simulation lab equipped with latest medical training mannequins",
      category: "Labs"
    },
    {
      id: 3,
      src: "/assets/images/clinical-training.png",
      alt: "Smart Classroom",
      description: "Technology-enabled smart classrooms for interactive learning",
      category: "Classrooms"
    },
    {
      id: 4,
      src: "/assets/images/hero.png",
      alt: "Medical Library",
      description: "Well-stocked medical library with latest nursing journals and reference books",
      category: "Library"
    },
    {
      id: 5,
      src: "/assets/images/clinical-training.png",
      alt: "Clinical Training Session",
      description: "Students receiving hands-on clinical training under expert supervision",
      category: "Training"
    },
    {
      id: 6,
      src: "/assets/images/placement.png",
      alt: "Campus Placement Drive",
      description: "Annual placement drive with top hospitals recruiting our nursing graduates",
      category: "Placements"
    }
  ], [])

  // Show welcome popup on every visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomePopup(true)
      // Prevent body scrolling when popup is open
      document.body.style.overflow = 'hidden'
    }, 1000) // Show after 1 second
    
    return () => clearTimeout(timer)
  }, [])

  const closeWelcomePopup = () => {
    setShowWelcomePopup(false)
    // Restore body scrolling
    document.body.style.overflow = 'auto'
  }

  const openImagePopup = (image, index) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
    setZoomLevel(1)
    setShowImagePopup(true)
    // Prevent body scrolling when popup is open
    document.body.style.overflow = 'hidden'
  }

  const closeImagePopup = () => {
    setShowImagePopup(false)
    setSelectedImage(null)
    setZoomLevel(1)
    // Restore body scrolling
    document.body.style.overflow = 'auto'
  }

  const goToNextImage = useCallback(() => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(galleryImages[nextIndex])
    setZoomLevel(1)
  }, [currentImageIndex, galleryImages])

  const goToPrevImage = useCallback(() => {
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentImageIndex(prevIndex)
    setSelectedImage(galleryImages[prevIndex])
    setZoomLevel(1)
  }, [currentImageIndex, galleryImages])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showImagePopup && !showWelcomePopup) return
      
      switch(e.key) {
        case 'Escape':
          if (showWelcomePopup) closeWelcomePopup()
          if (showImagePopup) closeImagePopup()
          break
        case 'ArrowRight':
          if (showImagePopup) goToNextImage()
          break
        case 'ArrowLeft':
          if (showImagePopup) goToPrevImage()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showImagePopup, showWelcomePopup, goToNextImage, goToPrevImage])

  const stats = [
    { icon: Users, value: '2000+', label: 'Nursing Students Trained' },
    { icon: Hospital, value: '50+', label: 'Hospital Tie-ups' },
    { icon: Award, value: '14+', label: 'Years of Excellence' },
    { icon: Briefcase, value: '100%', label: 'Placement Assistance' },
  ]

  const nursingPrograms = [
    {
      id: 1,
      programName: "GNM",
      fullName: "General Nursing and Midwifery",
      duration: "3 Years",
      intake: "60 Seats",
      description: "Comprehensive nursing education covering medical, surgical, pediatric, and community health nursing.",
      features: [
        "Medical-Surgical Nursing",
        "Midwifery & Obstetrics",
        "Community Health Nursing",
        "Psychiatric Nursing"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      programName: "ANM",
      fullName: "Auxiliary Nurse Midwifery",
      duration: "2 Years",
      intake: "50 Seats",
      description: "Training for basic nursing care and midwifery services in community and hospital settings.",
      features: [
        "Primary Health Care Nursing",
        "Maternal & Child Health",
        "Community Health Services",
        "Health Promotion"
      ],
      color: "from-green-500 to-green-600"
    },
    
  ]

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "GNM Graduate",
      company: "Sahyadri Hospital, Pune",
      quote: "The clinical training and faculty guidance at Jadhavar Institute prepared me perfectly for my nursing career.",
      rating: 5
    },
    {
      id: 2,
      name: "Rahul Deshmukh",
      role: "Nursing Supervisor",
      company: "Ruby Hall Clinic",
      quote: "The comprehensive nursing education and hands-on clinical experience gave me confidence to excel in critical care.",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Anjali Patil",
      role: "Chief Nursing Officer",
      company: "Apollo Hospitals",
      quote: "We consistently hire nurses from Jadhavar Institute for their excellent clinical skills and compassionate patient care.",
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>Late Udhavrao Tulshiram Jadhavar Foundation's Institute of Nursing, Pune</title>
        <meta name="description" content="Training Compassionate & Competent Nursing Professionals through rigorous academics, hands-on clinical training, and strong hospital partnerships." />
        <meta property="og:title" content="Late Udhavrao Tulshiram Jadhavar Foundation's Institute of Nursing, Pune" />
        <meta property="og:description" content="Training Compassionate & Competent Nursing Professionals" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NursingSchool",
            "name": "Late Udhavrao Tulshiram Jadhavar Foundation's Institute of Nursing, Pune",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "description": "Training Compassionate & Competent Nursing Professionals"
          })}
        </script>
      </Helmet>

      {/* Welcome Popup - Admission Information */}
 {/* Welcome Popup - Admission Information */}
{showWelcomePopup && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    onClick={closeWelcomePopup}
  >
    <div 
      className="relative w-full max-w-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-dark p-5 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Calendar className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">Admissions Open 2026-27</h2>
          </div>
          <p className="text-white/90 text-base">Start Your Nursing Career Today!</p>
        </div>

        {/* Close button */}
        <button
          onClick={closeWelcomePopup}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>

        {/* Content - Scrolling area */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {/* Program Details */}
          <div className="space-y-4">
            {/* GNM Program */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-blue-800 mb-1">GNM Program</h3>
                  <p className="text-blue-600 text-sm">General Nursing & Midwifery</p>
                </div>
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold">
                  60 Seats
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-white rounded p-2">
                  <p className="text-xs text-gray-600 mb-1">Duration</p>
                  <p className="text-sm font-bold text-gray-900">3 Years</p>
                </div>
                <div className="bg-white rounded p-2">
                  <p className="text-xs text-gray-600 mb-1">Eligibility</p>
                  <p className="text-sm font-bold text-gray-900">10+2 Science</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">100% Placement Assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Hospital Clinical Training</span>
                </li>
              </ul>
            </div>

            {/* ANM Program */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-1">ANM Program</h3>
                  <p className="text-green-600 text-sm">Auxiliary Nurse Midwifery</p>
                </div>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                  50 Seats
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-white rounded p-2">
                  <p className="text-xs text-gray-600 mb-1">Duration</p>
                  <p className="text-sm font-bold text-gray-900">2 Years</p>
                </div>
                <div className="bg-white rounded p-2">
                  <p className="text-xs text-gray-600 mb-1">Eligibility</p>
                  <p className="text-sm font-bold text-gray-900">10+2 Any Stream</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Community Health Focus</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Maternal & Child Care</span>
                </li>
              </ul>
            </div>

            {/* Important Dates */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-base font-bold text-gray-800 mb-3">Important Dates</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-sm text-gray-600">Application Start Date</span>
                  <span className="text-sm font-bold text-primary">After 12th Result</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-sm text-gray-600">Last Date to Apply</span>
                  <span className="text-sm font-bold text-primary">30th July 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Academic Session Start</span>
                  <span className="text-sm font-bold text-primary">1st August 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-5 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/admissions"
              onClick={closeWelcomePopup}
              className="flex-1 bg-primary text-white px-4 py-2.5 rounded-lg font-bold hover:bg-primary-dark transition-colors text-center text-sm"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              onClick={closeWelcomePopup}
              className="flex-1 border border-primary text-primary px-4 py-2.5 rounded-lg font-bold hover:bg-primary hover:text-white transition-colors text-center text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
)}

      {/* Image Popup Modal */}
      {showImagePopup && selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
          onClick={closeImagePopup}
        >
          {/* Close button */}
          <button
            onClick={closeImagePopup}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 md:p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <X className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevImage()
            }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 md:p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNextImage()
            }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 md:p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 md:gap-2 bg-black/50 backdrop-blur-sm rounded-full p-2 md:p-3 border border-white/20">
            <span className="text-white text-xs md:text-sm font-medium px-2">
              {currentImageIndex + 1} / {galleryImages.length}
            </span>
            
            <div className="h-4 md:h-6 w-px bg-white/30 mx-1 md:mx-2"></div>
            
            <button
              onClick={(e) => {
                e.stopPropagation()
                window.open(selectedImage.src, '_blank')
              }}
              className="p-1 md:p-2 hover:bg-white/20 rounded-full transition-colors"
              title="Open image in new tab"
            >
              <Maximize2 className="w-3 h-3 md:w-5 md:h-5 text-white" />
            </button>
          </div>

          {/* Main image container */}
          <div 
            className="relative w-full max-w-4xl max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              {/* Image - displayed in original aspect ratio */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: 'center center',
                    transition: 'transform 0.2s ease'
                  }}
                />
              </div>
              
              {/* Compact description at bottom */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3 md:p-4 rounded-b-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block bg-primary/90 text-white text-xs font-medium px-2 py-0.5 rounded-full backdrop-blur-sm">
                        {selectedImage.category}
                      </span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white truncate mb-1">
                      {selectedImage.alt}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-200 line-clamp-2">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}

      <div className="pt-16 md:pt-20">
        <NoticeTicker />
        
        {/* Hero Section with Left Text and Right Background Image */}
        <section className="relative min-h-[90vh] md:min-h-[90vh] flex items-center">
          {/* Responsive Background */}
          <div className="absolute inset-0 z-0">
            {/* Mobile: Solid Teal Color (#008080) */}
            <div className="absolute inset-0 md:hidden bg-[#008080]">
              {/* Optional: Add a subtle pattern or gradient overlay for mobile */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#008080] via-[#006666] to-[#004d4d] opacity-90"></div>
            </div>
            
            {/* Desktop: Background Image */}
            <div className="hidden md:block absolute inset-0">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: "url('/assets/images/hero.png')",
                  backgroundPosition: 'center right'
                }}
              >
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="container-custom relative z-10 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* ================= LEFT COLUMN ================= */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >

                  {/* ===== MAIN HEADING ===== */}
                  <h1 className="font-heading font-bold leading-tight mb-4 md:mb-6">
                    <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                      Late Udhavrao Tulshiram Jadhavar Foundation&apos;s
                    </span>

                    <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 md:mt-3 font-semibold text-gray-200">
                      Institute of Nursing, Pune
                    </span>
                  </h1>

                  {/* ===== SUB HEADING + DESCRIPTION ===== */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-6 md:mb-8"
                  >
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-accent mb-3">
                      Training Compassionate & Competent Nursing Professionals
                    </h2>

                    <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto lg:mx-0">
                      Empowering future nurses with comprehensive education, clinical experience, 
                      and 100% placement assistance to serve humanity with care and compassion.
                    </p>
                  </motion.div>

                  {/* ===== CTA BUTTONS ===== */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mt-6 justify-center lg:justify-start"
                  >
                    <Link
                      to="/admissions"
                      className="bg-accent text-white px-5 sm:px-6 md:px-7 py-3 rounded-lg md:rounded-xl font-semibold text-sm sm:text-base hover:bg-accent-dark transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Link>

                    <a
                      href="/assets/prospect.pdf"
                      download
                      className="bg-white text-primary px-5 sm:px-6 md:px-7 py-3 rounded-lg md:rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="hidden sm:inline">Download</span> Prospectus
                    </a>

                    <Link
                      to="/contact"
                      className="border-2 border-white text-white px-5 sm:px-6 md:px-7 py-3 rounded-lg md:rounded-xl font-semibold text-sm sm:text-base hover:bg-white hover:text-primary transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      Book Campus Visit
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* ================= RIGHT COLUMN ================= */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="hidden lg:block"
              >
                {/* Background image already covers this space */}
              </motion.div>

            </div>
          </div>

          {/* Scroll Indicator - Hide on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
          >
            <div className="flex flex-col items-center">
              <span className="text-white text-sm mb-2">Scroll to Explore</span>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-white rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-neutral py-8 md:py-12">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium px-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Nursing Programs Section - Horizontal Cards */}
        <section className="section-padding py-8 md:py-12">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-3 md:mb-4">
                Our Nursing Programs
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Recognized nursing courses designed to train skilled and compassionate nursing professionals 
                for healthcare institutions worldwide
              </p>
            </motion.div>

            {/* Horizontal Program Cards - Show first 2 */}
            <div className="mb-8 md:mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {nursingPrograms.slice(0, 2).map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden h-full hover:-translate-y-1">
                      {/* Program Header with Gradient */}
                      <div className={`bg-gradient-to-r ${program.color} text-white p-4 md:p-6`}>
                        <div className="flex justify-between items-start mb-3 md:mb-4">
                          <div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-1 md:mb-2">
                              {program.programName}
                            </h3>
                            <p className="text-white/90 text-xs md:text-sm">
                              {program.fullName}
                            </p>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3">
                            <Hospital className="w-5 h-5 md:w-6 md:h-6" />
                          </div>
                        </div>
                      </div>

                      {/* Program Details */}
                      <div className="p-4 md:p-6">
                        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                          {program.description}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                          {program.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                              <span className="text-xs md:text-sm lg:text-base text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Duration and Intake */}
                        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                          <div className="bg-gray-50 rounded-lg md:rounded-xl p-3 md:p-4 text-center">
                            <div className="flex items-center justify-center mb-1 md:mb-2">
                              <Clock className="w-4 h-4 md:w-5 md:h-5 text-gray-500 mr-1 md:mr-2" />
                              <span className="text-xs md:text-sm font-bold text-gray-900">Duration</span>
                            </div>
                            <p className="text-base md:text-lg font-bold text-primary">{program.duration}</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg md:rounded-xl p-3 md:p-4 text-center">
                            <div className="flex items-center justify-center mb-1 md:mb-2">
                              <UsersRound className="w-4 h-4 md:w-5 md:h-5 text-gray-500 mr-1 md:mr-2" />
                              <span className="text-xs md:text-sm font-bold text-gray-900">Intake</span>
                            </div>
                            <p className="text-base md:text-lg font-bold text-accent">{program.intake}</p>
                          </div>
                        </div>

                        {/* View Details Button */}
                        <Link 
                          to="/nursing-programs" 
                          className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold text-sm md:text-base py-2.5 md:py-3 px-4 rounded-lg md:rounded-xl flex items-center justify-center group-hover:text-primary transition-colors"
                        >
                          View Program Details
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ================= CTA BUTTON SECTION ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-20"
            >
              <Link 
                to="/programs" 
                className="inline-flex items-center bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
              >
                View All Nursing Programs
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* ================= NURSING CAREER VIDEO SECTION ================= */}
            <section className="section-padding bg-neutral mt-8 md:mt-12 lg:mt-20 py-8 md:py-12">
              <div className="container-custom px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">

                  {/* LEFT: VIDEO BOX */}
                  <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden border border-gray-200">
                    <video
                      src="/assets/video/home.mp4"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-[200px] sm:h-[260px] md:h-[300px] lg:h-[320px] object-cover"
                    />
                  </div>

                  {/* RIGHT: CONTENT */}
                  <div className="text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-3 md:mb-4">
                      Build a Rewarding Career in Nursing
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                      Nursing is more than a profession — it is a noble calling to serve
                      humanity with compassion, care, and dedication. Our institute
                      prepares students with strong academic knowledge and hands-on
                      clinical experience.
                    </p>

                    <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                      <li className="flex items-start gap-2 md:gap-3">
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full mt-1.5 md:mt-2 flex-shrink-0"></span>
                        <span className="text-sm md:text-base text-gray-700 text-left">
                          High demand career in hospitals and healthcare centers
                        </span>
                      </li>

                      <li className="flex items-start gap-2 md:gap-3">
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full mt-1.5 md:mt-2 flex-shrink-0"></span>
                        <span className="text-sm md:text-base text-gray-700 text-left">
                          Opportunities in India and abroad
                        </span>
                      </li>

                      <li className="flex items-start gap-2 md:gap-3">
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full mt-1.5 md:mt-2 flex-shrink-0"></span>
                        <span className="text-sm md:text-base text-gray-700 text-left">
                          Strong clinical training with real patient exposure
                        </span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                      <Link
                        to="/admissions"
                        className="bg-primary text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl font-semibold text-sm md:text-base hover:bg-primary-dark transition"
                      >
                        Apply for Nursing
                      </Link>

                      <Link
                        to="/about"
                        className="border-2 border-primary text-primary px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl font-semibold text-sm md:text-base hover:bg-primary hover:text-white transition"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Why Choose Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 md:mt-12 lg:mt-16 text-center max-w-3xl mx-auto px-4"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-neutral-dark">
                Why Choose Jadhavar Institute of Nursing?
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-3">
                Located in Pune, our institute is approved by the Maharashtra state Board of Nursing and paramedical Education. We provide modern nursing labs, experienced faculty, 
                and extensive clinical exposure through hospital tie-ups, ensuring students gain 
                real-world nursing experience.
              </p>
              <p className="text-sm md:text-base text-gray-600">
                Our nursing programs (GNM, ANM) prepare students to serve in 
                hospitals, community health centers, and international healthcare settings with 
                compassion, competence, and professional excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-neutral py-8 md:py-12">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-3 md:mb-4">
                What Our Students & Hospital Partners Say
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border border-gray-200"
                >
                  <div className="flex items-center space-x-1 mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary/30 mb-3 md:mb-4" />
                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-3 md:pt-4">
                    <p className="font-semibold text-neutral-dark text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs md:text-sm text-primary">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white py-8 md:py-12">
          <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 md:mb-4">
                Ready to Start Your Nursing Career?
              </h2>
              <p className="text-base md:text-xl mb-6 md:mb-8 text-gray-100 px-4">
                Join us and become part of the noble nursing profession dedicated to serving humanity
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link to="/admissions" className="bg-accent text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-full font-medium text-sm md:text-base hover:bg-accent-dark transition-colors">
                  Apply for Nursing Programs
                </Link>
                <Link to="/contact" className="bg-white text-primary px-5 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-full font-medium text-sm md:text-base hover:bg-gray-100 transition-colors">
                  Book Campus Visit
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
