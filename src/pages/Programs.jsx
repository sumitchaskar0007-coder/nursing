import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Users, 
  Briefcase, 
  Heart,
  FlaskConical,
  Trophy,
  Music,
  Activity,
  MessageSquare,
  Compass,
  TrendingUp,
  Headphones,
  Users as UsersIcon,
  Award,
  Map,
  Mic,
  Book,
  Beaker,
  Atom,
  Calculator,
  Palette,
  Camera,
  Dumbbell,
  Theater,
  Microscope,
  HeartPulse,
  Stethoscope,
  Baby,
  Presentation,
  Video,
  Calendar,
  BookCheck,
  UsersRound,
  Target,
  Apple,
  Tv,
  CheckCircle,
  PartyPopper,
  Zap,
  TrendingUp as TrendingUpIcon,
  Home
} from 'lucide-react'

const Programs = () => {
  const developmentalPrograms = [
    {
      id: 1,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Improvement Programme (PIP)",
      description: "Special coaching for Board Examination students to enhance their academic performance",
      features: [
        "Brushing up important topics and concepts",
        "Revision of difficult-to-understand topics",
        "Three mock examinations (Preliminary Examination)",
        "Practice and master answer writing skills",
        "Individual attention to weak areas"
      ]
    },
    {
      id: 2,
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Soft-skills Development",
      description: "Professional guidance for communication enhancement and remedial coaching",
      features: [
        "16-hour course organized at different levels throughout the academic year",
        "Professional trainers for communication skills",
        "Remedial coaching for weak students",
        "Individual attention to specific deficiencies",
        "Regular assessment and feedback"
      ]
    },
    {
      id: 3,
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Guidance",
      description: "Comprehensive career guidance and professional counseling",
      features: [
        "Well-established career guidance cell in coordination with placement cell",
        "Annual 'Master Mind' career fair organized by SVKM Management",
        "Speakers from different vocations and industries",
        "Guidance sessions for students and parents",
        "Information about various career paths and opportunities"
      ]
    },
    {
      id: 4,
      icon: <Headphones className="w-8 h-8" />,
      title: "Counseling Centre",
      description: "Professional counseling services for student wellbeing and mental health",
      features: [
        "Male and female counselors available on all working days",
        "Timing: 10:00 AM to 4:00 PM",
        "Stress management and problem-solving sessions",
        "Aptitude, intelligence, and personality tests",
        "Confidential counseling for personal and academic issues"
      ]
    },
    {
      id: 5,
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Students' Council",
      description: "Student representation and activity coordination body",
      features: [
        "Principal as Chairman",
        "One lecturer nominated by Principal as in-charge",
        "NSS programme officer and representatives",
        "One meritorious student from each class",
        "Outstanding students from NSS, DLLE, SPORTS, CULTURAL ACTIVITIES",
        "Two girl students nominated by the Principal",
        "One-year tenure for council members",
        "Organizes and supervises activities of different Student Associations"
      ]
    }
  ]

  const associations = [
    {
      id: 1,
      icon: <Activity className="w-8 h-8" />,
      title: "Counseling Association",
      description: "Promotes counseling skills and mental wellbeing through various activities",
      features: [
        "Hosts lectures and interactive sessions on Counseling Skills",
        "Regular workshops and training programs",
        "Field visits to counseling centers and institutions",
        "Practical training in counseling techniques",
        "Guest lectures by professional counselors"
      ]
    },
    
    {
      id: 2,
      icon: <Mic className="w-8 h-8" />,
      title: "English Literary Association",
      description: "Fosters love for English language, literature, and creative expression",
      features: [
        "Poetry recitation and appreciation sessions",
        "Felicitation of dedicated litterateurs",
        "Workshops on literature and drama",
        "Book Circle reading and discussion groups",
        "Creative writing competitions",
        "Dramatic performances and readings"
      ]
    },
   
  ]

  const scienceAssociations = [
    {
      id: 1,
      icon: <Atom className="w-8 h-8" />,
      title: "Physics Association",
      description: "Makes Physics popular and interesting through practical applications",
      features: [
        "Physics Association Festival with interesting exhibits",
        "Demonstrations of fundamental physics concepts",
        "Practical applications in daily life",
        "Guest lectures by physics experts",
        "Science exhibition participation",
        "Career guidance in physics-related fields"
      ]
    },
    {
      id: 2,
      icon: <Beaker className="w-8 h-8" />,
      title: "Chemistry Association",
      description: "Develops analytical reasoning skills and promotes chemical applications",
      features: [
        "Guest lectures on popular chemistry topics",
        "Participation in Indian Chemical Society - Aptitude test",
        "Chemical applications in daily life workshops",
        "Analytical reasoning skill development",
        "Laboratory safety and techniques training",
        "Industrial chemistry applications"
      ]
    },
    {
      id: 3,
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Science Association",
      description: "Promotes interdisciplinary development of all science disciplines",
      features: [
        "Interdisciplinary approach to science education",
        "Talks by industry professionals from various sectors",
        "Career guidance on different science career options",
        "Industry demands and requirements awareness",
        "Logical analysis and scientific thinking development",
        "Research methodology workshops"
      ]
    },
    {
      id: 4,
      icon: <Calculator className="w-8 h-8" />,
      title: "Mathematics Association",
      description: "Makes mathematics fun and interesting through creative approaches",
      features: [
        "Commemoration of legendary mathematicians like Srinivas Ramanujan",
        "Origami Workshops linking art and mathematics",
        "Mathematical puzzles and games competitions",
        "Real-world applications of mathematics",
        "Math Olympiad preparation sessions",
        "Creative approaches to mathematical concepts"
      ]
    }
  ]

  // Nursing Sports Activities
  const nursingSports = [
    {
      id: 1,
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Annual Sports Day",
      description: "Annual inter-class and inter-batch sports competition",
      features: [
        "Track and field events (100m, 200m, 400m races)",
        "Relay races (4x100m, 4x400m)",
        "Long jump and high jump competitions",
        "Shot put and discus throw",
        "March past and opening ceremony",
        "Medal distribution ceremony"
      ]
    },
    {
      id: 2,
      icon: <Trophy className="w-8 h-8" />,
      title: "Inter-Nursing College Tournament",
      description: "Competitions with other nursing colleges in the region",
      features: [
        "Basketball tournaments",
        "Volleyball competitions",
        "Badminton singles and doubles",
        "Table tennis championships",
        "Chess and carrom tournaments",
        "Kabaddi and kho-kho matches"
      ]
    },
    {
      id: 3,
      icon: <Award className="w-8 h-8" />,
      title: "Indoor Sports Facilities",
      description: "Year-round indoor sports activities for nursing students",
      features: [
        "Well-equipped gymnasium with modern equipment",
        "Yoga and meditation sessions",
        "Aerobics and Zumba classes",
        "Table tennis and carrom facilities",
        "Chess and board game competitions",
        "Regular fitness assessment"
      ]
    },
    {
      id: 4,
      icon: <Activity className="w-8 h-8" />,
      title: "Recreational Sports",
      description: "Fun and recreational sports activities",
      features: [
        "Annual trekking and hiking trips",
        "Cycling expeditions",
        "Swimming sessions (if facilities available)",
        "Adventure sports workshops",
        "Team building outdoor activities",
        "Nature walks and eco-tourism"
      ]
    }
  ]

  // Cultural Events for Nursing Students
  const culturalEvents = [
    {
      id: 1,
      icon: <Music className="w-8 h-8" />,
      title: "Annual Cultural Fest - 'Nightingale Carnival'",
      description: "Annual cultural extravaganza celebrating nursing traditions",
      features: [
        "Traditional dance competitions (classical & folk)",
        "Singing competitions (solo and group)",
        "Drama and skit performances on healthcare themes",
        "Fashion show with nursing uniforms through ages",
        "Poetry and elocution competitions",
        "Art and craft exhibitions"
      ]
    },
    {
      id: 2,
      icon: <Theater className="w-8 h-8" />,
      title: "Festival Celebrations",
      description: "Cultural celebrations of various festivals throughout the year",
      features: [
        "Diwali celebration with rangoli competition",
        "Christmas carol singing and celebrations",
        "Ganesh Chaturthi puja and cultural programs",
        "Eid and other religious festival celebrations",
        "Republic Day and Independence Day programs",
        "International Nurses Day celebrations"
      ]
    },
    {
      id: 3,
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Arts",
      description: "Promoting creative expression among nursing students",
      features: [
        "Painting and drawing competitions",
        "Poster making on health awareness themes",
        "Photography competitions",
        "Clay modeling and sculpture workshops",
        "Handicraft and DIY workshops",
        "Creative writing and blogging"
      ]
    },
    {
      id: 4,
      icon: <Calendar className="w-8 h-8" />,
      title: "Special Theme Events",
      description: "Themed cultural events and celebrations",
      features: [
        "Traditional Day (ethnic wear celebration)",
        "Talent Hunt competitions",
        "Quiz competitions on nursing history",
        "Debate competitions on healthcare topics",
        "Mock Parliament on health policies",
        "Food festival with healthy cooking competitions"
      ]
    }
  ]

  // SNA & TNAI Activities
  const snaTNAIActivities = [
    {
      id: 1,
      icon: <UsersRound className="w-8 h-8" />,
      title: "Student Nurses Association (SNA)",
      description: "National level organization for nursing students",
      features: [
        "Regular SNA unit meetings and discussions",
        "SNA conferences at state and national level",
        "Leadership development programs",
        "Community outreach programs",
        "Health awareness campaigns",
        "Professional development workshops"
      ]
    },
    {
      id: 2,
      icon: <Award className="w-8 h-8" />,
      title: "Trained Nurses Association of India (TNAI)",
      description: "Professional organization for nursing professionals",
      features: [
        "TNAI membership drives and orientation",
        "Participation in TNAI conferences",
        "Continuing Nursing Education (CNE) programs",
        "Research paper presentations",
        "Professional networking events",
        "Publication opportunities in TNAI journals"
      ]
    },
    {
      id: 3,
      icon: <Target className="w-8 h-8" />,
      title: "Professional Development",
      description: "Activities for professional growth and development",
      features: [
        "Guest lectures by eminent nursing professionals",
        "Workshops on nursing ethics and professionalism",
        "Clinical skills enhancement programs",
        "Research methodology workshops",
        "Career guidance sessions",
        "Interview preparation workshops"
      ]
    },
    {
      id: 4,
      icon: <Heart className="w-8 h-8" />,
      title: "Community Service",
      description: "Community outreach and service activities",
      features: [
        "Health camps in rural and urban areas",
        "School health programs",
        "Elderly care initiatives",
        "Disaster management training",
        "Blood donation camps",
        "Environmental cleanliness drives"
      ]
    }
  ]

  // Workshops & Conferences (CPD)
  const workshopsConferences = [
    {
      id: 1,
      icon: <Presentation className="w-8 h-8" />,
      title: "Continuing Professional Development (CPD)",
      description: "Regular workshops for skill enhancement",
      features: [
        "Basic Life Support (BLS) and ACLS workshops",
        "Advanced cardiac care training",
        "Emergency nursing care workshops",
        "Critical care nursing seminars",
        "Neonatal care training programs",
        "Palliative care workshops"
      ]
    },
    {
      id: 2,
      icon: <Calendar className="w-8 h-8" />,
      title: "Annual Nursing Conference",
      description: "National/International nursing conferences",
      features: [
        "Keynote addresses by nursing luminaries",
        "Research paper presentations",
        "Poster presentations",
        "Panel discussions on current issues",
        "Workshops on recent advances",
        "Networking sessions with experts"
      ]
    },
    {
      id: 3,
      icon: <Video className="w-8 h-8" />,
      title: "Specialized Training Programs",
      description: "Specialized nursing skill development",
      features: [
        "IV therapy and venipuncture workshops",
        "Wound care management training",
        "Infection control protocols",
        "Medication administration safety",
        "Nursing documentation workshops",
        "Patient education techniques"
      ]
    },
    {
      id: 4,
      icon: <BookCheck className="w-8 h-8" />,
      title: "Research Methodology",
      description: "Research and evidence-based practice",
      features: [
        "Research proposal writing workshops",
        "Data collection and analysis training",
        "Scientific writing and publication",
        "Evidence-based practice implementation",
        "Quality improvement projects",
        "Clinical audit training"
      ]
    }
  ]

  // Nursing Labs
  const nursingLabs = [
    {
      id: 1,
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Foundation of Nursing Lab",
      description: "Basic nursing procedures and fundamental skills training",
      features: [
        "Bed making and patient positioning",
        "Vital signs monitoring station",
        "Personal hygiene and comfort care",
        "Infection control practices",
        "Basic nursing procedures demonstration",
        "Patient transfer and mobility training"
      ],
      equipment: [
        "Hospital beds with adjustable features",
        "Manikins for procedure practice",
        "Vital signs monitoring equipment",
        "Personal protective equipment",
        "Bedside units and lockers",
        "Procedure trolleys and equipment"
      ]
    },
    {
      id: 2,
      icon: <Home className="w-8 h-8" />,
      title: "Community Health Nursing Lab",
      description: "Community health assessment and home care training",
      features: [
        "Community survey and assessment tools",
        "Home visiting procedures",
        "Family health assessment",
        "Community diagnosis training",
        "Health education materials development",
        "Field practice simulation"
      ],
      equipment: [
        "Community health survey kits",
        "Home visit bags and equipment",
        "Health education models",
        "Growth monitoring tools",
        "Family assessment tools",
        "Field practice records"
      ]
    },
    {
      id: 3,
      icon: <Apple className="w-8 h-8" />,
      title: "Nutrition Lab",
      description: "Diet planning and nutritional assessment training",
      features: [
        "Dietary assessment techniques",
        "Therapeutic diet planning",
        "Nutritional counseling practice",
        "Food group demonstration",
        "Growth monitoring assessment",
        "Nutritional deficiency identification"
      ],
      equipment: [
        "Food models and samples",
        "Measuring scales and cups",
        "Nutritional assessment charts",
        "Diet planning software",
        "Growth monitoring equipment",
        "Food preparation area"
      ]
    },
    {
      id: 4,
      icon: <Tv className="w-8 h-8" />,
      title: "AV AIDS Lab",
      description: "Audio-visual aids for effective teaching and learning",
      features: [
        "Educational video production",
        "PowerPoint presentation development",
        "Health education material creation",
        "Simulation-based learning",
        "E-learning module development",
        "Interactive teaching methods"
      ],
      equipment: [
        "Computers with educational software",
        "LCD projectors and screens",
        "Video recording equipment",
        "Audio recording facilities",
        "Graphic design software",
        "Simulation software"
      ]
    },
    {
      id: 5,
      icon: <Baby className="w-8 h-8" />,
      title: "Maternal & Child Health Lab",
      description: "Specialized training for obstetric and pediatric nursing",
      features: [
        "Antenatal examination practice",
        "Newborn care demonstration",
        "Immunization procedure training",
        "Child growth monitoring",
        "Family planning counseling",
        "High-risk pregnancy management"
      ],
      equipment: [
        "Obstetric manikins and simulators",
        "Newborn care equipment",
        "Immunization supplies",
        "Growth monitoring charts",
        "Family planning models",
        "Delivery room simulation setup"
      ]
    },
    {
      id: 6,
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Advanced Nursing Skills Lab",
      description: "Advanced clinical procedures and emergency care training",
      features: [
        "Advanced life support training",
        "Critical care procedures",
        "Emergency nursing interventions",
        "Advanced wound care",
        "Respiratory care procedures",
        "Cardiac care monitoring"
      ],
      equipment: [
        "Advanced patient simulators",
        "ICU equipment setup",
        "Emergency crash cart",
        "Ventilators and oxygen delivery systems",
        "Cardiac monitoring equipment",
        "Advanced wound care supplies"
      ]
    }
  ]

  const extraActivities = [
    {
      id: 1,
      icon: <Dumbbell className="w-8 h-8" />,
      title: "SPORTS",
      description: "Comprehensive sports development and physical training program",
      features: [
        "Dedicated sports coordinator for activity management",
        "Reputed coaches appointed for various sports and games",
        "Sports kits and allowances provided to sports-persons",
        "Training facilities in western suburbs location",
        "Participation in intercollegiate competitions and tournaments",
        "Encouragement for regular physical training and fitness"
      ]
    },
    {
      id: 2,
      icon: <Theater className="w-8 h-8" />,
      title: "CULTURAL ACTIVITIES",
      description: "Platform for artistic expression and cultural development",
      features: [
        "Annual Talent Search to identify hidden talents",
        "Development in Theatre, Dance, Music, Literary and Fine Arts",
        "Regular stage performances from beginning of academic year",
        "Participation in intra and intercollegiate competitions",
        "Performance in major festivals like Malhar, Mood Indigo, Umang",
        "Annual Mega festival 'Jaloosh' - a roaring success among students"
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>Programs & Activities | Late Udhavrao Tulshiram Jadhavar Foundation's Institute of Nursing, Pune</title>
        <meta name="description" content="Explore comprehensive developmental programs, student associations, science clubs, nursing labs, and extracurricular activities for holistic nursing student development." />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <HeartPulse className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Late Udhavrao Tulshiram Jadhavar Foundation&apos;s
              </h1>
              <p className="text-2xl md:text-3xl font-semibold mb-4">
                Institute of Nursing, Pune
              </p>
              <p className="text-xl text-gray-100">
                Developmental Programs & Student Activities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nursing Programs Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Nursing Education Programs
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                The Institute offers comprehensive nursing education programs approved by 
                <strong> Indian Nursing Council (INC)</strong> and 
                <strong> Maharashtra Nursing Council</strong>, focusing on holistic development of nursing professionals.
              </p>
            </motion.div>

            {/* Nursing Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* GNM Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-heading font-bold text-gray-900">
                      GNM – General Nursing and Midwifery
                    </h2>
                  </div>
                  <p className="text-primary font-semibold mb-3">
                    Duration: 3 Years
                  </p>
                  <p className="text-gray-600 mb-4">
                    Comprehensive nursing education program covering medical-surgical nursing, 
                    midwifery, community health nursing, and psychiatric nursing.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Medical-Surgical Nursing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Midwifery & Obstetric Nursing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Community Health Nursing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Psychiatric Nursing</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* ANM Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-heading font-bold text-gray-900">
                      ANM – Auxiliary Nurse Midwifery
                    </h2>
                  </div>
                  <p className="text-primary font-semibold mb-3">
                    Duration: 2 Years
                  </p>
                  <p className="text-gray-600 mb-4">
                    Primary health care nursing program focusing on maternal and child health, 
                    community health services, and basic nursing procedures.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Primary health care nursing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Maternal & Child Health Care</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Community Health Services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Health Promotion & Education</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* B.Sc Nursing Card */}
             
            </div>

            {/* Nursing Education Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-12 text-gray-600 max-w-4xl mx-auto"
            >
              <p>
                Our nursing programs are designed to produce competent, compassionate, 
                and professionally sound nursing professionals who can meet the evolving 
                healthcare needs of society. With modern facilities, experienced faculty, 
                and extensive clinical exposure, we prepare students for successful careers 
                in healthcare.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nursing Labs Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <FlaskConical className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                  Nursing Skills Laboratories
                </h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                State-of-the-art laboratories providing hands-on training and simulation-based 
                learning for comprehensive nursing skill development
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nursingLabs.map((lab, index) => (
                <motion.div
                  key={lab.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg mr-4">
                        {lab.icon}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-900">
                        {lab.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {lab.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-heading font-bold text-gray-800 mb-2 text-sm uppercase tracking-wider">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {lab.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-heading font-bold text-gray-800 mb-2 text-sm uppercase tracking-wider">
                        Major Equipment:
                      </h4>
                      <ul className="space-y-1">
                        {lab.equipment.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Developmental Programs Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Developmental Programmes
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Comprehensive programs designed to enhance academic performance, soft skills, 
                career readiness, and overall personality development of nursing students
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentalPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg mr-4">
                        {program.icon}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-900">
                        {program.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {program.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nursing Sports Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <Dumbbell className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                  Nursing Sports Activities
                </h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Promoting physical fitness, teamwork, and sportsmanship among nursing students 
                through various indoor and outdoor sports activities
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {nursingSports.map((sport, index) => (
                <motion.div
                  key={sport.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white text-blue-600 rounded-lg mr-4 shadow-sm">
                        {sport.icon}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-900">
                        {sport.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 mb-4">
                      {sport.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {sport.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Trophy className="w-4 h-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Events Section */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <Music className="w-10 h-10 text-purple-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                  Cultural Events & Activities
                </h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Celebrating diversity, creativity, and artistic expression through various cultural 
                events that enrich the nursing education experience
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {culturalEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-purple-200"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-purple-100 text-purple-600 rounded-lg mr-4">
                        {event.icon}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-900">
                        {event.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {event.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {event.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <PartyPopper className="w-4 h-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SNA & TNAI Activities Section */}
        <section className="section-padding bg-gradient-to-r from-green-50 to-teal-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <UsersRound className="w-10 h-10 text-green-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                  SNA & TNAI Activities
                </h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Professional development, community service, and networking activities through 
                Student Nurses Association (SNA) and Trained Nurses Association of India (TNAI)
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {snaTNAIActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-green-100 text-green-600 rounded-lg mr-4">
                        {activity.icon}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-900">
                        {activity.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {activity.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {activity.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshops & Conferences Section */}
        <section className="section-padding bg-gradient-to-r from-orange-50 to-red-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <Presentation className="w-10 h-10 text-orange-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                  Workshops & Conferences (CPD)
                </h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Continuing Professional Development programs, workshops, and conferences 
                to enhance clinical skills, knowledge, and professional competence
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {workshopsConferences.map((workshop, index) => (
                <motion.div
                  key={workshop.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-orange-200"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-orange-100 text-orange-600 rounded-lg mr-4">
                        {workshop.icon}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-900">
                        {workshop.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {workshop.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {workshop.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Zap className="w-4 h-4 text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Associations Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <Compass className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                  Student Associations
                </h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto italic mb-2">
                "Real Learning Happens outside the Classroom"
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Paradise College offers students ample opportunities to develop and sustain 
                their interest in interdisciplinary fields of knowledge through various associations
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {associations.map((association, index) => (
                <motion.div
                  key={association.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg mr-4">
                        {association.icon}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-900">
                        {association.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {association.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {association.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Science Club Section */}
        {/* <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <FlaskConical className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                  Science Club
                </h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                The Science Club promotes interdisciplinary development of all biological, 
                chemical, physical, and mathematical sciences together
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scienceAssociations.map((science, index) => (
                <motion.div
                  key={science.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg mr-4">
                        {science.icon}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-900">
                        {science.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {science.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {science.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Extra Activities Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Extra-curricular Activities
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Developing talents beyond academics for overall personality development 
                and holistic growth of nursing students
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {extraActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-white text-primary rounded-xl shadow-md mr-6">
                        {activity.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-gray-900">
                          {activity.title}
                        </h3>
                        <p className="text-gray-600 mt-2">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                      <h4 className="font-heading font-bold text-gray-800 mb-4">
                        Key Features:
                      </h4>
                      <ul className="space-y-3">
                        {activity.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <HeartPulse className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Join Our Nursing Community
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                Experience holistic nursing education through our diverse programs and activities 
                designed to nurture your clinical skills, compassion, and professional growth.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Nursing Programs
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Programs