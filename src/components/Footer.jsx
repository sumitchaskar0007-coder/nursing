import { Link } from "react-router-dom"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"

import logo from "/assets/logo/logo1.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: "/about", label: "About Us" },
    { path: "/programs", label: "Programs" },
    { path: "/admissions", label: "Admissions" },
    { path: "/faculty", label: "Faculty" },
    { path: "/facilities", label: "Facilities" },
    { path: "/placements", label: "Placements" },
  ]

  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex justify-center lg:justify-start bg-white p-3 rounded-lg">
              <img
                src={logo}
                alt="Jadhavar Paramedical College Logo"
                className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain"
              />
            </div>

            <p className="text-gray-300 text-sm mb-5 max-w-xs mx-auto lg:mx-0">
              Empowering future healthcare professionals with quality education,
              hands-on clinical training, and ethical values.
            </p>

            <div className="flex justify-center lg:justify-start space-x-5">
              <a
                href="https://www.facebook.com/jadhavarnursingcollegepune/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-light transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/jadhavar_nursing_college_pune/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-light transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/jadhavar-group-of-institutes/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-light transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-light text-sm transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  to="/departments#gnm"
                  className="hover:text-white transition-colors"
                >
                  GNM
                </Link>
              </li>
              <li>
                <Link
                  to="/departments#anm"
                  className="hover:text-white transition-colors"
                >
                  ANM
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start justify-center sm:justify-start gap-3">
                <MapPin className="w-5 h-5 text-primary-light mt-0.5" />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-3">
                <Phone className="w-5 h-5 text-primary-light mt-0.5" />
                <span>+91 84597 27432</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-3 break-all">
                <Mail className="w-5 h-5 text-primary-light mt-0.5" />
                <span>nursinginstitute.utjf@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {currentYear} Trijja Media & Works. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
