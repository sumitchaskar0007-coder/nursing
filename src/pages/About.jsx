import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Heart, BookOpen, GraduationCap, Building, Star, Shield, Users as UsersIcon, Globe, Stethoscope, Clock, Calendar, MapPin } from 'lucide-react'

// Import images from assets
import presidentImage from '/assets/images/president.png'
import vicePresidentImage from '/assets/images/vice-president.png'
import treasurerImage from '/assets/images/treasurer.png'
import nursingLabImage from '/assets/images/nursing-lab.png'
import clinicalTrainingImage from '/assets/images/clinical-training.png'
import campusImage from '/assets/images/nursing-campus.png'

const About = () => {
  const values = [
    { icon: Heart, title: 'Compassionate Care', description: 'We instill empathy, kindness, and patient-centered care in every nursing professional.' },
    { icon: Stethoscope, title: 'Clinical Excellence', description: 'Rigorous practical training to develop skilled nursing practitioners.' },
    { icon: Award, title: 'Academic Rigor', description: 'We maintain the highest standards in nursing education and clinical training.' },
    { icon: Shield, title: 'Professional Ethics', description: 'We promote ethical nursing practices and professional responsibility.' },
  ]

  const nursingInstitutes = [
    "Institute of Nursing (GNM/ANM), Narhe, Pune",
    "Institute of Nursing (GNM/ANM), Terkheda, Osmanabad",
    // "B.Sc Nursing Program, Pune",
    // "Post Basic B.Sc Nursing Program",
    "Nursing Assistant Training Programs",
    "Critical Care Nursing Specialization",
    "Community Health Nursing Programs",
    "Pediatric Nursing Training",
    "Psychiatric Nursing Programs",
    "Operation Theatre Nursing"
  ]

  const nursingAchievements = [
    "Recognized by Indian Nursing Council (INC)",
    "Approved by Maharashtra Nursing Council",
    "Affiliated with Maharashtra University of Health Sciences",
    "1000+ Nursing Graduates since inception",
    "95% Placement Record in Top Hospitals",
    "Modern Simulation Labs with Advanced Mannequins",
    "Tie-ups with 50+ Multi-specialty Hospitals",
    "Regular Workshops by Senior Nursing Professionals",
    "International Nursing Standards Curriculum",
    "Community Health Outreach Programs"
  ]

  return (
    <>
      <Helmet>
        <title>About Us | Late Udhavrao Tulshiram Jadhavar Foundation's Institute of Nursing, Pune</title>
        <meta name="description" content="Learn about Late Udhavrao Tulshiram Jadhavar Foundation's Institute of Nursing, Pune - Our mission, vision, values, and commitment to training compassionate nursing professionals." />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Late Udhavrao Tulshiram Jadhavar Foundation&apos;s
              </h1>
              <p className="text-2xl md:text-3xl font-semibold mb-4">
                Institute of Nursing, Pune
              </p>
              <p className="text-xl text-gray-100">
                Training Compassionate & Competent Nursing Professionals Since 2011
              </p>
            </motion.div>
          </div>
        </section>
        

        {/* About Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {/* Institute Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none mb-12"
              >
                <h2 className="text-3xl font-heading font-bold text-neutral-dark mb-6">About Our Nursing Institute</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Late Udhavrao Tulshiram Jadhavar Foundation&apos;s Institute of Nursing</strong> was established in the year 2011 with a noble vision to enhance healthcare delivery by training compassionate, competent, and professionally sound nursing professionals. Located in Narhe, Pune, our institute has emerged as a premier nursing education hub, recognized for its excellence in clinical training and holistic development of nursing students.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                    <div className="flex items-center space-x-3 mb-3">
                      <Calendar className="w-6 h-6 text-primary" />
                      <h3 className="font-heading font-bold text-lg">Established</h3>
                    </div>
                    <p className="text-2xl font-bold text-primary">2011</p>
                    <p className="text-sm text-gray-600">Years of Excellence in Nursing Education</p>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                    <div className="flex items-center space-x-3 mb-3">
                      <GraduationCap className="w-6 h-6 text-primary" />
                      <h3 className="font-heading font-bold text-lg">Programs</h3>
                    </div>
                    <p className="text-2xl font-bold text-primary">GNM, ANM</p>
                    <p className="text-sm text-gray-600">Comprehensive Nursing Programs</p>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                    <div className="flex items-center space-x-3 mb-3">
                      <Users className="w-6 h-6 text-primary" />
                      <h3 className="font-heading font-bold text-lg">Students Trained</h3>
                    </div>
                    <p className="text-2xl font-bold text-primary">1000+</p>
                    <p className="text-sm text-gray-600">Nursing Professionals</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our institute is approved by the <strong>Maharashtra state Board of Nursing and paramedical Education</strong>, and affiliated with reputed universities. We provide a nurturing environment that combines theoretical knowledge with extensive clinical exposure, preparing students to excel in diverse healthcare settings.
                </p>
              </motion.div>

              {/* Philosophy Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card bg-gradient-to-r from-primary/10 to-primary-light/10 mb-12"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-heading font-bold text-neutral-dark">Our Nursing Philosophy</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We believe that nursing is both an art and a science – a profession that requires not only technical expertise but also compassion, empathy, and dedication. Our philosophy centers on:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Providing holistic care that addresses physical, emotional, and spiritual needs</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Promoting evidence-based nursing practice</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Fostering lifelong learning and professional development</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Advocating for patients&apos; rights and dignity</p>
                    </div>
                  </div>
                  <p className="italic border-l-4 border-primary pl-4 py-2 mt-4">
                    &quot;Nursing is not just a profession; it&apos;s a calling to serve humanity with compassion, competence, and commitment.&quot;
                  </p>
                </div>
              </motion.div>
               <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-heading font-bold text-neutral-dark mb-8 text-center">
                  Leadership Team
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* President */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="card hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-center mb-4">
                      <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
                        <img 
                          src={presidentImage} 
                          alt="Prin. Dr. Sudhakarrao Jadhavar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-neutral-dark">President</h3>
                      <p className="text-primary font-semibold">Prin. Dr. Sudhakarrao Jadhavar</p>
                      <p className="text-sm text-gray-600 mt-1">M.Com, M.A., L.L.M., M.P.M., D.T.L., D.L.L. & L.W., G.D.C. & A., Ph.D.</p>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-start">
                        <Star className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Member: Maharashtra Nursing Council, Maharashtra State
                      </p>
                      <p className="flex items-start">
                        <Star className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Member of Management Council: Savitribai Phule Pune University
                      </p>
                      <p className="flex items-start">
                        <Star className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Former Dean: Department of Commerce, Savitribai Phule Pune University
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-gray-700 italic">
                        &quot;Our Institute of Nursing is committed to producing nursing professionals who combine clinical excellence with compassionate care. We believe in nurturing not just skilled nurses, but compassionate caregivers who make a difference in patients&apos; lives.&quot;
                      </p>
                    </div>
                  </motion.div>

                  {/* Vice-President */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="card hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-center mb-4">
                      <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
                        <img 
                          src={vicePresidentImage} 
                          alt="Adv. Shardul Sudhakarrao Jadhavar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-neutral-dark">Vice-President</h3>
                      <p className="text-primary font-semibold">Adv. Shardul Sudhakarrao Jadhavar</p>
                      <p className="text-sm text-gray-600 mt-1">M.B.A., P.G.D.H.R.M., B.Com., L.L.M.</p>
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        In today&apos;s rapidly evolving healthcare landscape, nursing education must adapt to meet new challenges. Our institute stays at the forefront of nursing education through continuous curriculum updates and modern teaching methodologies.
                      </p>
                      <p>
                        We focus on developing not just clinical skills but also leadership qualities, communication abilities, and ethical decision-making capabilities in our nursing students.
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-gray-700 italic">
                        &quot;We are preparing nursing leaders of tomorrow – professionals who will shape the future of healthcare with their expertise, empathy, and ethical practice.&quot;
                      </p>
                    </div>
                  </motion.div>

                  {/* Treasurer */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="card hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-center mb-4">
                      <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
                        <img 
                          src={treasurerImage} 
                          alt="Mrs. Surekha Sudhakarrao Jadhavar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-neutral-dark">Treasurer</h3>
                      <p className="text-primary font-semibold">Mrs. Surekha Sudhakarrao Jadhavar</p>
                      <p className="text-sm text-gray-600 mt-1">B.A., B.Ed., Social Activist</p>
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        As the head of the Women&apos;s Cell, I am particularly proud of our initiatives to empower women through nursing education. We provide special support and fee concessions to encourage more women to join this noble profession.
                      </p>
                      <p>
                        Our nursing students receive not just academic training but also holistic development through various extracurricular activities, personality development programs, and community service initiatives.
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-gray-700 italic">
                        &quot;Nursing is one of the most empowering professions for women. We are committed to creating a supportive environment where every nursing student can thrive and achieve her full potential.&quot;
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-heading font-bold text-neutral-dark">Our Vision</h2>
                  </div>
                  <p className="text-gray-700">
                    To be a premier institute of nursing education, recognized nationally for excellence in producing compassionate, competent, and committed nursing professionals who can meet the evolving healthcare needs of society with clinical expertise and human touch.
                  </p>
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                    <p className="text-primary font-semibold">Education for Strength, Intellect & Wisdom</p>
                    <p className="text-sm text-gray-600 mt-1">Our guiding principle since inception</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-heading font-bold text-neutral-dark">Our Mission</h2>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      To provide quality nursing education that integrates theory with extensive clinical practice
                    </p>
                    <p className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      To develop nursing professionals with strong ethical values and professional integrity
                    </p>
                    <p className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      To promote research and evidence-based nursing practice
                    </p>
                    <p className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      To contribute to community health through outreach programs and health education
                    </p>
                    <p className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      To foster a learning environment that encourages critical thinking and innovation
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Facilities Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-heading font-bold text-neutral-dark mb-8 text-center">
                  Our Nursing Facilities
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                    <img 
                      src={nursingLabImage} 
                      alt="Modern Nursing Lab" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-lg mb-2">Advanced Nursing Labs</h3>
                      <p className="text-gray-600">Fully equipped laboratories with simulation mannequins, nursing models, and modern equipment for practical training.</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                    <img 
                      src={clinicalTrainingImage} 
                      alt="Clinical Training" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-lg mb-2">Clinical Training</h3>
                      <p className="text-gray-600">Extensive clinical exposure in affiliated hospitals with real patient care experience under expert supervision.</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                    <img 
                      src={campusImage} 
                      alt="Campus Infrastructure" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-lg mb-2">Campus Infrastructure</h3>
                      <p className="text-gray-600">Spacious classrooms, library with nursing journals, computer lab, auditorium, and hostel facilities.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            

              {/* Core Values */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-heading font-bold text-neutral-dark mb-8 text-center">
                  Our Nursing Values
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-6 bg-neutral rounded-xl hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Nursing Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card bg-gradient-to-br from-primary/5 to-primary-light/5 mb-12"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-heading font-bold text-neutral-dark">Our Nursing Achievements</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {nursingAchievements.map((achievement, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Nursing Programs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-heading font-bold text-neutral-dark">Nursing Education Network</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {nursingInstitutes.map((institute, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{institute}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Why Choose Our Nursing Institute */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card bg-gradient-to-br from-primary/5 to-primary-light/5"
              >
                <h2 className="text-3xl font-heading font-bold text-neutral-dark mb-6">
                  Why Choose Our Nursing Institute?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span><strong>INC & MNC Approved:</strong> Recognized by Indian Nursing Council and Maharashtra Nursing Council</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span><strong>Experienced Faculty:</strong> Senior nursing professionals with clinical and academic expertise</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span><strong>Modern Simulation Labs:</strong> Advanced nursing labs with simulation mannequins and equipment</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span><strong>Hospital Tie-ups:</strong> Clinical training in 50+ multi-specialty hospitals</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span><strong>Placement Support:</strong> 95% placement record in reputed hospitals</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span><strong>Comprehensive Curriculum:</strong> Updated curriculum meeting international nursing standards</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span><strong>Holistic Development:</strong> Personality development, communication skills, and soft skills training</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span><strong>Scholarship Programs:</strong> Financial assistance for meritorious and needy students</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span><strong>Women Empowerment:</strong> Special initiatives and support for women students</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span><strong>Hostel Facilities:</strong> Safe and comfortable accommodation for outstation students</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-primary/10 rounded-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="font-heading font-bold text-lg">Location Advantage</h3>
                  </div>
                  <p className="text-gray-700">
                    Located in Narhe, Pune – a rapidly developing educational hub with excellent connectivity to major hospitals and healthcare institutions in Pune city. Our campus provides a conducive learning environment away from city distractions yet easily accessible.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About