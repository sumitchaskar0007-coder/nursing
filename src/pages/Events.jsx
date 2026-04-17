import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Download } from 'lucide-react'

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Academic Workshop on Nursing Practices',
      date: '2025-02-12',
      location: 'Simulation & Skill Lab',
      type: 'Academic Workshop',
      description:
        'Hands-on academic workshop focusing on modern nursing practices, patient care techniques, and clinical skill enhancement.',
      attendees: '80+'
    },
    {
      id: 2,
      title: 'National Seminar on Healthcare & Nursing Education',
      date: '2025-03-18',
      location: 'College Auditorium',
      type: 'Seminar',
      description:
        'Expert speakers and healthcare professionals share insights on emerging trends in nursing education and healthcare services.',
      attendees: '300+'
    },
    {
      id: 3,
      title: 'Annual Cultural Festival',
      date: '2025-04-05',
      location: 'College Campus',
      type: 'Cultural Event',
      description:
        'A vibrant cultural event showcasing student talents through dance, music, drama, and traditional performances.',
      attendees: '600+'
    },
    {
      id: 4,
      title: 'Industry Visit to Multispeciality Hospital',
      date: '2025-05-22',
      location: 'Inamdar Multispeciality Hospital, Pune',
      type: 'Industry Visit',
      description:
        'Educational industry visit providing real-world exposure to hospital departments, patient care systems, and clinical workflows.',
      attendees: '45'
    },
    {
      id: 5,
      title: 'Advanced Clinical Skills Workshop',
      date: '2025-06-14',
      location: 'Clinical Training Center',
      type: 'Academic Workshop',
      description:
        'Advanced workshop covering emergency care, life support techniques, infection control, and clinical decision-making.',
      attendees: '60'
    },
    {
      id: 6,
      title: 'Student Seminar on Community Health',
      date: '2025-07-10',
      location: 'Seminar Hall',
      type: 'Seminar',
      description:
        'Student-led seminar focusing on community health nursing, public health awareness, and preventive healthcare practices.',
      attendees: '150+'
    },
    {
      id: 7,
      title: 'Cultural Day Celebration',
      date: '2025-08-18',
      location: 'Open Ground',
      type: 'Cultural Event',
      description:
        'Celebration of cultural diversity through traditional attire, folk performances, and cultural exhibitions.',
      attendees: '500+'
    },
    {
      id: 8,
      title: 'Industry Visit to Primary Health Centre (PHC)',
      date: '2025-09-05',
      location: 'Khadakwasala PHC',
      type: 'Industry Visit',
      description:
        'Field visit to a Primary Health Centre to understand rural healthcare delivery, community nursing, and public health services.',
      attendees: '40'
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      <Helmet>
        <title>Events | Uddavrao Tulshiram Foundation College of Paramedical</title>
        <meta
          name="description"
          content="Academic workshops, seminars, cultural events, and industry visits conducted at Uddavrao Tulshiram Foundation College of Paramedical."
        />
      </Helmet>

      <div className="pt-20">
        {/* ================= HERO SECTION ================= */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Calendar className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Academic & Campus Activities
              </h1>
              <p className="text-xl text-gray-100">
                Academic workshops, seminars, cultural events, and industry visits for holistic student development
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= EVENTS GRID ================= */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {event.type}
                    </span>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-primary">
                        {formatDate(event.date).split(',')[0]}
                      </div>
                      <div className="text-xs text-gray-500">
                        {formatDate(event.date).split(',')[1]}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-neutral-dark mb-2">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} participants</span>
                    </div>
                  </div>

                  <button className="text-sm text-primary font-medium hover:text-primary-dark transition-colors flex items-center space-x-1">
                    <span>Learn More</span>
                    <Download className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Events
