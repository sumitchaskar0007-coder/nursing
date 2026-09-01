import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  Download, 
  Calendar, 
  Users, 
  Award, 
  Home, 
  FileText, 
  CheckCircle, 
  BookOpen, 
  GraduationCap,
  Heart,
  Stethoscope,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  Shield,
  UserCheck,
  Globe,
  DollarSign
} from "lucide-react";

const Admissions = () => {
  const admissionCards = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Admission Process",
      description: "Simple and transparent admission procedure",
      features: ["Forms available at institute office", "Online inquiry available", "Document verification"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Seats Available",
      description: "Limited seats for quality education",
      features: ["GNM: 60 Seats", "ANM: 50 Seats (Female)", "Early application recommended"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Scholarships",
      description: "Financial support for deserving students",
      features: ["SC/ST Scholarships","OBC,VJNT,NTD Scholarships","Fellowship for Open students", "Merit-based scholarships", "Fee concession schemes"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Hostel Facilities",
      description: "Safe and comfortable accommodation",
      features: ["Separate hostel for girls", "Mess facility available", "24/7 security"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const eligibilityCriteria = [
    {
      program: "GNM",
      duration: "3 Years",
      age: "17 - 35 Years",
      education: "12th Pass (Science/Arts/Commerce)",
      medical: "Medically fit",
      features: [
        "Recognized by Indian Nursing Council",
        "Extensive clinical training",
        "100% placement assistance",
        "Modern simulation labs"
      ]
    },
    {
      program: "ANM",
      duration: "2 Years",
      age: "17 - 35 Years",
      education: "12th Pass (Science/Arts/Commerce)",
      medical: "Medically fit",
      features: [
        "Community health focus",
        "Maternal & child healthcare",
        "Basic nursing procedures",
        "Field training experience"
      ]
    }
  ];

  const admissionSteps = [
    {
      step: 1,
      icon: <BookOpen className="w-6 h-6" />,
      title: "Inquiry & Counseling",
      description: "Visit institute or contact for course details and career counseling"
    },
    {
      step: 2,
      icon: <FileText className="w-6 h-6" />,
      title: "Application Form",
      description: "Collect and fill admission form with required documents"
    },
    {
      step: 3,
      icon: <UserCheck className="w-6 h-6" />,
      title: "Document Verification",
      description: "Submit documents for verification and eligibility check"
    },
    {
      step: 4,
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Admission Confirmation",
      description: "Complete fee payment and secure your seat"
    }
  ];

  const whyChooseNursing = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Noble Profession",
      description: "Make a difference in people's lives every day"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "High Demand",
      description: "Growing opportunities in healthcare sector"
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Job Security",
      description: "Essential service with stable career prospects"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Opportunities",
      description: "Work anywhere in India or abroad"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Admissions | Late Udhavrao Tulshiram Jadhavar Foundation Institute of Nursing, Pune</title>
        <meta
          name="description"
          content="Admission details for GNM and ANM nursing courses including eligibility, seats, age criteria, scholarships, hostel and mess facilities."
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center"
              >
                <GraduationCap className="w-10 h-10 text-white" />
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                Admissions 2026–27
              </h1>

              <p className="text-xl md:text-2xl text-gray-100 mb-2">
                Late Udhavrao Tulshiram Jadhavar Foundation&apos;s
              </p>

              <p className="text-lg text-gray-200 mb-8">
                Institute of Nursing, Pune
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <a
                  href="#apply-now"
                  className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </a>

                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-primary transition-colors duration-300">
                  Download Brochure
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
                Important Documents
              </h2>
              <p className="text-gray-600">
                Download official institute documents and fee details
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Institute Information",
                  file: "/assets/pdf/Institute-Information.pdf"
                },
                {
                  title: "I & E",
                  file: "/assets/pdf/I&E.pdf"
                },
                {
                  title: "Faculty Details",
                  file: "/assets/pdf/faculty-details.pdf"
                },
                {
                  title: "Computation GNM",
                  file: "/assets/pdf/Computation-GNM.pdf"
                },
                {
                  title: "Computation ANM",
                  file: "/assets/pdf/Computation-ANM.pdf"
                },
                {
                  title: "Fees",
                  file: "/assets/pdf/finalfee.pdf"
                },
                {
                  title: "GNM Fee Structure",
                  file: "/assets/pdf/gnm.pdf"
                },
                {
                  title: "ANM Fee Structure",
                  file: "/assets/pdf/anm.pdf"
                }
              ].map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
                >
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="text-lg font-heading font-bold text-neutral-dark mb-2">
                      {doc.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-6">
                      Click below to download the PDF document
                    </p>
                  </div>

                  <a
                    href={doc.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="section-padding -mt-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${card.color} text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full`}>
                    <div className="flex items-start mb-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm mr-4">
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold mb-2">{card.title}</h3>
                        <p className="text-white/90 text-sm">{card.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Nursing Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
                Why Choose Nursing as a Career?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nursing is more than a profession - it&apos;s a calling to serve humanity with compassion and care
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseNursing.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Process Steps */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
                Admission Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Simple 4-step process to join our nursing program
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 hidden lg:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {admissionSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Documents Required */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
              >
                <h3 className="text-2xl font-heading font-bold text-neutral-dark mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-primary" />
                  Documents Required
                </h3>
                <ul className="space-y-3">
                  {[
                    "10th & 12th Marksheets",
                    "Transfer Certificate",
                    "11th and 12th Board Passing Certificate",
                    "12th Leaving Certificate",
                    "Caste Certificate (if applicable)",
                    "Income Certificate (for scholarship)",
                    "Medical Fitness Certificate from MBBS doctors only",
                    "Passport Size Photographs (8 copies)",
                    "Aadhar Card Copy",
                    "Nationality & Domicile Certificate ",
                    "PANcard",
                    "CAP certificate if applicable"
                  ].map((doc, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {doc}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Important Dates */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
              >
                <h3 className="text-2xl font-heading font-bold text-neutral-dark mb-4 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-primary" />
                  Important Dates
                </h3>
                <div className="space-y-4">
                  {[
                    { event: "Application Start Date", date: "After 12th Result" },
                    { event: "Last Date for Application", date: "30th July 2026" },
                    { event: "Document Verification", date: "1st - 20th August 2026" },
                    { event: "Admission Confirmation", date: "30th July 2026" },
                    { event: "Academic Session Begins", date: "1st August 2026" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{item.event}</span>
                      <span className="font-bold text-primary">{item.date}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Apply Now Section */}
        <section id="apply-now" className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Start Your Nursing Journey?
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                Join our institute and become a compassionate nursing professional
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Application Form
                </motion.button>
                
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-300"
                >
                  Contact Admission Office
                </motion.a>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <div>
                    <p className="text-sm text-gray-300">Call Us</p>
                    <p className="font-bold">+91 84597 27432</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <div>
                    <p className="text-sm text-gray-300">Email Us</p>
                    <p className="font-bold">nursinginstitute.utjf@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <div>
                    <p className="text-sm text-gray-300">Visit Campus</p>
                    <p className="font-bold">Narhe, Pune</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Admissions;