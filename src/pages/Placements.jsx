import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  Briefcase,
  TrendingUp,
  Users,
  Star,
  Quote,
  Hospital,
  Stethoscope,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  Globe,
  Flag,
  Plane
} from 'lucide-react'
import { testimonials } from '../data/testimonials'
import placementBanner from '/assets/images/placement.png'

const Placements = () => {

  const hospitalTieUps = [
    'KAMALA NEHRU HOSPITAL, PUNE',
    'INAMDAR MULTISPECIALITY HOSPITAL, PUNE',
    'DINANATH MANGESHKAR HOSPITAL, PUNE',
    'BHARATI HOSPITAL, PUNE',
    'RUBY HALL CLINIC, HINJAWADI, PUNE',
  ]

  const internationalPlacements = [
    'GERMANY - Nursing Opportunities',
    'UK - NHS & Private Hospitals',
    'USA - Healthcare Facilities',
    'UAE - Government & Private Hospitals',
    'AUSTRALIA - Aged Care & Hospitals',
  ]

  const placementStats = [
    { label: 'Placement Rate', value: '100%' },
    { label: 'Average Package', value: '₹3.5 LPA' },
    { label: 'Hospital Tie-ups', value: '50+' },
    { label: 'International Placements', value: 'Germany + 4 Countries' },
  ]

  const recruiterTestimonials = testimonials.filter(
    t => t.role.includes('HR') || t.role.includes('Manager') || t.role.includes('Chief')
  )

  return (
    <>
      <Helmet>
        <title>Placements | Institute of Nursing, Pune</title>
        <meta
          name="description"
          content="Placements, hospital tie-ups, internships and career support at Late Udhavrao Tulshiram Jadhavar Foundation's Institute of Nursing, Pune."
        />
      </Helmet>

      <div className="pt-20">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container-custom text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Nursing Careers & Global Placements
            </h1>
            <p className="text-xl text-gray-100">
              Building compassionate, skilled & globally-ready healthcare professionals
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Flag className="w-5 h-5" />
                <span>Indian Placements</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Globe className="w-5 h-5" />
                <span>International Placements</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Plane className="w-5 h-5" />
                <span>Germany Nursing Program</span>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="section-padding bg-neutral">
          <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6">
            {placementStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INTERNATIONAL PLACEMENTS - GERMANY FOCUS */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="section-title">International Nursing Placements</h2>
              <p className="section-subtitle">
                Special focus on German nursing opportunities with language training
              </p>
            </div>

            {/* BANNER IMAGE SECTION */}
            <div className="relative rounded-2xl overflow-hidden mb-12">
              <img
                src={placementBanner}
                alt="International Nursing Placements - German and global nursing opportunities"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    We Offer Placements in Germany
                  </h3>
                  <p className="text-xl">
                    Join our German Nursing Program with language training & job assistance
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Flag className="w-10 h-10 text-[#DD0000]" />
                  <h3 className="text-2xl font-bold">Nursing Careers in Germany</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Plane className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">German Language Training</h4>
                      <p className="text-gray-600 text-sm">
                        B1 Level German language classes integrated into curriculum
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">German Hospital Partnerships</h4>
                      <p className="text-gray-600 text-sm">
                        Direct tie-ups with German hospitals for internships & placements
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Visa & Relocation Support</h4>
                      <p className="text-gray-600 text-sm">
                        Complete assistance with work permits and settlement in Germany
                      </p>
                    </div>
                  </div>
                </div>
                
                <a href="/german-nursing-program">
                  <button className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                    Learn More About German Program
                  </button>
                </a>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-lg text-gray-700 mb-4">Other International Opportunities:</h4>
                {internationalPlacements.slice(1).map((country, i) => (
                  <div key={i} className="card flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className={`p-3 rounded-lg ${
                      country.includes('UK') ? 'bg-blue-50' :
                      country.includes('USA') ? 'bg-red-50' :
                      country.includes('UAE') ? 'bg-green-50' : 'bg-yellow-50'
                    }`}>
                      <Flag className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{country.split(' - ')[0]}</h3>
                      <p className="text-sm text-gray-600">{country.split(' - ')[1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY OUR NURSING PLACEMENTS */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center max-w-4xl">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="section-title">Why Our Nursing Graduates Get Placed</h2>
            <p className="section-subtitle">
              Our nursing programs are designed to meet real hospital requirements globally
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                'Strong clinical exposure from first year',
                'Hands-on hospital training',
                'Professional ethics & patient care focus',
                'International curriculum alignment',
                'Soft skills & communication training',
                'Dedicated placement cell support',
                'German language training option',
                'Global healthcare standards training',
                'Cross-cultural competence development'
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="card text-left hover:shadow-md transition-shadow"
                >
                  <ClipboardCheck className="w-6 h-6 text-primary mb-2" />
                  <p className="text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOSPITAL TIE-UPS */}
        <section className="section-padding bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Hospital className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="section-title">Hospital Tie-ups</h2>
              <p className="section-subtitle">
                Clinical training & placements with reputed hospitals in India
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {hospitalTieUps.map((hospital, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="card flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <Stethoscope className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-bold text-lg">{hospital}</h3>
                    <p className="text-sm text-gray-600">
                      Internship • Clinical Rotation • Placement
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNSHIP MODEL */}
        <section className="section-padding bg-white">
          <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
            <div>
              <GraduationCap className="w-12 h-12 text-primary mb-4" />
              <h2 className="section-title text-left">Internship & Clinical Training</h2>
              <p className="text-gray-700">
                Students undergo structured internships in multi-speciality hospitals,
                government hospitals and primary health centres, ensuring confidence
                in real-world healthcare environments. International internship options
                available in Germany and other countries.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-3">Indian Internships:</h4>
                <ul className="space-y-3">
                  {[
                    'Government & Private Hospital Exposure',
                    'ICU, OT & Emergency Ward Training',
                    'Community Health & PHC postings',
                    'Patient care & documentation practice'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3">International Internships:</h4>
                <ul className="space-y-3">
                  {[
                    'Germany - Hospital Rotations',
                    'UK - NHS Training Programs',
                    'UAE - Healthcare Facility Exposure',
                    'Australia - Aged Care Training'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Plane className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CAREER ROLES */}
        <section className="section-padding bg-neutral">
          <div className="container-custom text-center">
            <h2 className="section-title">Career Opportunities After Nursing</h2>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                'Staff Nurse (India & Abroad)',
                'ICU / OT Nurse Specialist',
                'Community Health Nurse',
                'Nursing Supervisor',
                'Hospital Administrator',
                'German Nursing Professional',
                'UK NHS Registered Nurse',
                'Nursing Educator',
                'Home Care Nurse'
              ].map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="card font-medium hover:shadow-md transition-shadow"
                >
                  {role}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PLACEMENT SUPPORT */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center max-w-4xl">
            <HeartHandshake className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="section-title">Placement Support & Guidance</h2>
            <p className="text-gray-700 mb-8">
              Our dedicated Placement Cell provides comprehensive support including career counselling,
              interview preparation, resume building, hospital interviews, and international relocation assistance.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card text-left">
                <h4 className="font-bold text-lg mb-3">For Indian Placements:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Resume & Portfolio Building</li>
                  <li>• Mock Interviews</li>
                  <li>• Hospital Visit Coordination</li>
                  <li>• Salary Negotiation Guidance</li>
                </ul>
              </div>
              
              <div className="card text-left">
                <h4 className="font-bold text-lg mb-3">For International Placements:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Language Training (German/English)</li>
                  <li>• Visa & Documentation Support</li>
                  <li>• Cultural Orientation</li>
                  <li>• Relocation Assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Nursing Career With Us
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Admissions open for Nursing programs with assured clinical exposure.
            Special German Nursing Program with language training and international placement assistance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="/admissions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Apply for Admission
              </button>
            </motion.a>
            <motion.a
              href="/german-nursing-program"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                German Nursing Program
              </button>
            </motion.a>
          </div>
        </section>

      </div>
    </>
  )
}

export default Placements