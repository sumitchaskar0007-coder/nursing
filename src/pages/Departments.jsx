import React from "react";
import { motion } from "framer-motion";

const Departments = () => {
  return (
    /* 🔥 TOP MARGIN FOR FIXED NAVBAR */
    <div className="min-h-screen bg-gray-50 mt-24">

      {/* ================= PAGE HEADER ================= */}
      <section
        className="text-white py-16"
        style={{ backgroundColor: "rgb(15 118 110)" }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">
            Departments
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-95">
            Late Udhavrao Tulshiram Jadhavar Foundation’s <br />
            <span className="font-semibold">Institute of Nursing, Pune</span>
          </p>
        </div>
      </section>

      {/* ================= DEPARTMENTS SECTION ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-3">
              Nursing Academic Departments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our institute offers focused nursing programs designed to build
              strong clinical skills, ethical practice, and professional
              competence in healthcare.
            </p>
          </div>

          {/* ================= CARDS GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* ================= GNM ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary"
            >
              <div className="p-6">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                  General Nursing & Midwifery (GNM)
                </h2>
                <p className="text-primary font-semibold mb-3">
                  Duration: 3 Years
                </p>
                <p className="text-gray-600 mb-4">
                  The GNM department provides comprehensive nursing education
                  focusing on patient care, midwifery, medical-surgical nursing,
                  and hospital-based clinical training.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                    Medical & surgical nursing practices
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                    Midwifery and obstetrical care
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                    Extensive clinical & hospital training
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* ================= ANM ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary"
            >
              <div className="p-6">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                  Auxiliary Nurse Midwife (ANM)
                </h2>
                <p className="text-primary font-semibold mb-3">
                  Duration: 2 Years
                </p>
                <p className="text-gray-600 mb-4">
                  The ANM department emphasizes community health nursing,
                  maternal and child healthcare, preventive services, and
                  primary healthcare training.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                    Community & rural health services
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                    Maternal & child health care
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                    Fieldwork & primary health training
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Departments;
